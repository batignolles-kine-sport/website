import fs from 'fs';
import path from 'path';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const DOMAIN = 'https://batignolles-kine-sport.fr';
const POSTS_DIR = path.join(process.cwd(), 'src/posts');

/**
 * Récupère la date de modification d'un fichier
 */
function getFileModDate(filePath: string): string {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

/**
 * Génère les URLs pour les articles blog
 */
function getBlogUrls(): SitemapUrl[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.(md|mdx)$/, '');
      const filePath = path.join(POSTS_DIR, file);

      return {
        loc: `${DOMAIN}/blog/${slug}`,
        lastmod: getFileModDate(filePath),
        changefreq: 'monthly' as const,
        priority: 0.7,
      };
    });
}

/**
 * URLs statiques prioritaires
 */
function getStaticUrls(): SitemapUrl[] {
  return [
    {
      loc: DOMAIN,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      loc: `${DOMAIN}/blog`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${DOMAIN}/contact`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${DOMAIN}/equipe`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${DOMAIN}/mentions-legales`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: 0.5,
    },
  ];
}

/**
 * Échappe les caractères spéciaux XML
 */
function escapeXml(str: string): string {
  const escapeMap: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  return str.replace(/[&<>"']/g, char => escapeMap[char]);
}

/**
 * Génère le sitemap XML complet
 */
export function generateSitemap(): string {
  const urls = [...getStaticUrls(), ...getBlogUrls()];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls
  .map(
    url => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return xml.trim();
}

/**
 * Écrit le sitemap dans le dossier public
 */
export function writeSitemap(): void {
  const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml');
  const sitemapContent = generateSitemap();

  fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
  console.log('✅ sitemap.xml généré avec succès');
}
