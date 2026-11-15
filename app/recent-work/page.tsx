import type { Metadata } from 'next';
import Link from 'next/link';
import RecentWorkExplorer from '@/components/RecentWorkExplorer';
import ClosingCTA from '@/components/ClosingCTA';
import { workCategories, jobsForCategory, latestJobs, jobPlace, MAP_PLACES } from '@/lib/recent-work';
import { jobReports } from '@/data/job-reports';
import { shareMeta } from '@/lib/share';

export const metadata: Metadata = {
    title: 'Recent Work | Electrical Jobs Across Adelaide | JPD',
    description:
        'Real electrical jobs across Adelaide, written up with photos: switchboard upgrades, EV chargers, renovations, fault finding, testing and everyday work.',
    alternates: { canonical: '/recent-work' },
    ...shareMeta({
        title: 'Recent Work | JPD Complete Electrical',
        description: 'Real electrical jobs across Adelaide, written up with photos. Browse by the kind of work.',
        path: '/recent-work/',
    }),
};

// Short names for the filter row, where the full category names don't fit a phone.
const TAB_LABELS: Record<string, string> = {
    'switchboard-upgrades': 'Switchboards',
    'service-and-maintenance': 'Maintenance',
    'ev-charger-installation': 'EV chargers',
    'renovations-and-extensions': 'Renovations',
    'fault-finding-and-emergency': 'Faults',
    'everyday-electrical': 'Everyday',
};

export default function RecentWorkIndexPage() {
    const categories = workCategories.map((category) => ({
        category,
        jobs: jobsForCategory(category),
    }));

    const jobs = latestJobs(jobReports.length).map((job) => ({
        slug: job.slug,
        title: job.title,
        image: job.image,
        place: jobPlace(job),
        categories: categories.filter(({ jobs: list }) => list.some((j) => j.slug === job.slug)).map(({ category }) => category.slug),
    }));

    return (
        <div className="bg-white">
            <section className="bg-neutral-offwhite">
                <div className="container-custom py-10 md:py-16">
                    <RecentWorkExplorer
                        jobs={jobs}
                        mapped={MAP_PLACES}
                        categories={categories.map(({ category }) => ({
                            slug: category.slug,
                            label: TAB_LABELS[category.slug] ?? category.name,
                            name: category.slug === 'everyday-electrical' ? 'Everyday' : category.name,
                        }))}
                    />
                </div>
            </section>

            {/* Plain links to each archive page. The filter above works in place;
                these are the pages themselves, for anyone (and any crawler) that
                wants the full write-up of a kind of work. */}
            <section className="border-t border-navy/10 bg-white">
                <div className="container-custom py-10 md:py-14">
                    <h2 className="font-heading text-xl font-semibold text-navy">Browse by kind of work</h2>
                    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                        {categories.map(({ category, jobs: list }) => (
                            <li key={category.slug}>
                                <Link
                                    href={`/recent-work/${category.slug}`}
                                    className="text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark"
                                >
                                    {category.name}
                                </Link>{' '}
                                <span className="text-neutral-slate">
                                    {list.length} {list.length === 1 ? 'job' : 'jobs'}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <ClosingCTA />
        </div>
    );
}
