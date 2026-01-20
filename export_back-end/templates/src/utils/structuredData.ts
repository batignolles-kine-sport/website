// TODO: CONFIGURATION À ADAPTER POUR VOTRE PROJET
// Structured Data Generator pour SEO - Génère les schemas JSON-LD pour Google Rich Snippets

/**
 * Interface pour LocalBusiness schema
 */
export interface StructuredDataLocalBusiness {
    '@context': string;
    '@type': string | string[];
    '@id'?: string;
    name: string;
    alternateName?: string;
    image: string;
    description: string;
    address: {
        '@type': string;
        streetAddress: string;
        addressLocality: string;
        postalCode: string;
        addressCountry: string;
    };
    geo: {
        '@type': string;
        latitude: number;
        longitude: number;
    };
    telephone: string;
    email: string;
    url: string;
    priceRange: string;
    knowsAbout: string[];
    areaServed: {
        '@type': string;
        name: string;
    };
    sameAs?: string[];
    openingHoursSpecification?: Array<{
        '@type': string;
        dayOfWeek: string | string[];
        opens: string;
        closes: string;
    }>;
}

/**
 * Génère le structured data LocalBusiness pour votre entreprise
 * TODO: Remplacer TOUTES les valeurs par vos informations
 * 
 * IMPORTANT : Ne pas inclure aggregateRating ici
 * Google utilisera automatiquement les avis de Google My Business
 */
export function generateLocalBusinessSchema(): StructuredDataLocalBusiness {
    return {
        '@context': 'https://schema.org',
        // TODO: Adapter le type selon votre activité
        // Exemples: ['LocalBusiness', 'ProfessionalService'], ['LocalBusiness', 'Store'], etc.
        '@type': ['LocalBusiness', '[VOTRE_TYPE]'],
        '@id': `${typeof window !== 'undefined' ? window.location.origin : 'https://[VOTRE-DOMAINE].fr'}/#organization`,

        // TODO: Remplacer par vos informations
        name: '[NOM_ENTREPRISE]',
        alternateName: '[SIGLE]',
        image: 'https://[VOTRE-DOMAINE].fr/images/logo.svg',
        description: '[DESCRIPTION_ENTREPRISE] - Expliquez votre activité et votre valeur ajoutée en 1-2 phrases.',

        // TODO: Remplacer par votre adresse complète
        address: {
            '@type': 'PostalAddress',
            streetAddress: '[NUMERO] [RUE]',
            addressLocality: '[VILLE]',
            postalCode: '[CODE_POSTAL]',
            addressCountry: 'FR',
        },

        // TODO: Remplacer par vos coordonnées GPS
        // Obtenir sur Google Maps en cliquant droit > "Coordonnées"
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 00.0000,  // TODO: Latitude
            longitude: 0.0000,  // TODO: Longitude
        },

        // TODO: Remplacer par vos coordonnées
        telephone: '+33[VOTRE_NUMERO]',
        email: 'contact@[VOTRE-DOMAINE].fr',
        url: 'https://[VOTRE-DOMAINE].fr',

        // TODO: Adapter selon vos tarifs (€, €€, €€€, ou €€€€)
        priceRange: '€€',

        // TODO: Adapter selon votre domaine d'expertise
        knowsAbout: [
            '[Expertise 1]',
            '[Expertise 2]',
            '[Expertise 3]',
        ],

        // TODO: Adapter selon votre zone de service
        areaServed: {
            '@type': 'City',
            name: '[VILLE_PRINCIPALE]',
        },

        // TODO: Remplacer par vos liens réseaux sociaux
        sameAs: [
            'https://www.linkedin.com/company/[VOTRE-ENTREPRISE]',
            'https://www.instagram.com/[VOTRE-COMPTE]/',
            // Ajouter autres réseaux si pertinent
        ],

        // TODO: Adapter vos horaires d'ouverture
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
            },
            // Ajouter samedi/dimanche si ouvert
        ],
    };
}

/**
 * Génère le structured data pour un article blog
 * TODO: Adapter l'URL de l'image si nécessaire
 */
export function generateArticleSchema(
    title: string,
    description: string,
    slug: string,
    datePublished: string,
    // TODO: Remplacer le nom de l'auteur par défaut
    author: string = 'Équipe [NOM_ENTREPRISE]'
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description,
        // TODO: Adapter le chemin de l'image selon votre structure
        image: `https://[VOTRE-DOMAINE].fr/images/blog/${slug}.jpg`,
        datePublished: datePublished,
        author: {
            '@type': 'Organization',
            name: author,
            // TODO: Remplacer par votre URL
            url: 'https://[VOTRE-DOMAINE].fr',
        },
        // TODO: Adapter l'URL de l'article selon votre routing
        url: `https://[VOTRE-DOMAINE].fr/blog/${slug}`,
        publisher: {
            '@type': 'Organization',
            '@id': 'https://[VOTRE-DOMAINE].fr/#organization',
            name: '[NOM_ENTREPRISE]',
            logo: {
                '@type': 'ImageObject',
                // TODO: Remplacer par votre logo
                url: 'https://[VOTRE-DOMAINE].fr/images/logo.svg',
            },
        },
    };
}

/**
 * Génère le structured data FAQ pour la page homepage
 * Utilisé pour afficher des FAQ dépliables dans Google
 */
export function generateFAQSchema(
    faqs: Array<{ question: string; answer: string }>
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };
}

/**
 * Génère le breadcrumb schema pour navigation SEO
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
