# 📋 Liste des Fichiers Backend à Réutiliser

**Guide complet : quels fichiers copier, adapter ou créer**

---

## ✅ COPIER TEL QUEL (Pas de modifications)

### Scripts

```
✓ scripts/generate-blog-metadata.js
✓ scripts/generate-sitemap.js
```

### Utilitaires Backend

```
✓ src/utils/cloudinary.ts
✓ src/utils/markdownRenderer.ts
✓ src/utils/blogSuggestions.ts (optionnel)
✓ src/utils/animations.ts (optionnel)
✓ src/utils/helpers.ts (optionnel)
```

### Configuration Build

```
✓ postcss.config.js
✓ .npmrc
```

### PWA

```
✓ src/registerSW.ts
```

### Decap CMS Interface

```
✓ public/admin/index.html
```

---

## ⚙️ COPIER ET ADAPTER

### Configurations Principales

**vite.config.ts**

- ✓ Structure complète
- ⚠️ Adapter : `manifest.name`, `manifest.description`, `manifest.theme_color`
- ⚠️ Adapter : Port (optionnel)

**tailwind.config.js**

- ✓ Structure complète  
- ⚠️ Adapter : Font family si changement
- Note: Référence CSS vars, donc adapter les vars dans primitives.css

**tsconfig.json**

- ✓ Tel quel (compatible avec setup)

**netlify.toml**

- ✓ Headers de sécurité
- ✓ Configuration cache
- ⚠️ Adapter : Redirects (selon nouvelle structure)

**package.json**

- ✓ Copier section `dependencies`
- ✓ Copier section `devDependencies`
- ✓ Copier section `scripts`
- ⚠️ Adapter : `name`, `version`, etc.

### Fichiers SEO

**src/utils/seoConfig.ts**

- ⚠️ **CRITIQUE** : Remplacer tout le contenu
- Structure à garder : `export const BLOG_SEO_CONFIG = { ... }`
- Contenu : Nouveaux articles avec leurs SEO

**src/utils/structuredData.ts**

- ⚠️ Adapter fonction `generateLocalBusinessSchema()`:
  - `name`, `url`, `description`
  - `address`, `geo`, `telephone`, `email`
  - `sameAs` (réseaux sociaux)
  - `openingHoursSpecification`
- ✓ Garder : `generateArticleSchema`, `generateFAQSchema`, `generateBreadcrumbSchema`

**src/utils/sitemap.ts**

- ⚠️ Adapter : Domain URL si différent

### Routes & Data

**src/routes.ts**

- ⚠️ Adapter : `STATIC_ROUTES` (vos pages)
- ⚠️ Adapter : `SERVICE_ROUTES` (vos services)
- ✓ Garder : `getBlogRoutes()` fonction

### CMS Configuration

**public/admin/config.yml**

- ⚠️ **CRITIQUE** : Adapter
  - `backend.repo` → votre repo GitHub
  - `collections` champs selon vos besoins
  - `collections.options` selon vos catégories

### Styles (Design System)

**src/styles/primitives.css**

- ✓ Structure et organisation
- ⚠️ **Remplacer toutes les couleurs** (garder noms de variables)
- ⚠️ **Adapter font-family**
- ✓ Garder : spaces, shadows, transitions

**src/styles/tokens.css**

- ✓ Structure complète (refs vers primitives)
- Pas de modif si primitives bien adaptées

**src/styles/components.css**

- ✓ Structure complète
- Optionnel : Adapter valeurs selon design

### HTML Entry

**index.html**

- ✓ Structure HTML5
- ✓ Preload critical resources
- ⚠️ Adapter :
  - `<title>`
  - Meta description/keywords manuels
  - Preload fonts (si changement)
  - Formulaire Netlify (champs)
  - `<noscript>` content

### Entry Points React

**src/main.tsx**

- ✓ Tel quel initialement
- ⚠️ Adapter plus tard quand composants créés

**src/App.tsx**

- ⚠️ À adapter selon nouvelle structure de pages

---

## 🔐 CRÉER NOUVEAU (Credentials)

**`.env.local`**

```bash
# Nouveau compte Cloudinary
VITE_CLOUDINARY_CLOUD_NAME=votre-cloud
VITE_CLOUDINARY_API_KEY=votre-key
VITE_CLOUDINARY_API_SECRET=votre-secret
CLOUDINARY_URL=cloudinary://...
```

---

## 🎨 CRÉER DE ZÉRO (Frontend)

### Composants

```
✗ src/components/Navbar.tsx
✗ src/components/Footer.tsx
✗ src/components/Button.tsx
✗ src/components/Card.tsx
✗ src/components/Modal.tsx
✗ src/components/SEO.tsx (peut s'inspirer de BKS)
... tous les composants UI
```

### Pages

```
✗ src/pages/Home.tsx
✗ src/pages/Blog.tsx
✗ src/pages/BlogPost.tsx (utilise markdownRenderer)
✗ src/pages/Contact.tsx
... toutes les pages
```

### Content

```
✗ src/posts/pathologies/*.md (nouveaux articles)
```

### Assets

```
✗ public/images/* (nouvelles images)
✗ public/favicon.* (nouveaux favicons)
✗ public/fonts/* (si nouvelles fonts)
```

### Constants

```
✗ src/utils/constants.ts (nouvelles constantes métier)
```

---

## 📊 Récapitulatif par Action

### À Copier sans Modification (12 fichiers)

1. `scripts/generate-blog-metadata.js`
2. `scripts/generate-sitemap.js`
3. `src/utils/cloudinary.ts`
4. `src/utils/markdownRenderer.ts`
5. `src/utils/blogSuggestions.ts`
6. `src/utils/helpers.ts`
7. `postcss.config.js`
8. `.npmrc`
9. `src/registerSW.ts`
10. `public/admin/index.html`
11. `tsconfig.json`

### À Copier et Adapter (10 fichiers)

1. `vite.config.ts` (manifest)
2. `tailwind.config.js` (font)
3. `netlify.toml` (redirects)
4. `package.json` (metadata)
5. `src/utils/seoConfig.ts` (**contenu complet**)
6. `src/utils/structuredData.ts` (infos business)
7. `src/routes.ts` (routes)
8. `public/admin/config.yml` (**repo + champs**)
9. `src/styles/primitives.css` (**couleurs + fonts**)
10. `index.html` (meta)

### À Créer Nouveau (4 fichiers)

1. `.env.local` (credentials)
2. `src/utils/constants.ts` (selon besoins)
3. `public/robots.txt` (copier puis adapter sitemap URL)
4. `.gitignore` (standard React + `.env.local`)

### À Créer de Zéro (Frontend)

- Tous les composants (`src/components/`)
- Toutes les pages (`src/pages/`)
- Tous les articles (`src/posts/`)
- Tous les assets (`public/images/`, favicons, etc.)

---

## 🗂️ Ordre de Copie Recommandé

### 1️⃣ Configuration Base (Setup)

```bash
# Copier
vite.config.ts
tailwind.config.js
postcss.config.js
tsconfig.json
.npmrc

# Créer
.env.local
.gitignore
```

### 2️⃣ Scripts & Utilities

```bash
mkdir -p scripts src/utils

# Copier scripts
cp scripts/generate-blog-metadata.js
cp scripts/generate-sitemap.js

# Copier utils backend
cp src/utils/cloudinary.ts
cp src/utils/markdownRenderer.ts
cp src/utils/helpers.ts
```

### 3️⃣ SEO & Routes

```bash
# Copier et adapter
cp src/utils/seoConfig.ts      # → Adapter contenu
cp src/utils/structuredData.ts # → Adapter infos
cp src/routes.ts               # → Adapter routes
```

### 4️⃣ CMS

```bash
mkdir -p public/admin
cp public/admin/index.html
# Créer public/admin/config.yml (adapter)
```

### 5️⃣ Styles

```bash
mkdir -p src/styles
cp src/styles/primitives.css   # → Adapter couleurs/fonts
cp src/styles/tokens.css
cp src/styles/components.css
```

### 6️⃣ Entry Points

```bash
cp index.html    # → Adapter meta
cp src/main.tsx
# src/App.tsx à créer plus tard
```

### 7️⃣ PWA & Deploy

```bash
cp src/registerSW.ts
cp netlify.toml  # → Adapter redirects
# Copier ou créer public/site.webmanifest
```

---

## ⚠️ Fichiers à NE PAS Copier

```
✗ src/components/* (frontend spécifique)
✗ src/pages/* (frontend spécifique)
✗ src/posts/* (contenu spécifique)
✗ public/images/* (assets spécifiques)
✗ public/favicon.* (branding spécifique)
✗ .env.local (credentials différents)
✗ node_modules/ (reinstaller via npm)
✗ dist/ (rebuild)
✗ .git/ (nouveau repo)
```

---

## 📝 Template Checklist

Pour chaque nouveau projet, cocher :

**Setup Initial**

- [ ] Créer projet Vite React TS
- [ ] Installer toutes dépendances (voir package.json)
- [ ] Créer `.env.local` avec nouveaux credentials

**Configuration**

- [ ] Copier vite.config.ts + adapter manifest
- [ ] Copier tailwind.config.js
- [ ] Copier postcss.config.js, tsconfig.json, .npmrc
- [ ] Copier netlify.toml + adapter redirects

**Backend Core**

- [ ] Copier scripts/ complet
- [ ] Copier utils backend (cloudinary, markdown, helpers)
- [ ] Adapter seoConfig.ts (nouveau contenu)
- [ ] Adapter structuredData.ts (nouvelles infos)
- [ ] Adapter routes.ts (nouvelles routes)

**CMS**

- [ ] Copier public/admin/index.html
- [ ] Créer public/admin/config.yml adapté

**Styles**

- [ ] Copier styles/ + adapter primitives.css (colors/fonts)

**Entry**

- [ ] Copier index.html + adapter meta
- [ ] Copier main.tsx, registerSW.ts

**Content & Assets**

- [ ] Créer src/posts/ avec articles test
- [ ] Créer public/images/ avec images
- [ ] Générer favicons

**Frontend (après backend OK)**

- [ ] Créer composants UI
- [ ] Créer pages
- [ ] Créer App.tsx avec routing

---

**Document créé le** : 14 janvier 2026  
**Usage** : Liste de contrôle pour migration backend
