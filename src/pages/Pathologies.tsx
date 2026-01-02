import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Search } from 'lucide-react';
import { SEO } from '../components/layout/SEO';

// Basic frontmatter parser tailored to our markdown posts
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

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1580281657521-6b9586f3015d?auto=format&fit=crop&q=80&w=1200';

type PathologyPost = {
  slug: string;
  title: string;
  category: string;
  type: string;
  readTime: string;
  image: string;
  excerpt: string;
  publishedAt?: string;
};

// Load markdown posts at build time
const PATHOLOGY_POSTS: PathologyPost[] = (() => {
  const modules = import.meta.glob('../posts/pathologies/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

  return Object.entries(modules)
    .map(([path, rawContent]) => {
      const { frontmatter, content } = parseFrontmatter(rawContent);
      const slug = path.split('/').pop()?.replace(/\.md$/, '') || '';

      const title = frontmatter.title || slug;
      const category = frontmatter.category || 'Général';
      const type = frontmatter.type || 'Autres';
      const readTime = frontmatter.readTime || '5 min';
      const image = frontmatter.image || FALLBACK_IMAGE;
      const excerptFromFrontmatter = frontmatter.excerpt || '';
      const bodyExcerpt = content.split(/\n\n+/)[0] || '';
      const excerpt = excerptFromFrontmatter || bodyExcerpt.slice(0, 220);

      return {
        slug,
        title,
        category,
        type,
        readTime,
        image,
        excerpt,
        publishedAt: frontmatter.publishedAt,
      } as PathologyPost;
    })
    .filter((post) => post.slug && post.title)
    .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
})();
export const Pathologies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => {
    return ['Tout', 'Course à pied', 'Membres supérieurs', 'Kiné de la femme', 'Traumatologie', 'Sports de montagne'];
  }, []);

  const filteredPathos = useMemo(
    () =>
      PATHOLOGY_POSTS.filter(
        (p) => (activeCategory === 'Tout' || p.category === activeCategory || p.type === activeCategory) && p.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [activeCategory, searchTerm],
  );

  return (
    <div className="min-h-screen bg-surface font-sans text-slate-900 selection:bg-primary selection:text-white">
      <SEO title="Pathologies prises en charge" description="Guides pratiques par nos kinésithérapeutes : comprendre vos douleurs et découvrir nos protocoles de soin." />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <main className="w-full max-w-[1400px] px-4 pb-20 pt-24 md:px-6 md:pt-32 mx-auto">
        <div className="animate-fade-in-up mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-3 inline-flex items-center justify-center gap-2 rounded-full border border-primary/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary md:text-sm">
            Encyclopédie
          </span>
          <h1 className="mb-6 text-4xl font-serif text-slate-900 md:text-6xl">
            Comprendre votre <span className="italic text-primary">douleur</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-500">
            Explorez nos guides complets pour mieux appréhender vos symptômes et découvrir nos protocoles de soin.
          </p>

          {/* Search Bar - Hidden as per request */}
          {/* <div className="relative mx-auto mt-8 max-w-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher une pathologie (ex: ménisque, dos...)"
              className="w-full rounded-full border border-slate-200 bg-white px-4 py-4 pl-12 text-slate-700 shadow-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div> */}
        </div>

        <div className="animate-fade-in-up mb-12 flex flex-wrap justify-center gap-3" style={{ animationDelay: '0.1s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-green-900/20'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {filteredPathos.map((patho, idx) => (
            <article
              key={patho.slug}
              className="animate-fade-in-up rounded-[28px] border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/5 overflow-hidden"
              style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
            >
              <Link to={`/pathologies/${patho.slug}`} className="group flex h-full flex-col" aria-label={`Lire ${patho.title}`}>
                <div className="relative h-48 overflow-hidden md:h-56">
                  <img
                    src={patho.image}
                    alt={patho.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary backdrop-blur-sm">
                      {patho.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <h3 className="mb-3 text-xl font-serif text-slate-900 transition-colors group-hover:text-primary md:text-2xl">
                      {patho.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-500">
                      {patho.excerpt || 'Guide complet sur les symptômes, causes et traitements.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                      <BookOpen className="h-4 w-4" />
                      {patho.readTime}
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-4xl rounded-[32px] bg-primary/5 p-8 text-center md:rounded-[48px] md:p-12">
          <h2 className="mb-6 text-3xl font-serif text-primary">Notre approche scientifique</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            Chez Batignolles Kiné Sport, nous ne nous basons pas sur des croyances, mais sur des preuves. Tous nos protocoles de soin sont issus de l'Evidence-Based Practice (EBP), la référence mondiale en kinésithérapie.
          </p>

          <div className="mx-auto mb-10 max-w-2xl rounded-2xl bg-white/50 p-6 text-left md:p-8">
            <p className="mb-4 font-medium text-slate-900">Cela signifie que votre rééducation s'appuie sur :</p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Les dernières données de la recherche scientifique.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>L'expertise clinique de nos praticiens.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Vos objectifs et préférences en tant que patient.</span>
              </li>
            </ul>
          </div>

          <Link
            to="/pathologies/methodologie-ebp"
            className="inline-flex items-center gap-2 border-b-2 border-primary pb-0.5 text-lg font-medium text-primary transition-all hover:border-slate-900 hover:text-slate-900"
          >
            En savoir plus sur notre méthodologie EBP
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Pathologies;
