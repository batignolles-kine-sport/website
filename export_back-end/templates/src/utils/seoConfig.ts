// TODO: CONFIGURATION À ADAPTER POUR VOTRE PROJET
// Ce fichier contient la configuration SEO centralisée pour tous vos articles de blog

/**
 * Interface pour la configuration SEO d'un article
 */
export interface BlogPostSEO {
    slug: string;
    title: string;           // Titre optimisé SEO (max 60 caractères)
    metaDescription: string; // Description SEO (155-160 caractères)
    excerpt: string;         // Résumé court pour les listes
    category: string;        // Catégorie de l'article
    keywords: string[];      // Mots-clés principaux
}

/**
 * Configuration SEO pour chaque article de blog
 * TODO: Remplir avec vos propres articles
 * 
 * Structure recommandée:
 * - slug: nom du fichier .md (sans extension)
 * - title: "Sujet Principal : Action, Résultat, Bénéfice" (60 car max)
 * - metaDescription: Réponse directe à la question de l'utilisateur (155-160 car)
 * - category: Votre catégorie (à adapter selon votre domaine)
 * - keywords: 3-5 mots-clés pertinents
 */
export const BLOG_SEO_CONFIG: Record<string, BlogPostSEO> = {
    // EXEMPLE - À SUPPRIMER ET REMPLACER PAR VOS ARTICLES
    'exemple-article': {
        slug: 'exemple-article',
        title: 'Exemple Article : Guide Complet pour Débutants',
        metaDescription: 'Découvrez comment créer un article optimisé SEO avec des exemples concrets et des bonnes pratiques éprouvées.',
        excerpt: 'Guide pratique pour rédiger un article optimisé',
        category: 'Guide',
        keywords: ['exemple', 'article', 'seo', 'guide']
    },

    // TODO: Ajouter vos articles ici
    // 'mon-article-1': {
    //     slug: 'mon-article-1',
    //     title: 'Votre Titre Optimisé SEO',
    //     metaDescription: 'Votre description en 155-160 caractères...',
    //     excerpt: 'Résumé court',
    //     category: 'Votre Catégorie',
    //     keywords: ['mot-clé-1', 'mot-clé-2', 'mot-clé-3']
    // },
};

/**
 * Récupère le titre SEO d'un article
 */
export function getBlogSEOTitle(slug: string, fallback: string = ''): string {
    return BLOG_SEO_CONFIG[slug]?.title || fallback;
}

/**
 * Récupère la meta description d'un article
 */
export function getBlogSEODescription(slug: string, fallback: string = ''): string {
    return BLOG_SEO_CONFIG[slug]?.metaDescription || fallback;
}

/**
 * Récupère les mots-clés d'un article
 */
export function getBlogSEOKeywords(slug: string): string[] {
    return BLOG_SEO_CONFIG[slug]?.keywords || [];
}

/**
 * Récupère la catégorie d'un article
 */
export function getBlogSEOCategory(slug: string, fallback: string = 'Général'): string {
    return BLOG_SEO_CONFIG[slug]?.category || fallback;
}
