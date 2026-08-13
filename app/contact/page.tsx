import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, FileCheck, AlertTriangle } from 'lucide-react';
import ContactContent from './ContactContent';
import Accordion from '@/components/Accordion';
import { suburbs } from '@/data/suburbs';

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
    openGraph: {
        title: 'Contact JPD Complete Electrical',
        description: 'Free electrical quotes across Adelaide. Call 0435 006 420 or send an enquiry.',
        url: `${SITE}/contact/`,
        type: 'website',
    },
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
        body: 'If what you have described is not urgent, we will say so. A callout you did not need is not a good outcome for either of us.',
    },
];

const contactFaqs = [
    {
        question: 'What information should I have ready?',
        answer: 'The address, a rough description of the problem or the job, and if it is a fault, when it started and whether anything changed just before. For quotes on switchboards or EV chargers, a photo of your switchboard with the cover open tells us most of what we need.',
    },
    {
        question: 'How quickly will you respond to an enquiry?',
        answer: 'Enquiries sent through this form come straight to us and we usually reply the same day. If it is urgent, ring 0435 006 420 rather than filling in the form, because the phone is faster.',
    },
    {
        question: 'Do you charge for quotes?',
        answer: 'No. Quotes are free and there is no obligation. We state what is included, what is excluded and what we have assumed, so you can compare like for like against anyone else you have asked.',
    },
    {
        question: 'What are your hours?',
        answer: 'Standard work is weekdays. Emergency callouts are handled outside those hours, at a higher rate that we tell you on the phone before we come out. If you are not sure whether your problem qualifies, ring and describe it.',
    },
    {
        question: 'Do you service my suburb?',
        answer: 'We service all of Adelaide. We are based in Wynn Vale, so Adelaide\'s north-east is where we can usually get to you fastest, but we work right across the metro area and take regional work when it makes sense.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <ContactContent />

            {/* What happens after you get in touch */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">
                            What Happens After You Get in Touch
                        </h2>
                        <p className="text-neutral-slate text-lg leading-relaxed">
                            No call centre, no sales visit, no pressure. JPD Complete Electrical is owner-operated, so
                            the person who answers the phone is the person who does the work.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {whatHappensNext.map(({ icon: Icon, title, body }) => (
                            <div key={title} className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-lg bg-navy flex items-center justify-center shrink-0">
                                    <Icon className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy mb-1">{title}</h3>
                                    <p className="text-neutral-slate leading-relaxed">{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emergency */}
            <section className="section-padding bg-navy text-white">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-5">Is It an Emergency?</h2>
                        <p className="text-lg text-white/85 leading-relaxed mb-4">
                            If you have lost power completely, have a breaker or safety switch that will not stay on,
                            can smell burning near the switchboard, have a sparking outlet, or have had water get into
                            anything electrical, do not use the form. Ring{' '}
                            <a href={PHONE_HREF} className="text-gold font-semibold underline underline-offset-4">
                                {PHONE}
                            </a>
                            .
                        </p>
                        <p className="text-lg text-white/85 leading-relaxed mb-4">
                            If something is visibly wrong, turn the main switch off at the board first, then call. And
                            if your neighbours have lost power too, that is a network fault: ring SA Power Networks on
                            13 13 66, because it is not something we can fix.
                        </p>
                        <a href={PHONE_HREF} className="btn btn-gold text-lg px-8 py-3.5 inline-flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            Call {PHONE}
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 gold-underline">
                        Before You Get in Touch
                    </h2>
                    <Accordion items={contactFaqs} />
                    <p className="text-neutral-slate mt-6">
                        More questions on pricing, safety and compliance are answered on the{' '}
                        <Link href="/faq" className="text-navy font-bold underline underline-offset-4 hover:text-gold">
                            FAQ page
                        </Link>
                        .
                    </p>
                </div>
            </section>

            {/* Suburbs */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">
                            Where We Work
                        </h2>
                        <p className="text-neutral-slate text-lg leading-relaxed">
                            All of Adelaide. These are the suburbs we are in most often, each with a page on the
                            electrical work that actually comes up there.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {suburbs.map((suburb) => (
                            <Link
                                key={suburb.slug}
                                href={`/${suburb.slug}`}
                                className="px-4 py-2 bg-neutral-offwhite rounded-full border border-gray-200 text-sm text-navy font-semibold hover:border-gold hover:text-gold transition-colors"
                            >
                                {suburb.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
