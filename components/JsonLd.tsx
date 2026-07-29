export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Electrician",
        "name": "JPD Complete Electrical",
        "image": "https://jpdcompleteelectrical.com.au/images/justin_main.jpg",
        "telephone": "0435 006 420",
        "email": "admin@jpdcompleteelectrical.com.au",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Adelaide",
            "addressRegion": "SA",
            "addressCountry": "AU"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -34.9285,
            "longitude": 138.6007
        },
        "url": "https://jpdcompleteelectrical.com.au",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "07:00",
                "closes": "17:00"
            }
        ],
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": -34.9285,
                "longitude": 138.6007
            },
            "geoRadius": "75000"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Electrical Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Switchboard Upgrades",
                        "description": "Upgrade outdated switchboards to modern, compliant installations with RCBOs and full safety protection to Australian Standards.",
                        "areaServed": "Adelaide, SA",
                        "provider": { "@type": "Electrician", "name": "JPD Complete Electrical" }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "RCD Testing",
                        "description": "RCD (safety switch) testing and compliance reporting for residential, commercial, multi-unit, and NDIS properties across Adelaide.",
                        "areaServed": "Adelaide, SA",
                        "provider": { "@type": "Electrician", "name": "JPD Complete Electrical" }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Thermal Imaging Inspections",
                        "description": "Thermal imaging scans of switchboards and circuits to detect loose connections, overheating, and fire risks before they become a problem.",
                        "areaServed": "Adelaide, SA",
                        "provider": { "@type": "Electrician", "name": "JPD Complete Electrical" }
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Electrical Maintenance",
                        "description": "Scheduled preventative electrical maintenance, safety inspections, and compliance testing for residential, commercial, and medical properties.",
                        "areaServed": "Adelaide, SA",
                        "provider": { "@type": "Electrician", "name": "JPD Complete Electrical" }
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
