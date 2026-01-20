/**
 * Routes configuration for SSG (Static Site Generation)
 * This file defines all routes that will be pre-rendered at build time.
 */

import blogPostsData from './data/blog-metadata.json';

type BlogPostMetadata = {
    slug: string;
    title: string;
    category: string;
    type: string;
    readTime: string;
    image: string;
    excerpt: string;
    publishedAt?: string;
};

/**
 * Static routes that are always pre-rendered
 */
export const STATIC_ROUTES = [
    '/',
    '/blog',
    '/equipe',
    '/contact',
    '/mentions-legales',
    '/pratiques',
];

/**
 * Service routes
 */
export const SERVICE_ROUTES = [
    '/services/kine-sport',
    '/services/reeducation-post-traumatique',
    '/services/prevention-preparation-physique',
];

/**
 * Generate blog routes from metadata
 */
export function getBlogRoutes(): string[] {
    const posts = blogPostsData as BlogPostMetadata[];
    return posts.map((post) => `/blog/${post.slug}/`);
}

/**
 * Get all routes for SSG
 * This function is called at build time to determine which pages to pre-render
 */
export function getRoutes(): string[] {
    const blogRoutes = getBlogRoutes();

    const allRoutes = [
        ...STATIC_ROUTES,
        ...SERVICE_ROUTES,
        ...blogRoutes,
    ];

    console.log(`📄 SSG: Generating ${allRoutes.length} static pages`);
    console.log(`   - Static pages: ${STATIC_ROUTES.length}`);
    console.log(`   - Service pages: ${SERVICE_ROUTES.length}`);
    console.log(`   - Blog posts: ${blogRoutes.length}`);

    return allRoutes;
}
