# Checklist SEO - Optimisation Complète

## Vue d'Ensemble

Ce document liste toutes les optimisations SEO à implémenter pour un référencement optimal.

---

## ✅ Optimisations Techniques

### 1. Métadonnées de Base

- [ ] **Language** : `<html lang="fr">` dans index.html
- [ ] **Viewport** : `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [ ] **Charset** : `<meta charset="UTF-8">`
- [ ] **Content-Language** : `<meta http-equiv="content-language" content="fr">`

### 2. Canonical URLs

- [ ] URL canonique dans index.html
- [ ] URLs canoniques dynamiques via SEO component
- [ ] Format : `<link rel="canonical" href="https://[DOMAINE]/[PAGE]/" />`

### 3. Favicons

Générer et ajouter :

- [ ] `favicon.ico` (multi-tailles)
- [ ] `favicon-16x16.png`
- [ ] `favicon-32x32.png`
- [ ] `favicon-96x96.png`  
- [ ] `apple-touch-icon.png` (180x180px)
- [ ] `favicon.svg` (fallback)

**Outil** : <https://realfavicongenerator.net/>

### 4. Open Graph (Réseaux Sociaux)

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://[DOMAINE]/" />
<meta property="og:title" content="[TITRE_PAGE]" />
<meta property="og:description" content="[DESCRIPTION]" />
<meta property="og:image" content="https://[DOMAINE]/images/og-image.jpg" />
<meta property="og:site_name" content="[NOM_SITE]" />
<meta property="og:locale" content="fr_FR" />
```

**Action requise** :

- [ ] Créer `og-image.jpg` (1200x630px)
- [ ] Ajouter meta tags OG dans index.html

### 5. Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://[DOMAINE]/" />
<meta name="twitter:title" content="[TITRE]" />
<meta name="twitter:description" content="[DESCRIPTION]" />
<meta name="twitter:image" content="https://[DOMAINE]/images/og-image.jpg" />
```

- [ ] Ajouter Twitter Card meta tags

---

## ✅ Structured Data (JSON-LD)

### Schema LocalBusiness

- [ ] Nom entreprise
- [ ] Adresse complète
- [ ] Coordonnées GPS
- [ ] Téléphone (format international)
- [ ] Email
- [ ] URL site web
- [ ] Horaires d'ouverture
- [ ] Zone de service
- [ ] Réseaux sociaux (sameAs)

### Schema Article (pour blog)

- [ ] Titre
- [ ] Description
- [ ] Image
- [ ] Date publication
- [ ] Auteur
- [ ] Publisher

### Validation

- [ ] Testé sur [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validé sur [Schema.org Validator](https://validator.schema.org/)
- [ ] Aucune erreur dans Search Console

---

## ✅ Contenu & Structure

### Hiérarchie Titres

- [ ] **Un seul H1** par page (titre principal)
- [ ] H2 pour sections principales
- [ ] H3 pour sous-sections
- [ ] Ordre logique respecté (H1 → H2 → H3)

### Optimisation Texte

- [ ] Minimum 300 mots par page
- [ ] Mots-clés dans :
  - [ ] H1
  - [ ] Premier paragraphe
  - [ ] Au moins un H2
  - [ ] Conclusion
- [ ] Paragraphes courts (3-4 lignes)
- [ ] Listes à puces pour lisibilité

### Images

Pour chaque image :

- [ ] **Alt text descriptif** (pas "image1.jpg")
- [ ] Format optimisé (WebP, JPG compressé)
- [ ] Taille max 200 KB
- [ ] Dimensions adaptées (pas 4000x3000px pour 400px affichés)

---

## ✅ Performance

### Compression

- [ ] Activer compression GZIP/Brotli
- [ ] Minification CSS/JS (automatique avec Vite)
- [ ] Tree-shaking activé

### Cache

Headers dans `netlify.toml` :

```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

- [ ] Cache assets statiques (1 an)
- [ ] Cache HTML (0 = toujours frais)
- [ ] Cache images via Cloudinary

### Chargement

- [ ] Lazy loading images
- [ ] Code splitting activé
- [ ] Fonts préchargées (preload)

---

## ✅ Sécurité

### Headers

Dans `netlify.toml` :

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
```

- [ ] HSTS activé
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options
- [ ] Referrer-Policy

### HTTPS

- [ ] Certificat SSL actif
- [ ] Redirection HTTP → HTTPS
- [ ] HSTS preload (optionnel)

---

## ✅ SEO Local

### Google My Business

- [ ] Profil créé et vérifié
- [ ] Informations à jour
- [ ] Photos ajoutées
- [ ] Horaires configurés
- [ ] Catégorie principale définie

### Cohérence NAP

Vérifier que **Nom, Adresse, Phone** sont identiques partout :

- [ ] Google My Business
- [ ] Site web
- [ ] Annuaires
- [ ] Réseaux sociaux

### Schema LocalBusiness

- [ ] Coordonnées GPS précises
- [ ] Zone de service définie
- [ ] Avis Google intégrés (si >10 avis)

---

## ✅ Indexation

### robots.txt

```txt
User-agent: *
Disallow: /admin
Disallow: /node_modules/

Sitemap: https://[DOMAINE]/sitemap.xml
```

- [ ] robots.txt créé
- [ ] Sitemap référencé
- [ ] Admin/private bloqués

### Sitemap.xml

- [ ] Sitemap généré automatiquement
- [ ] Toutes les pages incluses
- [ ] Dates de modification
- [ ] Priorités définies
- [ ] Soumis à Google Search Console

### Search Console

- [ ] Propriété vérifiée
- [ ] Sitemap soumis
- [ ] Couverture vérifiée
- [ ] Structured data vérifiée

---

## ✅ Contenu Blog

Pour chaque article :

### Frontmatter

- [ ] Title optimisé SEO (60 car max)
- [ ] Excerpt/Meta description (155-160 car)
- [ ] Category
- [ ] Image (min 1200x630px)
- [ ] Date publication
- [ ] ReadTime

### Structure

- [ ] H1 unique (= title)
- [ ] Introduction P.E.P (Problème → Empathie → Promesse)
- [ ] 3-7 sections H2
- [ ] FAQ (3-5 questions)
- [ ] Conclusion + CTA

### SEO

- [ ] Mot-clé dans H1, intro, H2, conclusion
- [ ] Minimum 500 mots
- [ ] Liens internes vers autres articles
- [ ] Images dengan alt text

---

## 🔍 Validation Post-Déploiement

### Tests Automatiques

- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) : Score >90
- [ ] [GTmetrix](https://gtmetrix.com/) : Grade A
- [ ] [Google Rich Results](https://search.google.com/test/rich-results) : Schemas OK
- [ ] [Facebook Debugger](https://developers.facebook.com/tools/debug/) : OG tags OK
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator) : Cards OK

### Tests Manuels

- [ ] Favicon visible dans onglet
- [ ] Partage Facebook affiche image
- [ ] Partage Twitter affiche card
- [ ] Google affiche rich snippets (après 1-2 semaines)
- [ ] Site HTTPS (cadenas vert)

---

## 📊 Monitoring Continu

### Hebdomadaire

- [ ] Google Search Console : erreurs
- [ ] Positions mots-clés cibles
- [ ] Trafic organique

### Mensuel

- [ ] Audit PageSpeed
- [ ] Vérifier broken links
- [ ] Analyser pages les plus visitées
- [ ] Mettre à jour contenu ancien

### Trimestriel

- [ ] Audit SEO technique complet
- [ ] Réviser stratégie mots-clés
- [ ] Optimiser pages faibles performances
- [ ] Créer nouveau contenu basé sur recherches

---

## 🎯 KPIs à Suivre

| Métrique | Outil | Objectif |
|----------|-------|----------|
| Position moyenne | Search Console | <5 |
| CTR organique | Search Console | >3% |
| Pages indexées | Search Console | 100% |
| Vitesse (mobile) | PageSpeed | >90 |
| Trafic organique | Analytics | Croissance mensuelle |
| Backlinks | Ahrefs/Moz | Croissance |

---

## 📚 Ressources

**Outils Gratuits** :

- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Validator](https://validator.schema.org/)

**Guides** :

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Web.dev SEO](https://web.dev/lighthouse-seo/)
- [Schema.org](https://schema.org/)

---

**Document créé** : 14 janvier 2026  
**Basé sur** : Best Practices SEO 2026  
**À réviser** : Au moins tous les 3 mois
