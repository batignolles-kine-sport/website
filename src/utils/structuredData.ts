/**
 * Structured Data Generator pour SEO
 * Génère les schemas JSON-LD pour Google Rich Snippets
 */

export interface StructuredDataLocalBusiness {
  '@context': string;
  '@type': string | string[];
  '@id'?: string;
  name: string;
  alternateName?: string;
  image: string;
  description: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  telephone: string;
  email: string;
  url: string;
  priceRange: string;
  medicalSpecialty: string[];
  areaServed: {
    '@type': string;
    name: string;
  };
  sameAs?: string[];
  openingHoursSpecification?: Array<{
    '@type': string;
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
}

/**
 * Génère le structured data LocalBusiness pour Batignolles Kiné Sport
 * Google utilisera automatiquement les avis de Google My Business (36 avis)
 * IMPORTANT : Ne pas inclure aggregateRating ici pour éviter les pénalités Google
 */
export function generateLocalBusinessSchema(): StructuredDataLocalBusiness {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
    '@id': 'https://batignolleskinesport.fr/#organization',
    name: 'Batignolles Kiné Sport',
    alternateName: 'BKS',
    image: 'https://batignolleskinesport.fr/images/logo.svg',
    description: 'Cabinet de kinésithérapie du sport spécialisé en rééducation, post-opératoire et réathlétisation à Paris 17 (Batignolles). Équipe de 3 kinés avec approche science-based.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6 rue des Batignolles',
      addressLocality: 'Paris',
      postalCode: '75017',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8822,
      longitude: 2.3244,
    },
    telephone: '+33962434961',
    email: 'contact@batignolleskinesport.fr',
    url: 'https://batignolleskinesport.fr',
    priceRange: '€€',
    medicalSpecialty: [
      'Sports Medicine',
      'Physical Therapy',
      'Orthopedic Rehabilitation',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Paris',
    },
    sameAs: [
      'https://www.doctolib.fr/cabinet-de-kinesitherapie/paris/batignolles-kine-sport',
      'https://www.instagram.com/batignolleskinesport/',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
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
