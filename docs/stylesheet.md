# Stylesheet

Règles synthétiques applicables au site.

- Fichiers : `src/styles/main.css` (entrée), `src/styles/base.css` (reset + typo), `src/styles/components.css` (utilitaires spécifiques composants).

## Couleurs
- **Fond global** : `#F8F9FC` (gris très clair). Sections principales en blanc.
- **Texte principal** : `#0f172a` (slate-900). Texte secondaire : `#64748b`.
- **Accent / primaire** : `#1A4D2E` (vert profond). Hover assombri : `#143d24`.
- **Bords/traits** : gris clair `#e2e8f0` / `#f1f5f9`.
- **Alertes/étoiles** : jaune `#F59E0B`.

## Typographie
- Police système sans-serif (fallback). Poids: 400 par défaut, 600-700 pour titres/CTA.
- Titres serrés: `tracking-tight`, line-height ~1.05 pour hero/h2, ~1.1 pour h3.

## Layout & espacements
- Largeur max contenu : 1400px (sections internes), marges latérales 1.5–3% (`px-4 md:px-6`).
- Sections verticales : 12–20 (rem) selon viewport (`py-12 md:py-20`), gap entre blocs ~`space-y-20`.
- Cartes arrondies : radius 24–48px selon importance; ombre légère (`shadow-xl shadow-slate-200`).
- Hero : hauteur 70–80vh, arrondi 24–48px, border blanche fine.
- Grilles : 1-3 colonnes responsive (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

## Boutons & CTAs
- Primaire : fond `#0f172a` ou `#1A4D2E`, texte blanc, arrondi pill, padding `px-6 py-3`, ombre douce.
- Icônes à droite (ArrowRight) espacées `gap-2`.
- Liens inline : uppercase, `tracking-wide`, couleur primaire, légère transition (`hover:underline` ou `hover:text-primary`).

## Cartes & sections clés
- **Bento expertise** : grande carte blanche + deux cartes sombres. Fonds texturés légers, survol avec `scale-102` et ombres.
- **Pathologies** : 3 cartes, la première en plein accent (fond vert, texte blanc), les autres blanches avec bord clair.
- **Avis** : cartes fond gris clair `#F8F9FC`, arrondi 24–32px, bord `border-slate-100`, texte italic pour le commentaire, 5 étoiles jaunes.
- **Localisation** : deux colonnes de hauteur égale; carte infos blanche, iframe map pleine hauteur (min 420px), arrondis 32px.

## Navbar
- Collée en haut, fond blanc opaque au chargement.
- Après scroll (>4px) : glassmorphism léger (`bg-white/80`, `backdrop-blur-md`, `border-b border-white/40`, `shadow-sm`).
- Liens centrés desktop, burger en mobile; CTA Doctolib pill à droite (desktop).

## Animations
- Marquee avis : animation linéaire 240s, duplications pour continuité; gradients gauche/droite pour fade.
- Indicateur "Scroll" hero : bounce vertical doux (1.4s).
- Survol images hero/bento : `scale-105` avec transition 300–700ms.

## Responsivité
- Mobile-first; paddings réduits (`px-3/4`), grilles en 1 colonne, CTAs centrées.
- Desktop : grilles multi-colonnes, textes plus grands (`md:text-xl+`), arrondis accrus.

## Accessibilité rapide
- Couleurs avec contraste élevé (texte sombre sur fond clair, texte blanc sur vert foncé/bleu nuit).
- Boutons et liens focus/hover visibles (changement de couleur/ombre).
- Iframes et images avec `alt` et `title` fournis (hero, map).

## À éviter
- Ne pas réintroduire la pédiatrie (contenu retiré).
- Éviter les ombres trop marquées; privilégier un rendu doux et lumineux.
- Limiter les polices externes pour la perf (pas de font custom chargée).
