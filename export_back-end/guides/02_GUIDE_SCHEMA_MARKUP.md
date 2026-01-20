# Guide : Schema Markup & Structured Data

## TODO: Adapter pour votre entreprise

Ce guide explique comment implémenter le Schema Markup (données structurées JSON-LD) pour améliorer votre SEO et visibilité locale.

---

## Vue d'Ensemble

Le Schema Markup est du code JSON-LD ajouté dans votre site pour aider les moteurs de recherche à comprendre votre contenu et afficher des **Rich Snippets** (résultats enrichis avec étoiles, horaires, etc.).

---

## Ce Qui Est Inclus dans les Templates

### Fichier `src/utils/structuredData.ts`

Ce fichier génère automatiquement plusieurs types de schemas :

**1. LocalBusiness + Types Spécifiques**

- Information entreprise complète
- Adresse, téléphone, email
- Horaires d'ouverture
- Coordonnées GPS
- Zone de service

**2. BlogPosting**

- Pour chaque article de blog
- Titre, description, image
- Date de publication, auteur

**3. FAQPage**

- Questions fréquentes
- Affichage dépliable dans Google

**4. BreadcrumbList**

- Fil d'Ariane pour navigation
- Améliore UX dans résultats Google

---

## Configuration Requise

### 1. Informations Business (structuredData.ts)

Tous les TODO dans ce fichier doivent être complétés :

```typescript
// TODO: Remplacer par vos informations
{
  name: '[NOM_ENTREPRISE]',
  address: {
    streetAddress: '[NUMERO] [RUE]',
    addressLocality: '[VILLE]',
    postalCode: '[CODE_POSTAL]',
  },
  telephone: '+33[VOTRE_NUMERO]',
  email: 'contact@[VOTRE-DOMAINE].fr',
  url: 'https://[VOTRE-DOMAINE].fr',
}
```

### 2. Coordonnées GPS

Obtenez vos coordonnées sur Google Maps :

1. Recherchez votre adresse sur maps.google.com
2. Clic droit > "Coordonnées"
3. Copiez latitude et longitude

```typescript
geo: {
  latitude: 00.0000,  // TODO: Votre latitude
  longitude: 0.0000,  // TODO: Votre longitude
}
```

### 3. Type d'Entreprise

Choisissez le(s) type(s) approprié(s) :

```typescript
'@type': ['LocalBusiness', '[VOTRE_TYPE]']
```

**Exemples communs** :

- `'ProfessionalService'` - Services professionnels
- `'Store'` - Commerce
- `'Restaurant'` - Restaurant
- `'MedicalBusiness'` - Santé
- `'LegalService'` - Droit
- etc.

Voir [schema.org/LocalBusiness](https://schema.org/LocalBusiness) pour la liste complète.

---

## Validation

### 1. Google Rich Results Test

**URL** : <https://search.google.com/test/rich-results>

1. Déployez votre site en production
2. Entrez votre URL
3. Vérifiez que vos schemas sont détectés
4. Corrigez les erreurs éventuelles

### 2. Schema.org Validator

**URL** : <https://validator.schema.org/>

1. Copiez votre JSON-LD depuis le source de la page
2. Collez dans le validateur
3. Vérifiez qu'il n'y a ni erreurs ni warnings

### 3. Vérification Manuelle

Dans le navigateur :

1. `Clic droit > Afficher le code source`
2. Recherchez `application/ld+json`
3. Vérifiez que la structure JSON est correcte

---

## Structure Attendue

### Schema Principal (LocalBusiness)

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Votre Entreprise",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6 rue Exemple",
    "addressLocality": "Paris",
    "postalCode": "75001",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  "telephone": "+33123456789",
  "email": "contact@exemple.fr",
  "url": "https://exemple.fr",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": {
    "@type": "City",
    "name": "Paris"
  },
  "sameAs": [
    "https://www.linkedin.com/company/votre-entreprise",
    "https://www.instagram.com/votre_compte/"
  ]
}
```

### Schema Article (BlogPosting)

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Titre de l'Article",
  "description": "Description courte",
  "image": "https://exemple.fr/images/article.jpg",
  "datePublished": "2026-01-14",
  "author": {
    "@type": "Organization",
    "name": "Votre Entreprise"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Votre Entreprise",
    "logo": {
      "@type": "ImageObject",
      "url": "https://exemple.fr/images/logo.svg"
    }
  }
}
```

---

## Bénéfices SEO

Cette implémentation améliore :

### 1. Visibilité Locale

- Meilleur classement pour recherches locales
- Affichage sur Google Maps
- Ciblage géographique précis

### 2. Rich Snippets

- ⭐ Affichage étoiles (si avis)
- 🕐 Horaires d'ouverture
- 📞 Téléphone cliquable
- 🗺️ Intégration carte

### 3. Knowledge Graph

- Panel d'information Google
- Informations entreprise structurées
- Spécialités affichées

### 4. Recherche Vocale

- Meilleurs résultats "près de moi"
- Horaires pour assistants vocaux
- Intégration technologies vocales

---

## Maintenance

### Ajouter des Avis

Si vous avez des avis Google My Business :

```typescript
aggregateRating: {
  '@type': 'AggregateRating',
  ratingValue: 4.8,    // Note moyenne
  reviewCount: 50      // Nombre d'avis total
}
```

**Note** : N'ajoutez ceci QUE si vous avez de vrais avis vérifiables. Google pénalise les fausses évaluations.

### Mettre à Jour Horaires

Dans `structuredData.ts`, section `openingHoursSpecification` :

```typescript
// Semaine
{
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '09:00',
  closes: '18:00'
},
// Weekend
{
  dayOfWeek: ['Saturday'],
  opens: '10:00',
  closes: '14:00'
}
```

### Mettre à Jour Infos Business

Si vous déménagez, changez de numéro, etc. :

1. Mettez à jour `src/utils/structuredData.ts`
2. Rebuild le site
3. Redéployez
4. Testez avec Rich Results Test

---

## Troubleshooting

### Schema n'apparaît pas dans Google ?

- Attendez 1-2 semaines pour re-crawl Google
- Vérifiez avec Rich Results Test
- Consultez Google Search Console

### Erreur "Duplicate schema" ?

- Vérifiez qu'il n'y a qu'un seul schema par page
- Pas de plugin SEO qui en ajoute un autre

### Erreur JSON invalide ?

- Lancez `npm run build` pour détecter erreurs TypeScript
- Validez sur schema.org validator
- Vérifiez console browser

---

## Checklist Implémentation

- [ ] `structuredData.ts` complété (tous les TODO)
- [ ] Coordonnées GPS obtenues
- [ ] Type d'entreprise correct choisi
- [ ] Horaires configurés
- [ ] Réseaux sociaux ajoutés (sameAs)
- [ ] Build réussi sans erreurs
- [ ] Testé sur Rich Results Test
- [ ] Validé sur schema.org
- [ ] Aucune erreur dans Search Console

---

## Ressources

- [Google Structured Data Guidelines](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [JSON-LD Best Practices](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data#structured-data-format)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

---

**Document créé** : 14 janvier 2026  
**Basé sur** : BKS Schema Implementation  
**À utiliser pour** : Configuration Schema Markup complet
