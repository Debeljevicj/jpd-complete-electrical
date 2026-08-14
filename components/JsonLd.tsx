import { services } from '@/data/services';
import { suburbs } from '@/data/suburbs';

const SITE = 'https://jpdcompleteelectrical.com.au';

/**
 * Canonical business entity for the whole site.
 *
 * Two things here matter more than they look:
 *
 * 1. The location. This previously claimed addressLocality "Adelaide" with the
 *    CBD's coordinates (-34.9285, 138.6007). That is roughly 20km from where the
 *    business actually operates, and it was the only structured location signal
 *    Google had. Every suburb page was arguing for the north-east while the
 *    business entity pointed at the CBD.
 *
 * 2. sameAs. There is another "JPD Electrical Solutions" trading in Adelaide, so
 *    the brand name alone is ambiguous to Google. Linking the verified social
 *    profiles ties this site to the right entity.
 */
export default function JsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Electrician',
        '@id': `${SITE}/#business`,
        name: 'JPD Complete Electrical',
        alternateName: 'JPD Complete Electrical Adelaide',
        description:
            'Owner-operated, licensed electrical contractor based in Wynn Vale, servicing Adelaide. Switchboard upgrades, EV chargers, lighting, safety switch testing and emergency callouts.',
        url: SITE,
        image: `${SITE}/images/justin_main.webp`,
        logo: `${SITE}/Stacked Blue Logo Transparent Background.png`,
        telephone: '+61435006420',
        email: 'admin@jpdcompleteelectrical.com.au',
        priceRange: '$$',
        currenciesAccepted: 'AUD',
        founder: { '@type': 'Person', name: 'Justin Debeljevic' },
        // Distinguishes this business from the similarly named JPD Electrical
        // Solutions also trading in Adelaide.
        sameAs: [
            'https://www.facebook.com/profile.php?id=61567696480436',
            'https://www.instagram.com/jpdcompleteelectrical/',
        ],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Wynn Vale',
            addressRegion: 'SA',
            postalCode: '5127',
            addressCountry: 'AU',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -34.7994,
            longitude: 138.6871,
        },
        hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Electrical Contractor Licence',
            identifier: 'PGE296191',
            recognizedBy: {
                '@type': 'Organization',
                name: 'Government of South Australia, Consumer and Business Services',
            },
        },
        memberOf: {
            '@type': 'Organization',
            name: 'National Electrical and Communications Association (NECA)',
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '07:00',
                closes: '17:00',
            },
        ],
        // Named suburbs first, since a specific Place is a stronger signal than a
        // radius, then the wider metro because JPD does service all of Adelaide.
        areaServed: [
            ...suburbs.map((suburb) => ({
                '@type': 'Place',
                name: `${suburb.name}, SA ${suburb.postcode}`,
            })),
            {
                '@type': 'GeoCircle',
                geoMidpoint: { '@type': 'GeoCoordinates', latitude: -34.7994, longitude: 138.6871 },
                geoRadius: '50000',
            },
        ],
        // Driven from the service data so this cannot drift out of sync with the
        // pages, which is what happened to the previous hand-written list of four.
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Electrical Services',
            itemListElement: services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.name,
                    description: service.blurb,
                    url: `${SITE}/${service.slug}/`,
                    provider: { '@id': `${SITE}/#business` },
                },
            })),
        },
    };

    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: SITE,
        name: 'JPD Complete Electrical',
        publisher: { '@id': `${SITE}/#business` },
        inLanguage: 'en-AU',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, website]) }}
        />
    );
}
