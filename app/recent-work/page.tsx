import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';
import ServiceIcon from '@/components/ServiceIcon';
import SectionHeading from '@/components/SectionHeading';
import { workCategories, jobsForCategory } from '@/lib/recent-work';

const SITE = 'https://jpdcompleteelectrical.com.au';

export const metadata: Metadata = {
    title: 'Recent Work | Electrical Jobs Across Adelaide | JPD',
    description:
        'Real electrical jobs across Adelaide, written up with photos: switchboard upgrades, EV chargers, renovations, fault finding, testing and everyday work.',
    alternates: { canonical: '/recent-work' },
    openGraph: {
        title: 'Recent Work | JPD Complete Electrical',
        description:
            'Real electrical jobs across Adelaide, written up with photos. Browse by the kind of work.',
        url: `${SITE}/recent-work/`,
        type: 'website',
    },
};

export default function RecentWorkIndexPage() {
    const categories = workCategories.map((category) => ({
        category,
        jobs: jobsForCategory(category),
    }));

    const totalJobs = new Set(categories.flatMap(({ jobs }) => jobs.map((j) => j.slug))).size;

    return (
        <div className="bg-white">
            <section className="bg-navy text-white py-14 md:py-20">
                <div className="container-custom max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        Recent work
                    </h1>
                    <p className="text-gray-300 leading-relaxed">
                        {totalJobs} real jobs from around Adelaide, written up with photos of what
                        was there before and what it looked like when we left. Pick the kind of
                        work you are after.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map(({ category, jobs }) => (
                            <Link
                                key={category.slug}
                                href={`/recent-work/${category.slug}`}
                                className="group bg-warm-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg hover:border-gold/30 transition-all flex flex-col"
                            >
                                <div className="w-12 h-12 rounded-lg bg-navy group-hover:bg-gold flex items-center justify-center mb-4 transition-colors duration-300">
                                    <ServiceIcon
                                        name={category.icon}
                                        className="w-6 h-6 text-gold group-hover:text-navy transition-colors duration-300"
                                    />
                                </div>
                                <h2 className="text-xl font-bold text-navy mb-2">{category.name}</h2>
                                <p className="text-neutral-slate text-sm leading-relaxed flex-1">
                                    {category.blurb}
                                </p>
                                <span className="inline-flex items-center gap-2 text-navy font-bold text-sm mt-4 group-hover:text-gold transition-colors">
                                    {jobs.length > 0
                                        ? `View ${jobs.length} ${jobs.length === 1 ? 'job' : 'jobs'}`
                                        : 'See what this covers'}
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-neutral-offwhite border-t border-gray-100">
                <div className="container-custom text-center max-w-2xl mx-auto">
                    <SectionHeading centered>Want yours on this page?</SectionHeading>
                    <p className="text-neutral-slate mb-6">
                        Send through a couple of photos of what you need done and Justin will come
                        back to you with a quote.
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
