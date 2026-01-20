# 📑 Référence Rapide - Systèmes Backend BKS

**Quick reference pour retrouver rapidement fichiers et configurations**

---

## 🗂️ Systèmes par Catégorie

### 1. BLOG & CONTENT MANAGEMENT

| Système | Fichiers Clés | Description |
|---------|---------------|-------------|
| **Markdown Blog** | `src/posts/pathologies/*.md` | Articles en Markdown avec frontmatter |
| **Metadata Generator** | `scripts/generate-blog-metadata.js` | Parse .md → génère `blog-metadata.json` |
| **Markdown Renderer** | `src/utils/markdownRenderer.ts` | Convertit Markdown → HTML |
| **Blog Data** | `src/data/blog-metadata.json` | Base de données auto-générée |
| **Decap CMS** | `public/admin/config.yml` | Config CMS (champs, backend GitHub) |
| **CMS Interface** | `public/admin/index.html` | Interface admin `/admin` |

---

### 2. SEO & INDEXATION

| Système | Fichiers Clés | Description |
|---------|---------------|-------------|
| **SEO Config** | `src/utils/seoConfig.ts` | Titres, meta desc, keywords par article |
| **Structured Data** | `src/utils/structuredData.ts` | JSON-LD schemas (Local Business, Article, FAQ) |
| **Sitemap Generator** | `scripts/generate-sitemap.js` | Génère `sitemap.xml` dynamiquement |
| **Sitemap** | `public/sitemap.xml` | Sitemap XML généré automatiquement |  
| **Robots.txt** | `public/robots.txt` | Directives crawling (Google, IA, etc.) |
| **SEO Guide** | `SEO_GUIDE.md` | Documentation SEO complète |

---

### 3. IMAGES & ASSETS

| Système | Fichiers Clés | Description |
|---------|---------------|-------------|
| **Cloudinary Helper** | `src/utils/cloudinary.ts` | Helpers pour transformer/optimiser images |
| **Cloudinary Config** | `.env.local` | Credentials (cloud_name, api_key, secret) |
| **PWA Cache** | `vite.config.ts` (workbox) | Cache Cloudinary images 30j |
| **Images Statiques** | `public/images/` | Images locales (hero, etc.) |
| **Fonts** | `public/fonts/` | Fonts self-hosted |

---

### 4. BUILD & DEPLOYMENT

| Système | Fichiers Clés | Description |
|---------|---------------|-------------|
| **Vite Config** | `vite.config.ts` | Config Vite, SSG, PWA, aliases |
| **Routes SSG** | `src/routes.ts` | Définit pages à pré-générer |
| **Package Scripts** | `package.json` (scripts) | `dev`, `build`, `preview` |
| **Netlify Config** | `netlify.toml` | Headers, cache, redirects |
| **GitHub Repo** | `.git/` | Source control |

---

### 5. STYLING & DESIGN

| Système | Fichiers Clés | Description |
|---------|---------------|-------------|
| **Primitives** | `src/styles/primitives.css` | Couleurs, spaces, fonts bruts |
| **Semantic Tokens** | `src/styles/tokens.css` | Rôles sémantiques (primary, surface, etc.) |
| **Component Tokens** | `src/styles/components.css` | Variables composants (btn, card, input) |
| **Tailwind Config** | `tailwind.config.js` | Référence CSS vars + utilities |
| **PostCSS** | `postcss.config.js` | Config PostCSS |

---

### 6. PWA & PERFORMANCE

| Système | Fichiers Clés | Description |
|---------|---------------|-------------|
| **PWA Plugin** | `vite.config.ts` (VitePWA) | Config Service Worker, manifest |
| **Manifest** | `public/site.webmanifest` | PWA manifest (nom, icons, theme) |
| **Service Worker** | `src/registerSW.ts` | Enregistrement SW |
| **Favicons** | `public/favicon.*` | Favicons multi-formats |

---

## 📍 Fichiers de Configuration Critiques

### vite.config.ts

```typescript
- Port dev server: 3100
- Aliases: @, @src, @components, @pages, @utils, @data, @styles, @assets
- SSG: vite-react-ssg avec routes dynamiques
- PWA: Workbox cache (Cloudinary, fonts, pages)
- Build: Terser minification, tree-shaking, code splitting
```

### tailwind.config.js  

```javascript
- Référence toutes les CSS variables
- Extend colors, spacing, fontSize, shadows, etc.
- Utilities custom: .text-gradient-primary, .btn-base, .card-base
```

### netlify.toml

```toml
- Headers sécurité: X-Frame-Options, HSTS, CSP
- Cache: Assets 1 an, HTML 0
- Redirects: /pathologies/* → /blog/:splat (301)
- Forms: Support formulaire Netlify
```

### package.json (scripts)

```json
"dev": "generate-blog-metadata && vite"
"build": "generate-blog-metadata && generate-sitemap && vite-react-ssg build"
```

---

## 🔐 Variables d'Environnement

**Fichier** : `.env.local` (non versionné)

```bash
# Cloudinary
VITE_CLOUDINARY_CLOUD_NAME=dsesaneyj
VITE_CLOUDINARY_API_KEY=514413273626436
VITE_CLOUDINARY_API_SECRET=D46BLoB7hcYNm6QajnHaRCKNb0s
CLOUDINARY_URL=cloudinary://...

# Autres (si besoin)
# VITE_API_URL=...
# GEMINI_API_KEY=... (utilisé dans vite.config mais pas critique)
```

---

## 🔄 Workflows Automatiques

### Build Production

```
npm run build
  ↓
1. node scripts/generate-blog-metadata.js
   → Lit src/posts/pathologies/*.md
   → Génère src/data/blog-metadata.json
  ↓
2. node scripts/generate-sitemap.js
   → Lit blog-metadata.json + routes.ts
   → Génère public/sitemap.xml
  ↓
3. npx vite-react-ssg build
   → Lit routes.ts (getRoutes())
   → Pré-génère toutes les pages HTML
   → Output: dist/
```

### Dev Local

```
npm run dev
  ↓
1. generate-blog-metadata.js
  ↓
2. vite dev server (port 3100)
```

### Publication Article (Decap CMS)

```
/admin → Créer article
  ↓
Decap CMS → Commit sur GitHub
  ↓
Netlify détecte commit
  ↓
Netlify build (npm run build)
  ↓
Site live (2-3 min)
```

---

## 📦 Dépendances Critiques (Résumé)

**Runtime** :

- `react` + `react-dom` + `react-router-dom` : Framework
- `@cloudinary/react` + `@cloudinary/url-gen` : Images
- `marked` : Markdown → HTML
- `react-helmet-async` : SEO meta tags
- `decap-cms-app` : CMS
- `framer-motion` : Animations

**Build** :

- `vite` : Build tool
- `vite-react-ssg` : Static Site Generation
- `vite-plugin-pwa` : Progressive Web App
- `typescript` : Types
- `tailwindcss` : CSS framework

---

## 🎯 Points d'Entrée Code

### Main Entry

- `index.html` : HTML de base
- `src/main.tsx` : Entry point React
- `src/App.tsx` : Router principal
- `src/routes.ts` : Définition routes SSG

### Blog System

- `src/posts/pathologies/*.md` : Source articles
- `scripts/generate-blog-metadata.js` : Générateur
- `src/utils/markdownRenderer.ts` : Renderer
- `src/pages/BlogPost.tsx` : Page article (probablement)

### SEO System

- `src/utils/seoConfig.ts` : Config centralisée
- `src/utils/structuredData.ts` : Schemas
- `src/components/SEO.tsx` : Composant SEO (probablement)

---

## 🛠️ Commandes Utiles

```bash
# Dev
npm run dev              # Server local (3100)

# Build
npm run build            # Build SSG complet
npm run build:spa        # Build SPA seulement (sans SSG)
npm run preview          # Preview build local

# Utilities
npm run sitemap          # Génère sitemap seulement
node scripts/generate-blog-metadata.js  # Métadonnées seulement

# Deploy
git push                 # → Netlify auto-deploy
```

---

## 📂 Structure Répertoires (Vue d'Ensemble)

```
bks-web/
│
├── public/              # Assets statiques
│   ├── admin/          # Decap CMS
│   ├── images/         # Images
│   ├── fonts/          # Fonts
│   ├── sitemap.xml     # ← Généré
│   └── robots.txt
│
├── scripts/            # Scripts Node.js
│   ├── generate-blog-metadata.js  # ← Critique
│   └── generate-sitemap.js        # ← Critique
│
├── src/
│   ├── posts/pathologies/  # ← Articles .md
│   ├── data/
│   │   └── blog-metadata.json  # ← Généré
│   ├── utils/          # Helpers backend
│   │   ├── cloudinary.ts       # ← Réutiliser
│   │   ├── seoConfig.ts        # ← Adapter
│   │   ├── structuredData.ts   # ← Adapter
│   │   ├── markdownRenderer.ts # ← Réutiliser
│   │   └── ...
│   ├── styles/         # Design system
│   │   ├── primitives.css  # ← Adapter couleurs
│   │   ├── tokens.css      # ← Garder structure
│   │   └── components.css  # ← Garder structure
│   ├── components/     # Composants UI (frontend)
│   ├── pages/          # Pages (frontend)
│   ├── routes.ts       # ← Adapter routes
│   ├── main.tsx
│   └── App.tsx
│
├── vite.config.ts      # ← Config critique
├── tailwind.config.js  # ← Références CSS vars
├── netlify.toml        # ← Config deploy
├── .env.local          # ← Secrets (non versionné)
└── package.json        # ← Dépendances + scripts
```

---

## ✅ Checklist Migration Rapide

**Backend à copier tel quel** :

- [ ] `scripts/` complet
- [ ] `src/utils/cloudinary.ts`
- [ ] `src/utils/markdownRenderer.ts`
- [ ] `vite.config.ts`
- [ ] `tailwind.config.js` (base)
- [ ] `postcss.config.js`
- [ ] `tsconfig.json`
- [ ] `.npmrc`

**Backend à adapter** :

- [ ] `src/utils/seoConfig.ts` (nouveau contenu)
- [ ] `src/utils/structuredData.ts` (nouvelles infos)
- [ ] `src/routes.ts` (nouvelles routes)
- [ ] `public/admin/config.yml` (nouveau repo)
- [ ] `.env.local` (nouveaux credentials)
- [ ] `netlify.toml` (adapter redirects)

**Frontend à créer** :

- [ ] `src/components/` (tous)
- [ ] `src/pages/` (tous)
- [ ] `src/styles/primitives.css` (nouvelles couleurs)
- [ ] Assets/images

---

**Dernière mise à jour** : 14 janvier 2026
