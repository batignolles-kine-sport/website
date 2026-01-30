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
  hasMap: string;
  telephone: string;
  email: string;
  url: string;
  priceRange: string;
  knowsAbout: string[];
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
  acceptsReservations?: boolean;
  paymentAccepted?: string;
}

/**
 * Génère le structured data LocalBusiness pour Batignolles Kiné Sport
 * Google utilisera automatiquement les avis de Google My Business via le lien sameAs/hasMap
 * IMPORTANT : Ne pas hardcoder aggregateRating sauf si les avis sont affichés sur le site via API
 */
export function generateLocalBusinessSchema(): StructuredDataLocalBusiness {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness', 'Physiotherapy'],
    '@id': `${typeof window !== 'undefined' ? window.location.origin : 'https://batignolleskinesport.fr'}/#organization`,
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
      latitude: 48.8833,
      longitude: 2.3212,
    },
    hasMap: 'https://www.google.com/maps?cid=5317377546682704321',
    telephone: '+33962434961',
    email: 'contact@batignolleskinesport.fr',
    url: 'https://batignolleskinesport.fr',
    priceRange: '€€',
    knowsAbout: [
      'Médecine du sport',
      'Kinésithérapie',
      'Rééducation orthopédique',
      'Thérapie manuelle',
      'Réathlétisation'
    ],
    areaServed: {
      '@type': 'City',
      name: 'Paris',
    },
    sameAs: [
      'https://www.doctolib.fr/cabinet-de-kinesitherapie/paris/batignolles-kine-sport',
      'https://www.instagram.com/batignolleskinesport/',
      'https://www.google.com/maps?cid=5317377546682704321' // Critical for connecting reviews
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '21:00',
      },
    ],
    acceptsReservations: true,
    paymentAccepted: 'Cash, Credit Card, Carte Vitale',
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
    image: `https://batignolleskinesport.fr/images/blog/${slug}.jpg`,
    datePublished: datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://batignolleskinesport.fr',
    },
    url: `https://batignolleskinesport.fr/blog/${slug}`,
    publisher: {
      '@type': 'Organization',
      '@id': 'https://batignolleskinesport.fr/#organization',
      name: 'Batignolles Kiné Sport',
      logo: {
        '@type': 'ImageObject',
        url: 'https://batignolleskinesport.fr/images/logo.svg',
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

/**
 * Génère le Person schema pour les praticiens
 * Améliore les rich snippets sur la page équipe
 */
export interface PersonSchemaInput {
  name: string;
  title: string;
  image: string;
  doctolibUrl: string;
  rpps?: string;
  diploma?: string;
  specialties?: string[];
}

export function generatePersonSchema(person: PersonSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://batignolleskinesport.fr/equipe#${person.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: person.name,
    jobTitle: person.title,
    image: person.image,
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://batignolleskinesport.fr/#organization',
      name: 'Batignolles Kiné Sport',
    },
    sameAs: [person.doctolibUrl],
    ...(person.rpps && {
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'RPPS',
        value: person.rpps,
      },
    }),
    ...(person.diploma && { hasCredential: person.diploma }),
    ...(person.specialties && { knowsAbout: person.specialties }),
  };
}

/**
 * Génère le Service schema pour les pages services
 */
export interface ServiceSchemaInput {
  name: string;
  description: string;
  serviceId: string;
  features?: string[];
}

export function generateServiceSchema(service: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `https://batignolleskinesport.fr/services/${service.serviceId}`,
    name: service.name,
    description: service.description,
    url: `https://batignolleskinesport.fr/services/${service.serviceId}`,
    procedureType: 'Physiotherapy',
    provider: {
      '@type': 'Organization',
      '@id': 'https://batignolleskinesport.fr/#organization',
      name: 'Batignolles Kiné Sport',
    },
    ...(service.features && {
      additionalProperty: service.features.map(f => ({
        '@type': 'PropertyValue',
        name: 'Feature',
        value: f,
      }))
    }),
  };
}

/**
 * Génère le HowTo schema pour les articles tutoriels
 * Améliore les rich snippets avec les étapes sur Google
 */
export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export function generateHowToSchema(
  title: string,
  description: string,
  steps: HowToStep[],
  estimatedTime?: string // e.g. "PT30M" for 30 minutes in ISO 8601 format
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: description,
    ...(estimatedTime && { totalTime: estimatedTime }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };
}

