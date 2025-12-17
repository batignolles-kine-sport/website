import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ADDRESS, PHONE, EMAIL, DOCTOLIB_URL } from '../../utils/constants';

interface StructuredDataProps {
  type?: 'MedicalBusiness' | 'Article' | 'BreadcrumbList';
  article?: {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    image?: string;
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'MedicalBusiness', article, breadcrumbs }) => {
  const baseUrl = 'https://batignolleskinesport.fr';

  // LocalBusiness / MedicalBusiness Schema for Homepage and Service pages
  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${baseUrl}/#medicalbusiness`,
    name: 'Batignolles Kiné Sport',
    alternateName: 'BKS',
    description: 'Cabinet de kinésithérapie spécialisé en kiné du sport et rééducation à Paris 17e (Batignolles). Prise en charge post-opératoire, traumatologie sportive et préparation physique.',
    url: baseUrl,
    telephone: PHONE,
    email: EMAIL,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6 rue des Batignolles',
      addressLocality: 'Paris',
      postalCode: '75017',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8833009,
      longitude: 2.3212348,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '21:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/batignolleskinesport/',
      DOCTOLIB_URL,
    ],
    image: `${baseUrl}/images/hero/hero.webp`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '147',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Kinésithérapie',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kinésithérapie du Sport',
            description: 'Prise en charge spécialisée des sportifs : traumatologie, rééducation et performance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rééducation Post-Opératoire',
            description: 'Suivi rigoureux après chirurgie orthopédique avec protocoles validés.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prévention et Préparation Physique',
            description: 'Bilans préventifs et programmes personnalisés pour éviter les blessures.',
          },
        },
      ],
    },
  };

  // Article Schema for Blog/Pathology posts
  const articleSchema = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline,
        description: article.description,
        image: article.image || `${baseUrl}/images/hero/hero.webp`,
        datePublished: article.datePublished,
        dateModified: article.datePublished,
        author: {
          '@type': 'Person',
          name: article.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Batignolles Kiné Sport',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/logo.svg`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': baseUrl,
        },
      }
    : null;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${baseUrl}${item.url}`,
        })),
      }
    : null;

  let schema = medicalBusinessSchema;
  if (type === 'Article' && articleSchema) {
    schema = articleSchema;
  } else if (type === 'BreadcrumbList' && breadcrumbSchema) {
    schema = breadcrumbSchema;
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
