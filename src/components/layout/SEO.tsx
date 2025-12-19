import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, OG_IMAGE_URL } from '../../utils/constants';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical,
  type = 'website',
  image 
}) => {
  const siteName = "Batignolles Kiné Sport";
  const fullTitle = `${title} | ${siteName}`;
  const ogImage = image || OG_IMAGE_URL;
  
  // Auto-generate canonical URL if not provided
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? `${SITE_URL}${window.location.pathname}` : SITE_URL);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};