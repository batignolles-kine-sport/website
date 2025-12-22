import React, { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AlertCircle, ArrowLeft, BookOpen, Calendar, CheckCircle, Clock, Tag } from 'lucide-react';
import { marked } from 'marked';
import { SEO } from '../components/layout/SEO';
import { Button } from '../components/ui/Button';
import { DOCTOLIB_URL, PHONE } from '../utils/constants';
import { toTelHref } from '../utils/helpers';

const parseFrontmatter = (raw: string) => {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/m.exec(raw);
  if (!match) return { frontmatter: {}, content: raw };

  const [, frontmatterBlock, content] = match;
  const frontmatter: Record<string, string> = {};

  frontmatterBlock.split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (!key) return;
    const value = rest.join(':').trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '');
    if (value) frontmatter[key.trim()] = value;
  });

  return { frontmatter, content: content.trim() };
};

type PathologyContent = {
  slug: string;
  title: string;
  category: string;
  type: string;
  readTime: string;
  image: string;
  excerpt: string;
  publishedAt?: string;
  content: string;
};

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1580281657521-6b9586f3015d?auto=format&fit=crop&q=80&w=1200';

const POSTS: PathologyContent[] = (() => {
  const modules = import.meta.glob('../posts/pathologies/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

  return Object.entries(modules)
    .map(([path, raw]) => {
      const { frontmatter, content } = parseFrontmatter(raw);
      const slug = path.split('/').pop()?.replace(/\.md$/, '') || '';

      const title = frontmatter.title || slug;
      const category = frontmatter.category || 'Général';
      const type = frontmatter.type || 'Autres';
      const readTime = frontmatter.readTime || '5 min';
      const image = frontmatter.image || FALLBACK_IMAGE;
      const excerpt = frontmatter.excerpt || content.split(/\n\n+/)[0] || '';

      return {
        slug,
        title,
        category,
        type,
        readTime,
        image,
        excerpt,
        publishedAt: frontmatter.publishedAt,
        content,
      } as PathologyContent;
    })
    .filter((post) => post.slug && post.title)
    .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
})();

marked.setOptions({
  breaks: true,
  gfm: true,
});

export const PathologyPost: React.FC = () => {
  const { slug = '' } = useParams();

  const post = useMemo(() => POSTS.find((p) => p.slug === slug), [slug]);

  const html = useMemo(() => (post ? marked.parse(post.content) : ''), [post]);

  if (!post) {
    return <Navigate to="/pathologies" replace />;
  }

  return (
    <div className="bg-surface min-h-screen text-slate-900 selection:bg-primary selection:text-white">
      <SEO title={post.title} description={post.excerpt} />

      <style>{`
        /* Typography & Colors */
        .prose h2 { 
          color: #1a4d2e; 
          font-family: serif; 
          font-size: 2rem; 
          margin-top: 3rem; 
          margin-bottom: 1.5rem; 
          line-height: 1.2;
        }
        .prose h3 { 
          color: #1a4d2e; 
          font-family: serif; 
          font-size: 1.5rem; 
          margin-top: 2.5rem; 
          margin-bottom: 1rem; 
        }
        .prose p { 
          color: #475569; 
          line-height: 1.8; 
          margin-bottom: 1.5rem; 
          font-size: 1.05rem;
        }
        .prose strong { 
          color: #0f172a; 
          font-weight: 600; 
        }

        /* Intro Paragraph */
        .prose > p:first-of-type { 
          border-left: 4px solid #1a4d2e; 
          padding-left: 1.5rem; 
          font-size: 1.15rem; 
          color: #334155; 
          font-weight: 500;
          margin-bottom: 3rem;
        }

        /* Unordered Lists (Standard) */
        .prose ul { 
          list-style: none; 
          padding-left: 0; 
          margin-bottom: 2rem; 
        }
        .prose ul > li { 
          list-style: none;
          position: relative; 
          padding-left: 1.5rem; 
          margin-bottom: 0.75rem; 
          color: #475569;
        }
        .prose ul > li::marker {
          content: none;
        }
        .prose ul > li::before { 
          content: ""; 
          position: absolute; 
          left: 0; 
          top: 0.6em; 
          width: 6px; 
          height: 6px; 
          background-color: #1a4d2e; 
          border-radius: 50%; 
        }

        /* Ordered Lists (Phases Cards) */
        .prose ol { 
          list-style: none; 
          padding-left: 0; 
          counter-reset: phase-counter; 
          display: flex; 
          flex-direction: column; 
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .prose ol > li { 
          list-style: none;
          background: #f8fafc; 
          border: 1px solid #e2e8f0; 
          border-radius: 1rem; 
          padding: 1.5rem; 
          position: relative;
          transition: all 0.2s ease;
        }
        .prose ol > li::marker {
          content: none;
        }
        .prose ol > li:hover {
          border-color: #cbd5e1;
          background: #fff;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        .prose ol > li strong {
          display: block;
          color: #1a4d2e;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        /* Info Block (Blockquote) */
        .prose blockquote { 
          background: #f6f9f7; 
          border: 1px solid rgba(26, 77, 46, 0.1); 
          border-radius: 1.5rem; 
          padding: 2rem; 
          margin: 3rem 0; 
          position: relative;
        }
        .prose blockquote p {
          margin-bottom: 0.5rem;
          color: #334155;
        }
        .prose blockquote p:last-child {
          margin-bottom: 0;
        }
        .prose blockquote strong {
          color: #1a4d2e;
          font-size: 1.1rem;
        }
      `}</style>

      <header className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />

        <div className="absolute top-8 left-4 md:left-8 z-20">
          <Link
            to="/pathologies"
            className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:bg-white/20 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Retour aux pathologies
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 mx-auto max-w-5xl p-6 md:p-12">
          <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {post.category}
          </span>
          <h1 className="text-3xl font-serif leading-tight text-white md:text-5xl lg:text-6xl">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-lg font-light text-slate-200">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/80 font-serif text-white">B</div>
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

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-20 pt-12 md:px-6 lg:grid-cols-[1.7fr_1fr]">
        <article
          className="prose prose-slate max-w-none prose-a:text-primary prose-headings:font-serif prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <aside className="space-y-8 lg:sticky lg:top-32 h-fit">
          <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-2xl ring-1 ring-white/10">
            <h3 className="text-2xl font-serif mb-4">Besoin d'un avis ?</h3>
            <p className="text-sm leading-relaxed text-slate-300 mb-8">
              Nos spécialistes du genou vous accompagnent pour établir un diagnostic précis et un plan de traitement adapté.
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
            <Button href={DOCTOLIB_URL} variant="booking" className="w-full sm:w-auto">
              Prendre rendez-vous
            </Button>
            <div className="mt-8 border-t border-white/10 pt-6 text-center">
              <p className="text-xs text-slate-400 mb-1">Questions ? Appelez-nous au</p>
              <a href={toTelHref(PHONE)} className="text-lg font-semibold text-white hover:text-[#4ade80] transition-colors">
                {PHONE}
              </a>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default PathologyPost;
