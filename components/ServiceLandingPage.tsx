import Link from 'next/link';
import { Phone, Check, ArrowRight, Receipt } from 'lucide-react';
import TrustBadges from './TrustBadges';
import Accordion from './Accordion';
import ServiceIcon from './ServiceIcon';
import { serviceBySlug, type Service } from '@/data/services';
import { suburbs } from '@/data/suburbs';

const SITE = 'https://jpdcompleteelectrical.com.au';
const PHONE = '0435 006 420';
const PHONE_HREF = 'tel:0435006420';

export default function ServiceLandingPage({ service }: { service: Service }) {
    const { slug, name, icon, h1, intro, sections, priceFactors, faqs, related, description } = service;

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE}/${slug}/#service`,
        name,
        description,
        serviceType: name,
        url: `${SITE}/${slug}/`,
        // Reference the canonical business node from JsonLd.tsx rather than redeclaring it.
        provider: { '@id': `${SITE}/#business` },
        areaServed: suburbs.map((s) => ({
            '@type': 'Place',
            name: `${s.name}, South Australia`,
        })),
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${SITE}/${slug}/#faq`,
        mainEntity: faqs.map((faq) => ({
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
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services/` },
            { '@type': 'ListItem', position: 3, name, item: `${SITE}/${slug}/` },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]) }}
            />

            {/* Hero */}
            <section className="bg-navy text-white py-16 md:py-20">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 mb-5">
                            <ServiceIcon name={icon} className="w-4 h-4 text-gold" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-gold">{name}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{h1}</h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">{intro}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={PHONE_HREF}
                                className="btn btn-gold text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3 inline-flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                Call {PHONE}
                            </a>
                            <Link
                                href="/contact"
                                className="btn btn-outline border-white text-white hover:bg-white hover:text-navy text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust badges */}
            <div className="bg-white border-b border-gray-100 py-4">
                <div className="container-custom">
                    <TrustBadges className="justify-center" />
                </div>
            </div>

            {/* Body sections */}
            {sections.map((section, index) => (
                <section
                    key={section.heading}
                    className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-offwhite'}`}
                >
                    <div className="container-custom">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 gold-underline">
                                {section.heading}
                            </h2>
                            {section.body.map((paragraph) => (
                                <p
                                    key={paragraph.slice(0, 40)}
                                    className="text-neutral-slate text-lg leading-relaxed mb-4"
                                >
                                    {paragraph}
                                </p>
                            ))}
                            {section.bullets && (
                                <ul className="mt-6 space-y-3">
                                    {section.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-gold shrink-0 mt-1" />
                                            <span className="text-neutral-slate text-lg leading-relaxed">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </section>
            ))}

            {/* What drives the price */}
            <section className="section-padding bg-navy text-white">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-5">
                            <Receipt className="w-7 h-7 text-gold" />
                            <h2 className="text-2xl md:text-3xl font-bold">What Drives the Price</h2>
                        </div>
                        <p className="text-lg text-white/85 leading-relaxed mb-6">
                            We are not going to publish a headline figure that turns into something else once we are on
                            site. What we will do is tell you exactly what moves the number, so you can see where your
                            job is likely to sit before you call.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {priceFactors.map((factor) => (
                                <li key={factor} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-gold shrink-0 mt-1" />
                                    <span className="text-white/85 text-lg leading-relaxed">{factor}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-white/85 leading-relaxed mb-8">
                            Quotes are free, fixed, and state what is included and excluded. If we think something might
                            turn up once we open things up, you hear about it before we start rather than on the invoice.
                        </p>
                        <a href={PHONE_HREF} className="btn btn-gold text-lg px-8 py-3.5 inline-flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            Call {PHONE}
                        </a>
                    </div>
                </div>
            </section>

            {/* Suburb coverage */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">
                            Where We Do This Work
                        </h2>
                        <p className="text-neutral-slate text-lg leading-relaxed">
                            We service all of Adelaide. Being based in Wynn Vale, these are the suburbs we are in most
                            often and where we can usually get to you fastest. Pick yours for local detail, and if you
                            are somewhere else in the metro area, just call and ask.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {suburbs.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/${s.slug}`}
                                className="px-4 py-2 bg-neutral-offwhite rounded-full border border-gray-200 text-sm text-navy font-semibold hover:border-gold hover:text-gold transition-colors"
                            >
                                {name} {s.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 gold-underline">
                        Common Questions About {name}
                    </h2>
                    <Accordion items={faqs} />
                </div>
            </section>

            {/* Related services */}
            {related.length > 0 && (
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 gold-underline">
                            Related Services
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {related.map((relatedSlug) => {
                                const relatedService = serviceBySlug[relatedSlug];
                                if (!relatedService) return null;
                                return (
                                    <Link
                                        key={relatedSlug}
                                        href={`/${relatedSlug}`}
                                        className="card group hover:border-gold hover:shadow-md transition-all"
                                    >
                                        <div className="w-11 h-11 rounded-lg bg-navy flex items-center justify-center mb-3 group-hover:bg-gold transition-colors">
                                            <ServiceIcon
                                                name={relatedService.icon}
                                                className="w-5 h-5 text-gold group-hover:text-navy transition-colors"
                                            />
                                        </div>
                                        <h3 className="font-bold text-navy mb-1 group-hover:text-gold transition-colors">
                                            {relatedService.name}
                                        </h3>
                                        <p className="text-sm text-neutral-slate leading-snug mb-3">
                                            {relatedService.blurb}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-sm font-bold text-navy group-hover:text-gold">
                                            Read more <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section-padding bg-navy text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Quote</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Owner-operated, licensed and insured. Justin quotes the job, does the job, and answers the phone
                        afterwards.
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
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
