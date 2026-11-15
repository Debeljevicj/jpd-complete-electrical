import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, FileCheck, AlertTriangle } from 'lucide-react';
import ContactContent from './ContactContent';
import Accordion from '@/components/Accordion';
import { suburbs } from '@/data/suburbs';
import { shareMeta } from '@/lib/share';
import { jsonLd } from '@/lib/json-ld';

const SITE = 'https://jpdcompleteelectrical.com.au';
const PHONE = '0435 006 420';
const PHONE_HREF = 'tel:0435006420';

export const metadata: Metadata = {
    title: 'Contact JPD Complete Electrical | Free Quotes Adelaide',
    description:
        'Free electrical quotes across Adelaide. Emergency callouts, switchboards, EV chargers and lighting. Call 0435 006 420 or send an enquiry.',
    alternates: {
        canonical: '/contact',
    },
    ...shareMeta({
        title: 'Contact JPD Complete Electrical',
        description: 'Free electrical quotes across Adelaide. Call 0435 006 420 or send an enquiry.',
        path: '/contact/',
    }),
};

const whatHappensNext = [
    {
        icon: Phone,
        title: 'We call you back',
        body: 'Usually the same day. If you have rung and we were on the tools, we return the call rather than leaving you wondering.',
    },
    {
        icon: FileCheck,
        title: 'We look before we price',
        body: 'For anything beyond a straight swap we come and see it. A number given over the phone for a job nobody has looked at is a guess, and guesses change.',
    },
    {
        icon: Clock,
        title: 'You get a time, not a window',
        body: 'Not "sometime Tuesday". If something changes on our end, you hear it from us first rather than finding out by waiting.',
    },
    {
        icon: AlertTriangle,
        title: 'We tell you if it can wait',
        body: 'If what you have described isn\'t urgent, we\'ll say so. A callout you didn\'t need isn\'t a good outcome for either of us.',
    },
];

const contactFaqs = [
    {
        question: 'What information should I have ready?',
        answer: 'The address, a rough description of the problem or the job, and if it\'s a fault, when it started and whether anything changed just before. For quotes on switchboards or EV chargers, a photo of your switchboard with the cover open tells us most of what we need.',
    },
    {
        question: 'How quickly will you respond to an enquiry?',
        answer: 'Enquiries sent through this form come straight to us and we usually reply the same day. If it\'s urgent, ring 0435 006 420 rather than filling in the form, because the phone is faster.',
    },
    {
        question: 'Do you charge for quotes?',
        answer: 'No. Quotes are free and there\'s no obligation. We state what\'s included, what\'s excluded and what we have assumed, so you can compare like for like against anyone else you have asked.',
    },
    {
        question: 'What are your hours?',
        answer: 'Standard work is weekdays. Emergency callouts are handled outside those hours, at a higher rate that we tell you on the phone before we come out. If you aren\'t sure whether your problem qualifies, ring and describe it.',
    },
    {
        question: 'Do you service my suburb?',
        answer: 'We service all of Adelaide. We\'re based in Wynn Vale, so Adelaide\'s north-east is where we can usually get to you fastest, but we work right across the metro area and take regional work when it makes sense.',
    },
];

export default function ContactPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${SITE}/contact/#faq`,
        mainEntity: contactFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
            />

            <ContactContent />

            {/* What happens after you get in touch */}
            <section className="bg-white">
                <div className="container-custom py-14 md:py-24">
                    <div className="mx-auto max-w-5xl">
                        <div className="grid gap-5 md:grid-cols-2 md:items-end md:gap-16">
                            <h2 className="display text-4xl text-navy md:text-5xl">What Happens After You Get in Touch</h2>
                            <p className="text-base leading-relaxed text-neutral-slate md:text-lg">
                                No call centre, no sales visit, no pressure. JPD Complete Electrical is owner-operated, so
                                the person who answers the phone is the person who does the work.
                            </p>
                        </div>
                        {/* A line with a dot per step: across on desktop, down the side on a phone. */}
                        <ol className="mt-10 grid gap-8 border-l border-gold/50 md:mt-14 md:grid-cols-4 md:gap-6 md:border-l-0 md:border-t">
                            {whatHappensNext.map(({ title, body }) => (
                                <li key={title} className="relative pl-6 md:pl-0 md:pt-7">
                                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold-dark ring-4 ring-white md:-top-[5px] md:left-0" />
                                    <h3 className="font-heading text-lg font-semibold leading-snug text-navy">{title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-slate">{body}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* Emergency. The form's "Is it an emergency?" link lands here. */}
            <section id="emergency" className="scroll-mt-28 bg-navy text-white">
                <div className="container-custom py-14 md:py-24">
                    <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[2fr_3fr] md:gap-16">
                        <figure>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy">
                                <Image
                                    src="/images/burnt_main_switch_tea_tree_gully.webp"
                                    alt="Burnt and melted main switch inside an old switchboard"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 380px"
                                    className="object-cover"
                                    style={{ objectPosition: '50% 35%' }}
                                />
                            </div>
                            <figcaption className="mt-2 text-xs text-white/45">
                                A burnt main switch, from a call-out in Tea Tree Gully.
                            </figcaption>
                        </figure>
                        <div>
                            <p className="eyebrow eyebrow-on-dark mb-5">Emergencies</p>
                            <h2 className="display text-4xl md:text-6xl">Is It an Emergency?</h2>
                            <p className="mt-6 text-lg leading-relaxed text-white/85">
                                If you have lost power completely, have a breaker or safety switch that won&apos;t stay on,
                                can smell burning near the switchboard, have a sparking outlet, or have had water get into
                                anything electrical, don&apos;t use the form. Ring{' '}
                                <a href={PHONE_HREF} className="font-semibold text-gold underline underline-offset-4">
                                    {PHONE}
                                </a>
                                .
                            </p>
                            <p className="mt-4 text-sm leading-relaxed text-white/60">
                                If something is visibly wrong, turn the main switch off at the board first, then call. And
                                if your neighbours have lost power too, that&apos;s a network fault: ring SA Power Networks on
                                13 13 66, because it isn&apos;t something we can fix.
                            </p>
                            <a href={PHONE_HREF} className="pill pill-gold mt-7">
                                <Phone className="h-4 w-4" />
                                Call {PHONE}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs, with where we work beside them */}
            <section className="bg-warm-50">
                <div className="container-custom py-14 md:py-24">
                    <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[2fr_3fr] md:gap-16">
                        <div>
                            <h2 className="display text-4xl text-navy md:text-5xl">Before You Get in Touch</h2>
                            <p className="mt-5 text-sm leading-relaxed text-neutral-slate">
                                More questions on pricing, safety and compliance are answered on the{' '}
                                <Link href="/faq" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark">
                                    FAQ page
                                </Link>
                                .
                            </p>
                            <div className="mt-8 border-t border-navy/10 pt-6">
                                <h3 className="font-heading text-lg font-semibold text-navy">Where We Work</h3>
                                <p className="mt-2 text-sm leading-relaxed text-neutral-slate">
                                    All of Adelaide. These are the suburbs we&apos;re in most often, each with a page on the
                                    electrical work that actually comes up there.
                                </p>
                                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 text-sm">
                                    {suburbs.map((suburb) => (
                                        <li key={suburb.slug}>
                                            <Link
                                                href={`/${suburb.slug}`}
                                                className="text-navy underline decoration-navy/25 underline-offset-4 transition-colors hover:text-gold-dark hover:decoration-gold"
                                            >
                                                {suburb.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <Accordion items={contactFaqs} />
                    </div>
                </div>
            </section>
        </>
    );
}
