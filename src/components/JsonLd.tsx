export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "School",
        "name": "Sri Gnanodaya Schools",
        "alternateName": ["Little Soldiers & Concept School", "Sri Gnanodaya Concept School"],
        "url": "https://srignanodaya.in",
        "logo": "https://srignanodaya.in/media/logo/sri-gnanodaya-school-logo.webp",
        "image": "https://srignanodaya.in/media/photos/home-playground.webp",
        "description": "Premier educational institution in Kanuru, Vijayawada offering world-class education with strong commitment towards academics at low cost.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "D.No: 2-75, Near Penthu Coast Church, Gandhi Bomma Centre",
            "addressLocality": "Kanuru",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "520007",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 16.4951,
            "longitude": 80.6876
        },
        "telephone": ["+919390017772", "+919397961714"],
        "email": "srignanodayaschool@gmail.com",
        "priceRange": "$",
        "sameAs": [
            "https://www.facebook.com/srignanodaya",
            "https://www.instagram.com/srignanodaya"
        ],
        "areaServed": {
            "@type": "City",
            "name": "Vijayawada"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Educational Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Little Soldiers (Baby Care to PP2)",
                        "description": "Foundational creative learning for toddlers and preschoolers."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Concept School (1st to 7th Class)",
                        "description": "Strong academic foundation with IIT/Medical oriented teaching."
                    }
                }
            ]
        },
        "keywords": "Best school in Kanuru, Low cost computer education Vijayawada, No donation school Vijayawada, Concept school Kanuru"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
