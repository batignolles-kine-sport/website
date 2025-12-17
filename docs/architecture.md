# Architecture

## But
Documenter la structure actuelle pour savoir ce qui est utile, optionnel ou supprimable.

## Vue d'ensemble
- **Stack** : Vite + React 18 + TypeScript, Tailwind v4 (CDN/config), routing `react-router-dom` (HashRouter), SEO via `react-helmet-async`.
- **Entrée** : `/src/index.tsx` monte `<App />`, Vite gère l'assets pipeline.
- **Layout** : `/src/components/Layout.tsx` encadre toutes les pages (header sticky + footer).

## Routage & pages
- `/src/App.tsx` : déclare les routes principales (`/`, services, équipe, blog, contact, légales). **Note** : routes pédiatrie supprimées.
- `/src/pages/Home.tsx` : page d'accueil (hero, bento expertise, pathologies, reviews full-width, localisation, CTA Doctolib).
- `/src/pages/ServiceDetail.tsx` : gère l'affichage d'un service via `serviceId` (données depuis `constants.ts`).
- `/src/pages/Team.tsx` : liste l'équipe.
- `/src/pages/Blog.tsx` / `/src/pages/BlogPost.tsx` : blog et article.
- `/src/pages/Contact.tsx` : formulaire de contact (sans pédiatrie).
- `/src/pages/Legal.tsx` : mentions légales.

## Données & constantes
- `/src/utils/constants.ts` :
  - `SERVICES` (pédiatrie retirée), `TEAM`, `BLOG_POSTS`, coordonnées (`ADDRESS`, `PHONE`, `EMAIL`, `DOCTOLIB_URL`), visuels (`HERO_IMAGE_URL`, `LOGO_URL`).
  - **Utile** : toutes les valeurs exposées sont consommées; ne pas supprimer sans mise à jour des pages.
- `/src/data/avis.json` : source unique des avis (bouclée dans `Home.tsx`).
- `/src/data/metadata.json` : métadonnées générales (non consommées côté client à ce stade).
- `/src/utils/helpers.ts` : petits utilitaires partagés (ex. formatage du lien `tel:`).

## Composants
- `/src/components/ui/Button.tsx` : CTA (variantes, DoctolibMark).
- `/src/components/layout/Layout.tsx` : header/footer + effet glass au scroll; lien vers services via `SERVICES[0]`.
- `/src/components/layout/SEO.tsx` : balises meta/OG via helmet.

## Styles & assets
- `index.html` : Tailwind CDN + config, police système; fond blanc. Favicon sur `/images/logo.svg`.
- `/src/styles/main.css` : point d'entrée qui importe Tailwind (`@import "tailwindcss"`), puis `base.css` et `components.css`.
- `/public/images/hero/hero.webp` (fallback `hero.jpeg`) et `/public/images/logo.svg` : assets statiques servis tels quels; les URLs dans `constants.ts` pointent vers ces chemins racine. Répertoires prévus pour `/public/images/avatars` et `/public/fonts`.

## Build & outils
- Scripts : `npm run dev`, `npm run build`, `npm run preview`.
- TypeScript config : ES2022, JSX react-jsx, moduleResolution bundler.

## Pistes de nettoyage
- Vérifier si des images/URLs fictives (picsum) doivent être remplacées ou supprimées.
- Supprimer d'éventuels imports non utilisés après retrait de la pédiatrie (actuellement clean au build).
- Blog : si non utilisé, routes/pages peuvent être désactivées en bloc (`Blog.tsx`, `BlogPost.tsx`, `BLOG_POSTS`).
- Si Tailwind complet n'est pas nécessaire, simplifier la config dans `index.html`.
