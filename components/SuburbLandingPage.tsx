import Link from 'next/link';
import Image from 'next/image';
import { Phone, Gauge, ShieldCheck, Thermometer, CheckCircle2 } from 'lucide-react';
import TrustBadges from './TrustBadges';

interface SuburbLandingPageProps {
    suburb: string;
    intro: string;
    localNote: string;
    nearbyAreas: string[];
}

const suburbSlugs: Record<string, string> = {
    'Tea Tree Gully': '/electrician-tea-tree-gully',
    'Modbury': '/electrician-modbury',
    'Wynn Vale': '/electrician-wynn-vale',
    'Golden Grove': '/electrician-golden-grove',
};

const services = [
    {
        icon: Gauge,
        title: 'Switchboard Upgrades',
        description: 'Modern, compliant switchboards with full RCD/RCBO protection to Australian Standards.',
    },
    {
        icon: ShieldCheck,
        title: 'RCD (Safety Switch) Testing',
        description: 'Scheduled RCD testing and compliance reporting for homes, rentals, and small businesses.',
    },
    {
        icon: Thermometer,
        title: 'Thermal Imaging Inspections',
        description: 'Thermal scans of switchboards and circuits to catch overheating and loose connections early.',
    },
    {
        icon: CheckCircle2,
        title: 'General Electrical Maintenance',
        description: 'Repairs, powerpoints, lighting, fans, and everyday electrical work, done properly.',
    },
];

export default function SuburbLandingPage({ suburb, intro, localNote, nearbyAreas }: SuburbLandingPageProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        name: `JPD Complete Electrical - ${suburb}`,
        image: 'https://jpdcompleteelectrical.com.au/images/justin_main.jpg',
        telephone: '0435 006 420',
        email: 'admin@jpdcompleteelectrical.com.au',
        address: {
            '@type': 'PostalAddress',
            addressLocality: suburb,
            addressRegion: 'SA',
            addressCountry: 'AU',
        },
        areaServed: [suburb, ...nearbyAreas],
        priceRange: '$$',
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {/* Hero */}
            <section className="bg-navy text-white py-16 md:py-20">
                <div className="container-custom">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 mb-4">
                            <span className="w-2 h-2 bg-gold rounded-full" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-gold">Local to {suburb}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            Electrician in {suburb}, Adelaide
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                            {intro}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="btn btn-gold text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3">
                                Get a Free Quote
                            </Link>
                            <a href="tel:0435006420" className="btn btn-outline border-white text-white hover:bg-white hover:text-navy text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3 inline-flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" />
                                Call 0435 006 420
                            </a>
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

            {/* Local note + services */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">Servicing {suburb} &amp; Surrounds</h2>
                        <p className="text-neutral-slate text-lg leading-relaxed">
                            {localNote}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {services.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="card">
                                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-3">
                                    <Icon className="w-6 h-6 text-gold" />
                                </div>
                                <h3 className="font-bold text-navy mb-1">{title}</h3>
                                <p className="text-sm text-neutral-slate leading-snug">{description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-neutral-offwhite rounded-xl p-6 md:p-8">
                        <h3 className="font-bold text-navy mb-3">Also servicing nearby:</h3>
                        <div className="flex flex-wrap gap-2">
                            {nearbyAreas.map((area) => {
                                const href = suburbSlugs[area];
                                return href ? (
                                    <Link
                                        key={area}
                                        href={href}
                                        className="px-3 py-1 bg-white rounded-full border border-gray-200 text-sm text-navy font-medium hover:border-gold hover:text-gold transition-colors"
                                    >
                                        {area}
                                    </Link>
                                ) : (
                                    <span key={area} className="px-3 py-1 bg-white rounded-full border border-gray-200 text-sm text-neutral-slate">
                                        {area}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured work photo */}
            <section className="bg-neutral-offwhite pb-12 md:pb-16">
                <div className="container-custom">
                    <div className="relative h-[260px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/switchboard_fault_finding.jpg"
                            alt={`Electrical switchboard work near ${suburb}, Adelaide`}
                            fill
                            sizes="100vw"
                            loading="lazy"
                            className="object-cover"
                            style={{ objectPosition: 'center 20%' }}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-navy text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Need an Electrician in {suburb}?</h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Licensed, insured, and locally based — get a free quote today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn btn-gold text-lg px-8 py-4">
                            Get a Free Quote
                        </Link>
                        <a href="tel:0435006420" className="btn bg-white text-navy hover:bg-neutral-offwhite text-lg px-8 py-4">
                            Call 0435 006 420
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
