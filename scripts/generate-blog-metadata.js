import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.resolve(__dirname, '../src/posts/pathologies');
const OUTPUT_FILE = path.resolve(__dirname, '../src/data/blog-metadata.json');

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

const generateMetadata = () => {
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

        const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1580281657521-6b9586f3015d?auto=format&fit=crop&q=80&w=1200';

        const title = frontmatter.title || slug;
        const category = frontmatter.category || 'Général';
        // Handle "type" field
        const type = frontmatter.type || 'Autres';
        const readTime = frontmatter.readTime || '5 min';
        const image = frontmatter.image || FALLBACK_IMAGE;

        // Extract excerpt from frontmatter or first paragraph (max 220 chars)
        const excerptFromFrontmatter = frontmatter.excerpt || '';
        const bodyExcerpt = content.split(/\n\n+/)[0] || '';
        const excerpt = excerptFromFrontmatter || bodyExcerpt.slice(0, 220);

        // Parse featured field (defaults to true for backward compatibility)
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
            author: 'Équipe BKS',
            date: frontmatter.publishedAt || 'Récemment',
            featured,
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
    console.log(`Generated metadata for ${posts.length} posts at ${OUTPUT_FILE}`);
};

generateMetadata();
