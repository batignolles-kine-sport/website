import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { SEO } from '../components/layout/SEO';
import { BLOG_POSTS } from '../utils/constants';

export const Blog: React.FC = () => {
  return (
    <>
      <SEO 
        title="Blog Kiné Sport & Santé" 
        description="Conseils, exercices et actualités santé par les kinésithérapeutes de Batignolles Kiné Sport. Prévention, rééducation et performance." 
      />

      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-text-main mb-4">Le Blog BKS</h1>
          <p className="text-xl text-text-light">
            Conseils d'experts pour votre santé et votre performance.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-text-light mb-3 space-x-3">
                    <span className="bg-accent-light text-primary px-2 py-1 rounded font-medium">
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
                  <p className="text-text-light text-sm line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                    <div className="flex items-center text-xs text-text-light">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                      Lire l'article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};