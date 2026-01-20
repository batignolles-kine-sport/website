# 🤖 Guide Technique Antigravity - Réemploi Backend BKS

**Audience** : Antigravity AI Agent  
**Objectif** : Instructions précises pour recréer un site avec le même backend mais une nouvelle DA

---

## 🎯 Mission

Créer un nouveau site web en réutilisant **100% du backend** de BKS tout en remplaçant **100% du frontend** (nouvelle DA).

**Garder** :

- Architecture technique
- Système de blog Markdown
- Scripts de génération
- Configuration SSG/PWA
- Intégration Cloudinary
- Système SEO complet

**Remplacer** :

- Design visuel (couleurs, fonts, composants UI)
- Contenu des articles
- Images/assets
- Branding

---

## 📋 Checklist d'Implémentation

### Phase 1 : Setup Infrastructure

#### 1.1 Créer le Projet Base

```bash
# Créer dossier projet
mkdir nouveau-site-ss2i
cd nouveau-site-ss2i

# Initialiser avec Vite React TypeScript
npm create vite@latest . -- --template react-ts
npm install
```

#### 1.2 Installer Toutes les Dépendances

**Production dependencies** :

```bash
npm install @cloudinary/react@^1.14.3 \
  @cloudinary/url-gen@^1.22.0 \
  decap-cms-app@^3.0.0 \
  framer-motion@^12.23.26 \
  lucide-react@0.344.0 \
  marked@^17.0.1 \
  motion@^12.23.25 \
  postcss@^8.5.6 \
  react@18.2.0 \
  react-dom@18.2.0 \
  react-helmet-async@2.0.4 \
  react-router-dom@6.22.3 \
  tailwindcss@^4.1.17 \
  @tailwindcss/cli@^4.1.17 \
  @tailwindcss/postcss@^4.1.17 \
  @tailwindcss/vite@^4.1.17
```

**Dev dependencies** :

```bash
npm install -D @types/node@^22.19.3 \
  @types/react@^19.2.7 \
  @types/react-dom@^19.2.3 \
  @vitejs/plugin-react@^5.0.0 \
  cloudinary@^2.8.0 \
  dotenv@^17.2.3 \
  terser@^5.44.1 \
  ts-node@^10.9.2 \
  typescript@~5.8.2 \
  vite@^6.2.0 \
  vite-plugin-compression@^0.5.1 \
  vite-plugin-pwa@^1.2.0 \
  vite-react-ssg@^0.8.9
```

#### 1.3 Copier les Fichiers de Configuration Critiques

**Depuis `bks-web` vers le nouveau projet** :

```bash
# Configuration Vite
cp ../bks-web/vite.config.ts .

# Configuration Tailwind
cp ../bks-web/tailwind.config.js .
cp ../bks-web/postcss.config.js .

# Configuration TypeScript
cp ../bks-web/tsconfig.json .

# Configuration Netlify
cp ../bks-web/netlify.toml .

# Configuration .npmrc
cp ../bks-web/.npmrc .
```

---

### Phase 2 : Scripts de Génération

#### 2.1 Copier le Dossier Scripts Complet

```bash
mkdir scripts
cp -r ../bks-web/scripts/ ./scripts/
```

Contient :

- `generate-blog-metadata.js` - Génère `blog-metadata.json` depuis les .md
- `generate-sitemap.js` - Génère `sitemap.xml` automatiquement

#### 2.2 Mettre à Jour package.json Scripts

Ajouter dans `package.json` :

```json
{
  "scripts": {
    "dev": "node scripts/generate-blog-metadata.js && vite",
    "build": "node scripts/generate-blog-metadata.js && node scripts/generate-sitemap.js && npx vite-react-ssg build",
    "build:spa": "node scripts/generate-blog-metadata.js && node scripts/generate-sitemap.js && vite build",
    "preview": "vite preview",
    "sitemap": "node scripts/generate-sitemap.js"
  }
}
```

#### 2.3 Adapter les Chemins dans les Scripts

**Dans `scripts/generate-sitemap.js`**, modifier :

- `DOMAIN` : URL du nouveau site
- `CONSTANTS_FILE` : Adapter selon nouvelle structure

**Dans `scripts/generate-blog-metadata.js`**, vérifier :

- `POSTS_DIR` : Chemin vers les articles .md
- `OUTPUT_FILE` : Destination de `blog-metadata.json`

---

### Phase 3 : Système de Blog

#### 3.1 Créer la Structure de Fichiers

```bash
mkdir -p src/posts/pathologies
mkdir -p src/data
mkdir -p src/utils
```

#### 3.2 Copier les Utilitaires Blog

```bash
# Markdown renderer
cp ../bks-web/src/utils/markdownRenderer.ts src/utils/

# Blog suggestions (optionnel)
cp ../bks-web/src/utils/blogSuggestions.ts src/utils/
```

#### 3.3 Créer des Articles de Test

**Créer `src/posts/pathologies/exemple-article.md`** :

```markdown
---
title: "Article Exemple"
category: "Technologie"
type: "Guide"
image: "/images/blog/exemple.jpg"
readTime: "5 min"
excerpt: "Ceci est un article exemple pour tester le système"
publishedAt: "14 Janvier 2026"
featured: true
---

# Mon Premier Article

Contenu de test...
```

---

### Phase 4 : SEO System

#### 4.1 Copier les Fichiers SEO

```bash
cp ../bks-web/src/utils/seoConfig.ts src/utils/
cp ../bks-web/src/utils/structuredData.ts src/utils/
cp ../bks-web/src/utils/sitemap.ts src/utils/
```

#### 4.2 Adapter seoConfig.ts

**Modifier** :

- Remplacer tous les slugs existants par les nouveaux articles
- Mettre à jour les catégories selon le nouveau domaine
- Conserver la structure exacte du fichier

#### 4.3 Adapter structuredData.ts

**Dans `generateLocalBusinessSchema()`**, modifier :

```typescript
name: 'Nouveau Nom Entreprise',
url: 'https://nouveau-site.fr',
description: 'Nouvelle description...',
address: {
  streetAddress: 'Nouvelle adresse',
  addressLocality: 'Ville',
  postalCode: 'Code postal',
},
telephone: '+33123456789',
email: 'contact@nouveau-site.fr',
```

#### 4.4 Créer fichiers SEO publics

```bash
mkdir -p public
cp ../bks-web/public/robots.txt public/
```

**Adapter `robots.txt`** avec le nouveau sitemap :

```
Sitemap: https://nouveau-site.fr/sitemap.xml
```

---

### Phase 5 : Cloudinary

#### 5.1 Créer Compte Cloudinary

1. Aller sur <https://cloudinary.com>
2. Créer un compte gratuit
3. Noter : `cloud_name`, `api_key`, `api_secret`

#### 5.2 Configurer .env.local

**Créer `.env.local`** :

```bash
# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=votre-cloud-name
VITE_CLOUDINARY_API_KEY=votre-api-key
VITE_CLOUDINARY_API_SECRET=votre-api-secret
CLOUDINARY_URL=cloudinary://api-key:api-secret@cloud-name
```

**Ajouter `.env.local` au .gitignore** :

```bash
echo ".env.local" >> .gitignore
```

#### 5.3 Copier Helper Cloudinary

```bash
cp ../bks-web/src/utils/cloudinary.ts src/utils/
```

Ce fichier fonctionne tel quel avec les nouvelles env variables.

---

### Phase 6 : Decap CMS

#### 6.1 Créer Configuration CMS

```bash
mkdir -p public/admin
cp ../bks-web/public/admin/index.html public/admin/
```

#### 6.2 Adapter config.yml

**Créer `public/admin/config.yml`** et adapter :

```yaml
backend:
  name: github
  repo: votre-organisation/nouveau-repo  # ← CHANGER
  branch: main
  auth_endpoint: /api/auth

media_folder: "public/images/blog"
public_folder: "/images/blog"

collections:
  - name: "articles"
    label: "Articles Blog"
    folder: "src/posts/pathologies"
    create: true
    slug: "{{slug}}"
    preview_path: "/blog/{{slug}}"
    fields:
      # Adapter les fields selon vos besoins
      - { label: "Titre", name: "title", widget: "string", required: true }
      - { label: "Catégorie", name: "category", widget: "select", 
          options: ["Tech", "Business", "Design"], required: true }
      - { label: "Type", name: "type", widget: "select", 
          options: ["Guide", "Actualité", "Tutoriel"], required: true }
      - { label: "Image", name: "image", widget: "image", required: true }
      - { label: "Temps de lecture", name: "readTime", widget: "string", default: "5 min" }
      - { label: "Extrait", name: "excerpt", widget: "text", required: true }
      - { label: "Date", name: "publishedAt", widget: "string" }
      - { label: "Afficher", name: "featured", widget: "boolean", default: true }
      - { label: "Contenu", name: "body", widget: "markdown", required: true }
```

---

### Phase 7 : Routes & SSG

#### 7.1 Copier routes.ts

```bash
cp ../bks-web/src/routes.ts src/
```

#### 7.2 Adapter les Routes

**Dans `src/routes.ts`**, modifier :

```typescript
export const STATIC_ROUTES = [
  '/',
  '/blog',
  '/a-propos',
  '/contact',
  // ... vos pages statiques
];

export const SERVICE_ROUTES = [
  // Adapter selon vos services
  '/services/service-1',
  '/services/service-2',
];
```

---

### Phase 8 : Design System (Structure Seulement)

#### 8.1 Copier l'Architecture CSS

```bash
mkdir -p src/styles
cp ../bks-web/src/styles/primitives.css src/styles/
cp ../bks-web/src/styles/tokens.css src/styles/
cp ../bks-web/src/styles/components.css src/styles/
```

#### 8.2 Remplacer les Couleurs

**Dans `src/styles/primitives.css`**, remplacer TOUTES les valeurs de couleurs :

```css
/* ANCIENNES (à supprimer) */
--primitive-color-olive-500: #404134;

/* NOUVELLES (votre palette) */
--primitive-color-primary-500: #VOTRE_COULEUR;
```

**IMPORTANT** : Conserver la structure (les noms de variables) mais changer les valeurs des couleurs.

#### 8.3 Adapter les Fonts

**Dans `src/styles/primitives.css`**, changer la font family :

```css
--primitive-font-family: 'Votre-Font', system-ui, sans-serif;
```

**Dans `tailwind.config.js`**, adapter :

```javascript
fontFamily: {
  sans: ['Votre-Font', 'system-ui', 'sans-serif'],
}
```

---

### Phase 9 : Index.html & Entry Point

#### 9.1 Copier index.html

```bash
cp ../bks-web/index.html .
```

#### 9.2 Adapter le Contenu

**Dans `index.html`**, modifier :

- `<title>` : Nouveau nom
- Meta tags manuels
- Liens vers favicons (adapter plus tard)
- Preload fonts (selon nouvelle font)
- Nom dans `<noscript>`
- Formulaire Netlify (adapter les champs)

#### 9.3 Copier Entry Points

```bash
cp ../bks-web/src/main.tsx src/
cp ../bks-web/src/index.tsx src/
cp ../bks-web/src/App.tsx src/
```

**⚠️ ATTENTION** : Ces fichiers références des composants du frontend. Ils devront être adaptés une fois que vous créerez vos nouveaux composants UI.

---

### Phase 10 : PWA Configuration

#### 10.1 Vérifier vite.config.ts

Le fichier copié contient déjà la config PWA. Adapter :

```typescript
VitePWA({
  manifest: {
    name: 'Nouveau Nom',              // ← CHANGER
    short_name: 'Nom Court',          // ← CHANGER
    description: 'Description...',    // ← CHANGER
    theme_color: '#VOTRE_COULEUR',    // ← CHANGER
  }
})
```

#### 10.2 Copier registerSW.ts

```bash
cp ../bks-web/src/registerSW.ts src/
```

---

### Phase 11 : Assets

#### 11.1 Structure Images

```bash
mkdir -p public/images/blog
mkdir -p public/images/hero
mkdir -p public/fonts
```

#### 11.2 Favicons

**NE PAS copier les favicons de BKS** - Créer nouveaux avec le nouveau branding.

Utiliser <https://realfavicongenerator.net/> :

- Générer favicons
- Placer dans `public/`
- Mettre à jour `index.html`

#### 11.3 Fonts

**Si self-hosted** :

- Télécharger les fonts
- Placer dans `public/fonts/`
- Créer `@font-face` dans `primitives.css`

---

### Phase 12 : Netlify Setup

#### 12.1 Créer Repo GitHub

```bash
git init
git add .
git commit -m "Initial commit - Backend setup"
git remote add origin https://github.com/votre-org/nouveau-repo.git
git push -u origin main
```

#### 12.2 Connecter à Netlify

1. Aller sur <https://app.netlify.com>
2. "Add new site" > "Import from Git"
3. Sélectionner le repo
4. Build command : `npm run build`
5. Publish directory : `dist`
6. Ajouter env variables :
   - `VITE_CLOUDINARY_CLOUD_NAME`
   - `VITE_CLOUDINARY_API_KEY`
   - (autres si besoin)

#### 12.3 Configurer GitHub OAuth pour Decap CMS

1. Dans Netlify : "Site settings" > "Identity"
2. Enable Identity
3. "External providers" > Add GitHub
4. Noter Client ID et Secret
5. Dans GitHub : Settings > Developer > OAuth Apps
6. Créer nouvelle app
7. Callback URL : `https://votre-site.netlify.app/.netlify/identity/callback`

---

## 🔧 Fichiers à Créer/Adapter Manuellement

### Obligatoires

| Fichier | Action | Pourquoi |
|---------|--------|----------|
| `src/utils/constants.ts` | Créer nouveau | Constantes spécifiques au nouveau site |
| `.env.local` | Créer nouveau | Credentials Cloudinary |
| `public/admin/config.yml` | Adapter | Nouveau repo GitHub |
| `src/utils/structuredData.ts` | Adapter | Nouvelles infos business |
| `src/utils/seoConfig.ts` | Adapter | Nouveaux articles |
| `src/styles/primitives.css` | Adapter colors/fonts | Nouvelle DA |
| `index.html` | Adapter meta/title | Nouveau branding |
| `vite.config.ts` | Adapter PWA manifest | Nouveau nom/couleurs |

### Frontend (Nouvelle DA)

**À CRÉER DE ZÉRO** :

- `src/components/` - Tous les composants UI
- `src/pages/` - Toutes les pages
- `src/styles/` - Valeurs design (garder structure)
- Images/assets

---

## ✅ Vérification Finale

### Checklist Avant Build

- [ ] `npm install` réussi
- [ ] `.env.local` créé avec credentials Cloudinary
- [ ] Au moins 1 article test dans `src/posts/pathologies/`
- [ ] `scripts/generate-blog-metadata.js` adapté (DOMAIN, paths)
- [ ] `src/utils/seoConfig.ts` adapté (nouveau contenu)
- [ ] `src/utils/structuredData.ts` adapté (nouvelles infos)
- [ ] `public/admin/config.yml` adapté (nouveau repo)
- [ ] `index.html` adapté (nouveau titre, meta)
- [ ] `vite.config.ts` adapté (PWA manifest)
- [ ] `src/routes.ts` adapté (nouvelles routes)

### Test Build

```bash
npm run dev  # Vérifier que ça compile
npm run build  # Vérifier SSG
```

**Vérifier** :

- `dist/` généré
- `public/sitemap.xml` créé et contient les bonnes URLs
- `src/data/blog-metadata.json` créé
- Pas d'erreurs TypeScript

---

## 🚨 Pièges Courants

### 1. Chemins Absolus

Les scripts utilisent des chemins absolus. Vérifier :

- `__dirname` dans les scripts
- Imports avec `@/` alias

### 2. SSG Routes

Si une page n'apparaît pas dans le build :

- Vérifier qu'elle est dans `src/routes.ts`
- Check `blog-metadata.json` pour les articles

### 3. Cloudinary Images

Si les images ne chargent pas :

- Vérifier `.env.local`
- Vérifier que les images sont uploadées sur Cloudinary
- Check console browser pour erreurs CORS

### 4. Decap CMS

Si `/admin` ne fonctionne pas :

- Vérifier OAuth GitHub setup
- Check `config.yml` repo path
- Vérifier Netlify Identity activé

---

## 📝 Ordre d'Implémentation Recommandé

1. **Phase 1-2** : Setup + Scripts (30 min)
2. **Phase 3-4** : Blog + SEO (1h)
3. **Phase 5** : Cloudinary (30 min)
4. **Phase 6** : Decap CMS (45 min)
5. **Phase 7** : Routes SSG (30 min)
6. **Phase 8** : Design System Structure (1h)
7. **Phase 9-11** : Config files + Assets (1h)
8. **Test Build** (30 min)
9. **Phase 12** : Netlify Deploy (1h)

**Total temps backend** : ~6-7 heures

---

## 🎨 Après le Backend : Frontend

Une fois le backend en place et testé :

1. **Créer le Design System complet** :
   - Définir nouvelle palette de couleurs
   - Choisir nouvelle typographie
   - Créer tokens dans `primitives.css`

2. **Créer Composants UI** :
   - Buttons, Cards, Forms
   - Navbar, Footer
   - Sections réutilisables

3. **Créer Pages** :
   - Home, Blog, Contact, etc.
   - BlogPost (utilise `markdownRenderer.ts`)

4. **Intégrer avec Backend** :
   - Router React
   - SSG routes
   - SEO components

---

**Document créé le** : 14 janvier 2026  
**Version** : 1.0  
**Maintainer** : Backend BKS Analysis
