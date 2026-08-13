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

export interface Service {
    /** URL path, without leading slash. */
    slug: string;
    /** Grid-card and schema name, e.g. "Switchboard Upgrades". */
    name: string;
    icon: ServiceIconName;
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
