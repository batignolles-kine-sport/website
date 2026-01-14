import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { SITE_URL, OG_IMAGE_URL } from '../../utils/constants';
import { generateBreadcrumbSchema } from '../../utils/structuredData';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  schema?: object | object[];
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  type = 'website',
  image,
  schema,
  breadcrumbs
}) => {
  const siteName = "Batignolles Kiné Sport";
  const fullTitle = `${title} | ${siteName}`;

  // Use react-router's useLocation for SSG compatibility
  const location = useLocation();

  // Process image URL
  let ogImage = OG_IMAGE_URL;
  if (image) {
    if (image.startsWith('http')) {
      ogImage = image;
    } else {
      // Use Cloudinary for local paths
      const publicId = image.replace(/^\//, '').replace(/^images\//, '').replace(/\.(jpg|jpeg|png|webp)$/i, '');
      ogImage = `https://res.cloudinary.com/dsesaneyj/image/upload/f_jpg,q_auto,w_1200,h_630,c_fill/${publicId}`;
    }
  }

  // Auto-generate canonical URL using react-router location (SSG compatible)
  const canonicalUrl = canonical || `${SITE_URL}${location.pathname}`;

  // Schema composition
  const breadcrumbSchema = breadcrumbs ? generateBreadcrumbSchema(breadcrumbs) : null;

  return (
    <Head>
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
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data: Breadcrumbs */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Structured Data: Page Specific (Article, FAQ, etc) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Head>
  );
};