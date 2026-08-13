import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import Accordion from '@/components/Accordion';
import ServiceIcon from '@/components/ServiceIcon';
import { suburbs } from '@/data/suburbs';
import { serviceIndex } from '@/data/services';

const SITE = 'https://jpdcompleteelectrical.com.au';
const PHONE = '0435 006 420';
const PHONE_HREF = 'tel:0435006420';

export const metadata: Metadata = {
    title: 'Electrician Near Me | Adelaide North-East Service Areas | JPD',
    description:
        'Looking for an electrician near you in Adelaide\'s north-east? JPD Complete Electrical is based in Wynn Vale and covers Golden Grove, Greenwith, Hope Valley, Modbury, Highbury, Tea Tree Gully and more.',
    alternates: { canonical: '/service-areas' },
    openGraph: {
        title: 'Electrician Near Me | Adelaide North-East Service Areas',
        description:
            'Based in Wynn Vale, covering 15 suburbs across the City of Tea Tree Gully and surrounds. Switchboards, EV chargers, lighting, emergency callouts.',
        url: `${SITE}/service-areas/`,
        type: 'website',
    },
};

const faqs = [
    {
        question: 'How do I find a good electrician near me?',
        answer: 'Check three things before anything else. That they hold a current electrical contractor licence, that they carry public liability insurance, and that they provide a Certificate of Compliance for Electrical Work when the job is done. After that, look at whether they are genuinely local, because a business based an hour away either charges you for the travel or deprioritises your job when something closer comes up.',
    },
    {
        question: 'Which suburbs does JPD Complete Electrical cover?',
        answer: 'All of Adelaide. We are based in Wynn Vale, so the north-east is where we work most days: Golden Grove, Greenwith, Hope Valley, Wynn Vale, Highbury, Modbury, Redwood Park, Ridgehaven, St Agnes, Fairview Park, Holden Hill, Gulfview Heights, Tea Tree Gully, Banksia Park and Vista, plus the suburbs immediately around them. Beyond that we cover the wider metro area and take regional work when it makes sense.',
    },
    {
        question: 'Do you charge a callout fee?',
        answer: 'Quotes are free. For repair and fault-finding work there is a callout that covers attendance and the first period on site, and we tell you what it is on the phone before we come out rather than after we arrive. Because we work in a tight patch, we are not padding that number with an hour of travel.',
    },
    {
        question: 'Will you come out for a small job?',
        answer: 'Yes. A single powerpoint, a dead light, a fan swap. Being based in the middle of the area we service means a small job in Wynn Vale, Golden Grove or Modbury is not half a day gone in the van, so we are happy to take them on.',
    },
    {
        question: 'What if I am just outside the suburbs listed?',
        answer: 'Then we still want the call. We service all of Adelaide. The suburbs listed are where we work most often and where we can get to you quickest, not a boundary. We regularly work in Surrey Downs, Salisbury Heights, Modbury North and Heights, Yatala Vale, Para Vista, Valley View, Dernancourt and Athelstone, right across the rest of the metro area, and into regional South Australia when it makes sense.',
    },
    {
        question: 'Are you available for emergency callouts?',
        answer: 'Yes. Call 0435 006 420 for loss of power, breakers that will not stay on, burning smells, sparking outlets or water in a switchboard. We will tell you honestly whether it needs someone now or whether it can safely wait until morning.',
    },
    {
        question: 'Do you work with property managers and landlords?',
        answer: 'Yes, across the whole area. Safety switch testing with written reports, smoke alarm compliance, and repairs off condition reports, with documentation you can put on file and turnaround that does not hold up a tenancy.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify([areaSchema, faqSchema]) }}
            />

            {/* Hero */}
            <section className="bg-navy text-white py-16 md:py-20">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 mb-5">
                            <MapPin className="w-4 h-4 text-gold" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-gold">
                                Based in Wynn Vale SA 5127
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            Electrician Near Me in Adelaide&apos;s North-East
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                            If you are searching for an electrician near you and you live anywhere around Golden Grove,
                            Modbury, Tea Tree Gully or the foothills, we are probably closer than whoever came up first.
                            JPD Complete Electrical is owner-operated out of Wynn Vale, right in the middle of the patch.
                        </p>
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

            <div className="bg-white border-b border-gray-100 py-4">
                <div className="container-custom">
                    <TrustBadges className="justify-center" />
                </div>
            </div>

            {/* Why local matters */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 gold-underline">
                            Why &ldquo;Near Me&rdquo; Actually Matters With Electrical Work
                        </h2>
                        <p className="text-neutral-slate text-lg leading-relaxed mb-4">
                            Plenty of electrical companies advertise across all of Adelaide. That is fine for a booked
                            job weeks out. It is much less fine when your power has gone off on a Thursday night, or
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
                            EV charger on it. That is the difference between an electrician who works in your suburb and
                            one who is visiting it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Suburbs */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom">
                    <div className="max-w-3xl mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">
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
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">
                            What We Do Across the Area
                        </h2>
                        <p className="text-neutral-slate text-lg leading-relaxed">
                            Residential, small commercial, rentals and trade work for builders. Everything below is work
                            we do week in, week out across these suburbs.
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
                                    {service.name}
                                </h3>
                                <p className="text-sm text-neutral-slate leading-snug">{service.blurb}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-neutral-offwhite">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 gold-underline">
                        Common Questions About Finding an Electrician Near You
                    </h2>
                    <Accordion items={faqs} />
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-navy text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Need an Electrician Nearby?</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Licensed, insured, owner-operated and based in Wynn Vale. Free quotes across Adelaide&apos;s
                        north-east.
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
