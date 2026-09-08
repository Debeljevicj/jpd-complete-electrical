import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronLeft, Calendar } from 'lucide-react';
import Button from '@/components/Button';
import ServiceIcon from '@/components/ServiceIcon';
import FeaturedJob from '@/components/FeaturedJob';
import {
    workCategories,
    workCategoryBySlug,
    jobsForCategory,
    servicesForCategory,
} from '@/lib/recent-work';

const SITE = 'https://jpdcompleteelectrical.com.au';

interface Props {
    params: { category: string };
}

export function generateStaticParams() {
    return workCategories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
    const category = workCategoryBySlug[params.category];
    if (!category) return { title: 'Not Found' };

    return {
        title: category.title,
        description: category.description,
        alternates: { canonical: `/recent-work/${category.slug}` },
        openGraph: {
            title: category.title,
            description: category.description,
            url: `${SITE}/recent-work/${category.slug}/`,
            type: 'website',
        },
    };
}

export default function RecentWorkCategoryPage({ params }: Props) {
    const category = workCategoryBySlug[params.category];
    if (!category) notFound();

    const jobs = jobsForCategory(category);
    const relatedServices = servicesForCategory(category);

    // The newest job leads the page and the rest sit in the grid below it. One
    // job shown properly, before through to finished, argues for the work far
    // better than the same job as a third of a row.
    const [featured, ...rest] = jobs;

    const listSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${SITE}/recent-work/${category.slug}/#collection`,
        name: category.name,
        description: category.description,
        url: `${SITE}/recent-work/${category.slug}/`,
        isPartOf: { '@id': `${SITE}/#website` },
        mainEntity: {
            '@type': 'ItemList',
            numberOfItems: jobs.length,
            itemListElement: jobs.map((job, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `${SITE}/blog/${job.slug}/`,
                name: job.title,
            })),
        },
    };

    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
            />

            <section className="bg-navy text-white py-14 md:py-20">
                <div className="container-custom">
                    <Link
                        href="/recent-work"
                        className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-wide"
                    >
                        <ChevronLeft className="w-4 h-4" /> All recent work
                    </Link>

                    <div className="flex items-start gap-4 max-w-3xl">
                        <div className="hidden sm:flex w-14 h-14 rounded-lg bg-white/10 border border-white/10 items-center justify-center shrink-0 text-gold">
                            <ServiceIcon name={category.icon} className="w-7 h-7" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                                {category.name}
                            </h1>
                            <p className="text-gray-300 leading-relaxed">{category.intro}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What the work involves, above the jobs rather than below them.
                Someone arriving from the home page card wants to know what this
                covers first. The jobs are the evidence for it, not the pitch. */}
            {relatedServices.length > 0 && (
                <section className="section-padding bg-white border-b border-gray-100">
                    <div className="container-custom">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 gold-underline">
                            What this covers
                        </h2>

                        {/* A single-service category can afford the full intro paragraph.
                            Four of them would be a wall of text, so a bundle gets the
                            one-line blurb for each instead. */}
                        {relatedServices.length === 1 ? (
                            <div className="max-w-3xl">
                                <p className="text-neutral-slate leading-relaxed mb-6">
                                    {relatedServices[0].intro}
                                </p>
                                <Link
                                    href={`/${relatedServices[0].slug}`}
                                    className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors"
                                >
                                    Full details on {relatedServices[0].name}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ) : (
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
                                {relatedServices.map((service) => (
                                    <Link
                                        key={service.slug}
                                        href={`/${service.slug}`}
                                        className="group bg-warm-50 rounded-xl p-6 border border-orange-100 hover:shadow-md hover:border-gold/30 transition-all flex flex-col"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-navy group-hover:bg-gold flex items-center justify-center mb-3 transition-colors duration-300">
                                            <ServiceIcon
                                                name={service.icon}
                                                className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300"
                                            />
                                        </div>
                                        <h3 className="font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-neutral-slate text-sm leading-relaxed flex-1">
                                            {service.blurb}
                                        </p>
                                        <span className="inline-flex items-center gap-1.5 text-navy font-bold text-sm mt-4 group-hover:text-gold transition-colors">
                                            Full details <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {jobs.length > 0 ? (
                <>
                    <section className="pt-10 md:pt-16 bg-white">
                        <div className="container-custom">
                            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3 gold-underline">
                                {jobs.length === 1 ? 'A job we have done' : 'Jobs we have done'}
                            </h2>
                            <p className="text-neutral-slate max-w-3xl">
                                {jobs.length === 1
                                    ? 'Written up with photos, so you can see the standard rather than take our word for it.'
                                    : `${jobs.length} written up with photos, so you can see the standard rather than take our word for it.`}
                            </p>
                        </div>
                    </section>

                    <FeaturedJob job={featured} serviceSlug={category.services[0]} />

                    {rest.length > 0 && (
                        <section className="pb-10 md:pb-16 bg-white">
                            <div className="container-custom">
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {rest.map((job) => (
                                        <Link
                                            key={job.slug}
                                            href={`/blog/${job.slug}`}
                                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col border border-gray-100"
                                        >
                                            <div className="relative h-48 w-full overflow-hidden">
                                                <Image
                                                    src={job.image}
                                                    alt={job.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex items-center gap-2 text-xs text-neutral-slate mb-3">
                                                    <Calendar className="w-3.5 h-3.5 text-gold" />
                                                    {job.date}
                                                </div>
                                                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                                                    {job.title}
                                                </h3>
                                                <p className="text-neutral-slate text-sm leading-relaxed flex-1">
                                                    {job.excerpt}
                                                </p>
                                                <span className="inline-flex items-center gap-2 text-navy font-bold text-sm mt-4 group-hover:text-gold transition-colors">
                                                    Read the job <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </>
            ) : (
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        {/* Nothing written up yet. Say so plainly rather than showing an
                            empty grid under a "Jobs we have done" heading. */}
                        <p className="text-neutral-slate max-w-2xl">
                            We haven't written up a job in this category yet. The service pages
                            above cover what the work involves, or give Justin a call and ask.
                        </p>
                    </div>
                </section>
            )}

            <section className="section-padding bg-neutral-offwhite border-t border-gray-100">
                <div className="container-custom text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
                        Got a job like one of these?
                    </h2>
                    <p className="text-neutral-slate mb-6">
                        Send through a couple of photos and Justin will come back to you with a
                        quote. No callout fee to quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button href="/contact" variant="primary">
                            Get a free quote
                        </Button>
                        <Button href="tel:0435006420" variant="outline">
                            Call 0435 006 420
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
