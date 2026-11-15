import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AreaPicker from '@/components/AreaPicker';
import ClosingCTA from '@/components/ClosingCTA';
import TrustBadges from '@/components/TrustBadges';
import Accordion from '@/components/Accordion';
import ServicePhotoGrid from '@/components/ServicePhotoGrid';
import { suburbs } from '@/data/suburbs';
import { shareMeta } from '@/lib/share';
import { jsonLd } from '@/lib/json-ld';

const SITE = 'https://jpdcompleteelectrical.com.au';

export const metadata: Metadata = {
    title: 'Electrician Near Me | Adelaide Service Areas | JPD',
    description:
        'Looking for an electrician near you? JPD Complete Electrical services all of Adelaide from a Wynn Vale base. Switchboards, EV chargers, emergency work.',
    alternates: { canonical: '/service-areas' },
    ...shareMeta({
        title: 'Electrician Near Me | Adelaide Service Areas | JPD',
        description:
            'Looking for an electrician near you? JPD Complete Electrical services all of Adelaide from a Wynn Vale base. Switchboards, EV chargers, emergency work.',
        path: '/service-areas/',
    }),
};

const faqs = [
    {
        question: 'How do I find a good electrician near me?',
        answer: 'Check three things before anything else. That they hold a current electrical contractor licence, that they carry public liability insurance, and that they provide a Certificate of Compliance for Electrical Work when the job is done. After that, look at whether they\'re genuinely local, because a business based an hour away either charges you for the travel or deprioritises your job when something closer comes up.',
    },
    {
        question: 'Which suburbs does JPD Complete Electrical cover?',
        answer: 'All of Adelaide. We\'re based in Wynn Vale, so the north-east is where we work most days: Golden Grove, Greenwith, Hope Valley, Wynn Vale, Highbury, Modbury, Redwood Park, Ridgehaven, St Agnes, Fairview Park, Holden Hill, Gulfview Heights, Tea Tree Gully, Banksia Park and Vista, plus the suburbs immediately around them. Beyond that we cover the wider metro area and take regional work when it makes sense.',
    },
    {
        question: 'Do you charge a callout fee?',
        answer: 'Quotes are free. For repair and fault-finding work there\'s a callout that covers attendance and the first period on site, and we tell you what it is on the phone before we come out rather than after we arrive. Because we work in a tight patch, we aren\'t padding that number with an hour of travel.',
    },
    {
        question: 'Will you come out for a small job?',
        answer: 'Yes. A single powerpoint, a dead light, a fan swap. Being based in the middle of the area we service means a small job in Wynn Vale, Golden Grove or Modbury isn\'t half a day gone in the van, so we\'re happy to take them on.',
    },
    {
        question: 'What if I\'m just outside the suburbs listed?',
        answer: 'Then we still want the call. We service all of Adelaide. The suburbs listed are where we work most often and where we can get to you quickest, not a boundary. We regularly work in Surrey Downs, Salisbury Heights, Modbury North and Heights, Yatala Vale, Para Vista, Valley View, Dernancourt and Athelstone, right across the rest of the metro area, and into regional South Australia when it makes sense.',
    },
    {
        question: 'Are you available for emergency callouts?',
        answer: 'Yes. Call 0435 006 420 for loss of power, breakers that won\'t stay on, burning smells, sparking outlets or water in a switchboard. We\'ll tell you honestly whether it needs someone now or whether it can safely wait until morning.',
    },
    {
        question: 'Do you work with property managers and landlords?',
        answer: 'Yes, across the whole area. Safety switch testing with written reports, smoke alarm compliance, and repairs off condition reports, with documentation you can put on file and turnaround that doesn\'t hold up a tenancy.',
    },
    {
        question: 'Do you take on work for builders?',
        answer: 'Yes. New builds, extensions, renovations and small commercial fitouts as a subcontractor. We quote from plans, turn up when scheduled, and get the compliance paperwork back without being chased.',
    },
];

export default function ServiceAreasPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };

    // References the canonical business node in JsonLd.tsx rather than declaring a second one.
    const areaSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE}/service-areas/#service`,
        name: 'Electrician servicing Adelaide\'s north-east',
        url: `${SITE}/service-areas/`,
        serviceType: 'Electrician',
        provider: { '@id': `${SITE}/#business` },
        areaServed: suburbs.map((s) => ({
            '@type': 'Place',
            name: `${s.name}, SA ${s.postcode}`,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd([areaSchema, faqSchema]) }}
            />

            {/* Hero: the map, and the suburb the visitor picked (components/AreaPicker.tsx) */}
            <section className="bg-navy text-white">
                <div className="container-custom py-10 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <AreaPicker
                            suburbs={suburbs.map(({ name, slug, postcode, hook, housing }) => ({ name, slug, postcode, hook, housing }))}
                        />
                    </div>
                </div>
            </section>

            <div className="bg-white border-b border-gray-100 py-4">
                <div className="container-custom">
                    <TrustBadges className="justify-center" />
                </div>
            </div>

            {/* Why local matters */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h2 className="display mb-6 text-3xl text-navy md:text-5xl">
                            Why &ldquo;Near Me&rdquo; Actually Matters With Electrical Work
                        </h2>
                        <p className="text-neutral-slate text-lg leading-relaxed mb-4">
                            Plenty of electrical companies advertise across all of Adelaide. That's fine for a booked
                            job weeks out. It's much less fine when your power has gone off on a Thursday night, or
                            when a tenant is waiting and the property manager needs it done this week.
                        </p>
                        <p className="text-neutral-slate text-lg leading-relaxed mb-4">
                            We work a tight patch on purpose. Almost everything we do sits inside the City of Tea Tree
                            Gully or right on its edge, which means shorter drives, no travel padding in the price, and
                            a realistic answer when you ask how soon we can be there.
                        </p>
                        <p className="text-neutral-slate text-lg leading-relaxed">
                            It also means we know the housing. The switchboard in a 1970s Hope Valley home is a known
                            quantity. So is the full-but-serviceable board in a 1990s Greenwith house that now needs an
                            EV charger on it. That's the difference between an electrician who works in your suburb and
                            one who's visiting it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Suburbs */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom">
                    <div className="max-w-3xl mb-10">
                        <h2 className="display mb-4 text-3xl text-navy md:text-5xl">
                            Suburbs We Cover
                        </h2>
                        <p className="text-neutral-slate text-lg leading-relaxed">
                            Fifteen suburbs, around 85,000 people, and fourteen of them in one council area. Pick yours
                            for local detail on the housing stock and the work that actually comes up there.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {suburbs.map((suburb) => (
                            <Link
                                key={suburb.slug}
                                href={`/${suburb.slug}`}
                                className="card group hover:border-gold hover:shadow-md transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-navy text-lg group-hover:text-gold transition-colors">
                                        {suburb.name}
                                    </h3>
                                    <span className="text-xs font-semibold text-neutral-slate bg-neutral-offwhite px-2 py-1 rounded">
                                        {suburb.postcode}
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-slate leading-snug mb-3">{suburb.housing}</p>
                                <span className="inline-flex items-center gap-1 text-sm font-bold text-navy group-hover:text-gold">
                                    Electrician {suburb.name} <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    <p className="text-neutral-slate text-lg leading-relaxed mt-8 max-w-3xl">
                        Just outside that list? We regularly work in Surrey Downs, Salisbury Heights, Modbury North and
                        Modbury Heights, Yatala Vale, Para Vista, Valley View, Dernancourt and Athelstone as well. Call
                        and ask rather than assuming.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mb-10">
                        <h2 className="display mb-4 text-3xl text-navy md:text-5xl">
                            What We Do Across the Area
                        </h2>
                        <p className="text-neutral-slate text-lg leading-relaxed">
                            Residential, small commercial, rentals and trade work for builders. Everything below is work
                            we do week in, week out across these suburbs.
                        </p>
                    </div>
                    <ServicePhotoGrid />
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom max-w-4xl">
                    <h2 className="display mb-8 text-3xl text-navy md:text-5xl">
                        Common Questions About Finding an Electrician Near You
                    </h2>
                    <Accordion items={faqs} />
                </div>
            </section>

            <ClosingCTA />
        </>
    );
}
