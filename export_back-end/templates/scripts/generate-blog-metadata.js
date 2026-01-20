// TODO: CONFIGURATION À ADAPTER POUR VOTRE PROJET
// Remplacez les valeurs entre [CROCHETS] par vos propres valeurs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// TODO: Adapter le chemin vers vos articles (ex: '../src/posts/articles', '../src/posts/blog', etc.)
const POSTS_DIR = path.resolve(__dirname, '../src/posts/pathologies');

// TODO: Adapter le chemin de sortie si nécessaire
const OUTPUT_FILE = path.resolve(__dirname, '../src/data/blog-metadata.json');

// TODO: Adapter le chemin vers votre fichier seoConfig.ts
const SEO_CONFIG_FILE = path.resolve(__dirname, '../src/utils/seoConfig.ts');

const parseFrontmatter = (raw) => {
    const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/m.exec(raw);
    if (!match) return { frontmatter: {}, content: raw };

    const [, frontmatterBlock, content] = match;
    const frontmatter = {};

    frontmatterBlock.split('\n').forEach((line) => {
        const [key, ...rest] = line.split(':');
        if (!key) return;
        const value = rest.join(':').trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '');
        if (value) frontmatter[key.trim()] = value;
    });

    return { frontmatter, content: content.trim() };
};

// Robust function to extract the SEO Config object from the TS file without compiling
const loadSeoConfig = () => {
    if (!fs.existsSync(SEO_CONFIG_FILE)) {
        console.warn('⚠️  SEO Config file not found.');
        return {};
    }

    const fileContent = fs.readFileSync(SEO_CONFIG_FILE, 'utf-8');

    // We want to extract the object assigned to BLOG_SEO_CONFIG
    // Strategy: The config object is defined before the helper functions (which start with 'export function')
    // So we can safely discard everything after the first 'export function'.

    let clean = fileContent.split('export function')[0];

    // 1. Remove comments
    clean = clean.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');

    // 2. Remove imports and interfaces
    clean = clean.replace(/import .*?;/g, '');
    clean = clean.replace(/export interface [\s\S]*?}/g, '');

    // 3. Remove "export" keyword before const
    clean = clean.replace(/export const/g, 'const');

    // 4. Remove type annotation ": Record<string, BlogPostSEO>"
    clean = clean.replace(/:\s*Record\s*<[^>]+>\s*=/g, '=');

    // 5. Wrap in a function to return the config
    clean += ';\nreturn BLOG_SEO_CONFIG;';

    try {
        const getConfig = new Function(clean);
        return getConfig();
    } catch (e) {
        console.error('❌ Failed to parse SEO Config:', e);
        console.error('Cleaned code snippet:', clean.slice(0, 500) + '...');
        return {};
    }
};

const generateMetadata = () => {
    // 1. Load SEO Config
    const seoConfigMap = loadSeoConfig();
    console.log(`Loaded SEO Config for ${Object.keys(seoConfigMap).length} items.`);

    if (!fs.existsSync(POSTS_DIR)) {
        console.error(`Directory not found: ${POSTS_DIR}`);
        process.exit(1);
    }

    const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
    const posts = files.map(file => {
        const filePath = path.join(POSTS_DIR, file);
        const rawContent = fs.readFileSync(filePath, 'utf-8');
        const { frontmatter, content } = parseFrontmatter(rawContent);
        const slug = file.replace(/\.md$/, '');

        // --- SEO MERGE ---
        const seoData = seoConfigMap[slug];

        // TODO: Remplacer par votre image par défaut
        const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1580281657521-6b9586f3015d?auto=format&fit=crop&q=80&w=1200';

        const title = seoData?.title || frontmatter.title || slug;

        // Excerpt logic: Meta Description > Frontmatter Excerpt > Body Content
        const excerptFromFrontmatter = frontmatter.excerpt || '';
        const bodyExcerpt = content.split(/\n\n+/)[0] || '';
        const excerpt = seoData?.metaDescription || excerptFromFrontmatter || bodyExcerpt.slice(0, 220);

        // TODO: Adapter selon vos catégories
        const category = seoData?.category || frontmatter.category || 'Général';
        const keywords = seoData?.keywords || [];

        // TODO: Adapter selon vos types d'articles
        const type = frontmatter.type || 'Autres';
        const readTime = frontmatter.readTime || '5 min';
        const image = frontmatter.image || FALLBACK_IMAGE;

        const featured = frontmatter.featured !== undefined
            ? (frontmatter.featured === 'true' || frontmatter.featured === true)
            : true;

        return {
            slug,
            title,
            category,
            type,
            readTime,
            image,
            excerpt,
            publishedAt: frontmatter.publishedAt,
            // TODO: Remplacer par le nom de votre auteur/équipe
            author: 'Équipe [NOM_ENTREPRISE]',
            date: frontmatter.publishedAt || 'Récemment',
            featured,
            keywords
        };
    }).filter(post => post.title && post.slug.length > 0);

    // Sort by publishedAt date descending (newest first)
    posts.sort((a, b) => {
        if (!a.publishedAt) return 1;
        if (!b.publishedAt) return -1;
        return b.publishedAt.localeCompare(a.publishedAt);
    });

    // Ensure output dir exists
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
    console.log(`🎉 Generated metadata for ${posts.length} posts at ${OUTPUT_FILE}`);
};

generateMetadata();
