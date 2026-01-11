import React, { useMemo, useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, Clock, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { AdvancedImage, responsive, lazyload, placeholder } from '@cloudinary/react';
import { SEO } from '../components/layout/SEO';
import { Button } from '../components/ui/Button';
import { ReadingProgress } from '../components/blog/ReadingProgress';
import { TableOfContents } from '../components/blog/TableOfContents';
import { ArticleContent } from '../components/blog/ArticleContent';
import { renderMarkdown } from '../utils/markdownRenderer';
import { DOCTOLIB_URL, PHONE } from '../utils/constants';
import { toTelHref } from '../utils/helpers';
import { getRelatedPosts } from '../utils/blogSuggestions';
import { getResponsiveImage, pathToPublicId, isCloudinaryImage } from '../utils/cloudinary';
import { generateArticleSchema, generateBreadcrumbSchema } from '../utils/structuredData';
import blogPostsData from '../data/blog-metadata.json';

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

// Lazy load markdown modules (eager: false creates code splitting)
const markdownModules = import.meta.glob('../posts/pathologies/*.md', { query: '?raw', import: 'default' });

export const BlogPost: React.FC = () => {
  const { slug = '' } = useParams();
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Find metadata in the pre-loaded JSON
  const post = useMemo(() =>
    (blogPostsData as BlogPostMetadata[]).find((p) => p.slug === slug),
    [slug]
  );

  // Async load of the specific markdown chunk
  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    const loadContent = async () => {
      const path = `../posts/pathologies/${slug}.md`;
      const importer = markdownModules[path];

      if (importer) {
        try {
          const raw = await importer() as string;
          setContent(parseContent(raw));
        } catch (err) {
          console.error("Failed to load markdown:", err);
          setContent(null);
        }
      } else {
        setContent(null);
      }
      setLoading(false);
    };

    loadContent();
  }, [slug]);

  const html = useMemo(() => (content ? renderMarkdown(content) : ''), [content]);

  // Compute related posts using metadata
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return getRelatedPosts(slug, post as any, blogPostsData as any);
  }, [slug, post]);

  // Generate Schema
  const articleSchema = useMemo(() => {
    if (!post) return null;
    return generateArticleSchema(
      post.title,
      post.excerpt,
      post.slug,
      post.publishedAt || new Date().toISOString().split('T')[0],
      'Équipe BKS'
    );
  }, [post]);

  // Loading State
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="text-slate-600">Chargement...</div></div>;
  }

  // Not Found
  if (!post || !content) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen text-slate-900 selection:bg-primary selection:text-white">
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        type="article"
        schema={articleSchema || undefined}
        breadcrumbs={[
          { name: 'Accueil', url: 'https://batignolleskinesport.fr' },
          { name: 'Blog', url: 'https://batignolleskinesport.fr/blog' },
          { name: post.title, url: `https://batignolleskinesport.fr/blog/${post.slug}` }
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
          line-height: 1.85; 
          margin-bottom: 1.5rem; 
          font-size: 1.0625rem;
        }
        
        .prose strong { 
          color: #0f172a; 
          font-weight: 600; 
        }

        /* ===== INTRO PARAGRAPH ===== */
        .prose > p:first-of-type { 
          border-left: 4px solid var(--interactive-primary); 
          padding-left: 1.5rem; 
          font-size: 1.15rem; 
          color: #334155; 
          font-weight: 500;
          margin-bottom: 3rem;
          line-height: 1.75;
        }
        
        /* ===== LINKS ===== */
        .prose a {
          color: var(--interactive-primary);
          font-weight: 500;
          text-decoration: underline;
          text-decoration-color: rgba(64, 65, 52, 0.3);
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
          transition: all 0.2s ease;
        }
        
        .prose a:hover {
          color: var(--interactive-primary-hover);
          text-decoration-color: rgba(64, 65, 52, 0.6);
        }

        /* ===== FAQ SECTION ===== */
        .prose h2:has(+ h3:first-of-type) {
          margin-bottom: 2rem;
        }
      `}</style>

      <header className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {isCloudinaryImage(post.image) ? (
          <AdvancedImage
            cldImg={getResponsiveImage(pathToPublicId(post.image), '16:9')}
            plugins={[responsive({ steps: [480, 640, 768, 1024, 1600] }), placeholder('blur')]}
            className="absolute inset-0 h-full w-full object-cover"
            alt={post.title}
          />
        ) : (
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
            itemProp="image"
            fetchpriority="high"
            loading="eager"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        <div className="absolute top-0 w-full p-4 md:p-8 z-20 flex justify-between items-start pointer-events-none">
          <div className="pointer-events-auto hidden md:block">
            <Link
              to="/blog"
              className="flex items-center gap-2 rounded-full bg-slate-900/40 border border-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-slate-900/60 hover:scale-105"
            >
              <ArrowLeft className="h-4 w-4" /> Retour au blog
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto max-w-5xl p-6 md:p-12 pt-32">
          <span className="mb-4 hidden md:inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {post.category}
          </span>
          <h1 className="text-3xl font-sans leading-tight text-white md:text-5xl lg:text-6xl">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-lg font-light text-slate-200">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/80 font-sans text-white">B</div>
              <span>Équipe BKS</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {post.readTime}
            </div>
            {post.publishedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Mis à jour le {post.publishedAt}
              </div>
            )}
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" /> {post.type}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-20 pt-12 md:px-6 lg:grid-cols-[280px_1fr_280px] xl:gap-8">
        {/* Table of Contents - Left Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <TableOfContents content={html} />
          </div>
        </aside>

        {/* Article Content - Center */}
        <ArticleContent html={html} />

        {/* CTA Sidebar - Right */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto space-y-8">
            <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-2xl ring-1 ring-white/10">
              <h3 className="text-2xl font-sans mb-4">Besoin d'un avis ?</h3>
              <p className="text-sm leading-relaxed text-slate-300 mb-8">
                Nos spécialistes vous accompagnent pour établir un diagnostic précis et un plan de traitement adapté.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle className="h-5 w-5 text-[#4ade80] shrink-0" />
                  <span>Bilan initial complet (1h)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle className="h-5 w-5 text-[#4ade80] shrink-0" />
                  <span>Tests de force (Isocinétisme)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle className="h-5 w-5 text-[#4ade80] shrink-0" />
                  <span>Plateau technique dédié</span>
                </li>
              </ul>
              <Button
                href={DOCTOLIB_URL}
                variant="booking"
                className="w-full text-center text-sm whitespace-nowrap px-4"
              >
                Prendre rendez-vous
              </Button>
              <div className="mt-8 border-t border-white/10 pt-6 text-center">
                <p className="text-xs text-slate-400 mb-1">Questions ? Appelez-nous au</p>
                <a href={toTelHref(PHONE)} className="text-lg font-semibold text-white hover:text-[#4ade80] transition-colors">
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile ToC */}
        <div className="lg:hidden col-span-full">
          <TableOfContents content={html} />
        </div>
      </main>

      {/* Articles similaires */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-sans text-slate-900">Articles similaires</h2>
            <p className="text-slate-500 mt-1">Continuez votre lecture avec ces articles liés</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                to={`/blog/${relatedPost.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-lg hover:ring-slate-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  {isCloudinaryImage(relatedPost.image || '') ? (
                    <AdvancedImage
                      cldImg={getResponsiveImage(pathToPublicId(relatedPost.image || ''), '16:10')}
                      plugins={[lazyload(), responsive({ steps: [480, 640, 768] }), placeholder('blur')]}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      alt={relatedPost.title}
                    />
                  ) : (
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-5">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">{relatedPost.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Lire l'article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
