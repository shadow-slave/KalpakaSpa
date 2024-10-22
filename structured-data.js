// structured-data.js
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kalpaka Spa",
    "image": "./media/KALPAKA.png",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Inside of Palolem Beach Resort",
        "addressLocality": "Palolem",
        "addressRegion": "Goa",
        "postalCode": "403702",
        "addressCountry": "IN"
    },
    "url": "https://kalpakaspa.onrender.com",
    "telephone": "+919497094115",
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 09:00-20:00"
};

const deepTissueMassageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Deep Tissue Massage",
    "provider": {
        "@type": "Spa",
        "name": "Kalpaka Spa",
        "image": "./media/Deep-Tissue.jpg",
        "priceRange": "₹2500 to ₹4000",
        "url": "https://kalpakaspa.onrender.com/deep-tissue"
    },
    "description": "Relieve muscle tension with our Deep Tissue Massage therapy."
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Deep Tissue Massage",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Kalpaka Spa",
        "image": "https://kalpakaspa.onrender.com/media/Deep-tissue-Massage-Patnem-Canacona-Goa-.jpg",
        "priceRange": "₹2000 to ₹3000",
        "url": "https://kalpakaspa.onrender.com/media/Deep-tissue-Massage-Patnem-Canacona-Goa-.jpg"
    },
    "description": "Relieve muscle tension with our Deep Tissue Massage therapy."
};

// Create script tags and append to head
const addStructuredData = (data) => {
    const script = document.createElement('script');
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
};

// Add schemas to the head
addStructuredData(localBusinessSchema);
addStructuredData(deepTissueMassageSchema);
addStructuredData(schemaData);
