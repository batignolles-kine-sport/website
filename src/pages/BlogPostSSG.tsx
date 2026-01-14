/**
 * Blog Post Page Module for vite-react-ssg
 * Uses loader and getStaticPaths for build-time data fetching
 */
import React from 'react';
import { Link, Navigate, useLoaderData, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, Clock, Tag } from 'lucide-react';
import { AdvancedImage, responsive, lazyload, placeholder } from '@cloudinary/react';
import { Head } from 'vite-react-ssg';
import { SEO } from '../components/layout/SEO';
import { Button } from '../components/ui/Button';
import { ReadingProgress } from '../components/blog/ReadingProgress';
import { TableOfContents } from '../components/blog/TableOfContents';
import { ArticleContent } from '../components/blog/ArticleContent';
import { renderMarkdown } from '../utils/markdownRenderer';
import { DOCTOLIB_URL, PHONE, SITE_URL } from '../utils/constants';
import { toTelHref } from '../utils/helpers';
import { getRelatedPosts } from '../utils/blogSuggestions';
import { getResponsiveImage, pathToPublicId, isCloudinaryImage } from '../utils/cloudinary';
import { generateArticleSchema, generateBreadcrumbSchema } from '../utils/structuredData';
import blogPostsData from '../data/blog-metadata.json';

// Import all markdown files eagerly for SSG (build-time)
const markdownModules = import.meta.glob('../posts/pathologies/*.md', {
    query: '?raw',
    import: 'default',
    eager: true // CRITICAL: eager loading for SSG
}) as Record<string, string>;

// Helper to extract content body (stripping frontmatter)
const parseContent = (raw: string) => {
    const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/m.exec(raw);
    return match ? match[2].trim() : raw.trim();
};

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

// Loader data type
interface BlogPostLoaderData {
    post: BlogPostMetadata;
    content: string;
    html: string;
    relatedPosts: BlogPostMetadata[];
    articleSchema: object;
}

/**
 * getStaticPaths - Tell vite-react-ssg which blog post paths to pre-render
 */
export function getStaticPaths() {
    const posts = blogPostsData as BlogPostMetadata[];
    return posts.map((post) => `blog/${post.slug}`);
}

/**
 * loader - Load blog post data at build time
 * This runs on the server during SSG, not in the browser
 */
export async function loader({ params }: { params: { slug?: string } }): Promise<BlogPostLoaderData | null> {
    const slug = params.slug || '';

    // Find metadata
    const posts = blogPostsData as BlogPostMetadata[];
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return null;
    }

    // Load markdown content (already eagerly loaded)
    const path = `../posts/pathologies/${slug}.md`;
    const rawContent = markdownModules[path];

    if (!rawContent) {
        return null;
    }

    const content = parseContent(rawContent);
    const html = renderMarkdown(content);

    // Get related posts
    const relatedPosts = getRelatedPosts(slug, post as any, posts as any);

    // Generate schema
    const articleSchema = generateArticleSchema(
        post.title,
        post.excerpt,
        post.slug,
        post.publishedAt || new Date().toISOString().split('T')[0],
        'Équipe BKS'
    );

    return {
        post,
        content,
        html,
        relatedPosts,
        articleSchema,
    };
}

/**
 * BlogPost Component
 */
export function Component() {
    const data = useLoaderData() as BlogPostLoaderData | null;
    const { slug = '' } = useParams();

    // Not Found
    if (!data || !data.post) {
        return <Navigate to="/blog" replace />;
    }

    const { post, html, relatedPosts, articleSchema } = data;

    return (
        <div className="min-h-screen text-slate-900 selection:bg-primary selection:text-white">
            <SEO
                title={post.title}
                description={post.excerpt}
                image={post.image}
                type="article"
                schema={articleSchema}
                breadcrumbs={[
                    { name: 'Accueil', url: SITE_URL },
                    { name: 'Blog', url: `${SITE_URL}/blog` },
                    { name: post.title, url: `${SITE_URL}/blog/${post.slug}` }
                ]}
            />
            <ReadingProgress />

            <style>{`
        /* ===== TYPOGRAPHY & COLORS ===== */
        .prose {
          max-width: 65ch;
        }
        
        .prose h2 { 
          color: var(--interactive-primary); 
          font-size: 2.25rem; 
          font-weight: 700;
          margin-top: 4rem; 
          margin-bottom: 1.5rem; 
          line-height: 1.2;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .prose h3 { 
          color: #0f172a; 
          font-size: 1.75rem; 
          font-weight: 600;
          margin-top: 2.5rem; 
          margin-bottom: 1.25rem; 
          line-height: 1.3;
        }
        
        .prose h4 { 
          color: #334155; 
          font-weight: 600; 
          font-size: 1.25rem; 
          margin-top: 2rem; 
          margin-bottom: 1rem; 
        }
        
        .prose p { 
          color: #475569; 
          line-height: 1.8; 
          margin-bottom: 1.5rem; 
          font-size: 1.125rem;
        }
        
        .prose ul, .prose ol { 
          color: #475569; 
          margin-left: 1.5rem; 
          margin-bottom: 1.5rem; 
          line-height: 1.7;
        }
        
        .prose li { 
          margin-bottom: 0.75rem; 
          padding-left: 0.5rem;
        }
        
        .prose li::marker {
          color: var(--interactive-primary);
          font-weight: 600;
        }
        
        .prose strong { 
          color: #1e293b; 
          font-weight: 600; 
        }
        
        .prose a { 
          color: var(--interactive-primary); 
          text-decoration: underline; 
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
          transition: all 0.15s ease;
        }
        
        .prose a:hover { 
          color: #0f172a;
          text-decoration-thickness: 2px;
        }
        
        .prose blockquote { 
          border-left: 4px solid var(--interactive-primary); 
          background: #f8fafc;
          padding: 1.25rem 1.5rem; 
          margin: 2rem 0;
          border-radius: 0 0.75rem 0.75rem 0;
          font-style: italic;
          color: #475569;
        }

        .prose blockquote p { margin: 0; }
        
        @media (max-width: 768px) {
          .prose h2 { font-size: 1.75rem; margin-top: 3rem; }
          .prose h3 { font-size: 1.375rem; margin-top: 2rem; }
          .prose p { font-size: 1rem; }
        }
      `}</style>

            {/* Hero Header */}
            <header className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {post.image && isCloudinaryImage(post.image) ? (
                        <AdvancedImage
                            cldImg={getResponsiveImage(pathToPublicId(post.image))}
                            plugins={[responsive({ steps: 200 }), lazyload(), placeholder({ mode: 'blur' })]}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <img
                            src={post.image || '/images/blog/default.jpg'}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                </div>

                <div className="relative z-10 w-full max-w-content mx-auto px-4 md:px-6 pb-8 md:pb-12">
                    <nav className="mb-4 md:mb-6 flex items-center gap-2 md:gap-3 text-sm md:text-base text-slate-200">
                        <Link to="/blog" className="hover:text-white transition-colors flex items-center gap-2">
                            <ArrowLeft size={18} />
                            <span className="hidden sm:inline">Retour au blog</span>
                            <span className="sm:hidden">Blog</span>
                        </Link>
                    </nav>

                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-medium">
                            <Tag size={12} className="md:w-3.5 md:h-3.5" />
                            {post.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-medium">
                            <Clock size={12} className="md:w-3.5 md:h-3.5" />
                            {post.readTime}
                        </span>
                        {post.publishedAt && (
                            <span className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm font-medium">
                                <Calendar size={12} className="md:w-3.5 md:h-3.5" />
                                {post.publishedAt}
                            </span>
                        )}
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
                        {post.title}
                    </h1>
                </div>
            </header>

            {/* Content */}
            <main className="relative mx-auto max-w-7xl py-8 md:py-12 lg:py-16 px-4 md:px-6">
                <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12 xl:gap-16">
                    <article className="prose prose-lg max-w-none">
                        {/* Table of Contents for mobile */}
                        <div className="lg:hidden mb-8">
                            <TableOfContents html={html} />
                        </div>

                        <ArticleContent html={html} />
                    </article>

                    {/* Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            <TableOfContents html={html} />

                            {/* CTA Card */}
                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/10">
                                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                                    Besoin d'aide ?
                                </h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    Nos kinés du sport sont là pour vous accompagner dans votre rééducation.
                                </p>
                                <div className="space-y-3">
                                    <Button href={DOCTOLIB_URL} variant="booking" className="w-full justify-center text-sm">
                                        Prendre RDV
                                    </Button>
                                    <Button href={toTelHref(PHONE)} variant="secondary" className="w-full justify-center text-sm">
                                        {PHONE}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Related Posts */}
                {relatedPosts && relatedPosts.length > 0 && (
                    <section className="mt-16 md:mt-20 pt-12 border-t border-slate-200">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                            Articles similaires
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedPosts.slice(0, 3).map((related) => (
                                <Link
                                    key={related.slug}
                                    to={`/blog/${related.slug}`}
                                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                                >
                                    <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                                        {related.image && isCloudinaryImage(related.image) ? (
                                            <AdvancedImage
                                                cldImg={getResponsiveImage(pathToPublicId(related.image))}
                                                plugins={[responsive({ steps: 200 }), lazyload(), placeholder({ mode: 'blur' })]}
                                                alt={related.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <img
                                                src={related.image || '/images/blog/default.jpg'}
                                                alt={related.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        )}
                                    </div>
                                    <div className="p-4 md:p-5">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-medium text-primary">{related.type}</span>
                                            <span className="text-slate-300">•</span>
                                            <span className="text-xs text-slate-500">{related.readTime}</span>
                                        </div>
                                        <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                                            {related.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Bottom CTA (Mobile) */}
                <div className="lg:hidden mt-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/10">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                        Besoin d'un accompagnement personnalisé ?
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                        Nos kinés du sport sont là pour vous aider.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button href={DOCTOLIB_URL} variant="booking" className="flex-1 justify-center">
                            Prendre RDV sur Doctolib
                        </Button>
                        <Button href={toTelHref(PHONE)} variant="secondary" className="flex-1 justify-center">
                            Appeler : {PHONE}
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Export entry for vite-react-ssg to find styles
export const entry = 'src/pages/BlogPostSSG.tsx';
