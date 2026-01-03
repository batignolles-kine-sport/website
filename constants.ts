import { Activity, HeartPulse, ShieldCheck, Baby, UserCheck } from 'lucide-react';
import { ServiceData, TeamMember, BlogPost, Review } from './types';

export const DOCTOLIB_URL = "https://www.doctolib.fr/cabinet-de-kinesitherapie/paris/batignolles-kine-sport";
export const ADDRESS = "6 rue des Batignolles, 75017 Paris";
export const PHONE = "09 62 43 49 61";
export const EMAIL = "contact@batignolles-kine-sport.fr";
export const INSTAGRAM_URL = "https://www.instagram.com/batignolleskinesport/";

// Asset paths - Please ensure these files exist in your public folder
export const LOGO_URL = "/logo.svg";
export const HERO_IMAGE_URL = "/hero.jpeg";

export const SERVICES: ServiceData[] = [
  {
    id: 'kine-sport',
    title: "Kiné du Sport",
    path: "/services/kine-sport",
    shortDescription: "Prévention, rééducation et performance pour les sportifs.",
    fullDescription: "Notre expertise en kinésithérapie du sport nous permet d'accompagner les athlètes de tous niveaux, du débutant au professionnel. Nous utilisons des techniques avancées pour traiter les pathologies liées au sport et optimiser vos performances.",
    image: "https://picsum.photos/id/1055/800/600",
    icon: Activity,
    features: [
      "Diagnostic kinésithérapique du sportif",
      "Thérapie manuelle orthopédique",
      "Réathlétisation sur terrain",
      "Strapping et K-Taping",
      "Ondes de choc",
      "Suivi pré et post-compétition"
    ],
    process: [
      { title: "Bilan Initial", description: "Analyse complète de la blessure et du geste sportif." },
      { title: "Soins & Rééducation", description: "Traitement de la douleur et récupération de la mobilité." },
      { title: "Réathlétisation", description: "Renforcement musculaire spécifique et proprioception." },
      { title: "Retour au Sport", description: "Validation des critères de reprise et prévention." }
    ]
  },
  {
    id: 'reeducation-post-traumatique',
    title: "Rééducation Post-Traumatique",
    path: "/services/reeducation-post-traumatique",
    shortDescription: "Suivi spécialisé après chirurgie ou traumatisme.",
    fullDescription: "Nous assurons un suivi rigoureux après vos interventions chirurgicales ou traumatismes. Notre objectif est de vous rendre votre autonomie le plus rapidement et sûrement possible.",
    image: "https://picsum.photos/id/1041/800/600",
    icon: HeartPulse,
    features: [
      "Protocole post-opératoire strict",
      "Drainage lymphatique manuel",
      "Mobilisation articulaire",
      "Cicatrisation dirigée"
    ],
    process: [
      { title: "Phase 1 : Protection", description: "Contrôle de l'inflammation et protection des tissus." },
      { title: "Phase 2 : Mobilité", description: "Récupération des amplitudes articulaires." },
      { title: "Phase 3 : Renforcement", description: "Récupération de la force musculaire." },
      { title: "Phase 4 : Autonomie", description: "Retour aux activités quotidiennes." }
    ]
  },
  {
    id: 'prevention-preparation-physique',
    title: "Prévention & Préparation",
    path: "/services/prevention-preparation-physique",
    shortDescription: "Programmes pour éviter les blessures et performer.",
    fullDescription: "Mieux vaut prévenir que guérir. Nous proposons des bilans préventifs et des programmes de préparation physique pour sécuriser votre pratique sportive.",
    image: "https://picsum.photos/id/88/800/600",
    icon: ShieldCheck,
    features: [
      "Screening fonctionnel (FMS)",
      "Planification d'entraînement",
      "Correction des déséquilibres musculaires",
      "Conseils ergonomiques"
    ]
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Léa HLUBINA",
    title: "Kiné du Sport",
    specialties: ["Traumatologie", "Réathlétisation", "Suivi Sportif"],
    sport: "Multisport",
    bio: "Spécialisée dans la prise en charge des sportifs, Léa vous accompagne de la blessure jusqu'au retour sur le terrain.",
    image: "https://picsum.photos/seed/lea/400/400", // Placeholder
    doctolibUrl: "https://www.doctolib.fr/masseur-kinesitherapeute/paris/lea-hlubina"
  },
  {
    id: 2,
    name: "Justine JOSSE",
    title: "Kiné du Sport",
    specialties: ["Thérapie Manuelle", "Prévention", "Renforcement"],
    sport: "Fitness",
    bio: "Justine met son expertise en kinésithérapie du sport au service de votre récupération et de votre performance.",
    image: "https://picsum.photos/seed/justine/400/400", // Placeholder
    doctolibUrl: "https://www.doctolib.fr/masseur-kinesitherapeute/paris/justine-josse"
  },
  {
    id: 3,
    name: "Leonie TATON",
    title: "Kiné du Sport",
    specialties: ["Rééducation Fonctionnelle", "Posturologie"],
    sport: "Danse",
    bio: "Leonie assure une prise en charge globale et personnalisée pour vous aider à retrouver votre mobilité.",
    image: "https://picsum.photos/seed/leonie/400/400", // Placeholder
    doctolibUrl: "https://www.doctolib.fr/masseur-kinesitherapeute/paris/leonie-taton-paris"
  },
  {
    id: 4,
    name: "Martin BONNIN",
    title: "Kiné du Sport",
    specialties: ["Traumatologie", "Réathlétisation", "Rugby"],
    sport: "Rugby",
    bio: "Martin est kinésithérapeute spécialisé en traumatologie du sport, avec une expertise particulière dans la prise en charge des rugbymen.",
    image: "https://picsum.photos/seed/martin/400/400",
    doctolibUrl: "https://www.doctolib.fr/masseur-kinesitherapeute/bordeaux/martin-bonnin"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "entorse-cheville",
    title: "Entorse Cheville : Rééducation & Retour au Sport",
    excerpt: "L'entorse de cheville est la blessure la plus fréquente chez le sportif. Découvrez les étapes clés d'une rééducation réussie pour éviter les récidives.",
    category: "Rééducation",
    date: "12 Déc 2024",
    author: "Léa Hlubina",
    image: "https://picsum.photos/id/1059/800/400",
    content: "Une entorse de la cheville mal soignée peut entraîner une instabilité chronique. Le protocole PEACE & LOVE est désormais la référence pour la prise en charge immédiate..."
  },
  {
    slug: "mal-de-dos-complet",
    title: "Guide Complet : Douleur Lombaire",
    excerpt: "Lumbago, sciatique, hernie... Comprendre les causes de votre mal de dos et comment la kinésithérapie active peut vous soulager durablement.",
    category: "Santé",
    date: "05 Déc 2024",
    author: "Justine Josse",
    image: "https://picsum.photos/id/1083/800/400",
    content: "Le mal de dos est souvent qualifié de mal du siècle. Pourtant, le repos strict est rarement la solution. Le mouvement est votre meilleur allié..."
  },
  {
    slug: "kine-du-coureur",
    title: "Kiné du Coureur : Prévention & Traitement",
    excerpt: "Syndrome de l'essuie-glace, périostite, tendinite d'Achille. Analyse de la foulée et renforcement spécifique pour courir sans douleur.",
    category: "Sport",
    date: "28 Nov 2024",
    author: "Leonie Taton",
    image: "https://picsum.photos/id/1075/800/400",
    content: "La course à pied génère des contraintes importantes. Une analyse vidéo de la foulée permet souvent de corriger des défauts techniques..."
  }
];

export const REVIEWS: Review[] = [
  { id: 1, author: "Jean D.", rating: 5, text: "Équipe au top ! J'ai récupéré de mon LCA en 6 mois grâce au suivi personnalisé." },
  { id: 2, author: "Marie L.", rating: 5, text: "Cabinet très moderne et propre. Les séances sont individuelles et très sérieuses." },
  { id: 3, author: "Pierre S.", rating: 4, text: "Très bons kinés, cabinet bien situé aux Batignolles." }
];