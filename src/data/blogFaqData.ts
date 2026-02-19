/**
 * Blog FAQ Data — Questions/Answers for FAQPage Schema
 * Calqué sur les PAA (People Also Ask) Google pour chaque article
 * Injecté comme rich snippet FAQPage dans les SERP
 */

export const BLOG_FAQ_DATA: Record<string, Array<{ question: string; answer: string }>> = {

    // =====================================================================
    // 193 IMPRESSIONS — REQUÊTE #1 PRIORITAIRE
    // =====================================================================
    'premier-marathon-preparation': [
        {
            question: 'Comment préparer son premier marathon en 2026 ?',
            answer: 'La préparation d\'un premier marathon dure idéalement 12 à 16 semaines. Elle repose sur 3 piliers : un plan d\'entraînement progressif (3 à 4 séances/semaine), une alimentation adaptée avec charge glucidique la dernière semaine, et une récupération rigoureuse incluant sommeil, étirements et massage.',
        },
        {
            question: 'Combien de temps faut-il pour préparer un marathon ?',
            answer: 'Pour un premier marathon, comptez 16 semaines minimum si vous courez déjà 3 fois par semaine, et jusqu\'à 20 semaines si vous partez de zéro. Le volume augmente progressivement jusqu\'à un pic à J-3 semaines, suivi d\'une phase d\'affûtage.',
        },
        {
            question: 'Quelles erreurs éviter pour un premier marathon ?',
            answer: 'Les 5 erreurs les plus fréquentes : partir trop vite le jour J, négliger la nutrition en course, porter des chaussures neuves, ne pas tester son ravitaillement à l\'entraînement, et sauter la phase d\'affûtage des 2 dernières semaines.',
        },
        {
            question: 'Quelle alimentation pour préparer un marathon ?',
            answer: 'Pendant la préparation, privilégiez les glucides complexes (pâtes, riz, patates douces) pour 55-60% de l\'apport calorique. La semaine précédant la course, augmentez à 70% (charge glucidique). Hydratez-vous régulièrement et testez vos gels/barres à l\'entraînement.',
        },
    ],

    // =====================================================================
    // CONFLIT SOUS-ACROMIAL — 21 IMPRESSIONS
    // =====================================================================
    'epaule-conflit': [
        {
            question: 'Comment soigner un conflit sous-acromial sans chirurgie ?',
            answer: '90% des conflits sous-acromiaux guérissent sans chirurgie grâce à la kinésithérapie. Le traitement repose sur le renforcement de la coiffe des rotateurs (surtout infraépineux et subscapulaire), le recentrage de la tête humérale et la correction posturale. Résultats attendus en 6 à 12 semaines.',
        },
        {
            question: 'Quels exercices pour un conflit sous-acromial ?',
            answer: 'Les 5 exercices clés sont : la rotation externe avec élastique, le wall slide, le prone Y-raise, les push-up plus (avec protraction scapulaire), et les exercices de recentrage en rotation interne. Commencez avec des résistances faibles et progressez sur 8 semaines.',
        },
        {
            question: 'Combien de temps dure un conflit sous-acromial ?',
            answer: 'Avec une rééducation bien conduite, un conflit sous-acromial se résout en 6 à 12 semaines. Les cas chroniques (plus de 6 mois) nécessitent un bilan approfondi et parfois une infiltration pour relancer la rééducation. L\'arrêt complet du sport n\'est pas toujours nécessaire.',
        },
        {
            question: 'Quelle est la différence entre tendinite et conflit sous-acromial ?',
            answer: 'Le conflit sous-acromial est un mécanisme (coincement des tendons sous l\'acromion), tandis que la tendinite est la conséquence inflammatoire de ce conflit. Traiter le conflit (recentrage et renforcement) est donc plus efficace que traiter uniquement l\'inflammation.',
        },
    ],

    // =====================================================================
    // TENDINITE LONG BICEPS — 9 IMPRESSIONS
    // =====================================================================
    'tendinite-long-biceps-musculation': [
        {
            question: 'Combien de temps dure une tendinite du long biceps ?',
            answer: 'Une tendinite du long biceps guérit généralement en 8 à 12 semaines avec un protocole adapté. Les cas chroniques peuvent prendre 4 à 6 mois. La clé : adapter les exercices de musculation plutôt qu\'arrêter complètement, et respecter la mise en charge progressive.',
        },
        {
            question: 'Peut-on continuer la musculation avec une tendinite du biceps ?',
            answer: 'Oui, en adaptant. Évitez les mouvements provocateurs (curl barre droite, développé incliné prise large) et remplacez-les par des alternatives moins stressantes pour le tendon. Le travail excentrique contrôlé fait partie du traitement.',
        },
        {
            question: 'Comment soigner une tendinite du long biceps rapidement ?',
            answer: 'Le protocole efficace combine : repos relatif (pas d\'arrêt total), application de glace après effort, exercices excentriques progressifs du biceps, renforcement de la coiffe des rotateurs, et correction des gestes de musculation qui compriment le tendon.',
        },
    ],

    // =====================================================================
    // POULIE ESCALADE — 8 IMPRESSIONS
    // =====================================================================
    'blessure-doigt-escalade-poulie': [
        {
            question: 'Comment savoir si une poulie d\'escalade est blessée ?',
            answer: 'Les signes typiques : douleur vive sur la face palmaire du doigt (souvent l\'annulaire), gonflement en arc (bowstringing) visible quand vous fléchissez le doigt, perte de force en prise arquée. Un test d\'échographie confirme le grade (1 à 4).',
        },
        {
            question: 'Combien de temps pour guérir une poulie d\'escalade ?',
            answer: 'Grade 1-2 (entorse) : 4 à 6 semaines. Grade 3 (rupture partielle) : 3 à 4 mois. Grade 4 (rupture complète) : 6 mois minimum, parfois chirurgie. La reprise de la grimpe se fait progressivement en évitant l\'arqué pendant la rééducation.',
        },
        {
            question: 'Quels exercices pour rééduquer une poulie d\'escalade ?',
            answer: 'La rééducation commence par des exercices de flexion douce avec pâte thérapeutique, puis progresse vers des suspensions sur prises larges (pas d\'arqué), enfin du travail en semi-arqué contrôlé. Le strapping H-tape protège le doigt pendant la reprise.',
        },
    ],

    // =====================================================================
    // FRACTURE DU POUCE — 6 IMPRESSIONS
    // =====================================================================
    'fracture-pouce-boxeur': [
        {
            question: 'Combien de temps dure la rééducation d\'une fracture du pouce ?',
            answer: 'Après consolidation osseuse (4 à 6 semaines d\'immobilisation), la rééducation dure 4 à 8 semaines supplémentaires. L\'objectif : récupérer la mobilité en opposition et en pince, puis la force de préhension. Retour sport de contact à 3-4 mois.',
        },
        {
            question: 'Quels exercices après une fracture du pouce ?',
            answer: 'Phase 1 (post-immobilisation) : mobilisation douce en flexion-extension et opposition. Phase 2 : renforcement avec pâte et élastiques. Phase 3 : travail fonctionnel (attraper, lancer, serrer). Le grip trainer est utilisé en fin de rééducation.',
        },
        {
            question: 'Quand reprendre le sport après une fracture du pouce ?',
            answer: 'Sports sans contact (course, vélo) : 6-8 semaines post-fracture. Sports de raquette : 8-10 semaines. Sports de combat : 12-16 semaines minimum avec une attelle de protection. La consolidation radiologique doit être confirmée avant la reprise.',
        },
    ],

    // =====================================================================
    // PRÉPARATION PHYSIQUE SKI — 5 IMPRESSIONS
    // =====================================================================
    'preparation-ski': [
        {
            question: 'Comment préparer son corps avant le ski ?',
            answer: 'Commencez 4 à 6 semaines avant. Focalisez-vous sur 3 axes : renforcement des quadriceps et ischio-jambiers (squats, fentes), travail de proprioception (équilibre sur une jambe), et endurance cardio (vélo, course). 3 séances par semaine suffisent.',
        },
        {
            question: 'Quels exercices de préparation physique pour le ski ?',
            answer: 'Les 6 exercices indispensables : wall sit (chaise), fentes alternées, squat sur une jambe, planche latérale, sauts latéraux et équilibre yeux fermés. Chaque exercice cible les muscles et réflexes sollicités en ski.',
        },
        {
            question: 'Comment éviter les blessures au ski ?',
            answer: 'Les 3 clés : préparation physique 4 semaines avant (genoux et proprioception), échauffement de 10 min sur les pistes le matin, et savoir s\'arrêter quand la fatigue arrive (80% des blessures surviennent l\'après-midi). Le port du casque réduit les traumatismes crâniens de 60%.',
        },
    ],
};
