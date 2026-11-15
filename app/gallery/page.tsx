import { Metadata } from 'next';
import GalleryContent, { type GalleryPhoto } from './GalleryContent';
import { shareMeta } from '@/lib/share';
import { jobReports } from '@/data/job-reports';
import { latestJobs, jobPlace, workCategories, jobsForCategory } from '@/lib/recent-work';

export const metadata: Metadata = {
    title: 'Project Gallery | JPD Complete Electrical Adelaide',
    description: 'View our portfolio of residential and commercial electrical projects across Adelaide. High-quality workmanship in lighting, switchboards, and more.',
    alternates: {
        canonical: '/gallery',
    },
    ...shareMeta({
        title: 'Project Gallery | JPD Complete Electrical Adelaide',
        description: 'View our portfolio of residential and commercial electrical projects across Adelaide. High-quality workmanship in lighting, switchboards, and more.',
        path: '/gallery/',
    }),
};

// The filter names, in the order of the six kinds of work.
const KIND: Record<string, string> = {
    'switchboard-upgrades': 'Switchboards',
    'service-and-maintenance': 'Testing & maintenance',
    'ev-charger-installation': 'EV chargers',
    'renovations-and-extensions': 'Renovations',
    'fault-finding-and-emergency': 'Faults',
    'everyday-electrical': 'Lighting, power & more',
};

/** The kind of work a job is mainly about: the category holding its first service. */
const kindOfJob = (slug: string) => {
    const category = workCategories.find((c) => jobsForCategory(c).some((j) => j.slug === slug && c.services.includes(j.services[0])));
    return KIND[category?.slug ?? 'everyday-electrical'];
};

// The project photos the gallery had before the write-ups were added. They
// have no article behind them, so they open on their own.
const older: GalleryPhoto[] = [
    ['Solar System Installation', 'solar_system_main', 'Lighting, power & more'],
    ['Switchboard Upgrade', 'residential_switchboard_upgrade_1', 'Switchboards'],
    ['Shed Lighting', 'shed_lighting', 'Lighting, power & more'],
    ['Bathroom Renovation', 'bathroom_renovation', 'Renovations'],
    ['CCTV Installation', 'cctv_installation', 'Lighting, power & more'],
    ['EV Charger Installation', 'commercial_ev_charger', 'EV chargers'],
    ['Commercial TV Ceiling Mount', 'commercial_tv_wall_mount', 'Lighting, power & more'],
    ['Medical Examination Lighting', 'medical_examination_lighting_2', 'Lighting, power & more'],
    ['Perimeter LED Lighting Upgrade', 'commercial_perimeter_lighting_1', 'Lighting, power & more'],
    ['Perimeter LED Lighting, Night View', 'commercial_perimeter_lighting_2', 'Lighting, power & more'],
    ['Kitchen LED Strip Lighting', 'kitchen_led_strip', 'Lighting, power & more'],
    ['LED Backlit Mirror', 'led_backlit_mirror', 'Lighting, power & more'],
    ['Shed Power Installation', 'shed_power', 'Lighting, power & more'],
    ['Exterior Feature Lighting', 'exterior_feature_lighting', 'Lighting, power & more'],
    ['Feature Wall Lighting', 'feature_wall_lighting', 'Lighting, power & more'],
    ['New Powerpoint Installation', 'new_powerpoint', 'Lighting, power & more'],
    ['Shed Switchboard', 'shed_switchboard', 'Switchboards'],
    ['6.6kW Solar System', 'solar_system_6kw', 'Lighting, power & more'],
    ['Switchboard Upgrade', 'residential_switchboard_upgrade_2', 'Switchboards'],
    ['Pool Switchboard & Power', 'residential_pool_switchboard', 'Switchboards'],
].map(([title, file, kind]) => ({ src: `/images/${file}.webp`, title, alt: title, kind }));

export default function GalleryPage() {
    const jobs = latestJobs(jobReports.length);

    // Each job's lead photo first, newest job first, so the top of the gallery
    // is one photo from every job rather than five from the latest one. Then
    // the older project photos, then the rest of each job's photos.
    const leads: GalleryPhoto[] = [];
    const rest: GalleryPhoto[] = [];
    for (const job of jobs) {
        const shared = {
            kind: kindOfJob(job.slug),
            place: jobPlace(job),
            job: { href: `/blog/${job.slug}`, title: job.title },
        };
        leads.push({ src: job.image, title: job.title, alt: job.title, ...shared });
        for (const photo of job.gallery ?? []) {
            rest.push({ src: photo.src, title: photo.caption ?? photo.alt, alt: photo.alt, ...shared });
        }
    }

    // One tile per image file: a job's lead photo is often also in its gallery.
    const seen = new Set<string>();
    const photos = [...leads, ...older, ...rest].filter((photo) => {
        if (seen.has(photo.src)) return false;
        seen.add(photo.src);
        return true;
    });

    return <GalleryContent photos={photos} kinds={Object.values(KIND)} jobCount={jobs.length} />;
}
