import React from 'react';
import { Head } from 'vite-react-ssg';
import { TeamMember } from '../../types';
import {
  ADDRESS,
  PHONE,
  EMAIL,
  DOCTOLIB_URL,
  INSTAGRAM_URL,
  GOOGLE_MAPS_URL,
  HERO_IMAGE_URL,
} from '../../utils/constants';
import { formatPhoneForSchema } from '../../utils/helpers';

// Minimum number of reviews required to display aggregate rating
const MIN_REVIEWS_FOR_AGGREGATE_RATING = 10;

// Production domain for schema markup
const PRODUCTION_DOMAIN = 'https://batignolleskinesport.fr';

interface PractitionerData {
  name: string;
  jobTitle: string;
  knowsAbout: string[];
  image: string;
  telephone?: string;
  doctolibUrl?: string;
}

interface ClinicSchemaOptions {
  domain: string;
  practitioners?: PractitionerData[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

// Schema types
interface AggregateRating {
  '@type': 'AggregateRating';
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

interface ClinicSchema {
  '@context': string;
  '@type': string[];
  '@id': string;
  name: string;
  alternateName: string;
  description: string;
  knowsAbout: string[];
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  url: string;
  telephone: string;
  email: string;
  image: string;
  priceRange: string;
  openingHoursSpecification: Array<{
    '@type': string;
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  sameAs: string[];
  knowsAbout: string[];
  acceptsReservations?: boolean;
  paymentAccepted?: string;
  aggregateRating?: AggregateRating;
}

/**
 * Generates a comprehensive JSON-LD schema for a medical/physiotherapy clinic
 * Combines LocalBusiness and MedicalBusiness types for maximum SEO impact
 */
export function generateClinicSchema(options: ClinicSchemaOptions) {
  const { domain, practitioners = [], aggregateRating } = options;

  // Main organization/clinic schema
  const clinicSchema: ClinicSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness', 'Physiotherapy'],
    '@id': `${domain}/#organization`,
    name: 'BKS - Batignolles Kiné Sport',
    alternateName: 'Batignolles Kiné Sport',
    description:
      'Cabinet de kinésithérapie spécialisé en kiné du sport et rééducation à Paris 17e, près du Parc des Batignolles, Métro Rome et Église des Batignolles. Expertise en traumatologie sportive, rééducation du coureur et réathlétisation.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6 rue des Batignolles',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      postalCode: '75017',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8833,
      longitude: 2.3212,
    },
    areaServed: {
      '@type': 'City',
      name: 'Batignolles, Paris 17',
    },
    url: domain,
    telephone: formatPhoneForSchema(PHONE),
    email: EMAIL,
    image: `${domain}${HERO_IMAGE_URL}`,
    priceRange: '€€',
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
    sameAs: [DOCTOLIB_URL, INSTAGRAM_URL, GOOGLE_MAPS_URL],
    knowsAbout: [
      'Médecine du sport',
      'Kinésithérapie',
      'Réathlétisation',
      'Récupération de blessures sportives',
      'Rééducation post-opératoire',
      'Rééducation du sportif',
      'Accompagnement du coureur',
      'Performance athlétique',
      'Traitement des tendinopathies',
      'Rééducation entorse cheville',
      'Rééducation LCA',
      'Analyse de la foulée',
    ],
  };

  // Add aggregate rating if available and meets minimum threshold
  if (aggregateRating && aggregateRating.reviewCount >= MIN_REVIEWS_FOR_AGGREGATE_RATING) {
    clinicSchema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  // Generate practitioner schemas
  const practitionerSchemas = practitioners.map((practitioner, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${domain}/#practitioner-${index + 1}`,
    name: practitioner.name,
    jobTitle: practitioner.jobTitle,
    knowsAbout: practitioner.knowsAbout, // Changed from medicalSpecialty to knowsAbout
    image: practitioner.image,
    ...(practitioner.telephone && {
      telephone: practitioner.telephone,
    }),
    ...(practitioner.doctolibUrl && {
      url: practitioner.doctolibUrl,
    }),
    worksFor: {
      '@id': `${domain}/#organization`,
    },
  }));

  // Return array of schemas if there are practitioners, otherwise just the clinic schema
  return practitionerSchemas.length > 0
    ? [clinicSchema, ...practitionerSchemas]
    : clinicSchema;
}

interface SchemaMarkupProps {
  practitioners?: TeamMember[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

/**
 * SchemaMarkup Component
 * Injects comprehensive JSON-LD structured data for SEO
 * Should be included in the main Layout component
 */
export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  practitioners = [],
  aggregateRating,
}) => {
  // Always use production domain for schema markup
  // This ensures consistency between SSR and client hydration,
  // and structured data should always point to production URLs
  const domain = PRODUCTION_DOMAIN;

  // Transform team members to practitioner data format
  const practitionerData: PractitionerData[] = practitioners.map((member) => ({
    name: member.name,
    jobTitle: member.title,
    knowsAbout: member.specialties,
    image: member.image,
    doctolibUrl: member.doctolibUrl,
  }));

  // Generate the schema
  const clinicSchema = generateClinicSchema({
    domain,
    practitioners: practitionerData,
    aggregateRating,
  });

  // Generate Organization schema with logo
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${domain}/#organization`,
    name: 'BKS - Batignolles Kiné Sport',
    alternateName: 'Batignolles Kiné Sport',
    url: domain,
    logo: {
      '@type': 'ImageObject',
      url: `${domain}/favicon-600x600.png`,
      width: 600,
      height: 600,
      caption: 'Batignolles Kiné Sport Logo',
    },
    sameAs: [DOCTOLIB_URL, INSTAGRAM_URL, GOOGLE_MAPS_URL],
  };

  // Generate WebSite schema
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Batignolles Kiné Sport',
    alternateName: 'BKS Paris 17',
    url: domain,
  };

  // Combine schemas (Organization first for Knowledge Panel optimization)
  const schema = Array.isArray(clinicSchema)
    ? [organizationSchema, webSiteSchema, ...clinicSchema]
    : [organizationSchema, webSiteSchema, clinicSchema];

  // Convert to JSON string
  const schemaJson = JSON.stringify(schema, null, 2);

  return (
    <Head>
      <script type="application/ld+json">{schemaJson}</script>
    </Head>
  );
};
