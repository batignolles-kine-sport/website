import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Activity,
  ClipboardList,
  MapPin,
  Train,
  Car,
  ChevronDown,
  Footprints,
} from 'lucide-react';
import { SEO } from '../components/layout/SEO';
import { Button } from '../components/ui/Button';
import { DOCTOLIB_URL, ADDRESS, HERO_IMAGE_URL, GOOGLE_MAPS_URL } from '../utils/constants';
import { generateLocalBusinessSchema, generateFAQSchema } from '../utils/structuredData';
import reviewsData from '../data/avis.json';

const CUSTOMER_CASES = [
  {
    id: 'runner-achilles',
    title: 'Coureur, tendinopathie',
    quote: "Tendinopathie d’Achille, j’ai repris la course sans douleur avec un plan clair et des repères simples pour ne pas rechuter.",
    author: 'Guillaume',
    role: 'coureur',
  },
  {
    id: 'ankle-marathon',
    title: 'Entorse + prépa marathon',
    quote: "Grosse entorse en pleine prépa marathon. On a reconstruit la cheville, ajusté l’entraînement et j’ai pu courir mon marathon sereinement.",
    author: 'Cecilia',
    role: 'marathonienne',
  },
  {
    id: 'acl-postop',
    title: 'Post-op LCA',
    quote: "Après mon opération du ligament croisé, chaque séance m’a rapproché du terrain. J’ai retrouvé force, confiance et envie de rejouer.",
    author: 'Lena',
    role: 'retour au sport',
  },
  {
    id: 'postpartum',
    title: 'Post-partum',
    quote: "Après mon accouchement, j’étais perdue sur la reprise du sport. On a travaillé périnée, renforcement et rythme : j’ai pu reprendre en confiance.",
    author: 'Marine',
    role: 'post‑partum',
  },
];

const FOR_WHO_CARDS = [
  {
    badge: 'Course',
    title: 'Vous courez (ou voulez recourir)',
    lead: 'Reprendre progressivement, sans repartir à zéro.',
    highlights: [
      'Bilan précis + repères simples (douleur, charge, fréquence).',
      'Plan de reprise compatible avec vos contraintes et objectifs.',
      'Réduction du risque de rechute (technique, renfo, gestion de charge).',
    ],
  },
  {
    badge: 'Post‑op / Trauma',
    title: 'Après une opération ou un traumatisme',
    lead: 'Retrouver mobilité, force et confiance — étape par étape.',
    highlights: [
      'Objectifs clairs à chaque séance, progression mesurable.',
      'Renforcement, contrôle moteur, réassurance du mouvement.',
      'Retour au sport encadré, avec des critères concrets.',
    ],
  },
  {
    badge: 'Post‑partum',
    title: 'Post‑partum & plancher pelvien',
    lead: 'Reprendre le sport en sécurité, en comprenant ce qui se passe.',
    highlights: [
      'Rééducation périnéale et prise en charge globale.',
      'Reprise progressive adaptée au quotidien (fatigue, temps, rythme).',
      'Renforcement et repères pour éviter les symptômes qui reviennent.',
    ],
  },
  {
    badge: 'Prévention',
    title: 'Prévention & préparation physique',
    lead: 'Rester durablement sur le terrain, sans accumuler les alertes.',
    highlights: [
      'Renforcement ciblé, contrôle moteur, technique et charge.',
      'Préparer une saison ou une échéance sportive.',
      'Stratégies simples pour limiter les récidives.',
    ],
  },
];

const FAQ_ENTRIES = [
  {
    question: 'Acceptez-vous de nouveaux patients ?',
    answer: 'Oui, nous accueillons de nouveaux patients chaque semaine, avec des créneaux dédiés au premier bilan.',
  },
  {
    question: 'Êtes-vous conventionnés ?',
    answer: "Oui, nous sommes conventionnés. Une partie des séances est remboursée par l’Assurance Maladie et votre mutuelle selon votre situation.",
  },
  {
    question: 'Spécifique coureur : que proposez-vous ?',
    answer:
      'Bilan course, prise en charge des blessures (tendinopathies, périostite, entorses…), programmation de retour à la course, préparation à une échéance (10 km, semi, marathon).',
  },
  {
    question: 'Accompagnez-vous le post-partum ?',
    answer:
      'Oui, rééducation périnéale, accompagnement global, et plan de reprise sportive progressif, en lien avec vos contraintes familiales et professionnelles.',
  },
  {
    question: 'Délais et prise de rendez-vous ?',
    answer:
      'Les rendez-vous se prennent directement sur Doctolib. Nous faisons notre maximum pour proposer des créneaux rapides, notamment en cas de post-op ou de blessure aiguë.',
  },
];

const formatGoogleRating = (value: number) => {
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(1).replace('.', ',');
};

export const Home: React.FC = () => {
  const metaDescription =
    'Kinés du sport à Paris 17 – Batignolles. Coureurs, post‑op, post‑partum. Bilan précis, plan sur mesure, retour au sport encadré.';

  const faqSchema = generateFAQSchema(FAQ_ENTRIES);
  const localBusinessSchema = generateLocalBusinessSchema();

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [parcoursProgress, setParcoursProgress] = useState(0);
  const parcoursProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const parcoursSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const target = parcoursSectionRef.current;
    if (!target) return;
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    const isMobile = window.matchMedia?.('(max-width: 767px)')?.matches ?? false;

    const thresholds = prefersReducedMotion
      ? [0, 1]
      : isMobile
        ? Array.from({ length: 11 }, (_, i) => i / 10)
        : Array.from({ length: 101 }, (_, i) => i / 100);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        const nextProgress = prefersReducedMotion
          ? (entry.isIntersecting ? 1 : 0)
          : Math.max(0, Math.min(1, entry.intersectionRatio));

        parcoursProgressRef.current = nextProgress;
        if (rafRef.current != null) return;

        rafRef.current = window.requestAnimationFrame(() => {
          rafRef.current = null;
          setParcoursProgress(parcoursProgressRef.current);
        });
      },
      {
        threshold: thresholds,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  const heroScale = 1 - 0.06 * parcoursProgress;
  const heroOpacity = 1 - 0.25 * parcoursProgress;
  const parcoursTranslateY = (1 - parcoursProgress) * 40;
  const parcoursOpacity = parcoursProgress;

  return (
    <>
      <SEO
        title="Batignolles Kiné Sport | Rééducation, Post-Op, Réathlétisation - Paris 17"
        description={metaDescription}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <div className="bg-surface min-h-screen text-slate-900">
        {/* Hero */}
        <section className="px-3 sm:px-4 md:px-6 pb-3 md:pb-4 flex flex-col pt-6 md:pt-8">
          <div
            className="relative w-full h-[70vh] min-h-[520px] md:h-[80vh] rounded-3xl md:rounded-4xl lg:rounded-5xl overflow-hidden shadow-2xl shadow-slate-200 bg-slate-900 group border border-white"
            style={{
              transform: `scale(${heroScale})`,
              opacity: heroOpacity,
              transformOrigin: 'center',
              willChange: 'transform, opacity',
            }}
          >
            <div className="absolute inset-0">
              <img
                src={HERO_IMAGE_URL}
                alt="Cabinet de kinésithérapie du sport à Paris 17 Batignolles"
                className="w-full h-full object-cover opacity-90 transition-transform duration-[20s] group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/images/hero/hero.jpeg';
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10" />
            </div>

            <div className="absolute inset-0 flex items-end z-10">
              <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 pb-8 md:pb-16">
                <div className="max-w-content mx-auto w-full">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 text-white text-2xs sm:text-xs md:text-sm font-semibold tracking-wide mb-5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Kinés du sport · Paris 17 – Batignolles
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95] mb-6 drop-shadow-lg">
                    Reprendre le sport
                    <br />
                    sans douleur.
                  </h1>

                  <div className="mt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-6">
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-[65ch] truncate">
                      Bilan précis, plan sur mesure, retour au sport encadré.
                    </p>
                    <Button
                      href={DOCTOLIB_URL}
                      variant="booking"
                    >
                      Prendre rendez-vous
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-content w-full mx-auto px-4 md:px-6 pt-10 md:pt-12 pb-0 md:pb-0 space-y-12 md:space-y-16">
          {/* Comment ça se passe ? */}
          <section id="parcours" ref={parcoursSectionRef}>
            <div
              className="parcours-card relative overflow-hidden rounded-4xl md:rounded-5xl bg-slate-950 border border-white/10 px-4 py-10 md:px-10 md:py-14"
              style={{
                transform: `translate3d(0, ${parcoursTranslateY}px, 0)`,
                opacity: parcoursOpacity,
                willChange: 'transform, opacity',
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(0,160,220,0.18),transparent_60%),radial-gradient(900px_circle_at_80%_100%,rgba(0,200,180,0.16),transparent_55%)]"
              />
              <div className="relative">
                <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14 px-4">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Votre parcours de soin.</h2>
                  <p className="text-white/75 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
                    Un cadre clair, étape par étape, jusqu’à la reprise.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="step-card step-card--1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <ClipboardList className="w-5 h-5 text-white" />
                      </div>
                      <p className="step-card__label font-semibold text-white">Étape 1</p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">Bilan précis</h3>
                    <p className="text-white/75 text-sm md:text-base leading-relaxed">
                      On prend le temps de comprendre votre douleur, votre sport et vos objectifs. Tests cliniques, analyse de votre geste et de votre historique.
                    </p>
                  </div>

                  <div className="step-card step-card--2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" />
                      </div>
                      <p className="step-card__label font-semibold text-white">Étape 2</p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">Plan de rééducation sur mesure</h3>
                    <p className="text-white/75 text-sm md:text-base leading-relaxed">
                      Séances individualisées, exercices adaptés, progression claire à chaque rendez‑vous. Vous savez exactement où vous en êtes.
                    </p>
                  </div>

                  <div className="step-card step-card--3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                        <Footprints className="w-5 h-5 text-white" />
                      </div>
                      <p className="step-card__label font-semibold text-white">Étape 3</p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">Reprise du sport encadrée</h3>
                    <p className="text-white/75 text-sm md:text-base leading-relaxed">
                      Retour à la course, au terrain ou à la salle avec des repères simples : charges, fréquences, signaux d’alerte à surveiller.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-7">
                  <a href="#faq" className="text-white/85 hover:text-white underline underline-offset-4 decoration-2 font-semibold text-sm md:text-base">
                    Une question sur le déroulement ? Voir la FAQ.
                  </a>
                </div>
              </div>
            </div>
          </section>

              {/* Pour qui ? */}
              <section className="relative overflow-hidden rounded-4xl md:rounded-5xl bg-slate-950 border border-white/10 px-4 py-10 md:px-10 md:py-14">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(0,160,220,0.16),transparent_60%),radial-gradient(900px_circle_at_80%_100%,rgba(0,200,180,0.14),transparent_55%)]"
                />
                <div className="relative">
                  <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                      Vous vous reconnaissez ici ?
                    </h2>
                    <p className="text-white/75 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
                      On clarifie la situation, puis on construit un plan simple à suivre.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {FOR_WHO_CARDS.map((card) => (
                      <div
                        key={card.title}
                        className="rounded-3xl md:rounded-4xl p-6 md:p-8 border border-white/10 bg-white/5 backdrop-blur-md shadow-soft hover:bg-white/8 hover:border-white/15 transition-all"
                      >
                        <p className="text-2xs md:text-xs font-semibold uppercase tracking-widest text-white/70 mb-3">
                          {card.badge}
                        </p>
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{card.title}</h3>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed">{card.lead}</p>
                        <ul className="mt-4 space-y-2 text-white/75 text-sm md:text-base">
                          {card.highlights.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-7">
                    <Button
                      href={DOCTOLIB_URL}
                      variant="booking"
                    >
                      Prendre rendez-vous
                    </Button>
                    <p className="mt-4 text-white/70 text-sm md:text-base">
                      Vous ne savez pas dans quelle catégorie vous êtes ? Parlez‑en lors du premier bilan.
                    </p>
                  </div>
                </div>
              </section>

              {/* Preuves sociales */}
              <section className="rounded-4xl md:rounded-5xl bg-white border border-slate-100 shadow-soft px-4 py-10 md:px-10 md:py-14">
                <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                    Ce que nos patients obtiennent.
                  </h2>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-soft">
                    Noté {formatGoogleRating(reviewsData.note_moyenne)}/5 sur {reviewsData.nombre_avis_total} avis Google – Batignolles Kiné Sport.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {CUSTOMER_CASES.map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-3xl md:rounded-4xl p-6 md:p-8 border border-slate-100 shadow-soft hover:shadow-card transition-all duration-200"
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{item.title}</p>
                      <p className="text-slate-900 text-base md:text-lg leading-relaxed font-medium">“{item.quote}”</p>
                      <p className="mt-4 text-sm text-slate-600">
                        – {item.author}, {item.role}.
                      </p>
                    </article>
                  ))}
                </div>

                <div className="text-center mt-7">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-tertiary text-sm md:text-base"
                  >
                    Lire tous nos avis sur Google
                  </a>
                </div>
              </section>

          {/* FAQ */}
          <section
            id="faq"
            className="rounded-4xl md:rounded-5xl bg-surface border border-slate-200/60 shadow-soft px-4 py-10 md:px-10 md:py-14"
          >
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Questions fréquentes</h2>
              <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
                Tout savoir sur vos rendez-vous et votre prise en charge.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
              {FAQ_ENTRIES.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={item.question}
                    className="bg-white border border-slate-100 rounded-2xl md:rounded-3xl shadow-soft overflow-hidden hover:border-slate-200 transition-colors"
                  >
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

            <div className="max-w-4xl mx-auto mt-8 flex justify-center">
              <Button href={DOCTOLIB_URL} variant="booking" className="w-full sm:w-auto">
                Prendre rendez-vous
              </Button>
            </div>
          </section>
        </div>

        <div className="max-w-content w-full mx-auto px-4 md:px-6 pt-12 md:pt-14 pb-12 md:pb-14">
          {/* Accès */}
          <section className="rounded-4xl md:rounded-5xl bg-surface border border-slate-200/60 shadow-soft px-4 py-10 md:px-10 md:py-14">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Venir au cabinet.</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div className="bg-white rounded-4xl p-8 md:p-10 shadow-card border border-slate-100 flex flex-col justify-between h-full">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-primary mt-1 mr-4 shrink-0" />
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-3">Adresse & transports</h3>
                        <p className="text-slate-600">{ADDRESS}</p>
                        <div className="mt-3 space-y-1 text-sm text-slate-500">
                          <p className="flex items-center"><Train size={14} className="mr-2" /> Métro : Rome (L2), Place de Clichy (L2, L13)</p>
                          <p className="flex items-center"><Car size={14} className="mr-2" /> Parking : Mairie du 17ème, 20 Rue des Batignolles</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Activity className="text-primary mt-1 mr-4 shrink-0" />
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-3">Horaires</h3>
                        <p className="text-slate-600">Lundi – Vendredi : 8h00 – 21h00</p>
                        <p className="text-slate-500 text-sm mt-2">
                          Des créneaux tôt le matin et en fin de journée pour s’adapter à votre emploi du temps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <Button href={DOCTOLIB_URL} variant="booking" className="w-full sm:w-auto">
                    Prendre rendez-vous
                  </Button>
                </div>
              </div>

              <div>
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
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="btn-tertiary text-sm">
                      Voir sur Google
                    </a>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=6%20rue%20des%20Batignolles%2075017%20Paris"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-tertiary text-sm"
                    >
                      Itinéraire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;

