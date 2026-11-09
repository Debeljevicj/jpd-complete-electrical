import type { Metadata } from 'next';
import Link from 'next/link';
import { shareMeta } from '@/lib/share';

/*
 * Privacy policy. Written to match what the site and the business actually do,
 * so it has to change when they do. Check it whenever one of these changes:
 *   - a third-party script or embed is added (components/Analytics.tsx, maps)
 *   - the contact form's fields or delivery service change (app/contact/)
 *   - what lib/attribution.mjs stores, or how long (MAX_AGE_DAYS)
 *   - a new service starts holding customer details (job management,
 *     accounting, AI drafting)
 * Then update LAST_UPDATED.
 *
 * No em or en dashes in the copy, same rule as the blog.
 */

const LAST_UPDATED = '9 November 2026';
const EMAIL = 'admin@jpdcompleteelectrical.com.au';
const PHONE = '0435 006 420';
const PHONE_HREF = 'tel:0435006420';

export const metadata: Metadata = {
    title: 'Privacy Policy | JPD Complete Electrical',
    description:
        'What JPD Complete Electrical collects when you visit the site, send an enquiry or book a job, who it goes to, and how to see or correct it.',
    alternates: { canonical: '/privacy' },
    ...shareMeta({
        title: 'Privacy Policy | JPD Complete Electrical',
        description: 'What we collect, why, who it goes to, and how to see or correct it.',
        path: '/privacy/',
    }),
};

const h2 = 'text-2xl md:text-3xl font-bold text-navy mt-12 mb-4';
const h3 = 'text-lg font-bold text-navy mt-6 mb-2';
const p = 'text-neutral-slate leading-relaxed mb-4';
const ul = 'list-disc pl-6 space-y-2 text-neutral-slate leading-relaxed mb-4';
const a = 'text-navy font-semibold underline hover:text-gold';

export default function PrivacyPage() {
    return (
        <>
            <section className="bg-navy text-white py-14 md:py-16">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Privacy Policy</h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            What we collect when you visit this site, send an enquiry or book a job, what we do with it,
                            and how to see or correct what we hold about you.
                        </p>
                        <p className="text-sm text-gray-400 mt-6">Last updated {LAST_UPDATED}</p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom max-w-3xl">
                    <h2 className={`${h2} mt-0`}>Who we are</h2>
                    <p className={p}>
                        JPD Complete Electrical (&quot;JPD&quot;, &quot;we&quot;, &quot;us&quot;) is an owner-operated
                        electrical contractor in Adelaide, South Australia. Questions about this policy or your
                        details go to Justin at <a href={`mailto:${EMAIL}`} className={a}>{EMAIL}</a> or{' '}
                        <a href={PHONE_HREF} className={a}>{PHONE}</a>.
                    </p>

                    <h2 className={h2}>What we collect</h2>

                    <h3 className={h3}>When you send an enquiry</h3>
                    <p className={p}>
                        The <Link href="/contact" className={a}>contact form</Link> asks for your name, phone number
                        and email, the kind of work, how urgent it is, a description of the job and, if you choose to
                        say, how you found us. If you call, text or email instead, we keep what you tell us the same
                        way.
                    </p>

                    <h3 className={h3}>When we do a job for you</h3>
                    <p className={p}>
                        Your name, contact details and the site address, notes about the job, photos of the work
                        before and after, test results, quotes and invoices. If a property manager, real estate agent
                        or builder books the job, they give us the tenant&apos;s or owner&apos;s contact details so we
                        can arrange access.
                    </p>

                    <h3 className={h3}>When you browse the site</h3>
                    <ul className={ul}>
                        <li>
                            <strong>Google Analytics.</strong> Records which pages are visited, the device and
                            browser, a rough location and clicks on our phone and email links. It sets cookies to
                            tell one visit from the next. Your IP address is shortened before it&apos;s stored, and we
                            can&apos;t see who any visitor is.
                        </li>
                        <li>
                            <strong>Where you came from.</strong> Your browser keeps a short note of the site or link
                            that brought you here (for example Google, Facebook or one of our QR codes) and the page
                            you landed on, for up to 90 days. It&apos;s stored in your own browser, not on our
                            systems, and only reaches us if you send the contact form, where it&apos;s attached to your
                            enquiry. We keep the linking site&apos;s name only, never the full address or what you
                            searched for.
                        </li>
                        <li>
                            <strong>Hosting.</strong> The site is served by Cloudflare, which processes your IP
                            address to deliver pages and block attacks.
                        </li>
                        <li>
                            <strong>Map.</strong> The contact page shows an embedded Google Map, which Google loads
                            under its own privacy policy.
                        </li>
                    </ul>

                    <h2 className={h2}>What we use it for</h2>
                    <ul className={ul}>
                        <li>Replying to your enquiry, quoting and booking the work.</li>
                        <li>Doing the job, invoicing it and following up payment.</li>
                        <li>
                            Electrical certificates of compliance and test records, which South Australian law
                            requires us to complete and lodge with the Office of the Technical Regulator, and, where a
                            job needs it, applications to SA Power Networks.
                        </li>
                        <li>Reminding you when testing is due again, if you&apos;ve asked us to.</li>
                        <li>Asking for a Google review once a job is finished.</li>
                        <li>Working out which advertising and listings actually bring in work.</li>
                    </ul>
                    <p className={p}>We don&apos;t sell, rent or trade your details, and we don&apos;t put you on a mailing list.</p>

                    <h2 className={h2}>Who we share it with</h2>
                    <p className={p}>
                        We use a small number of service providers to run the business. Each one only gets what it
                        needs for its part:
                    </p>
                    <ul className={ul}>
                        <li><strong>Web3Forms</strong> delivers the contact form to our inbox.</li>
                        <li><strong>Google</strong> (Google Workspace) for email, documents and our calendar, plus Google Analytics.</li>
                        <li><strong>Cloudflare</strong> hosts this site and our internal staff systems.</li>
                        <li><strong>Fergus</strong> is our job management system: jobs, quotes, site details and photos.</li>
                        <li><strong>Xero</strong> is our accounting system: invoices and payments.</li>
                        <li><strong>Anthropic</strong> (see &quot;Use of AI&quot; below).</li>
                    </ul>
                    <p className={p}>
                        We also give details to government bodies where the law requires it, such as compliance
                        certificates to the Office of the Technical Regulator, and to SA Power Networks when a job
                        needs their approval.
                    </p>
                    <p className={p}>
                        Some of these providers store data outside Australia, mainly in the United States. We pick
                        established providers that have their own security and privacy commitments, but their
                        overseas storage is governed by their terms and the laws where the data sits.
                    </p>

                    <h2 className={h2}>Use of AI</h2>
                    <p className={p}>
                        We use Anthropic&apos;s Claude AI to help draft reports, quotes, emails and job write-ups from
                        our notes and job photos. Justin reads and approves everything before it goes to you. Under
                        Anthropic&apos;s commercial terms, what we send isn&apos;t used to train their AI models.
                    </p>

                    <h2 className={h2}>Photos of your job</h2>
                    <p className={p}>
                        We photograph the work for our records and your report. We sometimes publish photos of
                        finished work, with a short write-up, on this website and our social media. When we do, we
                        name the suburb only, never your name or street address, and we blur or crop out anything
                        that identifies you or your home, like house numbers, number plates, faces and paperwork. If
                        you&apos;d rather your job wasn&apos;t used, tell us and we won&apos;t use it, or we&apos;ll
                        take it down.
                    </p>

                    <h2 className={h2}>Cookies and browser storage</h2>
                    <p className={p}>
                        Google Analytics sets cookies (names starting with <code>_ga</code>). The &quot;where you came
                        from&quot; note above is kept in your browser&apos;s local storage. You can clear both in your
                        browser settings at any time, block cookies outright, or install Google&apos;s{' '}
                        <a
                            href="https://tools.google.com/dlpage/gaoptout"
                            className={a}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Analytics opt-out add-on
                        </a>
                        . The site works the same either way.
                    </p>

                    <h2 className={h2}>How long we keep it</h2>
                    <p className={p}>
                        Job records, quotes and invoices are kept for at least five years, because tax law requires
                        it. Compliance certificates and test results are kept for as long as they&apos;re useful for
                        the safety of the installation and any future work on it. An enquiry that doesn&apos;t go
                        ahead stays in our email unless you ask us to delete it.
                    </p>

                    <h2 className={h2}>Keeping it safe</h2>
                    <p className={p}>
                        Our systems need a sign-in, our staff tools sit behind an access check, and job photos are
                        stored privately. No system is perfectly secure, but if something ever went wrong with your
                        details we&apos;d tell you.
                    </p>

                    <h2 className={h2}>Seeing or correcting your details</h2>
                    <p className={p}>
                        You can ask what we hold about you, ask us to correct it, or ask us to delete what we&apos;re
                        not required to keep. Email <a href={`mailto:${EMAIL}`} className={a}>{EMAIL}</a> and
                        we&apos;ll answer within 30 days, usually much sooner.
                    </p>

                    <h2 className={h2}>Complaints</h2>
                    <p className={p}>
                        If you&apos;re unhappy with how we&apos;ve handled your details, tell us first and we&apos;ll
                        sort it out. If you&apos;re still not satisfied, you can contact the Office of the Australian
                        Information Commissioner at{' '}
                        <a href="https://www.oaic.gov.au" className={a} target="_blank" rel="noopener noreferrer">
                            oaic.gov.au
                        </a>
                        .
                    </p>

                    <h2 className={h2}>Changes to this policy</h2>
                    <p className={p}>
                        If the way we handle your details changes, we&apos;ll update this page and the date at the
                        top.
                    </p>
                </div>
            </section>
        </>
    );
}
