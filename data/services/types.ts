import type { ServiceIconName } from '@/components/ServiceIcon';

export interface ServiceFaq {
    question: string;
    answer: string;
}

export interface ServiceSection {
    heading: string;
    body: string[];
    bullets?: string[];
}

/**
 * A real job photo for the service's grid card and page hero. Only photos
 * already published on the site. A service without one is left off the photo
 * grids and gets a text link under them instead.
 */
export interface ServicePhoto {
    src: string;
    alt: string;
    /** CSS object-position the crop centres on. Defaults to the middle. */
    focus?: string;
    /** Shown on the photo when the job's suburb is already public. */
    suburb?: string;
}

export interface Service {
    /** URL path, without leading slash. */
    slug: string;
    /** Grid-card and schema name, e.g. "Switchboard Upgrades". */
    name: string;
    icon: ServiceIconName;
    photo?: ServicePhoto;
    /** One line, used on suburb pages and the services index. */
    blurb: string;
    title: string;
    description: string;
    h1: string;
    /** Hero paragraph. */
    intro: string;
    sections: ServiceSection[];
    /** Honest "what moves the number" list, in place of made-up prices. */
    priceFactors: string[];
    faqs: ServiceFaq[];
    /** Slugs of related services, for internal linking. */
    related: string[];
}
