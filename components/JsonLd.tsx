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
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
