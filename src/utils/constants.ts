import { Activity, HeartPulse, ShieldCheck } from 'lucide-react';
import { ServiceData, TeamMember, BlogPost, Review } from '../types';

// Production URL
export const SITE_URL = "https://batignolleskinesport.fr";

export const DOCTOLIB_URL = "https://www.doctolib.fr/cabinet-de-kinesitherapie/paris/batignolles-kine-sport";
export const ADDRESS = "6 rue des Batignolles, 75017 Paris";
export const PHONE = "09 62 43 49 61";
export const EMAIL = "contact@batignolleskinesport.fr";
export const INSTAGRAM_URL = "https://www.instagram.com/batignolleskinesport/";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/RwLrproYncKrfP9t5";

// Asset paths served from /public/images
export const LOGO_URL = "/images/logo.svg";
export const HERO_IMAGE_URL = "/images/hero/hero.webp";
export const OG_IMAGE_URL = `https://res.cloudinary.com/dsesaneyj/image/upload/f_jpg,q_auto,w_1200,h_630,c_fill/og-image`;

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
    sports: ["Crossfit", "Gymnastique"],
    bio: "Léa HLUBINA, kinésithérapeute du sport et ancienne gymnaste. Elle accompagne les gymnastes et sportifs artistiques dans la gestion des hyperlaxités, des douleurs de dos et la prévention des blessures spécifiques.",
    image: "https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_400,h_400,c_fill,g_face/y963mvve875v6zc8myvn.jpg",
    doctolibUrl: "https://www.doctolib.fr/masseur-kinesitherapeute/paris/lea-hlubina",
    rpps: "10109385814",
    diploma: "Diplôme d’État de Masseur-Kinésithérapeute (2023)",
    certifications: [
      "Kiné du Sport Expert - KINESPORT (2025)"
    ]
  },
  {
    id: 2,
    name: "Justine JOSSE",
    title: "Kiné du Sport",
    specialties: ["Thérapie Manuelle", "Prévention", "Renforcement"],
    sports: ["Course à pied", "Danse"],
    bio: "Justine JOSSE, kinésithérapeute spécialisée course à pied. Diplômée d'État, elle accompagne les coureurs de tous niveaux dans leur prévention et récupération, du 10km au marathon.",
    image: "https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_400,h_400,c_fill,g_face/r8etpv9h9jp9r6nbfien.jpg",
    doctolibUrl: "https://www.doctolib.fr/masseur-kinesitherapeute/paris/justine-josse",
    rpps: "10102313755",
    diploma: "Diplôme d’État de Masseur-Kinésithérapeute (2020)",
    certifications: [
      "Epaule au Top - Du raisonnement clinique à la pratique (2021)",
      "1.0 Fondamentaux des blessures en course à pied - La Clinique du coureur (2023)",
      "Kiné du Sport Expert - KINESPORT (2023-2024)"
    ]
  },
  {
    id: 3,
    name: "Leonie TATON",
    title: "Kiné du Sport",
    specialties: ["Rééducation Fonctionnelle", "Posturologie"],
    sports: ["Course à pied", "Sports nautiques"],
    bio: "Leonie TATON, experte en rééducation de la danseuse. Elle intervient sur les pathologies de la cheville, du pied et assure un suivi spécifique pour le retour à la scène.",
    image: "https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_400,h_400,c_fill,g_face/lzfstgptflq1nznaftfr.jpg",
    doctolibUrl: "https://www.doctolib.fr/masseur-kinesitherapeute/paris/leonie-taton-paris",
    rpps: "10102016630",
    diploma: "Diplôme d’État de Masseur-Kinésithérapeute (2019)",
    certifications: [
      "Pilates clinique - Matwork 1 & 2 (2021)",
      "Rééducation périnéo-sphinctérienne féminine (2021)",
      "Kiné du Sport Expert - KINESPORT (2022)",
      "1.0 Fondamentaux des blessures en course à pied et 1.1 Diagnostics des blessures du membre inférieur : aspects pratiques - La clinique du coureur (2023)",
      "Endométriose et congestion pelvienne - HeyLilie (2024)",
      "La femme sportive - Kiné Sport (2025)",
      "Neuropathies, neurodynamique et syndromes canalaires - Rehab4neuro (2025)"
    ]
  },
  {
    id: 4,
    name: "Martin BONNIN",
    title: "Kiné du Sport",
    specialties: ["Traumatologie", "Réathlétisation", "Rugby"],
    sports: ["Rugby", "Tennis"],
    bio: "Martin BONNIN, kinésithérapeute du sport spécialisé rugby et sports de contact. Expertise en traumatologie (épaule, genou), commotions et retour au terrain après blessure.",
    image: "https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_1024,h_700,c_limit/fhio2h6fqsfva0rslgjm.jpg",
    doctolibUrl: "https://www.doctolib.fr/masseur-kinesitherapeute/bordeaux/martin-bonnin",
    rpps: "10110370367",
    diploma: "Diplôme d’État de Masseur-Kinésithérapeute (2024)",
    certifications: [
      "Zero to pro - Maîtriser la préparation physique des sportifs blessés - Training thérapie (2024)",
      "Prise en charge des rachialgies aiguës - Accès formation (2025)"
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "entorse-cheville",
    title: "Entorse Cheville : Rééducation & Retour au Sport",
    excerpt: "L'entorse de cheville est la blessure la plus fréquente chez le sportif. Découvrez les étapes clés d'une rééducation réussie pour éviter les récidives.",
    category: "Cheville",
    type: "Membre Inférieur",
    date: "12 Déc 2024",
    author: "Léa Hlubina",
    image: "https://picsum.photos/id/1059/800/400",
    content: "Une entorse de la cheville mal soignée peut entraîner une instabilité chronique. Le protocole PEACE & LOVE est désormais la référence pour la prise en charge immédiate..."
  },
  {
    slug: "mal-de-dos-complet",
    title: "Guide Complet : Douleur Lombaire",
    excerpt: "Lumbago, sciatique, hernie... Comprendre les causes de votre mal de dos et comment la kinésithérapie active peut vous soulager durablement.",
    category: "Dos",
    type: "Tronc",
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
    type: "Membre Inférieur",
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
]; export const FAQ_ENTRIES = [
  {
    question: 'Acceptez-vous de nouveaux patients ?',
    answer: 'Oui, nous accueillons de nouveaux patients chaque semaine, avec des créneaux dédiés au premier bilan.',
  },
  {
    question: 'La séance est-elle prise en charge par la sécurité sociale ?',
    answer: 'Oui, sous condition d’avoir une ordonnance de votre médecin. Une partie de la séance est prise en charge par la sécurité sociale, le reste par votre mutuelle. Nous pratiquons un dépassement d’honoraire qui est pris en charge en fonction de votre contrat de mutuelle.',
  },
  {
    question: 'Où se trouve le cabinet exactement ?',
    answer: 'Nous sommes situés au 6 rue des Batignolles, 75017 Paris. Métros proches : Rome (L2) et Brochant (L13). Le cabinet est en rez-de-chaussée, accessible facilement.',
  },
  {
    question: 'Vous êtes coureur ? Que proposez-vous ?',
    answer: 'Nous sommes spécialisés en course à pied : analyse de la foulée sur tapis, prévention des blessures, plans d\'entraînement et soins spécifiques (périostite, syndrome de l\'essuie-glace, TFL).',
  },
];

