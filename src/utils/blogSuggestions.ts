/**
 * Interface minimale pour le système de suggestions.
 * Compatible avec BlogPost et PathologyContent.
 */
export interface SuggestionPost {
    slug: string;
    title: string;
    category: string;
    type?: string;
    image?: string;
    excerpt?: string;
}

/**
 * Calcule un score de pertinence entre deux articles
 * basé sur la catégorie et le type de zone corporelle.
 */
function calculateRelevanceScore<T extends SuggestionPost>(currentPost: T, candidatePost: T): number {
    let score = 0;

    // Même catégorie (ex: Genou, Dos, Épaule) = +3 points
    if (currentPost.category && candidatePost.category &&
        currentPost.category.toLowerCase() === candidatePost.category.toLowerCase()) {
        score += 3;
    }

    // Même type de zone corporelle (ex: Membre Inférieur) = +2 points
    if (currentPost.type && candidatePost.type &&
        currentPost.type.toLowerCase() === candidatePost.type.toLowerCase()) {
        score += 2;
    }

    return score;
}

/**
 * Retourne les 3 articles les plus pertinents par rapport à l'article actuel.
 * L'algorithme priorise les articles ayant la même catégorie et/ou le même type.
 * Si insuffisamment d'articles pertinents, complète avec des articles aléatoires.
 */
export function getRelatedPosts<T extends SuggestionPost>(
    currentSlug: string,
    currentPost: T,
    allPosts: T[],
    count: number = 3
): T[] {
    // Exclure l'article actuel
    const otherPosts = allPosts.filter(p => p.slug !== currentSlug);

    // Calculer et trier par score de pertinence
    const scoredPosts = otherPosts.map(post => ({
        post,
        score: calculateRelevanceScore(currentPost, post),
        // Ajouter un facteur aléatoire pour varier les résultats à score égal
        randomFactor: Math.random()
    }));

    // Trier par score décroissant, puis par facteur aléatoire
    scoredPosts.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return b.randomFactor - a.randomFactor;
    });

    // Retourner les N premiers articles
    return scoredPosts.slice(0, count).map(sp => sp.post);
}

