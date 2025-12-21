/**
 * Structured Data Generator pour SEO
 * Génère les schemas JSON-LD pour Google Rich Snippets
 */

export interface StructuredDataLocalBusiness {
  '@context': string;
  '@type': string;
  name: string;
  image: string;
  description: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  email: string;
  url: string;
  priceRange: string;
  aggregateRating: {
    '@type': string;
    ratingValue: string;
    ratingCount: string;
  };
  medicalSpecialty: string[];
  areaServed: {
    '@type': string;
    name: string;
  };
}

/**
 * Génère le structured data LocalBusiness pour Batignolles Kiné Sport
 * Utilisé pour les rich snippets Google (étoiles ⭐, avis, etc)
 */
export function generateLocalBusinessSchema(): StructuredDataLocalBusiness {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Batignolles Kiné Sport',
    image: 'https://batignolles-kine-sport.fr/images/logo.svg',
    description: 'Cabinet de kinésithérapie du sport spécialisé en rééducation, post-opératoire et réathlétisation à Paris 17 (Batignolles). Équipe de 3 kinés avec approche science-based.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6 rue des Batignolles',
      addressLocality: 'Paris',
      postalCode: '75017',
      addressCountry: 'FR',
    },
    telephone: '+33962434961',
    email: 'contact@batignolles-kine-sport.fr',
    url: 'https://batignolles-kine-sport.fr',
    priceRange: '€€',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '47',
    },
    medicalSpecialty: [
      'Sports Medicine',
      'Physical Therapy',
      'Orthopedic Rehabilitation',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Paris',
    },
  };
}

/**
 * Génère le structured data pour un article blog
 */
export function generateArticleSchema(
  title: string,
  description: string,
  slug: string,
  datePublished: string,
  author: string = 'Équipe Batignolles Kiné Sport'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: `https://batignolles-kine-sport.fr/images/blog/${slug}.jpg`,
    datePublished: datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://batignolles-kine-sport.fr',
    },
    url: `https://batignolles-kine-sport.fr/blog/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Batignolles Kiné Sport',
      logo: {
        '@type': 'ImageObject',
        url: 'https://batignolles-kine-sport.fr/images/logo.svg',
      },
    },
  };
}

/**
 * Génère le structured data FAQ pour la page homepage
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Génère le breadcrumb schema pour navigation SEO
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
