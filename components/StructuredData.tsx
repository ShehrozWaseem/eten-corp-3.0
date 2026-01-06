export default function StructuredData() {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Eten Corporation",
      "description": "Premium meat distributor specializing in beef, chicken, and turkey",
      "url": "https://eten-corp.com/",
      "logo": "https://eten-corp.com/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-437-980-6750",
        "contactType": "Customer Service",
        "email": "info@etencorporation.com",
        "areaServed": ["CA", "US"],
        "availableLanguage": "English"
      },
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Toronto",
          "addressRegion": "ON",
          "addressCountry": "CA"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "US"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/eten-corporation",
        "https://twitter.com/etencorp"
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    );
  }