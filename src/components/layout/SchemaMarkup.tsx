import React from 'react';
import { Helmet } from 'react-helmet-async';
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

interface PractitionerData {
  name: string;
  jobTitle: string;
  medicalSpecialty: string[];
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

/**
 * Generates a comprehensive JSON-LD schema for a medical/physiotherapy clinic
 * Combines LocalBusiness and MedicalBusiness types for maximum SEO impact
 */
export function generateClinicSchema(options: ClinicSchemaOptions) {
  const { domain, practitioners = [], aggregateRating } = options;

  // Main organization/clinic schema
  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness', 'Physiotherapy'],
    '@id': `${domain}/#organization`,
    name: 'BKS - Batignolles Kiné Sport',
    alternateName: 'Batignolles Kiné Sport',
    description:
      'Cabinet de kinésithérapie spécialisé en kiné du sport et rééducation à Paris 17e, près du Parc des Batignolles, Métro Rome et Église des Batignolles. Expertise en traumatologie sportive, rééducation du coureur et réathlétisation.',
    medicalSpecialty: [
      'Sports Medicine',
      'Physiotherapy',
      'Athletic Training',
      'Sports Injury Recovery',
      'Post-Operative Rehabilitation',
    ],
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
      latitude: 48.8822,
      longitude: 2.3244,
    },
    areaServed: {
      '@type': 'City',
      name: 'Batignolles, Paris 17',
    },
    url: domain,
    telephone: `+33${PHONE.replace(/\s/g, '').substring(1)}`,
    email: EMAIL,
    image: `${domain}${HERO_IMAGE_URL}`,
    priceRange: '€€',
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
    sameAs: [DOCTOLIB_URL, INSTAGRAM_URL, GOOGLE_MAPS_URL],
    knowsAbout: [
      'Sports Injury Recovery',
      'Runner Training',
      'Post-Operative Rehabilitation',
      'Athlete Performance',
      'Tendinopathy Treatment',
      'Ankle Sprain Rehabilitation',
      'ACL Reconstruction Recovery',
      'Running Gait Analysis',
    ],
  };

  // Add aggregate rating if available
  if (aggregateRating && aggregateRating.reviewCount >= 10) {
    (clinicSchema as any).aggregateRating = {
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
    medicalSpecialty: practitioner.medicalSpecialty,
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
  // Get the production domain from window.location or use a fallback
  const domain =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://batignolleskinesport.fr';

  // Transform team members to practitioner data format
  const practitionerData: PractitionerData[] = practitioners.map((member) => ({
    name: member.name,
    jobTitle: member.title,
    medicalSpecialty: member.specialties,
    image: member.image,
    doctolibUrl: member.doctolibUrl,
  }));

  // Generate the schema
  const schema = generateClinicSchema({
    domain,
    practitioners: practitionerData,
    aggregateRating,
  });

  // Convert to JSON string
  const schemaJson = JSON.stringify(schema, null, 2);

  return (
    <Helmet>
      <script type="application/ld+json">{schemaJson}</script>
    </Helmet>
  );
};
