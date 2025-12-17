import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  author?: string;
  publishedTime?: string;
  keywords?: string[];
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical,
  type = 'website',
  image,
  author,
  publishedTime,
  keywords = [],
  noindex = false
}) => {
  const siteName = "Batignolles Kiné Sport";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const baseUrl = "https://batignolleskinesport.fr";
  const defaultImage = `${baseUrl}/images/hero/hero.webp`;
  const ogImage = image || defaultImage;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : baseUrl);

  // Default keywords for medical/kine site
  const defaultKeywords = [
    'kinésithérapie',
    'kiné du sport',
    'Paris 17',
    'Batignolles',
    'rééducation',
    'physiothérapie'
  ];
  const allKeywords = [...keywords, ...defaultKeywords];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {allKeywords.length > 0 && <meta name="keywords" content={allKeywords.join(', ')} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />

      {/* Article specific meta tags */}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="language" content="fr" />
      <meta name="geo.region" content="FR-75" />
      <meta name="geo.placename" content="Paris" />
      <meta name="geo.position" content="48.8833009;2.3212348" />
      <meta name="ICBM" content="48.8833009, 2.3212348" />
    </Helmet>
  );
};