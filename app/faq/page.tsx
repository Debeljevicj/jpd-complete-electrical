import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, HelpCircle } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import Accordion from '@/components/Accordion';
import { faqGroups, allFaqs } from '@/data/faqs';

const SITE = 'https://jpdcompleteelectrical.com.au';
const PHONE = '0435 006 420';
const PHONE_HREF = 'tel:0435006420';

export const metadata: Metadata = {
    title: 'Electrician FAQs Adelaide | Costs, Safety, Compliance | JPD',
    description:
        'Straight answers on electrician costs, callout fees, switchboards, safety switches, smoke alarms and compliance. Licensed Adelaide electrician.',
    alternates: { canonical: '/faq' },
    openGraph: {
        title: 'Electrician FAQs Adelaide | JPD Complete Electrical',
        description:
            'Straight answers on costs, safety switches, switchboards, smoke alarms, EV chargers and compliance from a licensed Adelaide electrician.',
        url: `${SITE}/faq/`,
        type: 'website',
    },
};

export default function FaqPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${SITE}/faq/#faq`,
        mainEntity: allFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'FAQs', item: `${SITE}/faq/` },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
            />

            {/* Hero */}
            <section className="bg-navy text-white py-14 md:py-16">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 mb-5">
                            <HelpCircle className="w-4 h-4 text-gold" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-gold">
                                {allFaqs.length} questions answered
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            Electrician FAQs
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                            Costs, callout fees, licensing, safety switches, switchboards and the questions that come up
                            on nearly every job. If yours is not here, ring and ask.
                        </p>
                        <a
                            href={PHONE_HREF}
                            className="btn btn-gold text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3 inline-flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Call {PHONE}
                        </a>
                    </div>
                </div>
            </section>

            <div className="bg-white border-b border-gray-100 py-4">
                <div className="container-custom">
                    <TrustBadges className="justify-center" />
                </div>
            </div>

            {/* Jump links */}
            <section className="bg-white pt-10">
                <div className="container-custom max-w-4xl">
                    <div className="flex flex-wrap gap-2">
                        {faqGroups.map((group) => (
                            <a
                                key={group.title}
                                href={`#${group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                className="px-4 py-2 bg-neutral-offwhite rounded-full border border-gray-200 text-sm text-navy font-semibold hover:border-gold hover:text-gold transition-colors"
                            >
                                {group.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Groups */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl space-y-12">
                    {faqGroups.map((group, index) => (
                        <div
                            key={group.title}
                            id={group.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                            className="scroll-mt-28"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 gold-underline">
                                {group.title}
                            </h2>
                            {/* Only the first group starts expanded so the page does not open as a wall of text. */}
                            <Accordion items={group.items} defaultOpen={index === 0 ? 0 : null} />
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-navy text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Not Sure?</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Ring and ask. We would rather answer a question on the phone for free than have you guess, and
                        we will tell you honestly if you do not need us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={PHONE_HREF}
                            className="btn btn-gold text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Call {PHONE}
                        </a>
                        <Link href="/contact" className="btn bg-white text-navy hover:bg-neutral-offwhite text-lg px-8 py-4">
                            Get a Free Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
