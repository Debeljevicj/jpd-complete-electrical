import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle2, MapPin, Clock, ShieldCheck, Wrench } from 'lucide-react';
import TrustBadges from './TrustBadges';
import Accordion from './Accordion';
import ServiceIcon from './ServiceIcon';
import RecentJobs from './RecentJobs';
import InlineCTA from './InlineCTA';
import { serviceIndex } from '@/data/services';
import { suburbSlugByName, type Suburb } from '@/data/suburbs';
import { jobsForSuburb } from '@/data/job-reports';

const SITE = 'https://jpdcompleteelectrical.com.au';
const PHONE = '0435 006 420';
const PHONE_HREF = 'tel:0435006420';

const whyPoints = [
    {
        icon: MapPin,
        title: 'Based in the same patch',
        body: 'We work out of Wynn Vale. Every suburb we cover is inside the Tea Tree Gully area or right on its edge, which means shorter drives and no travel padding in the price.',
    },
    {
        icon: Wrench,
        title: 'Owner-operated',
        body: 'Justin quotes the job, does the job, and answers the phone afterwards. Nothing gets lost between a salesperson and whoever turns up.',
    },
    {
        icon: ShieldCheck,
        title: 'Licensed and insured',
        body: 'Licence PGE296191, public liability insurance, and a Certificate of Compliance for Electrical Work on every job that requires one.',
    },
    {
        icon: Clock,
        title: 'We turn up when we say',
        body: 'You get a time, not a window that covers the whole day. If something changes, you hear about it from us first.',
    },
];

export default function SuburbLandingPage({ suburb }: { suburb: Suburb }) {
    const { name, postcode, council, hook, intro, local, housing, localJobs, landmarks, nearby, faqs, slug } = suburb;

    // A Service scoped to this suburb, provided by the canonical business node in
    // JsonLd.tsx. Declaring a second Electrician per page would read as fifty
    // separate businesses rather than one operating across fifty areas.
    const localService = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE}/${slug}/#service`,
        name: `Electrician in ${name}, SA ${postcode}`,
        description: `Licensed, owner-operated electrician servicing ${name} and the surrounding ${council} area.`,
        url: `${SITE}/${slug}/`,
        serviceType: 'Electrician',
        provider: { '@id': `${SITE}/#business` },
        areaServed: [name, ...nearby].map((area) => ({
            '@type': 'Place',
            name: `${area}, South Australia`,
        })),
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `Electrical services in ${name}`,
            itemListElement: serviceIndex.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: `${service.name} in ${name}`,
                    url: `${SITE}/${service.slug}/`,
                },
            })),
        },
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
            { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE}/service-areas/` },
            { '@type': 'ListItem', position: 3, name: `Electrician ${name}`, item: `${SITE}/${slug}/` },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([localService, faqSchema, breadcrumbSchema]) }}
            />

            {/* Hero */}
            <section className="bg-navy text-white py-16 md:py-20">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 mb-4">
                            <span className="w-2 h-2 bg-gold rounded-full" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-gold">
                                {name} SA {postcode}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">Electrician {name}</h1>
                        <p className="text-xl md:text-2xl text-gold font-semibold mb-5">{hook}</p>
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

            {/* Local intro */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl flow-root">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 gold-underline">
                            Your Local {name} Electrician
                        </h2>
                        {/*
                          * Square, and floated so the copy wraps around it from sm up.
                          * It previously sat in a full-width band roughly 3.2:1, which
                          * cropped this 787x1400 portrait down to a shoulder and a
                          * forearm. Below sm it stacks full width instead, because a
                          * 288px float in a 375px viewport leaves a two-word column.
                          */}
                        <div className="relative w-full sm:w-64 md:w-72 aspect-square rounded-2xl overflow-hidden shadow-lg mb-6 sm:float-right sm:ml-8 sm:mb-4">
                            <Image
                                src="/images/switchboard_fault_finding.webp"
                                alt={`Switchboard work by JPD Complete Electrical near ${name}, Adelaide`}
                                fill
                                sizes="(max-width: 640px) 100vw, 288px"
                                loading="lazy"
                                className="object-cover"
                                style={{ objectPosition: 'center 35%' }}
                            />
                        </div>
                        {local.map((paragraph) => (
                            <p key={paragraph.slice(0, 40)} className="text-neutral-slate text-lg leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        ))}
                        {landmarks.length > 0 && (
                            <p className="text-neutral-slate text-lg leading-relaxed">
                                We work right across the suburb, including around {landmarks.slice(0, -1).join(', ')} and{' '}
                                {landmarks[landmarks.length - 1]}.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/*
              * First mid-page CTA. Measured at 375px, this page runs ~12,700px and had a
              * 7,300px stretch — about nine phone screens — between the hero buttons and
              * the next chance to act. This lands right after the local-relevance copy,
              * which is the earliest point a reader searching "electrician {suburb}" has
              * what they came for. Gold so it breaks the run of white sections.
              */}
            <InlineCTA
                tone="gold"
                heading={`Need an electrician in ${name}?`}
                body={`We are based in Wynn Vale, so ${name} is a short drive rather than a trip across town. Free quotes, fixed prices.`}
            />

            {/* Services */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom">
                    <div className="max-w-3xl mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">
                            Electrical Services in {name}
                        </h2>
                        <p className="text-neutral-slate text-lg leading-relaxed">
                            Everything below is work we do in {name} regularly, for homeowners, landlords, builders and
                            small business. Tap any service for detail on what is involved and what drives the price.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {serviceIndex.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/${service.slug}`}
                                className="card group hover:border-gold hover:shadow-md transition-all"
                            >
                                <div className="w-11 h-11 rounded-lg bg-navy flex items-center justify-center mb-3 group-hover:bg-gold transition-colors">
                                    <ServiceIcon
                                        name={service.icon}
                                        className="w-5 h-5 text-gold group-hover:text-navy transition-colors"
                                    />
                                </div>
                                <h3 className="font-bold text-navy mb-1 group-hover:text-gold transition-colors">
                                    {service.name} in {name}
                                </h3>
                                <p className="text-sm text-neutral-slate leading-snug">{service.blurb}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Second mid-page CTA, after the fourteen service cards. On mobile that grid
                alone is over four screens of scrolling, so a reader who found their job in
                it should not have to keep going to act on it. */}
            <InlineCTA
                heading="Found the job you need doing?"
                body="Tell us what is going on and we will give you a straight answer on what it involves and what it costs."
            />

            {/* What we see locally */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">
                            What We See Most in {name} Homes
                        </h2>
                        <p className="text-neutral-slate text-lg leading-relaxed">
                            {name} is {housing.charAt(0).toLowerCase() + housing.slice(1)}. The age of the housing is the
                            single biggest thing that decides what electrical work a street actually needs, and here is
                            what that means in practice.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {localJobs.map((job) => (
                            <div key={job.title} className="bg-neutral-offwhite rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-navy mb-2">{job.title}</h3>
                                        <p className="text-neutral-slate leading-relaxed">{job.body}</p>
                                    </div>
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
                        <h2 className="text-2xl md:text-3xl font-bold mb-5">Emergency Electrician in {name}</h2>
                        <p className="text-lg text-white/85 leading-relaxed mb-4">
                            Some electrical problems can wait until next week and some genuinely cannot. If you have lost
                            power completely, have a breaker or safety switch that will not stay on, can smell burning
                            near the switchboard, have a sparking outlet, or have had water get into anything electrical,
                            call us straight away on{' '}
                            <a href={PHONE_HREF} className="text-gold font-semibold underline underline-offset-4">
                                {PHONE}
                            </a>
                            .
                        </p>
                        <p className="text-lg text-white/85 leading-relaxed mb-4">
                            If something is visibly wrong, sparking, smoking or wet, turn the main switch off at the
                            board first, then call. We would rather you did that than waited for us with a hazard live.
                        </p>
                        <p className="text-lg text-white/85 leading-relaxed mb-8">
                            We are based in Wynn Vale, so {name} is a short drive rather than a trip across town. We will
                            also tell you honestly on the phone whether it needs someone right now or whether it can
                            safely hold until the morning, because a callout you did not need is not a good outcome for
                            either of us.
                        </p>
                        <a href={PHONE_HREF} className="btn btn-gold text-lg px-8 py-3.5 inline-flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            Call {PHONE}
                        </a>
                    </div>
                </div>
            </section>

            {/* Why choose */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 gold-underline">
                        Why {name} Chooses JPD Complete Electrical
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {whyPoints.map(({ icon: Icon, title, body }) => (
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

            {/* FAQs */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 gold-underline">
                        {name} Electrician FAQs
                    </h2>
                    <Accordion items={faqs} />
                </div>
            </section>

            {/* Nearby */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">
                            Also Servicing Near {name}
                        </h2>
                        <p className="text-neutral-slate text-lg leading-relaxed">
                            {name} sits in the {council} area, and we cover the suburbs around it just as regularly.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {nearby.map((area) => {
                            const href = suburbSlugByName[area];
                            return href ? (
                                <Link
                                    key={area}
                                    href={href}
                                    className="px-4 py-2 bg-neutral-offwhite rounded-full border border-gray-200 text-sm text-navy font-semibold hover:border-gold hover:text-gold transition-colors"
                                >
                                    Electrician {area}
                                </Link>
                            ) : (
                                <span
                                    key={area}
                                    className="px-4 py-2 bg-neutral-offwhite rounded-full border border-gray-200 text-sm text-neutral-slate"
                                >
                                    {area}
                                </span>
                            );
                        })}
                    </div>
                    <Link href="/service-areas" className="text-navy font-bold underline underline-offset-4 hover:text-gold">
                        See every suburb we cover →
                    </Link>
                </div>
            </section>

            {/* Real jobs done in this suburb. Renders nothing until one is written up. */}
            <RecentJobs
                jobs={jobsForSuburb(slug)}
                limit={6}
                heading={`Recent Work in ${name}`}
                intro={`Jobs we have actually done in ${name}, with photos and what was involved.`}
            />

            {/* CTA */}
            <section className="section-padding bg-navy text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Need an Electrician in {name}?</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Licensed, insured and based just up the road. Free quotes, fixed prices, and a Certificate of
                        Compliance on every job that needs one.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={PHONE_HREF} className="btn btn-gold text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
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
