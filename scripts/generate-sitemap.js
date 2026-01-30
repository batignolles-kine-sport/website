
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://batignolleskinesport.fr';
const PATHOLOGIES_DIR = path.resolve(__dirname, '../src/posts/pathologies');
const CONSTANTS_FILE = path.resolve(__dirname, '../src/utils/constants.ts');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

/**
 * Extracts service paths from constants.ts using regex
 */
const getServicePaths = () => {
    if (!fs.existsSync(CONSTANTS_FILE)) {
        console.warn('⚠️ Constants file not found');
        return [];
    }

    const content = fs.readFileSync(CONSTANTS_FILE, 'utf-8');
    // Extract the SERVICES block roughly to avoid matching other variables with 'path'
    const servicesBlock = content.split('export const SERVICES')[1]?.split('export const')[0] || '';

    const paths = [];
    // Match property 'path': "/..." or 'path': '/...'
    const regex = /path:\s*["']([^"']+)["']/g;
    let match;

    while ((match = regex.exec(servicesBlock)) !== null) {
        paths.push(match[1]);
    }

    console.log(`🔍 Found ${paths.length} services`);
    return paths;
};

/**
 * Get blog posts paths and modification dates
 */
const getBlogPaths = () => {
    if (!fs.existsSync(PATHOLOGIES_DIR)) {
        console.warn('⚠️ Pathologies directory not found');
        return [];
    }

    const files = fs.readdirSync(PATHOLOGIES_DIR)
        .filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

    return files.map(file => {
        const slug = file.replace(/\.(md|mdx)$/, '');
        const filePath = path.join(PATHOLOGIES_DIR, file);
        const stats = fs.statSync(filePath);

        return {
            slug,
            lastmod: stats.mtime.toISOString().split('T')[0]
        };
    });
};

const escapeXml = (str) => {
    return str.replace(/[&<>"']/g, (char) => {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;'
        };
        return map[char];
    });
};

const generateSitemap = () => {
    console.log('🗺️  Generating Sitemap...');

    const today = new Date().toISOString().split('T')[0];
    const urls = [];

    // 1. Static Pages
    const staticPages = [
        { loc: '/', priority: 1.0, changefreq: 'weekly' },
        { loc: '/blog', priority: 0.9, changefreq: 'daily' }, // Blog changes often
        { loc: '/pratiques', priority: 0.9, changefreq: 'weekly' },
        { loc: '/contact', priority: 0.8, changefreq: 'monthly' },
        { loc: '/equipe', priority: 0.7, changefreq: 'monthly' },
        { loc: '/mentions-legales', priority: 0.5, changefreq: 'yearly' },
    ];

    staticPages.forEach(page => {
        urls.push({
            loc: `${DOMAIN}${page.loc === '/' ? '' : page.loc}`,
            lastmod: today,
            changefreq: page.changefreq,
            priority: page.priority
        });
    });

    // 2. Services
    const servicePaths = getServicePaths();
    servicePaths.forEach(p => {
        urls.push({
            loc: `${DOMAIN}${p}`,
            lastmod: today,
            changefreq: 'weekly',
            priority: 0.8
        });
    });

    // 3. Blog Posts
    const blogPosts = getBlogPaths();
    console.log(`📄 Found ${blogPosts.length} blog posts`);

    blogPosts.forEach(post => {
        urls.push({
            loc: `${DOMAIN}/blog/${post.slug}`,
            lastmod: post.lastmod,
            changefreq: 'monthly',
            priority: 0.7
        });
    });

    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    if (!fs.existsSync(PUBLIC_DIR)) {
        fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
    console.log(`✅ Sitemap generated with ${urls.length} URLs at public/sitemap.xml`);
};

generateSitemap();
