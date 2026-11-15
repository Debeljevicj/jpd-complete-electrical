'use client';

import { useState } from 'react';
import Link from 'next/link';
import SuccessModal from '@/components/SuccessModal';
import { trackEvent } from '@/components/Analytics';
import { Mail, Clock, Loader2, AlertCircle, ArrowRight, MessageSquare, UserPlus, Zap } from 'lucide-react';

/*
 * The notification email goes to Justin, but replying to it goes to the
 * customer (Web3Forms sets Reply-To from the `email` field) with the original
 * quoted underneath. So the subject and every value in it have to read
 * properly from both sides, which is why the email gets plain-English values
 * rather than the option codes.
 *
 * `label` is the wording the old dropdown used; the tiles on the form show
 * `tile` and `note`. The values and the email wording are unchanged.
 */
const URGENCY_OPTIONS = [
    { value: 'low', label: 'Low - General Enquiry (Reply within 24-48hrs)', email: 'Low – general enquiry', tile: 'General enquiry', note: 'Reply within 24-48 hrs' },
    { value: 'medium', label: 'Medium - Standard Service (Reply within 24hrs)', email: 'Medium – standard service', tile: 'Standard service', note: 'Reply within 24 hrs' },
    { value: 'high', label: 'High - Urgent Service Required (Reply ASAP)', email: 'High – urgent service required', subjectPrefix: 'Urgent', tile: 'Urgent', note: 'Reply ASAP' },
    { value: 'emergency', label: 'Emergency - Immediate Assistance Needed', email: 'Emergency – immediate assistance needed', subjectPrefix: 'Emergency', tile: 'Emergency', note: 'Call now as well' },
];

const SERVICE_OPTIONS = [
    { value: 'residential', label: 'Residential Services', email: 'Residential services', subject: 'Residential electrical enquiry' },
    { value: 'commercial', label: 'Commercial Services', email: 'Commercial services', subject: 'Commercial electrical enquiry' },
    { value: 'medical', label: 'Medical & Disability Housing', email: 'Medical & disability housing', subject: 'Medical & disability housing enquiry' },
    { value: 'switchboard', label: 'Switchboard Upgrade', email: 'Switchboard upgrade', subject: 'Switchboard upgrade enquiry' },
    { value: 'rcd-testing', label: 'RCD Testing', email: 'RCD testing', subject: 'RCD testing enquiry' },
    { value: 'thermal-imaging', label: 'Thermal Imaging Inspection', email: 'Thermal imaging inspection', subject: 'Thermal imaging enquiry' },
    { value: 'maintenance', label: 'Maintenance & Repairs', email: 'Maintenance & repairs', subject: 'Maintenance & repairs enquiry' },
    { value: 'emergency', label: 'Emergency Services', email: 'Emergency services', subject: 'Emergency service enquiry' },
    { value: 'other', label: 'Other', email: 'Other', subject: 'Electrical enquiry' },
];

/*
 * Asked outright because analytics can't see most of these. Someone who finds
 * JPD through ChatGPT or Google Maps usually rings or types the address in, so
 * the visit arrives as direct traffic or not at all. The label doubles as the
 * value in the email.
 */
const SOURCE_OPTIONS = [
    { value: 'google-search', label: 'Google search' },
    { value: 'google-maps', label: 'Google Maps / Business Profile' },
    { value: 'chatgpt', label: 'ChatGPT' },
    { value: 'gemini', label: 'Gemini or a Google AI answer' },
    { value: 'other-ai', label: 'Another AI assistant' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'tiktok', label: 'TikTok' },
    { value: 'referral', label: 'Friend or referral' },
    { value: 'directory', label: 'Directory (Yellow Pages, hipages etc.)' },
    { value: 'other', label: 'Other' },
];

// Name first so enquiries can be told apart in the inbox list, where the end
// of a long subject gets cut off.
function buildSubject(name: string, urgency: string, service: string) {
    const cleanName = name.replace(/\s+/g, ' ').trim().slice(0, 60);
    const prefix = URGENCY_OPTIONS.find(o => o.value === urgency)?.subjectPrefix;
    const topic = SERVICE_OPTIONS.find(o => o.value === service)?.subject ?? 'Electrical enquiry';
    return [prefix, cleanName, topic].filter(Boolean).join(' – ') + ' | JPD Complete Electrical';
}

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        urgency: '',
        service: '',
        message: '',
        source: '',
    });

    const [status, setStatus] = useState<string>("");
    const [showModal, setShowModal] = useState(false);
    const [submittedUrgency, setSubmittedUrgency] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target as HTMLFormElement;
        const submitted = new FormData(form);

        // Built field by field rather than sending the form as-is: Web3Forms
        // prints each key as the label in the email, in this order.
        const data = new FormData();
        data.append("access_key", "74377dbd-3c64-4ac9-9b0a-ca7dde014b2a");
        data.append("subject", buildSubject(formData.name, formData.urgency, formData.service));
        data.append("from_name", "JPD Website");
        data.append("name", formData.name.trim());
        data.append("phone", formData.phone.trim());
        data.append("email", formData.email.trim());
        data.append("urgency", URGENCY_OPTIONS.find(o => o.value === formData.urgency)?.email ?? formData.urgency);
        const service = SERVICE_OPTIONS.find(o => o.value === formData.service)?.email;
        if (service) data.append("service", service);
        // Before "Job description", not after it. The enquiry parser on the
        // staff side reads these field labels (keep them stable) and takes
        // everything from that key to the end of the email as the job
        // description, so a field after it would land in the description.
        const source = SOURCE_OPTIONS.find(o => o.value === formData.source)?.label;
        if (source) data.append("Found us via", source);
        // The half they don't fill in: UTM tags, the site that linked here and
        // where they landed (lib/attribution.mjs). Same rule, so also before
        // "Job description". The portal's marketing page reads it. Loaded on
        // Send, not with the page (it's usually already fetched by then), and
        // a failure here never stops the enquiry going.
        let tracking = '';
        let leadSourceLabel = 'unknown';
        try {
            const attribution = await import('@/lib/attribution.mjs');
            const state = attribution.readAttribution();
            tracking = attribution.trackingLine(state);
            leadSourceLabel = attribution.leadSource(state);
        } catch {
            // Offline or blocked: send without it.
        }
        if (tracking) data.append("Tracking", tracking);
        if (formData.message.trim()) data.append("Job description", formData.message.trim());
        const botcheck = submitted.get("botcheck");
        if (botcheck !== null) data.append("botcheck", botcheck);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data
            });

            const result = await response.json();

            if (result.success) {
                // The other half of the conversion picture. Phone clicks are tracked
                // by the delegated listener in Analytics; this is the form side.
                trackEvent('quote_request_submitted', {
                    service: formData.service || 'not specified',
                    urgency: formData.urgency || 'not specified',
                    found_via: formData.source || 'not specified',
                    lead_source: leadSourceLabel,
                });
                setSubmittedUrgency(formData.urgency);
                setStatus("success");
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    urgency: '',
                    service: '',
                    message: '',
                    source: '',
                });
                setShowModal(true);
            } else {
                console.log("Error", result);
                setStatus("error");
            }
        } catch (error) {
            console.log(error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const field =
        'w-full rounded-lg border border-navy/15 bg-white px-3.5 py-3 text-[15px] text-navy outline-none transition placeholder:text-navy/35 focus:border-transparent focus:ring-2 focus:ring-gold';
    const label = 'mb-1.5 block text-sm font-semibold text-navy';
    const optional = <span className="ml-1 text-xs font-normal text-navy/45">optional</span>;

    return (
        <>
            <SuccessModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                urgency={submittedUrgency}
            />
            {/* The number on the left, the form on the right. On a phone the
                number comes first, then the form.

                No click handlers on the tel:, sms: or mailto: links: the
                delegated listener in Analytics tracks every tel: link on the site. */}
            <section className="bg-navy text-white">
                <div className="container-custom py-10 md:py-20">
                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[5fr_6fr] lg:gap-16">
                        <div className="lg:pt-6">
                            <p className="eyebrow eyebrow-on-dark mb-5">Contact</p>
                            <h1 className="display text-4xl md:text-6xl">Contact Your Adelaide Electrician</h1>
                            <p className="mt-5 max-w-sm text-lg leading-relaxed text-white/80">
                                Rather talk it through, or is it urgent? You&apos;ll get Justin, not a call centre.
                            </p>

                            <p className="mt-9 text-sm font-semibold text-gold">Call or text Justin</p>
                            <a
                                href="tel:0435006420"
                                className="display mt-1 block text-5xl text-white transition-colors hover:text-gold md:text-7xl"
                            >
                                0435 006 420
                            </a>
                            <p className="mt-4 flex max-w-sm items-start gap-2.5 text-sm leading-relaxed text-white/70">
                                <Zap className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                                <span>
                                    For urgent electrical issues that can&apos;t wait, give us a call directly.{' '}
                                    <a href="#emergency" className="font-semibold text-white underline decoration-gold underline-offset-4">
                                        Is it an emergency?
                                    </a>
                                </span>
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2.5">
                                <a href="sms:0435006420" className="pill pill-ghost-dark min-h-[44px] px-4 text-sm">
                                    <MessageSquare className="h-4 w-4" /> Text
                                </a>
                                <a href="mailto:admin@jpdcompleteelectrical.com.au" className="pill pill-ghost-dark min-h-[44px] px-4 text-sm">
                                    <Mail className="h-4 w-4" /> Email
                                </a>
                                <Link href="/card" className="pill pill-ghost-dark min-h-[44px] px-4 text-sm">
                                    <UserPlus className="h-4 w-4" /> Save number
                                </Link>
                            </div>

                            <ul className="mt-8 max-w-sm space-y-2 border-t border-white/10 pt-6 text-sm text-white/65">
                                {[
                                    'Monday - Friday: 7:00 AM - 5:00 PM',
                                    'Saturday - Sunday: By appointment',
                                    'Emergency services available after hours by appointment',
                                ].map((line) => (
                                    <li key={line} className="flex items-start gap-2.5">
                                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl bg-white p-5 text-navy shadow-2xl md:p-8">
                            <p className="eyebrow mb-3">Send an enquiry</p>
                            <h2 className="display text-3xl text-navy">Get a free quote</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-slate">
                                The easiest way to get a quote is the form below. Send a few details about the
                                job and Justin will come back to you, usually the same day. You can fill it in
                                whenever suits, which beats playing phone tag if you&apos;re at work.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-6 space-y-5" data-clarity-mask="true">
                                {/*
                                  * Web3Forms honeypot. Bots fill every field they find, so a
                                  * submission with this populated is rejected server-side.
                                  * Hidden with CSS rather than type="hidden" because bots skip
                                  * hidden inputs; tabIndex and aria-hidden keep it away from
                                  * keyboard and screen-reader users.
                                  */}
                                <input
                                    type="checkbox"
                                    name="botcheck"
                                    className="hidden"
                                    style={{ display: 'none' }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                />
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className={label}>Full name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            autoComplete="name"
                                            className={field}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className={label}>Phone *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            autoComplete="tel"
                                            className={field}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className={label}>Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        autoComplete="email"
                                        className={field}
                                    />
                                </div>

                                {/* The same four values the dropdown sent, as tiles: one tap
                                    instead of two, and the reply time is readable before choosing. */}
                                <fieldset>
                                    <legend className={label}>How urgent is it? *</legend>
                                    <div className="grid grid-cols-2 gap-2.5">
                                        {URGENCY_OPTIONS.map((o) => (
                                            <label
                                                key={o.value}
                                                className={`flex cursor-pointer items-start gap-2.5 rounded-lg border px-3 py-2.5 transition ${
                                                    formData.urgency === o.value
                                                        ? 'border-gold bg-gold/10 ring-1 ring-gold'
                                                        : 'border-navy/15 hover:border-navy/40'
                                                }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="urgency"
                                                    value={o.value}
                                                    checked={formData.urgency === o.value}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 h-3.5 w-3.5 accent-[#B08F3F]"
                                                />
                                                <span>
                                                    <span className="block text-sm font-semibold text-navy">{o.tile}</span>
                                                    <span className="block text-xs text-neutral-slate">{o.note}</span>
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </fieldset>

                                <div>
                                    <label htmlFor="service" className={label}>Kind of work {optional}</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={field}
                                    >
                                        <option value="">Select a service...</option>
                                        {SERVICE_OPTIONS.map(o => (
                                            <option key={o.value} value={o.value}>{o.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className={label}>What needs doing? {optional}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className={`${field} resize-y`}
                                        placeholder="e.g. Old fuse board, power keeps tripping when the heater's on. House is 1970s."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="source" className={label}>How did you find us? {optional}</label>
                                    <select
                                        id="source"
                                        name="source"
                                        value={formData.source}
                                        onChange={handleChange}
                                        className={field}
                                    >
                                        <option value="">Select one...</option>
                                        {SOURCE_OPTIONS.map(o => (
                                            <option key={o.value} value={o.value}>{o.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
                                        <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                                        <p className="text-sm">Something went wrong sending your message. Please try again, or call us directly on <a href="tel:0435006420" className="font-semibold underline">0435 006 420</a>.</p>
                                    </div>
                                )}

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="pill pill-gold w-full shrink-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                Sending... <Loader2 className="h-4 w-4 animate-spin" />
                                            </>
                                        ) : (
                                            <>
                                                Send enquiry <ArrowRight className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-xs leading-relaxed text-neutral-slate">
                                        Your details are only used to reply to you and do the job.{' '}
                                        <Link href="/privacy" className="underline hover:text-gold-dark">Privacy policy</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
