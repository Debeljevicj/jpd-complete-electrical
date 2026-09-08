import { jobReports, type JobReport } from '@/data/job-reports';
import { serviceBySlug } from '@/data/services';
import type { ServiceIconName } from '@/components/ServiceIcon';

/**
 * The job-post archives behind the home page's "Our Services" grid.
 *
 * A category is a bundle of service slugs, not a single one. "Service &
 * Maintenance" is a thing customers ask for by that name, but on the site it
 * is spread across RCD testing, smoke alarms, test and tag and thermal
 * imaging. Grouping them here means the card can use the customer's words
 * while still collecting every job written up under any of them.
 *
 * Ordered by what the business wants to win, not by how many jobs exist.
 */
export interface WorkCategory {
    slug: string;
    /** Card and page title, in the words a customer would use. */
    name: string;
    icon: ServiceIconName;
    /** Home page card copy. */
    blurb: string;
    /** Archive page intro. */
    intro: string;
    title: string;
    description: string;
    /** Service page slugs this category collects jobs from. Primary first. */
    services: string[];
}

export const workCategories: WorkCategory[] = [
    {
        slug: 'switchboard-upgrades',
        name: 'Switchboard Upgrades',
        icon: 'switchboard',
        blurb:
            'Old ceramic fuses, asbestos panels and boards with no room left. Replaced with a compliant board and full RCD protection.',
        intro:
            'Switchboards are the job we get called for most, and the one where the difference between a tidy install and a rushed one shows up years later. Here are real boards we have replaced across Adelaide, with photos before, during and after.',
        title: 'Switchboard Upgrade Jobs in Adelaide | JPD',
        description:
            'Real switchboard upgrades across Adelaide: asbestos panels, ceramic fuses and full boards replaced with compliant RCD protection. Photos and details of each job.',
        services: ['switchboard-upgrade-adelaide'],
    },
    {
        slug: 'service-and-maintenance',
        name: 'Service & Maintenance',
        icon: 'rcd',
        blurb:
            'RCD testing, smoke alarms, emergency lighting, test and tag and thermal imaging. Scheduled compliance for homes and businesses.',
        intro:
            'The testing and compliance work that keeps a property safe and its paperwork straight: safety switches, smoke alarms, test and tag, and thermal imaging on switchboards before a fault becomes a failure.',
        title: 'Electrical Testing & Maintenance Jobs in Adelaide | JPD',
        description:
            'RCD testing, smoke alarm compliance, test and tag and thermal imaging jobs across Adelaide. Real maintenance and compliance work, documented.',
        services: [
            'rcd-testing-safety-switches-adelaide',
            'smoke-alarm-installation-adelaide',
            'test-and-tag-adelaide',
            'thermal-imaging-adelaide',
        ],
    },
    {
        slug: 'ev-charger-installation',
        name: 'EV Charger Installation',
        icon: 'ev',
        blurb:
            'Home and workplace chargers installed properly: load checked, board upgraded if it needs it, and set up to run on cheap power.',
        intro:
            'An EV charger is only as good as the supply behind it. These jobs cover the whole thing, from checking whether the switchboard can carry the load to getting the charger running on off-peak rates.',
        title: 'EV Charger Installation Jobs in Adelaide | JPD',
        description:
            'Real EV charger installations across Adelaide: load assessment, switchboard capacity, and chargers set up to run on off-peak power.',
        services: ['ev-charger-installation-adelaide'],
    },
    {
        slug: 'renovations-and-extensions',
        name: 'Renovations & Extensions',
        icon: 'renovation',
        blurb:
            'Rough-in through to fit-off. Kitchens, extensions and whole-house rewires, coordinated around the other trades.',
        intro:
            'Renovation work where the electrical has to fit around everyone else on site. These jobs run from rough-in to fit-off, and show what the wiring behind a finished room actually looks like.',
        title: 'Renovation Electrical Jobs in Adelaide | JPD',
        description:
            'Renovation and extension electrical work across Adelaide: rough-in to fit-off, kitchens, rewires and new builds, coordinated with the other trades.',
        services: ['renovation-electrician-adelaide', 'electrician-for-builders-adelaide'],
    },
    {
        slug: 'fault-finding-and-emergency',
        name: 'Fault Finding & Emergency',
        icon: 'emergency',
        blurb:
            'Power out, a breaker that won\'t stay in, or something burning. Diagnosed and made safe, then fixed properly.',
        intro:
            'Faults don\'t announce what they are. These are jobs where the work was finding the problem first: tripping circuits, dead power, and things that had been quietly failing for years.',
        title: 'Electrical Fault Finding Jobs in Adelaide | JPD',
        description:
            'Real fault finding and emergency electrical jobs across Adelaide: tripping safety switches, dead circuits and faults traced to the source.',
        services: ['emergency-electrician-adelaide'],
    },
    {
        slug: 'everyday-electrical',
        name: 'Much More',
        icon: 'downlight',
        blurb:
            'Downlights, powerpoints, ceiling and exhaust fans, feature lighting, ovens and cooktops. The everyday jobs, done properly.',
        intro:
            'The bread-and-butter work: downlights, powerpoints, fans, feature lighting and appliance connections. Small jobs, but the ones people notice every day.',
        title: 'Downlights, Powerpoints & Fan Installation Jobs in Adelaide | JPD',
        description:
            'Everyday electrical jobs across Adelaide: downlights, powerpoints, ceiling and exhaust fans, feature lighting, ovens and cooktops.',
        services: [
            'downlight-installation-adelaide',
            'powerpoint-installation-adelaide',
            'ceiling-fan-installation-adelaide',
            'feature-lighting-led-strip-adelaide',
            'oven-cooktop-installation-adelaide',
        ],
    },
];

export const workCategoryBySlug = Object.fromEntries(
    workCategories.map((c) => [c.slug, c])
) as Record<string, WorkCategory>;

/**
 * Every job written up under any of a category's services, newest first.
 *
 * A job that spans three services appears in each category those services
 * belong to, which is correct: someone browsing renovations and someone
 * browsing powerpoints both want to see the renovation that involved twelve
 * new powerpoints. Deduped by slug so a job covering two services in the same
 * category is not listed twice.
 */
export function jobsForCategory(category: WorkCategory): JobReport[] {
    const wanted = new Set(category.services);
    return jobReports
        .filter((job) => job.services.some((s) => wanted.has(s)))
        .slice()
        .sort((a, b) => (b.updated ?? b.date).localeCompare(a.updated ?? a.date));
}

/** The service pages a category covers, for the "read more about" links. */
export function servicesForCategory(category: WorkCategory) {
    return category.services
        .map((slug) => serviceBySlug[slug])
        .filter(Boolean)
        .map(({ slug, name, blurb }) => ({ slug, name, blurb }));
}

/**
 * The most recently written-up jobs, for the home page.
 *
 * Replaces three hardcoded "Featured Projects" cards that showed a stock photo
 * and a paragraph and linked nowhere. These are real write-ups, so the card can
 * take you to the job.
 */
export function latestJobs(count = 3): JobReport[] {
    return jobReports
        .slice()
        .sort((a, b) => (b.updated ?? b.date).localeCompare(a.updated ?? a.date))
        .slice(0, count);
}

/** Categories that have at least one job written up, so no card leads to an empty page. */
export const populatedWorkCategories = workCategories.filter(
    (c) => jobsForCategory(c).length > 0
);
