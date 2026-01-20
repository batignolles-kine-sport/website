# 📘 Documentation Complète du Backend BKS-Web

**Site actuel**: Batignolles Kiné Sport  
**Objectif**: Comprendre l'intégralité du backend pour le réutiliser sur un nouveau site avec une nouvelle DA

---

## 🎯 Vue d'Ensemble

Le site BKS-Web utilise une architecture moderne et performante basée sur :

- **React 18** + **TypeScript** + **Vite** pour le développement
- **Vite-React-SSG** pour la génération statique (SEO)
- **Decap CMS** pour la gestion de contenu
- **Cloudinary** pour l'hébergement et l'optimisation d'images
- **Netlify** pour le déploiement et l'hébergement

---

## 📦 Systèmes Backend Principaux

### 1. **Système de Blog & Articles** 📝

#### Comment ça fonctionne ?

Les articles de blog sont écrits en **Markdown** (.md) et stockés dans `src/posts/pathologies/`. À chaque build :

1. **Scripts de génération automatiques** :
   - `scripts/generate-blog-metadata.js` : Lit tous les fichiers `.md`, extrait le frontmatter (métadonnées) et génère `src/data/blog-metadata.json`
   - `scripts/generate-sitemap.js` : Crée automatiquement le sitemap XML pour Google

2. **Structure d'un article** :

```markdown
---
title: "Tendinopathie Rotulienne"
category: "Genou"
type: "Membre Inférieur"
image: "/images/blog/tendinopathie-rotulienne.jpg"
readTime: "5 min"
excerpt: "Description courte pour SEO"
publishedAt: "17 Décembre 2025"
featured: true
---

# Contenu de l'article en Markdown
```

1. **Processus de rendu** :
   - Les fichiers sont parsés par `src/utils/markdownRenderer.ts` qui utilise la bibliothèque `marked`
   - Le contenu Markdown est converti en HTML avec support des titres, listes, tableaux, etc.
   - Les métadonnées sont fusionnées avec le fichier `src/utils/seoConfig.ts` pour le SEO

#### Fichiers clés

- `src/posts/pathologies/*.md` - Articles en Markdown
- `scripts/generate-blog-metadata.js` - Générateur de métadonnées
- `src/utils/markdownRenderer.ts` - Convertisseur Markdown → HTML
- `src/data/blog-metadata.json` - Base de données générée automatiquement

---

### 2. **Decap CMS (anciennement Netlify CMS)** 🖊️

#### Rôle

Interface d'administration permettant aux utilisateurs non-techniques d'ajouter, modifier et supprimer des articles de blog sans toucher au code.

#### Configuration

**Fichier principal**: `public/admin/config.yml`

```yaml
backend:
  name: github
  repo: batignolles-kine-sport/website
  branch: main
  auth_endpoint: /api/auth

media_folder: "public/images/blog"
public_folder: "/images/blog"

collections:
  - name: "pathologies"
    label: "Pathologies & Articles"
    folder: "src/posts/pathologies"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Titre", name: "title", widget: "string" }
      - { label: "Catégorie", name: "category", widget: "select" }
      - { label: "Image", name: "image", widget: "image" }
      # ... autres champs
```

#### Fonctionnement

1. L'utilisateur se connecte via `/admin`
2. Decap CMS s'authentifie via GitHub OAuth
3. Les modifications créent des commits Git automatiques
4. Netlify détecte les commits et lance un nouveau build
5. Le nouveau contenu est publié

#### Fichiers clés

- `public/admin/config.yml` - Configuration Decap CMS
- `public/admin/index.html` - Interface d'admin

---

### 3. **Cloudinary - Gestion d'Images** 🖼️

#### Rôle

Cloudinary héberge toutes les images et les optimise automatiquement (format WebP, compression, redimensionnement).

#### Configuration

**Variables d'environnement** (`.env.local`) :

```bash
VITE_CLOUDINARY_CLOUD_NAME=dsesaneyj
VITE_CLOUDINARY_API_KEY=514413273626436
VITE_CLOUDINARY_API_SECRET=D46BLoB7hcYNm6QajnHaRCKNb0s
CLOUDINARY_URL=cloudinary://...
```

#### Utilisation dans le code

```typescript
import { getCloudinaryImage } from '@/utils/cloudinary';

// Génère une URL optimisée
const image = getCloudinaryImage('blog/mon-article', {
  width: 1200,
  aspectRatio: '16:9',
  quality: 'auto',
  format: 'auto'
});
```

#### Fonctionnalités

- **Transformation à la volée** : redimensionnement, recadrage, formats
- **Optimisation automatique** : qualité, compression, format (WebP)
- **Responsive** : génération de différentes tailles d'images
- **CDN global** : livraison ultra-rapide

#### Fichiers clés

- `src/utils/cloudinary.ts` - Helpers Cloudinary
- `.env.local` - Credentials Cloudinary
- `vite.config.ts` - Cache PWA pour Cloudinary

---

### 4. **SEO & Référencement** 🔍

Le site possède un système SEO **extrêmement complet** et automatisé.

#### 4.1 Configuration SEO Centralisée

**Fichier**: `src/utils/seoConfig.ts`

Base de données TypeScript contenant :

- Titres optimisés pour chaque article
- Meta descriptions (155-160 caractères)
- Mots-clés
- Catégories

```typescript
export const BLOG_SEO_CONFIG = {
  'tendinopathie-rotulienne': {
    title: 'Tendinopathie Rotulienne : Causes, Traitement, Récupération',
    metaDescription: 'Guide complet sur la tendinopathie rotulienne...',
    category: 'sport',
    keywords: ['tendinite', 'genou', 'running']
  }
}
```

#### 4.2 Structured Data (JSON-LD)

**Fichier**: `src/utils/structuredData.ts`

Génère des schemas pour Google Rich Snippets :

- **LocalBusiness** : affiche les étoiles ⭐ et les infos du cabinet
- **BlogPosting** : structure les articles pour Google
- **FAQPage** : questions fréquentes
- **BreadcrumbList** : fil d'Ariane SEO

```typescript
generateLocalBusinessSchema() // → Affiche étoiles dans Google
generateArticleSchema()        // → Rich snippets articles
generateFAQSchema()            // → FAQ dépliable dans Google
```

#### 4.3 Génération de Sitemap Dynamique

**Script**: `scripts/generate-sitemap.js`

Génère automatiquement `public/sitemap.xml` avec :

- Pages statiques (/, /blog, /contact, etc.)
- Pages de services
- **Tous les articles de blog** (détectés automatiquement)
- Dates de modification réelles
- Priorités SEO intelligentes

#### 4.4 robots.txt Intelligent

**Fichier**: `public/robots.txt`

- Google/Bing : priorité absolue
- IA éthiques (Perplexity) : autorisés
- Crawlers agressifs : limités
- Scrapers malveillants : bloqués

#### Fichiers clés

- `src/utils/seoConfig.ts` - Configuration SEO centralisée
- `src/utils/structuredData.ts` - Schemas JSON-LD
- `scripts/generate-sitemap.js` - Générateur de sitemap
- `SEO_GUIDE.md` - Documentation SEO complète
- `public/robots.txt` - Directives de crawling

---

### 5. **Static Site Generation (SSG)** ⚡

#### Rôle

Pré-génère toutes les pages en HTML statique au moment du build pour des performances maximales et un SEO optimal.

#### Configuration

**Fichier**: `vite.config.ts`

```typescript
ssgOptions: {
  script: 'async',
  formatting: 'minify',
  includedRoutes: (paths) => getRoutes(), // Génère toutes les routes
}
```

**Fichier**: `src/routes.ts`

Définit toutes les routes à pré-générer :

```typescript
export const STATIC_ROUTES = ['/', '/blog', '/equipe', '/contact', ...]
export const SERVICE_ROUTES = ['/services/kine-sport', ...]
export function getBlogRoutes() {
  // Lit blog-metadata.json et génère /blog/slug/ pour chaque article
}
```

#### Processus de build

1. `npm run build` lance :
   - `generate-blog-metadata.js` → crée `blog-metadata.json`
   - `generate-sitemap.js` → crée `sitemap.xml`
   - `vite-react-ssg build` → génère toutes les pages HTML statiques

2. Résultat : 103 pages HTML statiques dans `/dist`

#### Fichiers clés

- `vite.config.ts` - Configuration SSG
- `src/routes.ts` - Définition des routes
- `package.json` - Scripts de build

---

### 6. **Progressive Web App (PWA)** 📱

#### Rôle

Transforme le site en application installable avec cache offline.

#### Configuration

**Plugin**: `vite-plugin-pwa` dans `vite.config.ts`

```typescript
VitePWA({
  manifest: {
    name: 'Batignolles Kiné Sport',
    theme_color: '#0D2918',
    icons: [...]
  },
  workbox: {
    runtimeCaching: [
      // Cache Cloudinary images (30 jours)
      { urlPattern: /cloudinary.com/, handler: 'CacheFirst' },
      // Cache Google Fonts
      // Cache pages (NetworkFirst)
    ]
  }
})
```

#### Fonctionnalités

- **Installation** : L'utilisateur peut installer le site comme une app
- **Cache intelligent** : images, fonts, pages en cache
- **Offline** : le site fonctionne sans connexion
- **Icônes** : favicons, apple-touch-icon, PWA icons

#### Fichiers clés

- `vite.config.ts` - Configuration PWA
- `public/site.webmanifest` - Manifest PWA
- `src/registerSW.ts` - Enregistrement Service Worker

---

### 7. **Design System avec CSS Variables** 🎨

#### Architecture

Le site utilise un **Design System tokenisé** inspiré d'Apple avec 3 niveaux :

1. **Primitives** (`primitives.css`) : Valeurs brutes

```css
--primitive-color-olive-500: #404134;
--primitive-space-4: 16px;
```

1. **Semantic Tokens** (`tokens.css`) : Rôles sémantiques

```css
--interactive-primary: var(--primitive-color-olive-500);
--text-primary: var(--primitive-color-neutral-900);
```

1. **Component Tokens** (`components.css`) : Variables de composants

```css
--btn-bg: var(--interactive-primary);
--card-padding: var(--primitive-space-6);
```

#### Configuration Tailwind

**Fichier**: `tailwind.config.js`

Référence toutes les CSS variables :

```javascript
colors: {
  primary: {
    DEFAULT: 'var(--interactive-primary)',
    hover: 'var(--interactive-primary-hover)',
  }
}
```

#### Responsive

- **Fluid Typography** : `clamp()` pour s'adapter à tous les écrans
- **Breakpoints Tailwind** : sm, md, lg, xl, 2xl
- **Mobile-first** : design pensé pour mobile d'abord

#### Fichiers clés

- `src/styles/primitives.css` - Primitives
- `src/styles/tokens.css` - Semantic tokens
- `src/styles/components.css` - Composants
- `tailwind.config.js` - Configuration Tailwind

---

### 8. **Déploiement Netlify** 🚀

#### Configuration

**Fichier**: `netlify.toml`

```toml
# Headers de sécurité
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    Strict-Transport-Security = "max-age=31536000"

# Cache
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Redirects
[[redirects]]
  from = "/pathologies/*"
  to = "/blog/:splat"
  status = 301
```

#### Processus de déploiement

1. Push sur GitHub (branche `main`)
2. Netlify détecte le commit
3. Build automatique : `npm run build`
4. Déploiement sur CDN global
5. Site live en 2-3 minutes

#### Fonctionnalités Netlify

- **Build automatique** à chaque commit
- **Preview deployments** pour les Pull Requests
- **Forms** : gestion du formulaire de contact
- **Redirects** : gestion des URLs legacy
- **CDN global** : performances optimales

#### Fichiers clés

- `netlify.toml` - Configuration Netlify
- `index.html` - Formulaire Netlify (lignes 100-108)

---

## 🔗 Dépendances Critiques

### Production (`dependencies`)

```json
{
  "@cloudinary/react": "^1.14.3",          // Composants Cloudinary
  "@cloudinary/url-gen": "^1.22.0",        // Génération URLs Cloudinary
  "decap-cms-app": "^3.0.0",               // CMS
  "framer-motion": "^12.23.26",           // Animations
  "marked": "^17.0.1",                     // Markdown → HTML
  "react": "18.2.0",                       // Framework
  "react-helmet-async": "2.0.4",           // SEO meta tags
  "react-router-dom": "6.22.3",            // Routing
  "tailwindcss": "^4.1.17"                 // CSS
}
```

### Dev (`devDependencies`)

```json
{
  "vite": "^6.2.0",                        // Build tool
  "vite-react-ssg": "^0.8.9",             // SSG
  "vite-plugin-pwa": "^1.2.0",            // PWA
  "cloudinary": "^2.8.0",                 // Cloudinary backend
  "typescript": "~5.8.2"                  // TypeScript
}
```

---

## 📁 Structure de Fichiers Essentielle

```
bks-web/
├── public/
│   ├── admin/                    # Decap CMS
│   │   ├── config.yml           # Configuration CMS
│   │   └── index.html
│   ├── images/                   # Images statiques
│   ├── fonts/                    # Fonts self-hosted
│   ├── sitemap.xml              # Généré automatiquement
│   └── robots.txt               # Directives SEO
│
├── scripts/
│   ├── generate-blog-metadata.js  # Générateur métadonnées
│   └── generate-sitemap.js        # Générateur sitemap
│
├── src/
│   ├── posts/
│   │   └── pathologies/          # Articles .md
│   │
│   ├── data/
│   │   └── blog-metadata.json   # Généré automatiquement
│   │
│   ├── utils/
│   │   ├── cloudinary.ts        # Helpers Cloudinary
│   │   ├── seoConfig.ts         # Config SEO centralisée
│   │   ├── structuredData.ts    # Schemas JSON-LD
│   │   ├── markdownRenderer.ts  # Markdown → HTML
│   │   └── constants.ts         # Constantes globales
│   │
│   ├── styles/
│   │   ├── primitives.css       # Design tokens primitifs
│   │   ├── tokens.css           # Semantic tokens
│   │   └── components.css       # Component tokens
│   │
│   ├── routes.ts                # Routes SSG
│   └── main.tsx                 # Entry point
│
├── vite.config.ts               # Config Vite + SSG + PWA
├── tailwind.config.js           # Config Tailwind
├── netlify.toml                 # Config Netlify
├── .env.local                   # Variables d'environnement
└── package.json                 # Dépendances
```

---

## 🔄 Workflows Automatiques

### Build & Deploy

```bash
# Local development
npm run dev  # → Lance dev server (port 3100)

# Build for production
npm run build  # → Exécute :
  1. generate-blog-metadata.js
  2. generate-sitemap.js
  3. vite-react-ssg build (SSG)
  
# Preview production
npm run preview
```

### Ajout d'un nouvel article

1. **Via Decap CMS** (recommandé) :
   - Aller sur `/admin`
   - Cliquer "New Pathologies & Articles"
   - Remplir le formulaire
   - Publier → commit automatique sur GitHub

2. **Manuellement** :
   - Créer `src/posts/pathologies/mon-article.md`
   - Ajouter frontmatter et contenu
   - Ajouter config SEO dans `seoConfig.ts`
   - Commit & push → build automatique

---

## 🎓 Points Clés pour le Réemploi

### ✅ À Réutiliser Tel Quel

1. **Architecture SSG** : Vite + vite-react-ssg
2. **Système de blog** : Markdown + generate-blog-metadata.js
3. **Decap CMS** : Configuration + workflow
4. **Cloudinary** : Intégration complète
5. **SEO** : Tout le système (seoConfig, structuredData, sitemap)
6. **PWA** : Configuration Workbox
7. **Design System** : Architecture CSS variables (primitives → tokens → components)
8. **Scripts** : generate-blog-metadata.js, generate-sitemap.js

### ⚠️ À Adapter

1. **Contenu des articles** : Ne pas copier les .md existants
2. **Images** : Utiliser de nouvelles images
3. **Design visuel** : Nouvelle DA (colors, fonts, composants)
4. **Branding** : Nom, logo, coordonnées
5. **Configuration Decap CMS** : Adapter les champs selon besoins
6. **Structured Data** : Adapter les informations business

### 🔧 Variables à Changer

```bash
# .env.local
VITE_CLOUDINARY_CLOUD_NAME=nouveau-cloud
VITE_CLOUDINARY_API_KEY=nouvelle-key

# public/admin/config.yml
repo: nouveau-client/nouveau-repo

# src/utils/structuredData.ts
name: "Nouveau Client"
url: "https://nouveau-site.fr"

# tailwind.config.js → Nouvelles couleurs
```

---

## 📚 Documentation Supplémentaire

- `SEO_GUIDE.md` : Guide SEO complet (stratégie, monitoring, checklist)
- `GOOGLE_MY_BUSINESS.md` : Configuration Google My Business
- `README.md` : Documentation développeur

---

**Date de création** : 14 janvier 2026  
**Auteur** : Antigravity  
**Version** : 1.0
