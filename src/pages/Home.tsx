import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ClipboardList,
  Target,
  ArrowRight,
  MoveUpRight,
  MapPin,
  Train,
  Car,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { SEO } from '../components/layout/SEO';
import { Button, DoctolibMark } from '../components/ui/Button';
import { DOCTOLIB_URL, SERVICES, ADDRESS, HERO_IMAGE_URL } from '../utils/constants';
import reviewsData from '../data/avis.json';

type ReviewCard = {
  author: string;
  firstName: string;
  rating: number;
  text: string;
  date?: string;
  period?: string;
};

const REVIEW_CARDS: ReviewCard[] = (reviewsData?.avis ?? []).map((review) => ({
  author: review.auteur,
  firstName: (review.auteur ?? '').split(' ')[0] || review.auteur,
  rating: review.note ?? 5,
  text: review.commentaire,
  date: review.date,
  period: review.date_visite,
}));

// Sélection des 8 meilleurs avis représentatifs
const FEATURED_REVIEWS = [
  REVIEW_CARDS[0],  // Cecilia - Marathon + entorse cheville
  REVIEW_CARDS[1],  // Guillaume - Tendon d'Achille + ambiance
  REVIEW_CARDS[4],  // Lena - LCA (ligament croisé)
  REVIEW_CARDS[2],  // Inès - Disponibilité + 2 pieds/chevilles
  REVIEW_CARDS[3],  // Lucille - Genoux et chevilles
  REVIEW_CARDS[5],  // Avis suivant
  REVIEW_CARDS[6],  // Avis suivant
  REVIEW_CARDS[7],  // Avis suivant
].filter(Boolean).slice(0, 8);

const ReviewsCarousel: React.FC = () => {
  const itemsPerPage = 3;
  const pageCount = Math.ceil(FEATURED_REVIEWS.length / itemsPerPage);
  const [pageIndex, setPageIndex] = useState(0);
  
  const handlePrev = () => {
    setPageIndex((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setPageIndex((prev) => (prev === pageCount - 1 ? 0 : prev + 1));
  };

  const start = pageIndex * itemsPerPage;
  const visibleReviews = FEATURED_REVIEWS.slice(start, start + itemsPerPage);

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="relative py-16 md:py-20">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <span className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          Témoignages
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
          Ce que nos clients disent
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          36 avis clients. Les meilleurs résultats viennent d'une prise en charge adaptée et d'une véritable relation de confiance.
        </p>
      </div>

      {/* Carrousel */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {visibleReviews.map((review, idx) => {
            const cardKey = `${review.author}-${pageIndex}-${idx}`;
            const isExpanded = expanded[cardKey];

            return (
              <div
                key={cardKey}
                className="bg-white rounded-3xl md:rounded-5xl p-6 md:p-8 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col animate-fade-in"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`w-4 h-4 ${starIndex < review.rating ? 'fill-warning text-warning' : 'text-slate-200'}`}
                    />
                  ))}
                </div>

                {/* Review Text with clamp + expand */}
                <div className="relative mb-0 space-y-2">
                  <p
                    className={`text-slate-700 text-sm md:text-base leading-relaxed italic ${
                      isExpanded ? '' : 'line-clamp-6'
                    }`}
                  >
                    "{review.text}"
                  </p>
                  {!isExpanded && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-6 h-6 bg-gradient-to-t from-white via-white/80 to-transparent" />
                  )}
                  <button
                    onClick={() => toggleExpand(cardKey)}
                    className="mt-2 text-xs font-semibold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors"
                  >
                    {isExpanded ? 'Voir moins' : 'Lire la suite'}
                  </button>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-serif text-base shrink-0">
                    {review.firstName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{review.firstName}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      {review.period ? `${review.period} 2025` : '2025'}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all"
            aria-label="Avis précédent"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-1">
            {Array.from({ length: pageCount }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPageIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === pageIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Page ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all"
            aria-label="Avis suivant"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Kiné du Sport Batignolles | Paris 17"
        description="Rééducation du coureur & kiné du sport aux Batignolles. Bilan complet, suivi personnalisé. 6 rue des Batignolles, 75017. RDV Doctolib."
      />

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 240s linear infinite; }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .scroll-bounce { animation: scroll-bounce 1.4s ease-in-out infinite; }
      `}</style>

      <div className="bg-surface min-h-screen text-slate-900">
        {/* Hero */}
        <section className="px-3 sm:px-4 md:px-6 pb-6 flex flex-col pt-6 md:pt-8">
          <div className="relative w-full h-[70vh] min-h-[520px] md:h-[80vh] rounded-3xl md:rounded-4xl lg:rounded-5xl overflow-hidden shadow-2xl shadow-slate-200 bg-slate-900 group border border-white">
            <div className="absolute inset-0">
              <img
                src={HERO_IMAGE_URL}
                alt="Devanture Batignolles Kiné Sport"
                className="w-full h-full object-cover opacity-90 transition-transform duration-[20s] group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/images/hero/hero.jpeg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 lg:p-16 pb-8 md:pb-16 z-10">
              <div className="max-w-content mx-auto w-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Rééducation', 'Kiné du sport', 'Préparation physique'].map((badge) => (
                    <span
                      key={badge}
                      className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-2xs sm:text-xs md:text-sm font-medium tracking-wide"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95] mb-6 drop-shadow-lg">
                  Batignolles
                  <br />
                  Kiné Sport
                </h1>

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mt-4">
                  <p className="text-gray-200 text-sm sm:text-base md:text-xl max-w-xl font-light leading-relaxed">
                    Rééducation du coureur & Performance. Protocoles de réathlétisation, thérapie manuelle et bilan complet au cœur des Batignolles.
                  </p>
                  <div className="hidden lg:flex flex-col items-center gap-2 opacity-80 scroll-bounce">
                    <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-8 bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-content w-full mx-auto px-4 md:px-6 py-12 md:py-20 space-y-20 lg:space-y-28">
          {/* Pourquoi BKS */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-slate-900">Pourquoi BKS ?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-3xl md:rounded-4xl p-6 md:p-8 border border-slate-100 hover:border-primary/20 transition-all hover:shadow-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <ClipboardList className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Expertise Technique</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Équipe de 3 kinés spécialistes du sport. Maîtrise des protocoles de réathlétisation et thérapie manuelle orthopédique pour votre retour au terrain.
                </p>
              </div>

              <div className="bg-white rounded-3xl md:rounded-4xl p-6 md:p-8 border border-slate-100 hover:border-primary/20 transition-all hover:shadow-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Suivi Personnalisé</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Bilan initial complet, rééducation sur-mesure, tests fonctionnels. Pas de travail à la chaîne. Chaque séance adaptée à vos objectifs.
                </p>
              </div>

              <div className="bg-white rounded-3xl md:rounded-4xl p-6 md:p-8 border border-slate-100 hover:border-primary/20 transition-all hover:shadow-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Emplacement Idéal</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Au cœur des Batignolles, 6 rue des Batignolles. Accès direct Métro Rome (L2) et Place de Clichy. Cabinet moderne et équipé.
                </p>
              </div>
            </div>
          </section>

          {/* Expertise Bento */}
          <section>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8 md:mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] text-slate-900 mb-4">
                  Votre santé en mouvement.
                  <br />
                  <span className="text-primary">L'expertise au service du geste.</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  Reprendre la course, le foot ou le crossfit sans douleur après blessure.
                </p>
              </div>
              <div className="lg:max-w-xs">
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  Une prise en charge fondée sur les preuves pour comprendre votre pathologie et pérenniser vos résultats.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="lg:col-span-2 bg-white rounded-3xl md:rounded-5xl p-6 md:p-10 relative overflow-hidden group transition-all duration-500 hover:shadow-card border border-slate-100">
                <div className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -mr-10 -mt-10 md:-mr-20 md:-mt-20 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[240px] md:min-h-[300px]">
                  <div className="flex justify-between items-start">
                    <div className="bg-surface-muted w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-primary/10">
                      <Activity className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                    </div>
                    <div className="relative w-16 h-16 md:w-20 md:h-20 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 hidden sm:block">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/10" />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray="283"
                          strokeDashoffset="70"
                          className="text-primary"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <MoveUpRight className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium mb-3 text-slate-900">Kinésithérapie du Sport</h3>
                    <p className="text-slate-600 text-sm md:text-base max-w-lg leading-relaxed mb-4 md:mb-6">
                      De la phase aiguë au retour terrain. Réathlétisation et performance sans douleur.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Traumatologie', 'Prévention', 'Performance'].map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface px-3 py-1.5 md:px-4 md:py-2 rounded-full text-primary text-2xs md:text-xs font-semibold border border-slate-100 uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 md:gap-6 lg:col-span-1">
                <div className="bg-primary rounded-3xl md:rounded-5xl p-6 md:p-8 flex-1 flex flex-col justify-center group hover:scale-[1.02] transition-all duration-300 shadow-elevated relative overflow-hidden min-h-[160px]">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                      <div className="bg-white/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white shrink-0 backdrop-blur-md">
                        <ClipboardList className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <h3 className="text-lg md:text-xl text-white font-medium leading-tight">Bilan
                        <br />Diagnostic
                      </h3>
                    </div>
                    <p className="text-green-100/80 text-xs md:text-sm leading-relaxed">
                      Analyse précise de la motricité pour identifier la cause réelle de vos symptômes.
                    </p>
                  </div>
                </div>

                <div className="bg-primary-950 rounded-3xl md:rounded-5xl p-6 md:p-8 flex-1 flex flex-col justify-center group hover:scale-[1.02] transition-all duration-300 shadow-elevated relative overflow-hidden min-h-[160px]">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                      <div className="bg-white/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white shrink-0 backdrop-blur-md">
                        <Target className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <h3 className="text-lg md:text-xl text-white font-medium leading-tight">Suivi
                        <br />Objectif
                      </h3>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      Tests fonctionnels et mesures data pour valider chaque étape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pathologies */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 px-4">
              <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase mb-3 block">Nos domaines</span>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-slate-900">Pathologies prises en charge</h2>
              <p className="text-slate-500 text-sm md:text-lg">
                Du soin post-opératoire à la préparation physique, nous couvrons l'ensemble de vos besoins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {SERVICES.slice(0, 3).map((service, index) => (
                <div
                  key={service.id}
                  className={`rounded-3xl md:rounded-5xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 min-h-[280px] md:min-h-[320px] border ${
                    index === 0
                      ? 'bg-primary text-white border-primary hover:shadow-elevated'
                      : 'bg-white border-slate-100 hover:border-primary/20 hover:shadow-card'
                  }`}
                >
                  <div>
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 ${
                        index === 0 ? 'bg-white/10 text-white' : 'bg-surface-muted text-primary'
                      }`}
                    >
                      <service.icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <h3 className={`text-xl md:text-2xl font-medium mb-2 md:mb-3 ${index === 0 ? 'text-white' : 'text-slate-900'}`}>
                      {service.title}
                    </h3>
                    <p className={`${index === 0 ? 'text-green-100/80' : 'text-slate-500'} text-sm md:text-base leading-relaxed mb-4`}>
                      {service.shortDescription}
                    </p>
                  </div>
                  <Link
                    to={service.path}
                    className={`inline-flex items-center text-xs md:text-sm font-semibold tracking-wide gap-2 group-hover:gap-4 transition-all uppercase ${
                      index === 0 ? 'text-white' : 'text-primary'
                    }`}
                  >
                    En savoir plus <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          
          {/* Ancrage Local */}
          <section className="bg-gradient-to-br from-primary/5 to-white rounded-4xl p-8 md:p-12 border border-primary/10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                Votre cabinet au cœur des Batignolles
              </h2>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                Situé à deux pas du Parc Martin Luther King et de la Place de Clichy, notre cabinet de kinésithérapie du sport vous accueille au 6 rue des Batignolles, 75017 Paris. Facilement accessible depuis le Métro Rome (ligne 2), nous accompagnons quotidiennement coureurs, sportifs et actifs du quartier vers leurs objectifs de performance et de récupération.
              </p>
            </div>
          </section>

          {/* Location */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="bg-white rounded-4xl p-8 md:p-10 shadow-card border border-slate-100 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900 mb-6">Nous trouver</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Adresse</h4>
                        <p className="text-slate-600">{ADDRESS}</p>
                        <div className="mt-2 space-y-1 text-sm text-slate-500">
                          <p className="flex items-center"><Train size={14} className="mr-2" /> Métro Rome (L2)</p>
                          <p className="flex items-center"><Train size={14} className="mr-2" /> Place de Clichy (L2, L13)</p>
                          <p className="flex items-center"><Train size={14} className="mr-2" /> Gare Haussmann St-Lazare (RER A, E)</p>
                          <p className="flex items-center"><Car size={14} className="mr-2" /> Parking Mairie du 17ème (20 Rue des Batignolles)</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Activity className="text-primary mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900">Horaires</h4>
                        <p className="text-slate-600">Lundi - Vendredi : 8h00 - 21h00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button href={DOCTOLIB_URL} variant="primary" className="shadow-xl">
                    <DoctolibMark className="mr-1.5" inverted />
                    Prendre rendez-vous sur Doctolib
                  </Button>
                </div>
              </div>
              <div className="h-full min-h-map w-full rounded-4xl overflow-hidden shadow-card bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.68397904634!2d2.321234876520314!3d48.88330069895298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd1fdf67bd%3A0x49cb2ecbd1bf21c1!2sBatignolles%20Kiné%20Sport%20%7C%20Paris%2017!5e0!3m2!1sfr!2sfr!4v1765299373175!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte Google Maps"
                ></iframe>
              </div>
            </div>
          </section>
        </div>

        {/* Avis plein écran */}
        <div className="py-12 md:py-20">
          <ReviewsCarousel />
        </div>
      </div>
    </>
  );
};

export default Home;
