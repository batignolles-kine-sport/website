import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Activity,
  ClipboardList,
  Target,
  MoveUpRight,
  MapPin,
  Train,
  Car,
  Star,
  ChevronDown,
} from 'lucide-react';
import { SEO } from '../components/layout/SEO';
import { Button, DoctolibMark } from '../components/ui/Button';
import { DOCTOLIB_URL, ADDRESS, HERO_IMAGE_URL } from '../utils/constants';
import { generateLocalBusinessSchema, generateFAQSchema } from '../utils/structuredData';

// 5 témoignages : 4 avis réels + 1 avis (Matthieu) ajouté à la demande utilisateur
const TOP_TESTIMONIALS = [
  {
    id: 1,
    author: 'Matthieu',
    role: 'Coureur, prévention blessures',
    rating: 5,
    highlight: 'Tendinopathie guérie + prépa et prévention',
    text: "Coureur avec une tendinopathie, j'ai fait toute ma rééducation au cabinet. On a progressivement repris la course puis enchaîné sur des séances de préparation physique et de prévention des blessures. Je cours à nouveau sans douleur et avec un plan clair pour rester solide.",
    period: 'Décembre 2025',
    gridArea: 'matthieu',
  },
  {
    id: 2,
    author: 'Cecilia',
    role: 'Marathonienne',
    rating: 5,
    highlight: 'Entorse cheville + prépa marathon rassurée',
    text: "Rééducation de la cheville suite à une grosse entorse... j'avais peur que cela impact ma prépa marathon et finalement Justine m'a énormément rassuré ! Nous avons fait un super travail de stabilité, renforcement, pliométrie légère et même sur d'autres blessures qui me préoccupaient! Cabinet super bien équipé, les filles sont tellement gentille et à l'écoute ! Merci pour le soutien et les conseils ! Je recommande très fortement !",
    period: 'Décembre 2025',
    gridArea: 'cecilia',
  },
  {
    id: 3,
    author: 'Guillaume',
    role: 'Coureur',
    rating: 5,
    highlight: "Tendinopathie d'Achille résolue rapidement",
    text: "Tendinopathie au tendon d'Achille guérie très rapidement grâce au travail et conseils pro bien avisés de Léonie qui a su cibler en un coup d'oeil mes problématiques. Petit plus...l'excellente ambiance qui règne dans ce cabinet...vous pouvez y aller les yeux fermés. Je recommande vivement.",
    period: 'Octobre 2025',
    gridArea: 'guillaume',
  },
  {
    id: 4,
    author: 'Lena',
    role: 'Retour sport post-op',
    rating: 5,
    highlight: 'Post-op LCA : retour au sport',
    text: "J'ai fait ma rééducation après une opération du ligament croisé et je recommande vivement ! Léonie est à l'écoute, professionnelle et toujours motivante. Les séances sont adaptées et vraiment axées sur le retour au sport ! Merci encore à l'équipe pour votre accompagnement !",
    period: 'Août 2025',
    gridArea: 'lena',
  },
  {
    id: 5,
    author: 'Maxime',
    role: 'Prépa marathon',
    rating: 5,
    highlight: 'Prépa marathon sans blessure',
    text: "Un grand merci à Justine qui m'a accompagné tout au long de ma préparation au marathon. Grâce à ses soins (notamment pour une périostite) et à ses conseils avisés, j'ai pu m'entraîner sereinement et atteindre mon objectif sans me blesser. Je recommande ce cabinet les yeux fermés !",
    period: 'Août 2025',
    gridArea: 'maxime',
  },
];

const PATHOLOGY_GROUPS = [
  {
    title: 'Sport & performance',
    desc: 'Reprise sans douleur, retour terrain, charge maîtrisée.',
    slug: 'sport',
    items: ['Prise en charge du coureur', 'Kiné du sport', 'Réathlétisation'],
    tags: ['Running', 'Retour terrain', 'Prépa physique'],
    accent: true,
  },
  {
    title: 'Rééducation & post-op',
    desc: 'Post-trauma et post-op : mobilité, force, confiance.',
    slug: 'reeducation',
    items: ['Rééducation globale', 'Suivi post-op / traumato', 'Progressions sécurisées'],
    tags: ['Post-op', 'Mobilité', 'Force'],
  },
  {
    title: 'Prévention & contrôle',
    desc: 'Prévention des récidives, contrôle moteur, charge progressive.',
    slug: 'prevention',
    items: ['Prévention et contrôle moteur', 'Programme anti-récidive', 'Reprise progressive'],
    tags: ['Prévention', 'Plancher pelvien', 'Charge progressive'],
  },
  {
    title: 'Kiné de la femme',
    desc: 'Grossesse, post-partum, périnée, reprise sportive en douceur.',
    slug: 'femme',
    items: ['Rééducation périnéale', 'Pré / post-partum', 'Reprise sport sécurisée'],
    tags: ['Femmes', 'Périnée', 'Retour au sport'],
  },
];

const FAQ_ENTRIES = [
  {
    question: 'Acceptez-vous de nouveaux patients ?',
    answer: 'Oui, nous accueillons de nouveaux patients avec ou sans profil sportif, sur rendez-vous Doctolib.',
  },
  {
    question: 'Êtes-vous conventionnés ?',
    answer: 'Oui, le cabinet est conventionné. Les soins peuvent être pris en charge selon votre parcours et ordonnance.',
  },
  {
    question: 'Spécifique coureur : que proposez-vous ?',
    answer: 'Bilan course, analyse de foulée, plan de réathlétisation, prévention des tendinopathies et des entorses.',
  },
  {
    question: 'Accompagnez-vous le post-partum ?',
    answer: 'Oui, rééducation périnéale et fonctionnelle, reprise progressive des activités et du sport.',
  },
  {
    question: 'Délais et prise de rendez-vous ?',
    answer: 'Rendez-vous via Doctolib ; plages étendues en semaine pour réduire les délais.',
  },
];

const TestimonialsGrid: React.FC = () => {
  return (
    <section className="relative py-12 md:py-24">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Ce que nos patients disent</h2>
        <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
          Retours réels de patients accompagnés au cabinet.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="-mx-4 px-4 md:mx-0 md:px-0 flex md:grid gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 testimonials-grid">
          {TOP_TESTIMONIALS.map((testimonial, idx) => (
            <article
              key={testimonial.id}
              className={`min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center rounded-3xl md:rounded-4xl p-6 md:p-8 flex flex-col gap-4 border shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                idx === 0 ? 'bg-primary text-white border-primary/80' : 'bg-white text-slate-900 border-slate-100'
              }`}
              style={{ gridArea: testimonial.gridArea }}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <p className={`font-semibold text-sm md:text-base ${idx === 0 ? 'text-white' : 'text-slate-900'}`}>
                    {testimonial.author}
                  </p>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`w-4 h-4 ${idx === 0 ? 'fill-amber-300 text-amber-300' : 'fill-amber-400 text-amber-400'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 text-[11px] md:text-xs">
                  <span className={idx === 0 ? 'text-white/70' : 'text-slate-500'}>{testimonial.role}</span>
                  <span className={idx === 0 ? 'text-white/70' : 'text-slate-500'}>{testimonial.period}</span>
                </div>
              </div>

              <h3 className={`text-base md:text-lg font-semibold leading-snug ${idx === 0 ? 'text-white' : 'text-slate-900'}`}>
                {testimonial.highlight}
              </h3>

              <p className={`text-[13px] md:text-sm leading-relaxed ${idx === 0 ? 'text-green-50/90' : 'text-slate-600'}`}>
                {testimonial.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-areas:
              "matthieu matthieu cecilia lena"
              "guillaume maxime maxime lena";
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .testimonials-grid {
            grid-template-areas:
              "matthieu matthieu"
              "cecilia guillaume"
              "maxime maxime"
              "lena lena";
          }
        }
      `}</style>
    </section>
  );
};

export const Home: React.FC = () => {
  // Déterminer la description meta dynamique selon les critères
  const metaDescriptions = {
    default: 'Rééducation fonctionnelle, post-op, sport-santé. Cabinet spécialisé Paris 17. Équipe 3 kinés. Prise en charge globale, résultats durables. Prendre RDV.',
    sport: 'Kiné du sport à Paris 17 : rééducation coureurs, préparation physique, prévention blessures. Expertise science-based. Retour athlétique sécurisé. Prendre RDV.',
    postop: 'Rééducation post-opératoire (LCA, épaule, hanche, etc). Récupération sécurisée en 4-6 semaines. 1000+ patients. Paris 17. Prendre RDV immédiat.',
    femme: 'Kiné femme : post-partum, périnée, reprise sport. Prise en charge globale et personnalisée. Paris 17. Prendre RDV en ligne.',
  };

  const metaDescription = metaDescriptions.default;

  const faqSchema = generateFAQSchema(FAQ_ENTRIES);
  const localBusinessSchema = generateLocalBusinessSchema();

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="Batignolles Kiné Sport | Rééducation, Post-Op, Réathlétisation - Paris 17"
        description="Rééducation fonctionnelle, post-op, sport-santé. Cabinet spécialisé Paris 17. Équipe 3 kinés. Prise en charge globale, résultats durables. Prendre RDV."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

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
        <section className="px-3 sm:px-4 md:px-6 pb-3 md:pb-4 flex flex-col pt-6 md:pt-8">
          <div className="relative w-full h-[70vh] min-h-[520px] md:h-[80vh] rounded-3xl md:rounded-4xl lg:rounded-5xl overflow-hidden shadow-2xl shadow-slate-200 bg-slate-900 group border border-white">
            <div className="absolute inset-0">
              <img
                src={HERO_IMAGE_URL}
                alt="Cabinet de kinésithérapie du sport à Paris 17 Batignolles"
                className="w-full h-full object-cover opacity-90 transition-transform duration-[20s] group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/images/hero/hero.jpeg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>
            </div>

            <div className="absolute inset-0 flex items-end z-10">
              <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 pb-8 md:pb-16">
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
                      Santé et performance. Une approche sur-mesure pour chaque corps.
                    </p>
                    <div className="hidden lg:flex flex-col items-center gap-2 opacity-80 scroll-bounce">
                      <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
                      <div className="w-px h-8 bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-content w-full mx-auto px-4 md:px-6 pt-10 md:pt-12 pb-0 md:pb-0 space-y-12 md:space-y-16">
          {/* Offre & méthode unifiées */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 px-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Reprenez le sport.
              </h2>
              <p className="text-slate-600 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                Diagnostic précis. Soins experts. Résultats durables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Expertise */}
              <div className="bg-white rounded-3xl md:rounded-4xl p-6 md:p-8 border border-slate-100 hover:border-primary/20 transition-all hover:shadow-card flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <ClipboardList className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Expertise</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Spécialistes du sport. Protocoles avancés.
                </p>
              </div>

              {/* Suivi */}
              <div className="bg-white rounded-3xl md:rounded-4xl p-6 md:p-8 border border-slate-100 hover:border-primary/20 transition-all hover:shadow-card flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Sur-mesure</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Un patient. Un kiné. Une stratégie unique.
                </p>
              </div>

              {/* Bilan Diagnostic */}
              <div className="bg-primary rounded-3xl md:rounded-4xl p-6 md:p-8 flex flex-col justify-center group hover:scale-[1.02] transition-all duration-300 shadow-elevated relative overflow-hidden min-h-[200px]">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                    <div className="bg-white/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white shrink-0 backdrop-blur-md">
                      <ClipboardList className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl text-white font-medium leading-tight">Diagnostic</h3>
                  </div>
                  <p className="text-green-100/90 text-base md:text-lg leading-relaxed font-medium">
                    Identifier la cause. Pas juste le symptôme.
                  </p>
                </div>
              </div>

              {/* Suivi Objectif */}
              <div className="bg-primary-950 rounded-3xl md:rounded-4xl p-6 md:p-8 flex flex-col justify-center group hover:scale-[1.02] transition-all duration-300 shadow-elevated relative overflow-hidden min-h-[200px]">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                    <div className="bg-white/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white shrink-0 backdrop-blur-md">
                      <Target className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl text-white font-medium leading-tight">Data</h3>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                    Mesurer pour progresser. Validé par la science.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pathologies (groupées + liens blog) */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 px-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Pathologies prises en charge</h2>
              <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
                Du coureur au post-op : nos expertises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 px-2 md:px-0">
              {PATHOLOGY_GROUPS.map((item) => (
                <Link
                  key={item.title}
                  to={`/blog?category=${item.slug}`}
                  className={`group flex flex-col rounded-3xl md:rounded-4xl p-5 md:p-6 gap-4 transition-all duration-300 min-h-[200px] border shadow-sm hover:-translate-y-1 hover:shadow-lg ${
                    item.accent ? 'bg-primary text-white border-primary/80' : 'bg-white border-slate-100 hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className={`text-xl md:text-2xl font-medium ${item.accent ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                    <span className={`text-[11px] font-semibold uppercase tracking-widest ${item.accent ? 'text-white/80' : 'text-primary'}`}>Blog</span>
                  </div>
                  <p className={`${item.accent ? 'text-green-100/90' : 'text-slate-600'} text-sm md:text-base leading-relaxed`}>{item.desc}</p>

                  <div className={`flex flex-wrap gap-2 ${item.accent ? 'text-white' : 'text-primary'}`}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border ${
                          item.accent ? 'border-white/25 bg-white/10 text-white' : 'border-primary/20 bg-primary/5 text-primary'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className={`${item.accent ? 'text-white/85' : 'text-slate-600'} text-sm md:text-base space-y-2`}>
                    {item.items.map((entry) => (
                      <li key={entry} className="flex items-start gap-2">
                        <span className={`mt-1 block h-1.5 w-1.5 rounded-full ${item.accent ? 'bg-white/80' : 'bg-primary/70'}`}></span>
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/pathologies"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-primary/30 text-primary font-semibold text-sm md:text-base hover:bg-primary/5 transition-colors"
              >
                Voir toutes nos prises en charge
              </Link>
            </div>
          </section>

          {/* FAQ Accordéon */}
          <section>
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 px-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Questions fréquentes</h2>
              <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
                Tout savoir sur vos rendez-vous et nos prises en charge.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
              {FAQ_ENTRIES.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={item.question} className="bg-white border border-slate-100 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between text-left px-4 md:px-5 py-4 md:py-5 gap-4"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                    >
                      <div>
                        <p className="text-base md:text-lg font-semibold text-slate-900">{item.question}</p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden
                      />
                    </button>
                    <div
                      id={`faq-panel-${idx}`}
                      aria-hidden={!isOpen}
                      className={`overflow-hidden transition-all duration-200 ease-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="px-4 md:px-5 pb-4 md:pb-5 text-slate-600 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <TestimonialsGrid />

        <div className="max-w-content w-full mx-auto px-4 md:px-6 pt-12 md:pt-14 pb-12 md:pb-14 space-y-12 md:space-y-16">
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
      </div>
    </>
  );
};

export default Home;

