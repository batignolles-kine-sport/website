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
    title: 'Tendinopathie Rotulienne : 5 Exercices Efficaces (2026)',
    metaDescription: '80% des tendinopathies guérissent en 12 semaines avec ces 5 exercices. Protocole progressif + erreurs à éviter. ✓ Validé par kinés du sport.',
    excerpt: 'Douleur sous la rotule qui vous empêche de courir ? Découvrez le protocole en 5 étapes pour retrouver vos performances.',
    category: 'sport',
    keywords: ['tendinopathie rotulienne', 'douleur genou coureur', 'traitement', 'exercices', 'retour course'],
  },

  'periostite-tibiale': {
    slug: 'periostite-tibiale',
    title: 'Périostite Tibiale : 4 Traitements Prouvés en 2026',
    metaDescription: 'Shin splints ? 90% des coureurs guérissent avec ce protocole en 4 étapes. Causes, exercices et reprise progressive. ✓ Kinés du sport Paris.',
    excerpt: 'Douleur au tibia à chaque sortie running ? Voici comment traiter et reprendre la course sans récidive.',
    category: 'sport',
    keywords: ['périostite tibiale', 'shin splints', 'douleur tibia', 'coureur', 'traitement'],
  },

  'entorse-cheville': {
    slug: 'entorse-cheville',
    title: 'Entorse Cheville : 4 Phases de Rééducation (2026)',
    metaDescription: 'Entorse grade 1, 2 ou 3 ? Protocole complet en 4 phases pour guérir sans séquelles. Délais + exercices clés. ✓ Approuvé kinés du sport.',
    excerpt: 'Cheville tordue ? Découvrez les 4 phases pour revenir au sport plus fort et éviter les récidives.',
    category: 'sport',
    keywords: ['entorse cheville', 'rééducation', 'stabilité', 'sport', 'prévention'],
  },

  'entorse-genou-lli': {
    slug: 'entorse-genou-lli',
    title: 'Entorse Genou LLI : 3 Phases de Récupération (2026)',
    metaDescription: 'Entorse du ligament latéral interne ? Protocole en 3 phases pour retour terrain en 6-8 semaines. Exercices + délais. ✓ Kinés du sport.',
    excerpt: 'Genou tordu au foot ou au ski ? Voici le protocole complet pour reprendre sans risquer la récidive.',
    category: 'sport',
    keywords: ['entorse genou', 'ligament latéral', 'lli', 'rééducation', 'retour sport'],
  },

  'lesion-ischio-jambiers': {
    slug: 'lesion-ischio-jambiers',
    title: 'Claquage Ischio-Jambiers : 5 Étapes pour Guérir (2026)',
    metaDescription: '70% des claquages récidivent sans bonne rééducation. Protocole en 5 étapes + 3 erreurs à éviter. ✓ Validé par kinés du sport Paris.',
    excerpt: 'Claquage à l\'arrière de la cuisse ? Le protocole pour ne pas rechuter et retrouver vos performances.',
    category: 'sport',
    keywords: ['ischio-jambiers', 'claquage', 'déchirure', 'rééducation', 'prévention'],
  },

  'syndrome-essuie-glace': {
    slug: 'syndrome-essuie-glace',
    title: 'Syndrome de l\'Essuie-Glace : 4 Exercices Clés (2026)',
    metaDescription: 'Douleur externe du genou après 20 min de course ? 4 exercices ciblés pour traiter le syndrome IT. ✓ Protocole coureurs Paris.',
    excerpt: 'La bandelette qui frotte le genou ? Les 4 exercices qui débloquent la situation en quelques semaines.',
    category: 'sport',
    keywords: ['essuie-glace', 'itbs', 'genou latéral', 'coureur', 'trail'],
  },

  'tendinopathie-achille': {
    slug: 'tendinopathie-achille',
    title: 'Tendinopathie d\'Achille : 5 Exercices Prouvés (2026)',
    metaDescription: '85% des tendinites d\'Achille guérissent sans chirurgie. Protocole excentrique + ondes de choc. ✓ Kinés du sport spécialisés.',
    excerpt: 'Talon raide le matin ? Le protocole scientifique pour traiter votre tendon d\'Achille en 6-12 semaines.',
    category: 'sport',
    keywords: ['tendinopathie achille', 'douleur talon', 'rééducation', 'exercices', 'coureur'],
  },

  'fasciite-plantaire': {
    slug: 'fasciite-plantaire',
    title: 'Fasciite Plantaire : 3 Traitements Efficaces (2026)',
    metaDescription: 'Premier pas du matin douloureux ? 3 traitements prouvés pour guérir la fasciite en 8 semaines. ✓ Protocole kiné complet.',
    excerpt: 'Douleur sous le talon dès le réveil ? Voici les 3 solutions qui fonctionnent vraiment.',
    category: 'sport',
    keywords: ['fasciite plantaire', 'douleur talon', 'plante pied', 'traitement', 'prévention'],
  },

  'epicondylite-coude': {
    slug: 'epicondylite-coude',
    title: 'Tennis Elbow : 4 Exercices Sans Douleur (2026)',
    metaDescription: 'Épicondylite qui traîne depuis des mois ? 4 exercices excentriques + protocole progressif. Guérison en 6-12 sem. ✓ Kinés sport.',
    excerpt: 'Coude douloureux au tennis ou au travail ? Le programme qui marche vraiment.',
    category: 'sport',
    keywords: ['épicondylite', 'tennis elbow', 'coude', 'raquette', 'traitement'],
  },

  'epaule-conflit': {
    slug: 'epaule-conflit',
    title: 'Conflit Sous-Acromial : 5 Exercices pour Guérir (2026)',
    metaDescription: '5 exercices pour soulager un conflit sous-acromial sans chirurgie. Résultats en 6 semaines. Programme progressif + vidéos. ✓ Kinés épaule Paris 17.',
    excerpt: 'Épaule qui accroche en levant le bras ? Les 5 exercices qui libèrent l\'espace sous l\'acromion.',
    category: 'sport',
    keywords: ['conflit sous-acromial', 'conflit épaule', 'exercices', 'impingement', 'rééducation'],
  },

  'luxation-epaule': {
    slug: 'luxation-epaule',
    title: 'Luxation Épaule : 4 Phases de Rééducation (2026)',
    metaDescription: 'Épaule luxée ? Protocole post-op en 4 phases pour retour sport en 6 mois. Évitez les récidives. ✓ Kinés du sport Paris.',
    excerpt: 'Après une luxation, la stabilité se reconstruit. Voici les 4 phases pour retrouver confiance en votre épaule.',
    category: 'postop',
    keywords: ['luxation épaule', 'post-op', 'instabilité', 'rééducation', 'prévention'],
  },

  'douleur-hanche-sportif': {
    slug: 'douleur-hanche-sportif',
    title: 'Douleur de Hanche Sportif : 4 Causes Fréquentes (2026)',
    metaDescription: 'Hanche qui coince au sport ? FAI, pubalgie, ressaut... 4 causes et traitements ciblés. Délai retour terrain. ✓ Spécialistes Paris.',
    excerpt: 'Hanche douloureuse quand vous courez ou tapez dans un ballon ? Identifiez la cause pour le bon traitement.',
    category: 'sport',
    keywords: ['douleur hanche', 'fai', 'impingement', 'sportif', 'rééducation'],
  },

  'arthrose-genou-sport': {
    slug: 'arthrose-genou-sport',
    title: 'Arthrose Genou et Sport : 5 Activités Recommandées (2026)',
    metaDescription: 'Arthrose ne veut pas dire arrêt du sport ! 5 activités bénéfiques + exercices pour protéger le cartilage. ✓ Guide kiné.',
    excerpt: 'Arthrose diagnostiquée ? Voici les sports qui font du bien à vos genoux.',
    category: 'sport',
    keywords: ['arthrose genou', 'gonarthrose', 'traitement', 'sport adapté', 'exercices'],
  },

  'recuperation-sportive': {
    slug: 'recuperation-sportive',
    title: 'Récupération Sportive : 6 Techniques Prouvées (2026)',
    metaDescription: 'Optimisez votre récup. 6 techniques validées par la science : sommeil, nutrition, mobilité... Progressez plus vite. ✓ Kinés sport.',
    excerpt: 'Vous vous entraînez dur mais ne progressez plus ? Votre récupération est peut-être le maillon faible.',
    category: 'prevention',
    keywords: ['récupération', 'récup', 'sport', 'prévention', 'performance'],
  },

  'echauffement-prevention': {
    slug: 'echauffement-prevention',
    title: 'Échauffement : 10 Min pour Éviter 80% des Blessures (2026)',
    metaDescription: 'Routine d\'échauffement en 10 min. 80% des blessures évitées avec ce protocole dynamique. ✓ Approuvé kinés du sport.',
    excerpt: 'La meilleure assurance anti-blessure ? Ces 10 minutes avant chaque séance.',
    category: 'prevention',
    keywords: ['échauffement', 'warm-up', 'prévention', 'dynamique', 'blessure'],
  },

  'strapping-taping': {
    slug: 'strapping-taping',
    title: 'Strapping & K-Tape : 5 Applications Efficaces (2026)',
    metaDescription: 'Cheville, genou, épaule... 5 strappings clés pour stabiliser et protéger. Techniques pro + vidéos. ✓ Kinés du sport.',
    excerpt: 'Stabiliser une articulation pour le match ou l\'épreuve ? Les 5 techniques de strapping à connaître.',
    category: 'prevention',
    keywords: ['strapping', 'k-taping', 'taping', 'stabilité', 'prévention'],
  },

  // =====================================================================
  // POST-OP & TRAUMATOLOGIE
  // =====================================================================
  'rupture-lca': {
    slug: 'rupture-lca',
    title: 'Rupture LCA : 5 Phases de Rééducation Complète (2026)',
    metaDescription: 'LCA rompu ? Protocole en 5 phases pour retour terrain en 9-12 mois. Tests obligatoires + critères. ✓ Kinés spécialisés Paris.',
    excerpt: 'Genou qui a "craqué" ? Le guide complet pour reconstruire et retrouver vos performances.',
    category: 'postop',
    keywords: ['rupture lca', 'ligament croisé', 'post-op', 'rééducation', 'retour sport'],
  },

  'entorse-poignet': {
    slug: 'entorse-poignet',
    title: 'Entorse du Poignet : 3 Phases de Récupération (2026)',
    metaDescription: 'Poignet tordu ? Protocole en 3 phases pour retrouver mobilité et force en 4-6 sem. Exercices + erreurs. ✓ Kinés spécialisés.',
    excerpt: 'Poignet douloureux après une chute ? Les 3 étapes pour récupérer complètement.',
    category: 'postop',
    keywords: ['entorse poignet', 'poignet', 'rééducation', 'mobilité', 'force'],
  },

  'hernie-discale-sport': {
    slug: 'hernie-discale-sport',
    title: 'Hernie Discale et Sport : 5 Exercices Sûrs (2026)',
    metaDescription: '80% des hernies guérissent sans chirurgie. 5 exercices sûrs + sports autorisés/interdits. ✓ Protocole kiné progressif.',
    excerpt: 'Hernie diagnostiquée ? La liste des sports à éviter et ceux qui vous feront du bien.',
    category: 'postop',
    keywords: ['hernie discale', 'lombaire', 'dos', 'traitement', 'exercices'],
  },

  'lumbago': {
    slug: 'lumbago',
    title: 'Lumbago : 4 Étapes pour Soulager Rapidement (2026)',
    metaDescription: 'Bloqué du dos ? 4 étapes pour soulager un lumbago en 48-72h. Exercices + prévention récidive. ✓ Conseils kiné.',
    excerpt: 'Tour de reins ce matin ? Voici comment débloquer la situation rapidement.',
    category: 'postop',
    keywords: ['lumbago', 'tour de reins', 'lombaire', 'douleur', 'traitement'],
  },

  'cervicalgie-teletravail': {
    slug: 'cervicalgie-teletravail',
    title: 'Cervicalgies Télétravail : 5 Exercices Anti-Douleur (2026)',
    metaDescription: 'Nuque raide après le bureau ? 5 exercices en 5 min + réglages ergonomiques. Soulagez vos cervicales. ✓ Kinés posture.',
    excerpt: 'La nuque crispe sur écran ? Ces 5 exercices changent tout.',
    category: 'prevention',
    keywords: ['cervicalgie', 'nuque', 'télétravail', 'ergonomie', 'bureau'],
  },

  'capsulite-retractile': {
    slug: 'capsulite-retractile',
    title: 'Épaule Gelée : 3 Phases de Traitement (2026)',
    metaDescription: 'Capsulite rétractile : 3 phases pour retrouver la mobilité en 6-18 mois. Exercices doux + patience. ✓ Kinés épaule Paris.',
    excerpt: 'Épaule bloquée sans raison ? La capsulite évolue en 3 phases. Voici comment la gérer.',
    category: 'postop',
    keywords: ['capsulite rétractile', 'épaule gelée', 'frozen shoulder', 'raideur', 'mobilité'],
  },

  'sciatique': {
    slug: 'sciatique',
    title: 'Sciatique : 5 Exercices pour Soulager la Douleur (2026)',
    metaDescription: 'Douleur qui descend dans la jambe ? 5 exercices immédiats + positions de soulagement. 85% guérissent sans op. ✓ Kinés.',
    excerpt: 'La jambe qui brûle ou picote ? Les premiers gestes pour calmer votre sciatique.',
    category: 'postop',
    keywords: ['sciatique', 'nerf sciatique', 'jambe', 'douleur', 'traitement'],
  },

  'pubalgie': {
    slug: 'pubalgie',
    title: 'Pubalgie : 4 Étapes pour Guérir Sans Chirurgie (2026)',
    metaDescription: 'Douleur à l\'aine qui traîne ? Protocole en 4 étapes + renforcement adducteurs. 90% guérissent sans op. ✓ Kinés sport.',
    excerpt: 'L\'aine qui tire au foot ou running ? La méthode pour en finir avec la pubalgie.',
    category: 'sport',
    keywords: ['pubalgie', 'aine', 'douleur aine', 'sport', 'traitement'],
  },

  'fracture-fatigue': {
    slug: 'fracture-fatigue',
    title: 'Fracture de Fatigue : 3 Signes d\'Alerte (2026)',
    metaDescription: 'Douleur osseuse qui s\'aggrave ? 3 signes d\'une fracture de stress + protocole repos. Ne pas ignorer ! ✓ Kinés du sport.',
    excerpt: 'Cette douleur au tibia ou au pied n\'est peut-être pas une simple courbature...',
    category: 'postop',
    keywords: ['fracture fatigue', 'fracture stress', 'os', 'sport', 'retour'],
  },

  'commotion-cerebrale-rugby': {
    slug: 'commotion-cerebrale-rugby',
    title: 'Commotion Rugby : Protocole de Retour en 6 Étapes (2026)',
    metaDescription: 'Choc à la tête au rugby ? Protocole officiel en 6 étapes pour retour sécurisé. Ne pas brûler les étapes ! ✓ Guide complet.',
    excerpt: 'Plaquage violent ? Les 6 étapes obligatoires avant de refouler le terrain.',
    category: 'postop',
    keywords: ['commotion', 'tête', 'rugby', 'trauma', 'retour progressif'],
  },

  // =====================================================================
  // KINÉ DE LA FEMME
  // =====================================================================
  'sport-grossesse': {
    slug: 'sport-grossesse',
    title: 'Sport et Grossesse : 7 Activités Recommandées (2026)',
    metaDescription: 'Enceinte et active ? 7 sports sûrs + exercices à éviter selon le trimestre. Bénéfices prouvés. ✓ Kinés spécialisées femmes.',
    excerpt: 'Continuer le sport enceinte ? Oui, mais pas n\'importe comment. Voici les 7 activités idéales.',
    category: 'femme',
    keywords: ['sport grossesse', 'enceinte', 'exercices', 'sécurité', 'bénéfices'],
  },

  'fuites-urinaires-sport': {
    slug: 'fuites-urinaires-sport',
    title: 'Fuites Urinaires Sport : 5 Exercices Périnée (2026)',
    metaDescription: 'Petite fuite au running ou au CrossFit ? 5 exercices de périnée + solutions. 85% résolus en 8 sem. ✓ Kinés périnée Paris.',
    excerpt: 'Vous évitez certains sports par peur des fuites ? Il existe des solutions simples.',
    category: 'femme',
    keywords: ['fuites urinaires', 'incontinence', 'périnée', 'sport', 'traitement'],
  },

  'reeducation-abdominale': {
    slug: 'reeducation-abdominale',
    title: 'Rééducation Abdominale Post-Partum : 4 Étapes Clés (2026)',
    metaDescription: 'Ventre mou après bébé ? Diastasis ? 4 étapes pour retrouver un ventre tonique. Délai + exercices. ✓ Kinés périnée Paris.',
    excerpt: 'Le ventre qui ne revient pas après accouchement ? Voici la marche à suivre.',
    category: 'femme',
    keywords: ['rééducation abdominale', 'post-partum', 'diastasis', 'ventre', 'exercices'],
  },

  // =====================================================================
  // GÉNÉRAL & MÉTHODOLOGIE
  // =====================================================================
  'methodologie-ebp': {
    slug: 'methodologie-ebp',
    title: 'Kinésithérapie Basée sur les Preuves (EBP) : Pourquoi ? (2026)',
    metaDescription: 'Qu\'est-ce que l\'Evidence-Based Practice ? Pourquoi chez BKS on soigne différemment. Science + expérience. ✓ Notre approche.',
    excerpt: 'Pourquoi on ne prescrit pas les mêmes exercices à tout le monde. La science au service de votre guérison.',
    category: 'general',
    keywords: ['ebp', 'preuves scientifiques', 'médecine basée preuves', 'kinésithérapie'],
  },

  // =====================================================================
  // NOUVEAUX ARTICLES - COURSE À PIED & RUNNING
  // =====================================================================
  'tendinite-achille-traitement': {
    slug: 'tendinite-achille-traitement',
    title: 'Tendinite d\'Achille : 5 Exercices Validés Scientifiquement (2026)',
    metaDescription: '85% des tendinites guérissent en 6 semaines avec ces 5 exercices. Ondes de choc + protocole complet. ✓ Kinés du sport Paris.',
    excerpt: 'Talon douloureux le matin au réveil ? Le protocole scientifique pour en venir à bout.',
    category: 'sport',
    keywords: ['tendinite achille', 'traitement', 'exercices', 'ondes de choc', 'coureur'],
  },

  'douleur-genou-course': {
    slug: 'douleur-genou-course',
    title: 'Douleur Genou Course : 4 Types et Solutions (2026)',
    metaDescription: 'Genou qui lâche à 5 km ? 4 types de douleur + diagnostic précis. Protocole retour course sans douleur. ✓ Kinés sport Paris.',
    excerpt: 'Le genou qui dit stop à chaque sortie ? Identifiez votre type de douleur pour le bon traitement.',
    category: 'sport',
    keywords: ['douleur genou', 'course à pied', 'syndrome rotulien', 'essuie-glace', 'coureur'],
  },

  'periostite-tibiale-coureur': {
    slug: 'periostite-tibiale-coureur',
    title: 'Périostite Tibiale Coureur : 4 Étapes de Guérison (2026)',
    metaDescription: 'Tibia en feu à chaque foulée ? 90% des shin splints guérissent en 4-8 semaines avec ce protocole. Évitez la fracture de stress. ✓ Kinés coureurs Paris.',
    excerpt: 'Vos tibias crient dès le 2e kilomètre ? On vous aide à les calmer pour de bon.',
    category: 'sport',
    keywords: ['périostite tibiale', 'shin splints', 'coureur', 'traitement', 'reprise'],
  },

  'douleur-hanche-coureur': {
    slug: 'douleur-hanche-coureur',
    title: 'Douleur de Hanche Coureur : 5 Causes Fréquentes (2026)',
    metaDescription: 'Hanche qui bloque après 30 min de running ? 5 causes et protocoles ciblés. Diagnostic + exercices. ✓ Kinés spécialisés coureurs.',
    excerpt: 'La hanche qui coince quand vous montez le kilométrage ? Voici les 5 pistes à explorer.',
    category: 'sport',
    keywords: ['douleur hanche', 'coureur', 'running', 'diagnostic', 'traitement'],
  },

  'douleur-hanche-course': {
    slug: 'douleur-hanche-course',
    title: 'Douleur Hanche Running : Diagnostic et Traitement (2026)',
    metaDescription: 'Douleur de hanche qui apparaît à la course ? Bursite, tendinopathie ou FAI ? Diagnostic + solutions. ✓ Kinés sport Paris 17.',
    excerpt: 'Cette douleur de hanche vous empêche de courir ? Identifions ensemble la cause exacte.',
    category: 'sport',
    keywords: ['douleur hanche', 'course', 'running', 'bursite', 'tendinopathie'],
  },

  'douleur-mollet-coureur': {
    slug: 'douleur-mollet-coureur',
    title: 'Douleur Mollet Coureur : 3 Causes à Connaître (2026)',
    metaDescription: 'Mollet qui tire au running ? Contracture, périostite ou syndrome des loges ? Diagnostic + protocole. ✓ Kinés du sport.',
    excerpt: 'Le mollet qui lâche en plein effort ? Pas toujours un claquage. Découvrez les 3 causes possibles.',
    category: 'sport',
    keywords: ['douleur mollet', 'coureur', 'running', 'contracture', 'claquage'],
  },

  'crampes-course-pied': {
    slug: 'crampes-course-pied',
    title: 'Crampes en Course : 6 Causes et Solutions (2026)',
    metaDescription: 'Crampes qui stoppent votre course ? 6 causes + prévention efficace. Hydratation, électrolytes, entraînement. ✓ Guide complet.',
    excerpt: 'Les crampes qui vous arrêtent à chaque semi ? Les vraies causes et comment les prévenir.',
    category: 'sport',
    keywords: ['crampes', 'course à pied', 'prévention', 'hydratation', 'magnésium'],
  },

  'fracture-fatigue-coureur': {
    slug: 'fracture-fatigue-coureur',
    title: 'Fracture de Fatigue Coureur : 5 Signes à Ne Pas Ignorer',
    metaDescription: 'Douleur osseuse qui empire à chaque sortie running ? 5 signes d\'une fracture de stress. 1 coureur sur 10 concerné. Ignorez et c\'est 3 mois d\'arrêt. ✓ Guide.',
    excerpt: 'Cette douleur au tibia n\'est pas une simple courbature. Les 5 signaux d\'alerte.',
    category: 'sport',
    keywords: ['fracture fatigue', 'coureur', 'fracture stress', 'tibia', 'métatarse'],
  },

  'echauffement-course-pied': {
    slug: 'echauffement-course-pied',
    title: 'Échauffement Running : 8 Min pour Éviter 80% des Blessures',
    metaDescription: 'Vous partez courir directement ? Erreur ! Cette routine de 8 min prévient 80% des blessures running. Gammes + activation musculaire. ✓ Approuvé kinés sport.',
    excerpt: 'Partir courir direct sans échauffement ? On vous explique pourquoi c\'est risqué.',
    category: 'prevention',
    keywords: ['échauffement', 'course à pied', 'running', 'prévention', 'gammes'],
  },

  'preparation-physique-coureur': {
    slug: 'preparation-physique-coureur',
    title: 'PPG Coureur : 6 Exercices pour Courir Sans Blessure (2026)',
    metaDescription: 'Blessé à répétition ? Les coureurs qui font de la PPG se blessent 50% moins. 6 exercices clés + programme gratuit à télécharger. ✓ Validé kinés sport.',
    excerpt: 'Les pros font tous de la PPG. Et vous, c\'est pour quand ?',
    category: 'prevention',
    keywords: ['ppg', 'préparation physique', 'coureur', 'renforcement', 'exercices'],
  },

  'recuperation-coureur': {
    slug: 'recuperation-coureur',
    title: 'Récupération Coureur : 7 Méthodes Scientifiques (2026)',
    metaDescription: 'Vous vous entraînez dur mais stagnez ? La récup est souvent le maillon faible. 7 stratégies validées par la science pour progresser plus vite. ✓ Kinés.',
    excerpt: 'Votre entraînement est au top mais les perfs stagnent ? Regardons du côté de la récup.',
    category: 'prevention',
    keywords: ['récupération', 'coureur', 'running', 'sommeil', 'nutrition'],
  },

  'premier-marathon-preparation': {
    slug: 'premier-marathon-preparation',
    title: 'Questions Fréquentes Course à Pied 2026 [Guide Kiné]',
    metaDescription: 'Les 10 questions les plus posées sur la course 2026 : plan d\'entraînement, nutrition, blessures, chaussures. Réponses de kinés du sport Paris.',
    excerpt: 'Les 42 km vous font rêver ? On vous prépare à franchir la ligne debout.',
    category: 'sport',
    keywords: ['questions fréquentes', 'préparation course', 'marathon', 'plan entraînement', 'nutrition'],
  },

  'analyse-foulee-coureur': {
    slug: 'analyse-foulee-coureur',
    title: 'Analyse de Foulée : 7 Défauts à Corriger (2026)',
    metaDescription: 'Blessé à répétition ? L\'analyse de foulée identifie vos défauts. 7 corrections clés + protocole vidéo. ✓ Kinés du sport Paris 17.',
    excerpt: 'Votre foulée vous blesse ? Les 7 défauts les plus fréquents et comment les corriger.',
    category: 'sport',
    keywords: ['analyse foulée', 'coureur', 'biomécanique', 'technique', 'blessure'],
  },

  'reprise-sport-blessure': {
    slug: 'reprise-sport-blessure',
    title: 'Reprise Sport Après Blessure : 5 Étapes Clés (2026)',
    metaDescription: 'Quand et comment reprendre après blessure ? Protocol en 5 étapes pour éviter la rechute. Critères + progressivité. ✓ Kinés sport.',
    excerpt: 'Vous vous sentez guéri mais ne savez pas comment reprendre ? Les 5 étapes obligatoires.',
    category: 'sport',
    keywords: ['reprise', 'sport', 'blessure', 'retour', 'progressif'],
  },

  'reeducation-lca-protocole': {
    slug: 'reeducation-lca-protocole',
    title: 'Rééducation LCA : Protocole en 5 Phases (2026)',
    metaDescription: 'Post-op LCA ? Protocole complet en 5 phases pour retour terrain en 9-12 mois. Critères + tests. ✓ Kinés spécialisés genou.',
    excerpt: 'Après la ligamentoplastie, le vrai travail commence. Les 5 phases pour retrouver votre genou.',
    category: 'postop',
    keywords: ['rééducation', 'lca', 'protocole', 'post-op', 'ligament croisé'],
  },

  // =====================================================================
  // SPORTS SPÉCIFIQUES - FOOTBALL, RUGBY, TENNIS, ETC.
  // =====================================================================
  'dechirure-adducteurs-football': {
    slug: 'dechirure-adducteurs-football',
    title: 'Déchirure Adducteurs Football : Protocole Retour (2026)',
    metaDescription: 'Adducteurs claqués au foot ? Protocole en 4 phases pour retour terrain sans récidive. Délais réalistes. ✓ Kinés sport football.',
    excerpt: 'L\'aine qui lâche au tir ou sprint ? Le protocole pour revenir solide sur le terrain.',
    category: 'sport',
    keywords: ['déchirure adducteurs', 'football', 'claquage', 'aine', 'retour terrain'],
  },

  'entorse-genou-gardien-football': {
    slug: 'entorse-genou-gardien-football',
    title: 'Entorse Genou Gardien : Rééducation Spécifique (2026)',
    metaDescription: 'Genou tordu en plongeon ? Protocole gardien de but : plongeons, appuis, réflexes. Retour cage sécurisé. ✓ Kinés foot Paris.',
    excerpt: 'Le genou du gardien a ses spécificités. Voici comment le rééduquer correctement.',
    category: 'sport',
    keywords: ['entorse genou', 'gardien', 'football', 'rééducation', 'retour'],
  },

  'changements-direction-football': {
    slug: 'changements-direction-football',
    title: 'Changements de Direction Football : Prévenir les Blessures (2026)',
    metaDescription: 'LCA, cheville, ischio... Les changements de direction cassent. Prévention + renforcement spécifique. ✓ Kinés sport football.',
    excerpt: 'Les crochets et accélérations causent 70% des blessures au foot. Comment les prévenir.',
    category: 'prevention',
    keywords: ['changements direction', 'football', 'prévention', 'lca', 'agilité'],
  },

  'retour-football-fracture-jambe': {
    slug: 'retour-football-fracture-jambe',
    title: 'Retour Football Après Fracture : 4 Étapes (2026)',
    metaDescription: 'Fracture tibia/péroné au foot ? Protocole retour terrain en 4 étapes. Consolidation + réathlétisation. ✓ Kinés sport Paris.',
    excerpt: 'La jambe a cassé mais vous voulez rejouer ? Les 4 étapes pour un retour sûr.',
    category: 'postop',
    keywords: ['fracture', 'jambe', 'football', 'retour', 'réathlétisation'],
  },

  'plaquage-rugby-epaule': {
    slug: 'plaquage-rugby-epaule',
    title: 'Blessure Épaule Rugby : Plaquage et Rééducation (2026)',
    metaDescription: 'Épaule touchée au plaquage ? Luxation, AC, coiffe... Diagnostic + protocole rugby-spécifique. ✓ Kinés sport rugby Paris.',
    excerpt: 'L\'épaule qui a pris au plaquage ? Voici comment la rééduquer pour replaquer.',
    category: 'sport',
    keywords: ['épaule', 'rugby', 'plaquage', 'luxation', 'rééducation'],
  },

  'melee-rugby-lombalgie-pilier': {
    slug: 'melee-rugby-lombalgie-pilier',
    title: 'Lombalgie Pilier Rugby : 5 Exercices Clés (2026)',
    metaDescription: 'Dos qui lâche en mêlée ? 5 exercices de renforcement spécifiques piliers/talonneurs. Prévention + traitement. ✓ Kinés rugby.',
    excerpt: 'Le dos du pilier souffre en mêlée. Les 5 exercices pour le protéger.',
    category: 'sport',
    keywords: ['lombalgie', 'rugby', 'pilier', 'mêlée', 'renforcement'],
  },

  'claquage-mollet-tennis': {
    slug: 'claquage-mollet-tennis',
    title: 'Claquage Mollet Tennis : Traitement et Reprise (2026)',
    metaDescription: 'Le "tennis leg" vous a touché ? Protocole progression + reprise terrain en 4-8 sem. Évitez la récidive. ✓ Kinés sport tennis.',
    excerpt: 'Le mollet qui claque sur un démarrage ? Le traitement du fameux "tennis leg".',
    category: 'sport',
    keywords: ['claquage mollet', 'tennis', 'tennis leg', 'traitement', 'reprise'],
  },

  'luxation-rotule-tennis': {
    slug: 'luxation-rotule-tennis',
    title: 'Luxation Rotule Tennis : Rééducation Complète (2026)',
    metaDescription: 'Rotule sortie au tennis ? Protocole stabilisation + retour court. Prévention récidive. ✓ Kinés spécialisés genou Paris.',
    excerpt: 'La rotule qui glisse sur un pivot ? Comment stabiliser et revenir jouer.',
    category: 'postop',
    keywords: ['luxation rotule', 'tennis', 'rééducation', 'stabilisation', 'genou'],
  },

  'canal-carpien-tennis': {
    slug: 'canal-carpien-tennis',
    title: 'Canal Carpien Tennis : 4 Solutions Sans Chirurgie (2026)',
    metaDescription: 'Fourmillements dans la main au tennis ? 4 solutions avant la chirurgie. Attelles, exercices, ergonomie. ✓ Kinés main Paris.',
    excerpt: 'La main qui s\'endort à la raquette ? C\'est peut-être le canal carpien. Voici que faire.',
    category: 'sport',
    keywords: ['canal carpien', 'tennis', 'main', 'fourmillements', 'traitement'],
  },

  'syndrome-piriforme-cycliste': {
    slug: 'syndrome-piriforme-cycliste',
    title: 'Syndrome Piriforme Cycliste : 4 Exercices (2026)',
    metaDescription: 'Fesse qui brûle à vélo ? Syndrome du piriforme chez le cycliste. 4 exercices + réglages selle. ✓ Kinés sport vélo Paris.',
    excerpt: 'Cette douleur profonde dans la fesse à vélo ? Le piriforme est sûrement coupable.',
    category: 'sport',
    keywords: ['syndrome piriforme', 'cycliste', 'vélo', 'fesse', 'sciatique'],
  },

  'engourdissement-mains-cycliste': {
    slug: 'engourdissement-mains-cycliste',
    title: 'Mains Engourdies à Vélo : 5 Solutions (2026)',
    metaDescription: 'Mains qui s\'endorment à vélo ? Syndrome du canal ulnaire. 5 solutions : position, gants, guidon. ✓ Kinés sport cyclisme.',
    excerpt: 'Les doigts qui fourmillent sur le vélo ? Voici les 5 ajustements qui changent tout.',
    category: 'sport',
    keywords: ['engourdissement mains', 'cycliste', 'vélo', 'ulnaire', 'position'],
  },

  'douleur-epaule-musculation': {
    slug: 'douleur-epaule-musculation',
    title: 'Douleur Épaule Musculation : 5 Erreurs à Éviter (2026)',
    metaDescription: 'Épaule qui coince au développé ou tirage ? 5 erreurs techniques + exercices correctifs. Continuez à progresser. ✓ Kinés muscu.',
    excerpt: 'L\'épaule qui bloque au bench ? Les 5 erreurs techniques qui cassent les épaules.',
    category: 'sport',
    keywords: ['douleur épaule', 'musculation', 'développé', 'conflit', 'technique'],
  },

  'tendinite-long-biceps-musculation': {
    slug: 'tendinite-long-biceps-musculation',
    title: 'Tendinite Long Biceps : Combien de Temps ? Traitement (2026)',
    metaDescription: 'Tendinite du long biceps : combien de temps pour guérir ? 8-12 semaines avec ce protocole. Continuez à vous entraîner. ✓ Kinés musculation Paris.',
    excerpt: 'Le biceps qui tire à l\'épaule ? Comment soigner sans arrêter de s\'entraîner.',
    category: 'sport',
    keywords: ['tendinite long biceps', 'combien de temps', 'musculation', 'épaule', 'traitement'],
  },

  'syndrome-rotulien-powerlifter': {
    slug: 'syndrome-rotulien-powerlifter',
    title: 'Syndrome Rotulien Powerlifter : 4 Solutions (2026)',
    metaDescription: 'Genou qui brûle au squat lourd ? Syndrome rotulien chez le powerlifter. 4 solutions + adaptation technique. ✓ Kinés force.',
    excerpt: 'Le genou qui dit non au squat heavy ? Comment continuer à progresser sans douleur.',
    category: 'sport',
    keywords: ['syndrome rotulien', 'powerlifter', 'squat', 'genou', 'traitement'],
  },

  'douleur-epaule-crossfit': {
    slug: 'douleur-epaule-crossfit',
    title: 'Douleur Épaule CrossFit : 5 Mouvements à Adapter (2026)',
    metaDescription: 'Épaule qui lâche aux muscle-ups ou snatches ? 5 mouvements à adapter + progressions. Ne pas arrêter le WOD. ✓ Kinés CrossFit.',
    excerpt: 'L\'épaule qui crie à chaque kipping ? Les adaptations pour continuer sans casser.',
    category: 'sport',
    keywords: ['douleur épaule', 'crossfit', 'muscle-up', 'snatch', 'adaptation'],
  },

  // =====================================================================
  // DANSE, ESCALADE, SKI, PADEL, NATATION, BOXE
  // =====================================================================
  'hallux-valgus-danseuse': {
    slug: 'hallux-valgus-danseuse',
    title: 'Hallux Valgus Danseuse : Prévention et Solutions (2026)',
    metaDescription: 'Oignon au pied qui gêne en pointe ? Prévention + exercices + quand opérer. Continuez à danser. ✓ Kinés danse Paris.',
    excerpt: 'L\'hallux valgus qui s\'aggrave avec la danse ? Les solutions pour continuer sur pointes.',
    category: 'sport',
    keywords: ['hallux valgus', 'danseuse', 'danse', 'oignon', 'pied'],
  },

  'instabilite-cheville-danseuse': {
    slug: 'instabilite-cheville-danseuse',
    title: 'Cheville Instable Danseuse : 5 Exercices Clés (2026)',
    metaDescription: 'Cheville qui lâche à la réception ? 5 exercices proprioception pour danseurs. Stabilité + confiance. ✓ Kinés danse.',
    excerpt: 'La cheville qui se dérobe en saut ? Les 5 exercices pour retrouver la stabilité.',
    category: 'sport',
    keywords: ['cheville instable', 'danseuse', 'danse', 'proprioception', 'stabilité'],
  },

  'syndrome-os-naviculaire-danse': {
    slug: 'syndrome-os-naviculaire-danse',
    title: 'Syndrome Os Naviculaire Danseur : Guide Complet (2026)',
    metaDescription: 'Douleur au milieu du pied en danse ? L\'os naviculaire est peut-être en cause. Diagnostic + traitement. ✓ Kinés spécialisés danse.',
    excerpt: 'Cette douleur au-dessus du pied qui bloque les relevés. Le guide du syndrome naviculaire.',
    category: 'sport',
    keywords: ['os naviculaire', 'danse', 'pied', 'douleur', 'traitement'],
  },

  'blessure-doigt-escalade-poulie': {
    slug: 'blessure-doigt-escalade-poulie',
    title: 'Poulie Escalade : Blessure, Grades et Reprise (2026)',
    metaDescription: 'Poulie A2 claquée ? Évaluez votre grade (1-4), délai de reprise et protocole retour grimpe. Ne risquez pas la rupture complète. ✓ Kinés escalade.',
    excerpt: 'La poulie A2 qui lâche sur l\'arqué. Comment revenir grimper en sécurité.',
    category: 'sport',
    keywords: ['poulie escalade', 'blessure doigt', 'grades', 'reprise grimpe', 'bloc'],
  },

  'douleur-poignet-boxeur': {
    slug: 'douleur-poignet-boxeur',
    title: 'Douleur Poignet Boxeur : 4 Causes Fréquentes (2026)',
    metaDescription: 'Poignet qui douleur à l\'impact ? 4 causes chez le boxeur + renforcement. Technique bandage. ✓ Kinés sport combat.',
    excerpt: 'Le poignet qui grince à chaque direct ? Les 4 causes et comment les traiter.',
    category: 'sport',
    keywords: ['douleur poignet', 'boxeur', 'boxe', 'bandage', 'renforcement'],
  },

  'tendinite-epaule-boxeur': {
    slug: 'tendinite-epaule-boxeur',
    title: 'Tendinite Épaule Boxeur : Traitement Spécifique (2026)',
    metaDescription: 'Épaule qui brûle au jab ou crochet ? Tendinite du boxeur. Traitement + adaptation entraînement. ✓ Kinés sport combat Paris.',
    excerpt: 'L\'épaule qui lâche au bout de 3 rounds ? Le protocole pour les boxeurs.',
    category: 'sport',
    keywords: ['tendinite épaule', 'boxeur', 'boxe', 'traitement', 'jab'],
  },

  'cheville-instable-boxeur': {
    slug: 'cheville-instable-boxeur',
    title: 'Cheville Boxeur : Stabilité et Prévention (2026)',
    metaDescription: 'Cheville qui tourne sur les déplacements ? Renforcement spécifique boxe. Appuis + pivots sécurisés. ✓ Kinés sport combat.',
    excerpt: 'Les appuis du boxeur sollicitent les chevilles. Comment les renforcer.',
    category: 'sport',
    keywords: ['cheville', 'boxeur', 'boxe', 'stabilité', 'appuis'],
  },

  'fracture-pouce-boxeur': {
    slug: 'fracture-pouce-boxeur',
    title: 'Fracture du Pouce : Rééducation et Délais (2026)',
    metaDescription: 'Fracture du pouce : rééducation complète post-immobilisation. Délai retour sport, exercices progressifs. ✓ Kinés main Paris 17.',
    excerpt: 'Le pouce fracturé : combien de temps, quels exercices et quand reprendre le sport.',
    category: 'postop',
    keywords: ['fracture du pouce', 'rééducation', 'délais', 'main', 'retour sport'],
  },

  'genou-nageur-brasse': {
    slug: 'genou-nageur-brasse',
    title: 'Genou du Brasseur : Causes et Traitement (2026)',
    metaDescription: 'Genou interne qui douleur en brasse ? Le "genou du brasseur". Technique + renforcement. ✓ Kinés sport natation Paris.',
    excerpt: 'Le genou qui gêne à chaque ciseau de brasse ? Voici pourquoi et comment corriger.',
    category: 'sport',
    keywords: ['genou', 'brasse', 'nageur', 'natation', 'traitement'],
  },

  'grand-dorsal-nageur': {
    slug: 'grand-dorsal-nageur',
    title: 'Douleur Grand Dorsal Nageur : 4 Exercices (2026)',
    metaDescription: 'Grand dorsal qui tire en crawl ? 4 exercices étirements + renforcement. Optimisez votre traction. ✓ Kinés natation Paris.',
    excerpt: 'Le grand dorsal qui lâche sur les séries. 4 exercices pour nager sans douleur.',
    category: 'sport',
    keywords: ['grand dorsal', 'nageur', 'natation', 'crawl', 'douleur'],
  },

  'blessures-padel-debutant': {
    slug: 'blessures-padel-debutant',
    title: 'Blessures Padel Débutant : 5 Plus Fréquentes (2026)',
    metaDescription: 'Nouveau au padel ? Les 5 blessures les plus fréquentes et comment les éviter. Tennis elbow, épaule, cheville. ✓ Prévention.',
    excerpt: 'Le padel attire, mais attention aux blessures typiques du débutant.',
    category: 'prevention',
    keywords: ['blessures', 'padel', 'débutant', 'prévention', 'tennis elbow'],
  },

  'preparation-ski': {
    slug: 'preparation-ski',
    title: 'Préparation Physique Ski : 6 Exercices Indispensables (2026)',
    metaDescription: 'Préparation physique ski : 6 exercices 4 sem avant les pistes. Genoux, cuisses, proprioception. Évitez la blessure dès J1. ✓ Programme kiné.',
    excerpt: 'Le ski approche ? 6 exercices pour ne pas exploser les genoux dès le premier jour.',
    category: 'prevention',
    keywords: ['préparation physique ski', 'exercices', 'genoux', 'cuisses', 'proprioception'],
  },

  'spondylolyse-gymnaste': {
    slug: 'spondylolyse-gymnaste',
    title: 'Spondylolyse Gymnaste : Diagnostic et Traitement (2026)',
    metaDescription: 'Mal de dos gymnaste ? La spondylolyse touche 10% des gymnastes. Diagnostic + repos + retour. ✓ Kinés sport gymnastique.',
    excerpt: 'Le dos du gymnaste en souffrance. Comprendre et traiter la spondylolyse.',
    category: 'sport',
    keywords: ['spondylolyse', 'gymnaste', 'dos', 'lombaire', 'gymnastique'],
  },

  'dechirure-abdomen-gymnaste': {
    slug: 'dechirure-abdomen-gymnaste',
    title: 'Déchirure Abdominale Gymnaste : Rééducation (2026)',
    metaDescription: 'Abdominaux claqués en gym ? Protocole progressif + adaptation entraînement. Retour aux agrès. ✓ Kinés sport gymnastique.',
    excerpt: 'L\'abdo qui lâche sur un salto. Le protocole pour retrouver les agrès.',
    category: 'sport',
    keywords: ['déchirure abdominale', 'gymnaste', 'abdominaux', 'gymnastique', 'rééducation'],
  },

  'douleur-poignet-yoga': {
    slug: 'douleur-poignet-yoga',
    title: 'Douleur Poignet Yoga : 4 Solutions Simples (2026)',
    metaDescription: 'Poignets qui brûlent en chien tête en bas ? 4 adaptations + renforcement. Pratiquez sans douleur. ✓ Conseils kiné yoga.',
    excerpt: 'Les poignets qui disent stop aux appuis ? 4 modifications qui changent tout.',
    category: 'sport',
    keywords: ['douleur poignet', 'yoga', 'appui', 'modification', 'renforcement'],
  },

  'golf-elbow-epicondylite-mediale': {
    slug: 'golf-elbow-epicondylite-mediale',
    title: 'Golf Elbow : 4 Exercices Efficaces (2026)',
    metaDescription: 'Douleur côté interne du coude ? L\'épicondylite médiale (golf elbow). 4 exercices + traitement. ✓ Kinés sport golf Paris.',
    excerpt: 'L\'autre tennis elbow : le golf elbow qui gêne la prise. Comment le traiter.',
    category: 'sport',
    keywords: ['golf elbow', 'épicondylite médiale', 'coude', 'golf', 'traitement'],
  },

  // =====================================================================
  // DOS & TÉLÉTRAVAIL
  // =====================================================================
  'lombalgie-sportif': {
    slug: 'lombalgie-sportif',
    title: 'Lombalgie Sportif : 5 Exercices Sans Arrêter le Sport',
    metaDescription: 'Dos bloqué qui gêne vos entraînements ? 70% des sportifs ont mal au dos. 5 exercices ciblés + adaptation de charge. Continuez à progresser ! ✓ Kinés sport.',
    excerpt: 'Le bas du dos qui bloque à chaque soulevé de terre ? On règle ça ensemble.',
    category: 'sport',
    keywords: ['lombalgie', 'sportif', 'dos', 'exercices', 'renforcement'],
  },

  'lombalgie-teletravail-routine': {
    slug: 'lombalgie-teletravail-routine',
    title: 'Lombalgie Télétravail : Routine 10 Min Efficace (2026)',
    metaDescription: 'Dos détruit par le télétravail ? 73% des télétravailleurs souffrent du dos. Notre routine de 10 min + ergonomie soulage en 7 jours. ✓ Kinés posture Paris.',
    excerpt: 'La chaise de bureau massacre votre bas du dos ? Cette petite routine change tout.',
    category: 'prevention',
    keywords: ['lombalgie', 'télétravail', 'routine', 'ergonomie', 'exercices'],
  },

  'douleur-inter-scapulaire-teletravail': {
    slug: 'douleur-inter-scapulaire-teletravail',
    title: 'Douleur Entre les Omoplates : 5 Solutions Rapides (2026)',
    metaDescription: 'Cette barre entre les omoplates après 2h d\'écran ? 65% des télétravailleurs en souffrent. 5 exercices + réglages bureau pour un soulagement durable. ✓ Kinés.',
    excerpt: 'Le haut du dos en feu après le boulot ? C\'est la signature du télétravail.',
    category: 'prevention',
    keywords: ['douleur inter-scapulaire', 'omoplates', 'télétravail', 'posture', 'bureau'],
  },

  'tendinite-de-quervain-teletravail': {
    slug: 'tendinite-de-quervain-teletravail',
    title: 'Tendinite de Quervain : 4 Traitements Sans Chirurgie (2026)',
    metaDescription: 'Pouce et poignet qui brûlent à la souris ? 80% des tendinites de Quervain guérissent sans op. 4 traitements + ergonomie adaptée. ✓ Kinés main Paris.',
    excerpt: 'Le pouce qui crie à chaque scroll ? La maladie des accros du smartphone.',
    category: 'prevention',
    keywords: ['tendinite quervain', 'pouce', 'poignet', 'télétravail', 'souris'],
  },

  'syndrome-traversee-thoraco-brachiale': {
    slug: 'syndrome-traversee-thoraco-brachiale',
    title: 'Syndrome Traversée Thoraco-Brachiale : Guide (2026)',
    metaDescription: 'Bras qui s\'endort, douleur épaule-main ? Le STTB expliqué. Diagnostic + exercices de libération. ✓ Kinés spécialisés.',
    excerpt: 'Le bras qui s\'engourdit, l\'épaule qui tire. Comprendre ce syndrome méconnu.',
    category: 'postop',
    keywords: ['sttb', 'traversée thoraco-brachiale', 'épaule', 'bras', 'engourdissement'],
  },

  'periostite-coureur-urbain-paris': {
    slug: 'periostite-coureur-urbain-paris',
    title: 'Périostite Coureur Urbain Paris : 4 Conseils (2026)',
    metaDescription: 'Courir sur béton parisien = tibias en feu ? 4 conseils spécifiques coureurs urbains. Surfaces + chaussures. ✓ Kinés Paris.',
    excerpt: 'Le bitume parisien est dur pour les tibias. Comment adapter son running.',
    category: 'sport',
    keywords: ['périostite', 'coureur', 'paris', 'urbain', 'bitume'],
  },

  // =====================================================================
  // KINÉ DE LA FEMME - GROSSESSE & POST-PARTUM
  // =====================================================================
  'allaitement-posture': {
    slug: 'allaitement-posture',
    title: 'Posture Allaitement : 5 Conseils Anti-Douleur (2026)',
    metaDescription: 'Dos, nuque, épaules en vrac après l\'allaitement ? 5 postures + coussins adaptés. Allaitez sans douleur. ✓ Kinés femmes.',
    excerpt: 'L\'allaitement fatigue le dos et les épaules. Voici comment l\'organiser sans douleur.',
    category: 'femme',
    keywords: ['allaitement', 'posture', 'dos', 'douleur', 'coussin'],
  },

  'diastasis-grossesse': {
    slug: 'diastasis-grossesse',
    title: 'Diastasis Grossesse : Prévenir et Traiter (2026)',
    metaDescription: 'Ventre qui s\'écarte pendant la grossesse ? Le diastasis expliqué. Exercices adaptés + suivi post-partum. ✓ Kinés périnée.',
    excerpt: 'Le ventre qui se sépare : comprendre le diastasis et comment le gérer.',
    category: 'femme',
    keywords: ['diastasis', 'grossesse', 'abdominaux', 'prévention', 'post-partum'],
  },

  'douleurs-lombaires-grossesse': {
    slug: 'douleurs-lombaires-grossesse',
    title: 'Mal de Dos Grossesse : 5 Solutions Sûres (2026)',
    metaDescription: '80% des femmes enceintes ont mal au dos. 5 solutions sûres + exercices adaptés par trimestre. ✓ Kinés femmes Paris.',
    excerpt: 'Le dos qui lâche avec le ventre qui grossit ? Les 5 solutions validées pour les futures mamans.',
    category: 'femme',
    keywords: ['mal de dos', 'grossesse', 'enceinte', 'lombaires', 'exercices'],
  },

  'sciatique-grossesse': {
    slug: 'sciatique-grossesse',
    title: 'Sciatique Grossesse : Soulagement Rapide (2026)',
    metaDescription: 'Douleur fesse-jambe pendant la grossesse ? Sciatique ou piriforme ? Diagnostic + positions de soulagement. ✓ Kinés femmes.',
    excerpt: 'La jambe qui brûle enceinte ? Différenciez vraie sciatique et syndrome du piriforme.',
    category: 'femme',
    keywords: ['sciatique', 'grossesse', 'piriforme', 'enceinte', 'soulagement'],
  },

  'douleurs-ligaments-ronds': {
    slug: 'douleurs-ligaments-ronds',
    title: 'Douleur Ligaments Ronds Grossesse : Solutions (2026)',
    metaDescription: 'Points de côté, bas-ventre qui tire enceinte ? Les ligaments ronds. Positions + exercices soulageants. ✓ Kinés grossesse.',
    excerpt: 'Ces douleurs dans le bas-ventre qui inquiètent. Comprendre les ligaments ronds.',
    category: 'femme',
    keywords: ['ligaments ronds', 'grossesse', 'douleur', 'bas-ventre', 'enceinte'],
  },

  'douleurs-symphyse-pubienne': {
    slug: 'douleurs-symphyse-pubienne',
    title: 'Symphyse Pubienne Grossesse : Traitement (2026)',
    metaDescription: 'Douleur au pubis qui empêche de marcher ? Syndrome de la symphyse pubienne. Ceinture + exercices. ✓ Kinés grossesse Paris.',
    excerpt: 'Le pubis qui fait un mal terrible à chaque pas. Voici comment le gérer.',
    category: 'femme',
    keywords: ['symphyse pubienne', 'grossesse', 'douleur', 'pubis', 'ceinture'],
  },

  'preparation-accouchement-perinee': {
    slug: 'preparation-accouchement-perinee',
    title: 'Préparation Périnée Accouchement : Guide (2026)',
    metaDescription: 'Préparez votre périnée pour l\'accouchement. Massage, exercices, respiration. Réduisez le risque de déchirure. ✓ Kinés périnée.',
    excerpt: 'Le périnée se prépare avant D-Day. Voici comment optimiser l\'accouchement.',
    category: 'femme',
    keywords: ['préparation', 'périnée', 'accouchement', 'massage', 'exercices'],
  },

  'cesarienne-reeducation': {
    slug: 'cesarienne-reeducation',
    title: 'Rééducation Post-Césarienne : 4 Étapes (2026)',
    metaDescription: 'Césarienne ? Protocole spécifique en 4 étapes. Cicatrice, abdos, périnée. Retrouvez votre corps. ✓ Kinés post-partum Paris.',
    excerpt: 'La césarienne demande une rééducation particulière. Les 4 étapes clés.',
    category: 'femme',
    keywords: ['césarienne', 'rééducation', 'cicatrice', 'abdominaux', 'post-partum'],
  },

  'retour-sport-post-partum': {
    slug: 'retour-sport-post-partum',
    title: 'Reprendre le Sport Après Accouchement : Guide (2026)',
    metaDescription: 'Quand et comment reprendre le sport après bébé ? Critères de reprise + sports adaptés. Évitez les erreurs. ✓ Kinés femmes.',
    excerpt: 'Envie de recourir après bébé ? Comment reprendre sans casser le périnée.',
    category: 'femme',
    keywords: ['sport', 'post-partum', 'reprise', 'accouchement', 'périnée'],
  },

  'depression-post-partum-activite': {
    slug: 'depression-post-partum-activite',
    title: 'Activité Physique Post-Partum et Moral (2026)',
    metaDescription: 'Le sport aide contre le baby blues. Comment bouger en post-partum pour le moral + l\'énergie. Progressif et adapté. ✓ Kinés.',
    excerpt: 'Bouger aide le moral post-bébé. Comment s\'y remettre en douceur.',
    category: 'femme',
    keywords: ['activité', 'post-partum', 'moral', 'baby blues', 'exercice'],
  },

  'reeducation-perineale-methodes': {
    slug: 'reeducation-perineale-methodes',
    title: 'Rééducation Périnéale : 4 Méthodes Expliquées (2026)',
    metaDescription: 'Sonde, manuelle, biofeedback, EMS... Quelle rééducation périnéale choisir ? Les 4 méthodes expliquées. ✓ Kinés périnée Paris.',
    excerpt: 'La rééducation du périnée, ça se passe comment exactement ? Les méthodes décryptées.',
    category: 'femme',
    keywords: ['rééducation', 'périnée', 'méthodes', 'sonde', 'biofeedback'],
  },

  'kine-perinee-paris-17': {
    slug: 'kine-perinee-paris-17',
    title: 'Kiné Périnée Paris 17 : Qui Consulter ? (2026)',
    metaDescription: 'Cherchez un(e) kiné périnée à Paris 17 ? Spécialistes grossesse, post-partum, fuites. Prise en charge rapide. ✓ RDV disponibles.',
    excerpt: 'Besoin d\'une rééducation périnéale à Paris 17 ? Notre équipe spécialisée vous accompagne.',
    category: 'femme',
    keywords: ['kiné', 'périnée', 'paris 17', 'batignolles', 'rééducation'],
  },

  'prolapsus-prevention': {
    slug: 'prolapsus-prevention',
    title: 'Prolapsus : Prévention et Traitement Kiné (2026)',
    metaDescription: 'Sensation de pesanteur pelvienne ? Le prolapsus peut se prévenir et se traiter par la kiné. Exercices + conseils. ✓ Kinés périnée.',
    excerpt: 'La descente d\'organes fait peur. Voici comment la prévenir et la traiter.',
    category: 'femme',
    keywords: ['prolapsus', 'prévention', 'périnée', 'traitement', 'pesanteur'],
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

// =====================================================================
// SERVICE SEO CONFIG
// Optimized meta titles and descriptions for service pages
// =====================================================================

export interface ServiceSEO {
  id: string;
  title: string;
  metaDescription: string;
}

export const SERVICES_SEO_CONFIG: Record<string, ServiceSEO> = {
  'kine-sport': {
    id: 'kine-sport',
    title: 'Kiné du Sport Paris 17 — Bilan et Suivi',
    metaDescription: 'Blessure sportive ? 90% de retour terrain en 12 sem. Bilan complet, protocole personnalisé. ✓ 5 kinés spécialisés Paris Batignolles.',
  },
  'reeducation-post-traumatique': {
    id: 'reeducation-post-traumatique',
    title: 'Rééducation Post-Op Paris 17 — Genou, Épaule',
    metaDescription: 'Après chirurgie du genou, épaule ou cheville ? Suivi post-op strict avec kinés spécialisés. ✓ Retour autonomie en 6-12 sem. Paris Batignolles.',
  },
  'prevention-preparation-physique': {
    id: 'prevention-preparation-physique',
    title: 'Préparation Physique Paris 17 — Bilan Sportif',
    metaDescription: 'Évitez les blessures avec un bilan préventif FMS. Programme personnalisé par kinés du sport. ✓ Correction déséquilibres musculaires. Paris 17.',
  },
};

export function getServiceSEOConfig(serviceId: string): ServiceSEO | null {
  return SERVICES_SEO_CONFIG[serviceId] || null;
}

