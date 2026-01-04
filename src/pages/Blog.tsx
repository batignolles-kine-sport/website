import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, User, Activity, Hand, AlignVerticalJustifyCenter, Heart, Phone, Mail } from 'lucide-react';
import { AdvancedImage, responsive, lazyload, placeholder } from '@cloudinary/react';
import { SEO } from '../components/layout/SEO';
import { SectionHeader } from '../components/ui/SectionHeader';
import { getResponsiveImage, pathToPublicId, isCloudinaryImage } from '../utils/cloudinary';
import { PHONE, EMAIL } from '../utils/constants';
import { toTelHref } from '../utils/helpers';

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

type BlogPost = {
  slug: string;
  title: string;
  category: string;
  type: string;
  readTime: string;
  image: string;
  excerpt: string;
  publishedAt?: string;
  author?: string;
  date?: string;
};

// Load markdown posts at build time
const BLOG_POSTS: BlogPost[] = (() => {
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
        author: 'Équipe BKS',
        date: frontmatter.publishedAt || 'Récemment',
      } as BlogPost;
    })
    .filter((post) => post.slug && post.title)
    .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));
})();

// Category groups configuration
const CATEGORY_GROUPS = {
  'Membre Inférieur': {
    icon: Activity,
    categories: ['Genou', 'Cheville', 'Hanche', 'Cuisse', 'Jambe', 'Pied'],
    color: 'from-blue-500 to-blue-600',
  },
  'Membre Supérieur': {
    icon: Hand,
    categories: ['Épaule', 'Coude', 'Poignet'],
    color: 'from-purple-500 to-purple-600',
  },
  'Rachis & Tronc': {
    icon: AlignVerticalJustifyCenter,
    categories: ['Dos', 'Tête'],
    color: 'from-green-500 to-green-600',
  },
  'Kiné de la femme': {
    icon: Heart,
    categories: ['Grossesse', 'Post-partum', 'Périnée'],
    color: 'from-pink-500 to-pink-600',
  },
  'Autres thématiques': {
    icon: Activity,
    categories: ['Prévention', 'Os'],
    color: 'from-orange-500 to-orange-600',
  },
} as const;

// Memoized BlogCard component to prevent re-renders
const BlogCard = React.memo(({ post }: { post: BlogPost }) => {
  return (
    <article className="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
        {isCloudinaryImage(post.image) ? (
          <AdvancedImage
            cldImg={getResponsiveImage(pathToPublicId(post.image), '16:10')}
            plugins={[lazyload(), responsive({ steps: [480, 640, 768] }), placeholder('blur')]}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            alt={post.title}
          />
        ) : (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-text-muted mb-3 space-x-3">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded font-medium">
            {post.category}
          </span>
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </span>
        </div>
        <Link to={`/blog/${post.slug}`} className="group">
          <h2 className="text-xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-text-muted text-sm line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
          <div className="flex items-center text-xs text-text-muted">
            <User size={14} className="mr-1" />
            {post.author}
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            Lire l'article
          </Link>
        </div>
      </div>
    </article>
  );
});

BlogCard.displayName = 'BlogCard';


export const Blog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const POSTS_PER_PAGE = 11;

  const slugifyCategory = (category: string) =>
    (category || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-z0-9]+/g, '-');

  const activeCategory = searchParams.get('category') || '';
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  // Get all unique categories from posts
  const allCategories = useMemo(
    () => Array.from(new Set(BLOG_POSTS.map((post) => post.category))),
    []
  );

  // Count articles per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    BLOG_POSTS.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Count articles per group
  const groupCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    Object.entries(CATEGORY_GROUPS).forEach(([groupName, group]) => {
      counts[groupName] = group.categories.reduce(
        (sum, cat) => sum + (categoryCounts[cat] || 0),
        0
      );
    });
    return counts;
  }, [categoryCounts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    if (activeCategory) {
      return BLOG_POSTS.filter(
        (post) => slugifyCategory(post.category) === activeCategory.toLowerCase()
      );
    }
    return BLOG_POSTS;
  }, [activeCategory]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const handleCategoryClick = (category: string) => {
    const slug = slugifyCategory(category);
    setSearchParams(slug ? { category: slug, page: '1' } : { page: '1' });
    setFlippedCard(null);
  };

  const handleResetFilters = () => {
    setSearchParams({ page: '1' });
    setFlippedCard(null);
  };

  const handleCardClick = (groupName: string) => {
    setFlippedCard(flippedCard === groupName ? null : groupName);
  };

  const handlePageChange = (page: number) => {
    const params: Record<string, string> = { page: page.toString() };
    if (activeCategory) {
      params.category = activeCategory;
    }
    setSearchParams(params);
    // Scroll to top of articles section
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Blog Kiné Sport & Santé"
        description="Conseils, exercices et actualités santé par les kinésithérapeutes de Batignolles Kiné Sport. Prévention, rééducation et performance."
      />

      <div className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <SectionHeader
              badge="BLOG"
              level="h1"
              title={
                <>
                  Le blog <br /> <span className="text-gradient-primary">Batignolles Kiné Sport</span>
                </>
              }
              description="Conseils d'experts pour votre santé et votre performance."
            />
          </div>
        </div>
      </div>

      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flip Card Category Groups */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-main">Explorer par thématique</h3>
              {activeCategory && (
                <button
                  onClick={handleResetFilters}
                  className="text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {Object.entries(CATEGORY_GROUPS).map(([groupName, group]) => {
                const Icon = group.icon;
                const count = groupCounts[groupName] || 0;
                const isFlipped = flippedCard === groupName;
                const availableCategories = group.categories.filter((cat) => allCategories.includes(cat));

                return (
                  <div
                    key={groupName}
                    className="flip-card-container h-40"
                    onMouseEnter={() => window.innerWidth >= 768 && setFlippedCard(groupName)}
                    onMouseLeave={() => window.innerWidth >= 768 && setFlippedCard(null)}
                  >
                    <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                      {/* Front Face */}
                      <div className="flip-card-face flip-card-front">
                        <button
                          onClick={() => handleCardClick(groupName)}
                          className="w-full h-full p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300 text-left"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${group.color}`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-text-muted">
                              {count} article{count > 1 ? 's' : ''}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-text-main mb-1">{groupName}</h4>
                          <p className="text-xs text-text-muted">
                            {group.categories.slice(0, 3).join(', ')}
                            {group.categories.length > 3 && '...'}
                          </p>
                        </button>
                      </div>

                      {/* Back Face */}
                      <div className="flip-card-face flip-card-back">
                        <div className="w-full h-full p-4 rounded-xl border-2 border-primary bg-gradient-to-br from-white to-gray-50">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xs font-medium text-gray-500">Sélectionner une zone</h4>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setFlippedCard(null);
                              }}
                              className="text-xs text-text-muted hover:text-primary transition-colors md:hidden"
                            >
                              Retour
                            </button>
                          </div>
                          {(() => {
                            const isMultiColumn = availableCategories.length > 3;
                            return (
                              <div className={`grid gap-1.5 ${isMultiColumn ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                {availableCategories.map((category) => {
                                  const slug = slugifyCategory(category);
                                  const isActive = activeCategory === slug;
                                  const categoryCount = categoryCounts[category] || 0;

                                  // Check if category name is long (more than 12 characters) only in multi-column layout
                                  const isLongName = isMultiColumn && category.length > 12;

                                  return (
                                    <button
                                      key={category}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleCategoryClick(category);
                                      }}
                                      className={`px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all text-left ${isLongName ? 'col-span-2' : ''} ${isActive
                                        ? 'bg-primary text-white border-primary shadow-md'
                                        : 'bg-white border-gray-300 text-slate-700 hover:border-primary/60 hover:shadow-sm'
                                        }`}
                                    >
                                      <span className="block truncate">{category} <span className="text-[10px] opacity-75">({categoryCount})</span></span>
                                    </button>
                                  );
                                })}
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}

            {/* Contact Card - Always displayed as last card */}
            <article className="flex flex-col bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover:border-primary/40">
              <div className="p-6 flex flex-col flex-grow justify-center items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">
                  Vous ne trouvez pas ce que vous cherchez ?
                </h3>
                <p className="text-text-muted text-sm mb-6 leading-relaxed">
                  Cela ne veut pas dire que nous ne pouvons pas vous accompagner. Contactez-nous par téléphone ou mail pour obtenir davantage de renseignements.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a
                    href={toTelHref(PHONE)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Phone size={18} />
                    Appeler
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                  >
                    <Mail size={18} />
                    Nous écrire
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold text-slate-700 hover:border-primary/60 hover:shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-300"
              >
                Précédent
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage =
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1);

                  const showEllipsis =
                    (page === currentPage - 2 && currentPage > 3) ||
                    (page === currentPage + 2 && currentPage < totalPages - 2);

                  if (showEllipsis) {
                    return <span key={page} className="px-2 text-text-muted">...</span>;
                  }

                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[40px] h-10 rounded-lg text-sm font-semibold transition-all ${currentPage === page
                        ? 'bg-primary text-white shadow-md'
                        : 'border border-gray-300 text-slate-700 hover:border-primary/60 hover:shadow-sm'
                        }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold text-slate-700 hover:border-primary/60 hover:shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-gray-300"
              >
                Suivant
              </button>
            </div>
          )}

          {/* No results message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg mb-4">Aucun article trouvé dans cette catégorie.</p>
              <button
                onClick={handleResetFilters}
                className="text-primary font-semibold hover:underline"
              >
                Voir tous les articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};