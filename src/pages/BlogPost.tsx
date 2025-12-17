import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { SEO } from '../components/layout/SEO';
import { StructuredData } from '../components/layout/StructuredData';
import { Button, DoctolibMark } from '../components/ui/Button';
import { BLOG_POSTS, DOCTOLIB_URL } from '../utils/constants';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        type="article"
        author={post.author}
        publishedTime={post.date}
        image={post.image}
        keywords={[post.category, 'kinésithérapie', 'rééducation']}
      />
      <StructuredData 
        type="Article" 
        article={{
          headline: post.title,
          description: post.excerpt,
          author: post.author,
          datePublished: post.date,
          image: post.image
        }}
      />

      <article className="bg-white pb-20">
        {/* Header Image */}
        <div className="w-full h-[40vh] md:h-[50vh] relative">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl px-4 text-center text-white">
              <span className="inline-block bg-primary px-3 py-1 rounded text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-sm md:text-base text-gray-200">
                <span className="flex items-center">
                  <User size={16} className="mr-2" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-10 relative z-10">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <Link to="/blog" className="inline-flex items-center text-sm text-text-light hover:text-primary mb-8">
              <ArrowLeft size={16} className="mr-1" /> Retour au blog
            </Link>

            <div className="prose prose-lg prose-headings:text-text-main prose-p:text-text-light prose-a:text-primary hover:prose-a:text-primary-hover max-w-none">
              <p className="lead text-xl text-text-main font-medium mb-8">
                {post.excerpt}
              </p>
              
              {/* Simulated Content Structure since we don't have a real CMS backend */}
              <p>
                {post.content}
              </p>
              
              <h2>Pourquoi consulter un kiné ?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              {/* CTA in content */}
              <div className="my-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Besoin d'un suivi personnalisé ?</h3>
                <p className="text-slate-600 mb-4">
                  Notre équipe de kinésithérapeutes du sport est là pour vous accompagner dans votre rééducation.
                </p>
                <Button href={DOCTOLIB_URL} variant="primary">
                  <DoctolibMark className="mr-2" inverted />
                  Prendre rendez-vous maintenant
                </Button>
              </div>
              
              <h3>Les étapes de la rééducation</h3>
              <ul>
                <li>Phase 1 : Contrôle de la douleur</li>
                <li>Phase 2 : Récupération de la mobilité</li>
                <li>Phase 3 : Renforcement musculaire</li>
                <li>Phase 4 : Réathlétisation</li>
              </ul>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              {/* Related articles section - Internal Linking */}
              <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Articles connexes</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/pathologies/entorse-cheville" className="text-primary hover:underline font-medium">
                      → Entorse de cheville : guide complet de rééducation
                    </Link>
                  </li>
                  <li>
                    <Link to="/pathologies" className="text-primary hover:underline font-medium">
                      → Découvrir toutes nos pathologies prises en charge
                    </Link>
                  </li>
                  <li>
                    <Link to="/equipe" className="text-primary hover:underline font-medium">
                      → Rencontrer nos kinésithérapeutes spécialisés
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Share & CTA */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <span className="font-bold text-text-main">Partager :</span>
                  <button className="p-2 rounded-full bg-secondary hover:bg-gray-200 transition-colors">
                    <Share2 size={20} className="text-text-main" />
                  </button>
                </div>
                <div className="w-full sm:w-auto">
                  <Button href={DOCTOLIB_URL} fullWidth>
                    <DoctolibMark className="mr-2" inverted />
                    Prendre rendez-vous sur Doctolib
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts (Mock) */}
        <div className="max-w-5xl mx-auto px-4 mt-16">
          <h3 className="text-2xl font-bold text-text-main mb-8">Articles similaires</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3).map(p => (
               <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
                 <div className="bg-secondary rounded-lg overflow-hidden h-full flex flex-col">
                   <img src={p.image} alt={p.title} className="h-40 w-full object-cover group-hover:opacity-90 transition-opacity" />
                   <div className="p-4">
                     <h4 className="font-bold text-text-main group-hover:text-primary mb-2 line-clamp-2">{p.title}</h4>
                   </div>
                 </div>
               </Link>
             ))}
          </div>
        </div>
      </article>
    </>
  );
};