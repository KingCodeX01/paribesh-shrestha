export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Paribesh Shrestha",
    "alternateName": "KingCodeX01",
    "url": "https://paribeshshrestha.com.np",
    "sameAs": [
      "https://www.linkedin.com/in/paribesh-shrestha-092483259/",
      "https://github.com/KingCodeX01",
      "https://twitter.com/KingCodeX01"
    ],
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies",
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Tailwind CSS",
      "Web Development",
      "Software Engineering"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Available for freelance web development projects and full-time opportunities"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NP",
      "addressLocality": "Kathmandu"
    },
    "email": "contact@paribeshshrestha.com.np", // Update with actual email
    "telephone": "+977-XXXXXXXXXX" // Update with actual phone if desired
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Paribesh Shrestha Portfolio",
    "url": "https://paribeshshrestha.com.np",
    "description": "Portfolio website of Paribesh Shrestha - Full Stack Developer",
    "author": {
      "@type": "Person",
      "name": "Paribesh Shrestha"
    },
    "publisher": {
      "@type": "Person",
      "name": "Paribesh Shrestha"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://paribeshshrestha.com.np/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
