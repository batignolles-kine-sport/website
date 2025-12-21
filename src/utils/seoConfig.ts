/**
 * Configuration SEO des articles blog
 * Auto-génère titles et meta descriptions en fonction de la pathologie
 * Système extensible et maintenable
 */

export interface BlogPostSEO {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: 'sport' | 'postop' | 'femme' | 'prevention' | 'general';
  keywords: string[];
}

/**
 * Database centralisée des articles blog avec SEO optimisé
 * Format : slug → metadata complète
 */
export const BLOG_SEO_CONFIG: Record<string, BlogPostSEO> = {
  // =====================================================================
  // PATHOLOGIES SPORT & PERFORMANCE (Coureurs, athlètes)
  // =====================================================================
  'tendinopathie-rotulienne': {
    slug: 'tendinopathie-rotulienne',
    title: 'Tendinopathie Rotulienne : Causes, Traitement, Retour à la Course - 2025',
    metaDescription: 'Tendinopathie rotulienne : diagnostic, exercices, délai de guérison. Guide complet pour coureurs et athlètes. Science-based.',
    excerpt: 'Douleur sous la rotule lors de la course ? Découvrez comment traiter efficacement et reprendre le terrain sans douleur.',
    category: 'sport',
    keywords: ['tendinopathie rotulienne', 'douleur genou coureur', 'traitement', 'exercices', 'retour course'],
  },

  'periostite-tibiale': {
    slug: 'periostite-tibiale',
    title: 'Périostite Tibiale : Diagnostic, Exercices, Prévention - Coureurs',
    metaDescription: 'Périostite tibiale (shin splints) : causes, traitement, reprise course sécurisée. Conseils kinésithérapeute pour coureurs.',
    excerpt: 'Douleur au tibia lors de la course ? Guide complet de la périostite tibiale et comment reprendre l\'entraînement.',
    category: 'sport',
    keywords: ['périostite tibiale', 'shin splints', 'douleur tibia', 'coureur', 'traitement'],
  },

  'entorse-cheville': {
    slug: 'entorse-cheville',
    title: 'Entorse de la Cheville : Degrés, Rééducation, Retour au Sport',
    metaDescription: 'Entorse cheville : grade 1/2/3, exercices de rééducation, délai de guérison. Comment reprendre le sport en sécurité.',
    excerpt: 'Vous avez une entorse à la cheville ? Apprenez les 4 phases de rééducation pour revenir au sport sans récidive.',
    category: 'sport',
    keywords: ['entorse cheville', 'rééducation', 'stabilité', 'sport', 'prévention'],
  },

  'entorse-genou-lli': {
    slug: 'entorse-genou-lli',
    title: 'Entorse du Genou (LLI) : Traitement, Rééducation, Reprise Sport',
    metaDescription: 'Entorse genou (ligament latéral interne) : diagnostic, phases rééducation, retour athlétique. Guide complet.',
    excerpt: 'Entorse du genou lors d\'un match ou à l\'entraînement ? Découvrez le protocole de rééducation pour revenir au terrain.',
    category: 'sport',
    keywords: ['entorse genou', 'ligament latéral', 'lli', 'rééducation', 'retour sport'],
  },

  'lesion-ischio-jambiers': {
    slug: 'lesion-ischio-jambiers',
    title: 'Lésion Ischio-Jambiers : Traitement, Récupération, Prévention',
    metaDescription: 'Claquage ischio-jambiers : phases rééducation, exercices, délai retour sport. Prévention des récidives.',
    excerpt: 'Douleur arrière de la cuisse ? Guide complet des lésions ischio-jambiers et rééducation optimale.',
    category: 'sport',
    keywords: ['ischio-jambiers', 'claquage', 'déchirure', 'rééducation', 'prévention'],
  },

  'syndrome-essuie-glace': {
    slug: 'syndrome-essuie-glace',
    title: 'Syndrome de l\'Essuie-Glace (ITBS) : Causes, Traitement, Prévention',
    metaDescription: 'Syndrome de l\'essuie-glace : douleur genou latéral, exercices, retour course sécurisé. Coureurs et traileurs.',
    excerpt: 'Douleur au genou en courant ? Apprenez tout sur le syndrome de l\'essuie-glace et comment le traiter.',
    category: 'sport',
    keywords: ['essuie-glace', 'itbs', 'genou latéral', 'coureur', 'trail'],
  },

  'tendinopathie-achille': {
    slug: 'tendinopathie-achille',
    title: 'Tendinopathie d\'Achille : Diagnostic, Rééducation, Retour Athlétique',
    metaDescription: 'Tendinopathie tendon Achille : traitement progressif, exercices excentriques, délai retour sport.',
    excerpt: 'Douleur au talon ou au-dessus ? Découvrez comment traiter la tendinopathie d\'Achille efficacement.',
    category: 'sport',
    keywords: ['tendinopathie achille', 'douleur talon', 'rééducation', 'exercices', 'coureur'],
  },

  'fasciite-plantaire': {
    slug: 'fasciite-plantaire',
    title: 'Fasciite Plantaire : Cause, Traitement, Prévention - Sportifs',
    metaDescription: 'Fasciite plantaire : douleur talon, exercices, semelles. Guide complet pour reprise sport sans douleur.',
    excerpt: 'Douleur sous le pied le matin ou après le sport ? Guide complet de la fasciite plantaire.',
    category: 'sport',
    keywords: ['fasciite plantaire', 'douleur talon', 'plante pied', 'traitement', 'prévention'],
  },

  'epicondylite-coude': {
    slug: 'epicondylite-coude',
    title: 'Épicondylite (Tennis Elbow) : Traitement, Rééducation, Retour Raquette',
    metaDescription: 'Tennis elbow (épicondylite) : causes, exercices, délai guérison. Retour raquettes et sports de lancer.',
    excerpt: 'Douleur au coude ? Apprenez comment traiter l\'épicondylite et reprendre vos activités.',
    category: 'sport',
    keywords: ['épicondylite', 'tennis elbow', 'coude', 'raquette', 'traitement'],
  },

  'epaule-conflit': {
    slug: 'epaule-conflit',
    title: 'Conflit Subacromial de l\'Épaule : Symptômes, Exercices, Rééducation',
    metaDescription: 'Conflit épaule : douleur sus-épineuse, exercices thérapeutiques, retour sport. Traitement conservateur.',
    excerpt: 'Douleur à l\'épaule en levant le bras ? Découvrez le conflit subacromial et comment le traiter.',
    category: 'sport',
    keywords: ['conflit épaule', 'sus-épineux', 'impingement', 'rééducation', 'sport'],
  },

  'luxation-epaule': {
    slug: 'luxation-epaule',
    title: 'Luxation de l\'Épaule : Rééducation Post-Op, Stabilité, Retour Sport',
    metaDescription: 'Luxation épaule : post-op, protocole rééducation, retour sport sécurisé. Prévention récidives.',
    excerpt: 'Après une luxation de l\'épaule ? Guide complet de la rééducation et retour à vos activités.',
    category: 'postop',
    keywords: ['luxation épaule', 'post-op', 'instabilité', 'rééducation', 'prévention'],
  },

  'douleur-hanche-sportif': {
    slug: 'douleur-hanche-sportif',
    title: 'Douleur de Hanche chez le Sportif : Diagnostic, Traitement, Exercices',
    metaDescription: 'Douleur hanche sportif : causes (FAI, pubalgie), exercices spécifiques, retour athlétique.',
    excerpt: 'Douleur à la hanche lors du sport ? Découvrez les causes et le traitement adapté.',
    category: 'sport',
    keywords: ['douleur hanche', 'fai', 'impingement', 'sportif', 'rééducation'],
  },

  'arthrose-genou-sport': {
    slug: 'arthrose-genou-sport',
    title: 'Arthrose du Genou et Sport : Traitement, Exercices, Activités Adaptées',
    metaDescription: 'Arthrose genou : traitement, exercices, activités sans douleur. Continuer le sport en sécurité.',
    excerpt: 'Arthrose du genou ne signifie pas arrêter le sport. Apprenez à continuer vos activités sans douleur.',
    category: 'sport',
    keywords: ['arthrose genou', 'gonarthrose', 'traitement', 'sport adapté', 'exercices'],
  },

  'recuperation-sportive': {
    slug: 'recuperation-sportive',
    title: 'Récupération Sportive : Protocoles, Exercices, Prévention Blessures',
    metaDescription: 'Récupération sportive optimale : techniques, exercices, prévention. Pour athlètes et coureurs.',
    excerpt: 'Optimisez votre récupération pour améliorer vos performances et prévenir les blessures.',
    category: 'prevention',
    keywords: ['récupération', 'récup', 'sport', 'prévention', 'performance'],
  },

  'echauffement-prevention': {
    slug: 'echauffement-prevention',
    title: 'Échauffement et Prévention des Blessures : Protocole Complet',
    metaDescription: 'Échauffement efficace : séquence complète, dynamique, prévention blessures. Pour tous les sports.',
    excerpt: 'Un bon échauffement prévient 80% des blessures. Découvrez le protocole complet.',
    category: 'prevention',
    keywords: ['échauffement', 'warm-up', 'prévention', 'dynamique', 'blessure'],
  },

  'strapping-taping': {
    slug: 'strapping-taping',
    title: 'Strapping et K-Taping : Techniques, Application, Efficacité',
    metaDescription: 'Strapping et taping : techniques d\'application, indications cliniques, prévention blessures.',
    excerpt: 'Apprenez les techniques de strapping et K-taping pour protéger vos articulations.',
    category: 'prevention',
    keywords: ['strapping', 'k-taping', 'taping', 'stabilité', 'prévention'],
  },

  // =====================================================================
  // POST-OP & TRAUMATOLOGIE
  // =====================================================================
  'rupture-lca': {
    slug: 'rupture-lca',
    title: 'Rupture LCA : Diagnostic, Chirurgie, Rééducation, Retour Sport',
    metaDescription: 'Rupture ligament croisé antérieur (LCA) : post-op, phases rééducation, retour athlétique progressif.',
    excerpt: 'Rupture du LCA ? Découvrez le protocole complet de rééducation post-op et retour au terrain.',
    category: 'postop',
    keywords: ['rupture lca', 'ligament croisé', 'post-op', 'rééducation', 'retour sport'],
  },

  'entorse-poignet': {
    slug: 'entorse-poignet',
    title: 'Entorse du Poignet : Rééducation, Exercices, Retour Activités',
    metaDescription: 'Entorse poignet : diagnostic, phases rééducation, exercices fonctionnels, retour sport/travail.',
    excerpt: 'Entorse au poignet ? Guide complet de la rééducation pour reprendre vos activités.',
    category: 'postop',
    keywords: ['entorse poignet', 'poignet', 'rééducation', 'mobilité', 'force'],
  },

  'hernie-discale-sport': {
    slug: 'hernie-discale-sport',
    title: 'Hernie Discale et Sport : Traitement, Exercices, Retour Progressif',
    metaDescription: 'Hernie discale : traitement conservateur, exercices lombaires, retour sport progressif.',
    excerpt: 'Hernie discale ne signifie pas arrêter le sport. Guide de rééducation progressive.',
    category: 'postop',
    keywords: ['hernie discale', 'lombaire', 'dos', 'traitement', 'exercices'],
  },

  'lumbago': {
    slug: 'lumbago',
    title: 'Lumbago : Traitement, Exercices, Prévention des Récidives',
    metaDescription: 'Lumbago (tour de reins) : traitement phase aiguë, exercices progression, prévention récidives.',
    excerpt: 'Vous avez un lumbago ? Découvrez comment soulager rapidement et prévenir la récurrence.',
    category: 'postop',
    keywords: ['lumbago', 'tour de reins', 'lombaire', 'douleur', 'traitement'],
  },

  'cervicalgie-teletravail': {
    slug: 'cervicalgie-teletravail',
    title: 'Cervicalgie et Télétravail : Ergonomie, Exercices, Traitement',
    metaDescription: 'Douleur cervicale télétravail : ergonomie bureau, exercices, traitement. Prévention posturale.',
    excerpt: 'Douleur à la nuque en télétravail ? Apprenez l\'ergonomie et les exercices appropriés.',
    category: 'prevention',
    keywords: ['cervicalgie', 'nuque', 'télétravail', 'ergonomie', 'bureau'],
  },

  'capsulite-retractile': {
    slug: 'capsulite-retractile',
    title: 'Capsulite Rétractile de l\'Épaule : Traitement, Exercices, Rééducation',
    metaDescription: 'Capsulite rétractile (frozen shoulder) : phases traitement, étirements, mobilisation progressive.',
    excerpt: 'Épaule raide et douloureuse ? Découvrez le traitement complet de la capsulite rétractile.',
    category: 'postop',
    keywords: ['capsulite rétractile', 'épaule gelée', 'frozen shoulder', 'raideur', 'mobilité'],
  },

  'sciatique': {
    slug: 'sciatique',
    title: 'Sciatique : Diagnostic, Exercices, Traitement, Prévention',
    metaDescription: 'Sciatique : douleur nerveuse, exercices anti-compression, traitement progressif, prévention.',
    excerpt: 'Douleur le long de la jambe ? Guide complet du traitement de la sciatique.',
    category: 'postop',
    keywords: ['sciatique', 'nerf sciatique', 'jambe', 'douleur', 'traitement'],
  },

  'pubalgie': {
    slug: 'pubalgie',
    title: 'Pubalgie : Causes, Diagnostic, Traitement, Retour Sport',
    metaDescription: 'Pubalgie : douleur aine/pubis, causes (sport, post-op), rééducation, retour progressif.',
    excerpt: 'Douleur à l\'aine ? Découvrez la pubalgie, ses causes et son traitement.',
    category: 'sport',
    keywords: ['pubalgie', 'aine', 'douleur aine', 'sport', 'traitement'],
  },

  'fracture-fatigue': {
    slug: 'fracture-fatigue',
    title: 'Fracture de Fatigue : Diagnostic, Repos, Retour Entraînement',
    metaDescription: 'Fracture de stress/fatigue : diagnostic, immobilisation, retour sport progressif. Athlètes.',
    excerpt: 'Douleur suite à entraînement intensif ? Apprenez tout sur les fractures de fatigue.',
    category: 'postop',
    keywords: ['fracture fatigue', 'fracture stress', 'os', 'sport', 'retour'],
  },

  'commotion-cerebrale-rugby': {
    slug: 'commotion-cerebrale-rugby',
    title: 'Commotion Cérébrale au Rugby : Protocole Retour, Sécurité',
    metaDescription: 'Commotion cérébrale : symptômes, protocole retour progressif, sécurité. Guide complet rugby.',
    excerpt: 'Vous avez une commotion au rugby ? Découvrez le protocole de retour sécurisé.',
    category: 'postop',
    keywords: ['commotion', 'tête', 'rugby', 'trauma', 'retour progressif'],
  },

  // =====================================================================
  // KINÉ DE LA FEMME
  // =====================================================================
  'sport-grossesse': {
    slug: 'sport-grossesse',
    title: 'Sport et Grossesse : Exercices Sûrs, Recommandations, Bénéfices',
    metaDescription: 'Sport grossesse : exercices adaptés, recommandations OMS, bénéfices, sécurité. Guide complet femmes enceintes.',
    excerpt: 'Enceinte et vous voulez continuer à bouger ? Guide complet du sport sécurisé en grossesse.',
    category: 'femme',
    keywords: ['sport grossesse', 'enceinte', 'exercices', 'sécurité', 'bénéfices'],
  },

  'fuites-urinaires-sport': {
    slug: 'fuites-urinaires-sport',
    title: 'Fuites Urinaires à l\'Effort : Traitement, Exercices Périnéaux',
    metaDescription: 'Fuites urinaires effort : causes, exercices périnée, traitement conservateur. Femmes actives.',
    excerpt: 'Fuites lors du sport ? Découvrez comment renforcer votre périnée et retrouver la confiance.',
    category: 'femme',
    keywords: ['fuites urinaires', 'incontinence', 'périnée', 'sport', 'traitement'],
  },

  'reeducation-abdominale': {
    slug: 'reeducation-abdominale',
    title: 'Rééducation Abdominale Post-Partum : Diastasis, Exercices, Retour Sport',
    metaDescription: 'Rééducation abdo post-partum : diastasis recti, exercices progressifs, retour sport sans douleur.',
    excerpt: 'Après accouchement ? Guide complet de la rééducation abdominale et retour au sport.',
    category: 'femme',
    keywords: ['rééducation abdominale', 'post-partum', 'diastasis', 'ventre', 'exercices'],
  },

  // =====================================================================
  // GÉNÉRAL & MÉTHODOLOGIE
  // =====================================================================
  'methodologie-ebp': {
    slug: 'methodologie-ebp',
    title: 'Médecine Basée sur les Preuves (EBP) en Kinésithérapie : Principes',
    metaDescription: 'Evidence-Based Practice (EBP) : approche scientifique en kinésithérapie, bénéfices, traitement personnalisé.',
    excerpt: 'Découvrez comment la science guide notre approche thérapeutique pour vos meilleurs résultats.',
    category: 'general',
    keywords: ['ebp', 'preuves scientifiques', 'médecine basée preuves', 'kinésithérapie'],
  },
};

/**
 * Génère le titre SEO d'un article blog
 * Utilise la config ou crée un titre par défaut si non trouvé
 */
export function getBlogSEOTitle(slug: string, fallbackTitle: string): string {
  const config = BLOG_SEO_CONFIG[slug];
  return config?.title || fallbackTitle;
}

/**
 * Génère la meta description d'un article blog
 * Utilise la config ou crée une description par défaut si non trouvé
 */
export function getBlogSEODescription(slug: string, fallbackDescription: string): string {
  const config = BLOG_SEO_CONFIG[slug];
  return config?.metaDescription || fallbackDescription;
}

/**
 * Récupère la config SEO complète d'un article
 */
export function getBlogSEOConfig(slug: string): BlogPostSEO | null {
  return BLOG_SEO_CONFIG[slug] || null;
}

/**
 * Liste tous les slugs disponibles (pour sitemap)
 */
export function getAllBlogSlugs(): string[] {
  return Object.keys(BLOG_SEO_CONFIG);
}
