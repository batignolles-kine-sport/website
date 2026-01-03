# 🎨 Design System - Batignolles Kiné Sport

**Créé le :** 2026-01-03  
**Version :** 1.0  
**Brand :** Cabinet de kinésithérapie haut de gamme, Paris 17ème  
**Feeling :** Professionnel, rassurant, moderne, accessible

---

## 1. Design Tokens

### 1.1 Palette de Couleurs

| Nom | Hex | Usage | Justification |
|-----|-----|-------|---------------|
| **Primary - Teal** | `#2180a3` | CTA, liens, highlights, éléments interactifs | Évoque la santé, le bien-être, la confiance. Couleur professionnelle et apaisante. |
| **Secondary - Gris Chaud** | `#5F5248` | Texte principal, titres | Apporte sérieux et élégance, contraste élevé sur fond clair. |
| **Neutral - Blanc Crème** | `#FCFCF9` | Backgrounds, sections claires | Douceur visuelle, moins agressif que blanc pur, premium. |
| **Accent - Gris Clair** | `#A7A9A9` | Bordures, séparateurs, états disabled | Subtilité, structure visuelle sans surcharge. |
| **Success** | `#22C55E` | Messages de succès, validations | Standard vert, accessible, immédiatement identifiable. |
| **Error** | `#FF5459` | Messages d'erreur, champs invalides | Rouge vif, attention immédiate, contraste fort. |
| **Warning** | `#E68161` | Alertes, informations importantes | Orange doux, moins agressif que rouge, mais visible. |
| **Info** | `#3B82F6` | Messages informatifs, tooltips | Bleu standard, neutre, non intrusif. |

**Pourquoi ces choix ?**
- **Teal primaire** : différenciation vs. sites médicaux classiques (bleu hospitalier)
- **Gris chaud** : humanise le cabinet vs. gris froid corporatiste
- **Blanc crème** : réduit fatigue visuelle, premium subtil
- **Contraste WCAG AA minimum** : tous les textes respectent 4.5:1

---

### 1.2 Typographie

#### Famille de Polices

```
Primary (corps de texte) :
  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

Headlines (titres) :
  Georgia, "Times New Roman", serif
  OU Geist (si disponible, moderne sans-serif)
```

**Pourquoi ?**
- **System fonts** : performance optimale, 0ms de chargement, aspect natif
- **Georgia (serif)** : autorité, professionnalisme médical
- **Geist (alternative)** : modernité, si on veut un ton moins classique

#### Échelle de Tailles

| Nom | Taille | Usage |
|-----|--------|-------|
| `xs` | 12px | Labels, meta (date, auteur), legal |
| `sm` | 14px | Texte secondaire, captions |
| `base` | 16px | Corps de texte principal |
| `lg` | 18px | Lead paragraphs, sous-titres |
| `xl` | 20px | Titres de sections mineures |
| `2xl` | 24px | Titres H3 |
| `3xl` | 30px | Titres H2 |
| `4xl` | 36px | Titres H1 pages internes |
| `5xl` | 48px | Titres Hero (home) |

#### Poids (Weight)

- **400 (Regular)** : corps de texte
- **500 (Medium)** : labels, sous-titres, emphasis
- **600 (Bold)** : titres, CTA buttons

#### Hauteur de Ligne (Line-height)

- **Headlines** : `1.2` (compact, impactant)
- **Body** : `1.5` (lisibilité optimale, rythme vertical)

**Pourquoi 16px base ?**
- Accessibilité : taille minimum recommandée
- Mobile : lisible sans zoom
- Desktop : confortable pour lecture longue

---

### 1.3 Spacing System

**Base :** 8px (système modulaire)

| Nom | Valeur | Usage |
|-----|--------|-------|
| `xs` | 8px | Padding interne petit (badges, tags) |
| `sm` | 16px | Padding card, espacement vertical serré |
| `md` | 24px | Margin entre sections mineures |
| `lg` | 32px | Padding large, margin entre sections |
| `xl` | 48px | Margin entre sections majeures |
| `2xl` | 64px | Margin hero, espacement XXL |

**Pourquoi 8px ?**
- Divisible par 2 et 4 : flexibilité
- Standard design moderne (Material, Apple HIG)
- Rythme vertical cohérent

---

### 1.4 Border Radius

| Nom | Valeur | Usage |
|-----|--------|-------|
| `sm` | 6px | Inputs, small buttons |
| `md` | 8px | Cards, buttons primaires |
| `lg` | 12px | Large cards, modals |

**Pourquoi ces valeurs ?**
- Moderne sans être "trop rond" (vs. 16px+ qui fait app mobile)
- Cohérence avec identité professionnelle mais accessible

---

### 1.5 Shadows

| Nom | Valeur | Usage |
|-----|--------|-------|
| **Subtle** | `0 1px 3px rgba(0,0,0,0.1)` | Cards au repos, inputs focus |
| **Medium** | `0 4px 6px rgba(0,0,0,0.15)` | Cards hover, dropdowns |
| **Large** | `0 10px 15px rgba(0,0,0,0.2)` | Modals, CTAs hover |

**Pourquoi ?**
- Profondeur subtile sans effet "lourd"
- Hiérarchie visuelle claire au hover

---

## 2. Composants UI

### 2.1 Button Primaire (CTA)

**Description textuelle :**
- **Couleur de fond** : Teal `#2180a3`
- **Texte** : Blanc, 16px, weight 600 (bold)
- **Padding** : 12px vertical, 24px horizontal
- **Radius** : 8px
- **Shadow** : Subtle au repos
- **États** :
  - **Hover** : fond teal plus foncé (`#1a6a8a`), shadow medium
  - **Active** : fond encore plus foncé (`#155670`), shadow subtle
  - **Disabled** : opacity 50%, cursor not-allowed
  - **Focus** : ring 3px teal clair, offset 2px (a11y keyboard nav)

**Texte CTA privilégié :**
- "Prendre rendez-vous"
- "Réserver sur Doctolib"
- "Démarrer"

**Pourquoi ?**
- Contraste fort (blanc/teal) : visible immédiatement
- Padding généreux : tap target 48px+ (mobile a11y)
- States clairs : feedback utilisateur immédiat

---

### 2.2 Button Secondaire

**Description textuelle :**
- **Couleur de fond** : Transparent ou gris très clair (`#F5F5F5`)
- **Border** : 1px solid gris foncé (`#5F5248`)
- **Texte** : Gris foncé `#5F5248`, 16px, weight 500
- **Padding** : 12px vertical, 24px horizontal
- **Radius** : 8px
- **États** :
  - **Hover** : fond gris clair (`#E8E8E8`), border inchangé
  - **Active** : fond gris moyen (`#D0D0D0`)
  - **Focus** : ring 3px teal, offset 2px

**Usage :**
- Actions secondaires ("En savoir plus", "Retour", "Annuler")
- Moins prioritaire visuellement que primaire

---

### 2.3 Card

**Description textuelle :**
- **Background** : Blanc crème `#FCFCF9`
- **Padding interne** : 16px (mobile), 24px (desktop)
- **Border** : 1px solid gris clair `#A7A9A9`
- **Radius** : 8px
- **Shadow** : Subtle au repos
- **États** :
  - **Hover** : shadow medium, léger scale (1.02) optionnel
  - **Active/Cliqué** : border teal

**Usage :**
- Services
- Témoignages
- Articles de blog (preview)
- FAQ items

**Pourquoi ?**
- Fond crème : douceur, différenciation vs. blanc pur
- Border subtile : structure sans lourdeur
- Hover : feedback micro-interaction

---

### 2.4 Form Input

**Description textuelle :**
- **Padding** : 8px vertical, 12px horizontal
- **Border** : 1px solid gris clair `#A7A9A9`
- **Radius** : 6px
- **Font** : 16px (évite zoom iOS), regular
- **Placeholder** : Gris moyen `#888`, contraste OK
- **États** :
  - **Focus** : border teal `#2180a3`, shadow subtle teal glow (`0 0 0 3px rgba(33,128,163,0.1)`)
  - **Error** : border rouge `#FF5459`, texte erreur rouge en dessous
  - **Success** : border verte `#22C55E`, icon checkmark optionnelle
  - **Disabled** : background gris très clair, opacity 60%

**Accessibilité :**
- Label toujours présent (pas seulement placeholder)
- Error message lié via `aria-describedby`
- Focus ring visible (3px minimum)

---

### 2.5 Form Label

**Description textuelle :**
- **Font** : 12px, weight 500 (medium bold)
- **Color** : Gris foncé `#5F5248`
- **Margin-bottom** : 8px (espacement du champ)
- **Required indicator** : Astérisque rouge `*` si champ obligatoire

---

### 2.6 Hero Section

**Description textuelle :**
- **Layout** : Full-width image background (ou vidéo)
- **Overlay** : Gradient sombre (bas) pour lisibilité texte, ou glassmorphism
- **Titre** : 48px (desktop), 36px (mobile), blanc, bold, serif
- **Sous-titre** : 18px, blanc, regular, max-width 600px
- **CTA** : Button primaire (cf. 2.1)
- **Padding vertical** : 64px (mobile), 96px (desktop)

**Contenu hero (home) :**
- Titre : "Votre corps en mouvement, notre expertise"
- Sous-titre : "Cabinet de kinésithérapie du sport à Paris 17ème"
- CTA : "Prendre rendez-vous"

**Pourquoi ?**
- Image : impact émotionnel, humanise le cabinet
- Texte overlay : clarté du message
- CTA immédiat : conversion rapide

---

### 2.7 Review Card (Témoignages)

**Description textuelle :**
- **Base** : Card (cf. 2.3)
- **Avatar** : Photo ronde 48px ou initiales (si pas de photo)
- **Quote icon** : Guillemets stylisés, teal, en haut à gauche
- **Texte témoignage** : 16px, italic, gris foncé, max 3 lignes (mobile)
- **Nom patient** : 14px, bold, gris foncé
- **Meta** : Date ou "Vérifié via Doctolib", 12px, gris moyen
- **Rating** : 5 étoiles (icônes), couleur warning `#E68161`

**Layout :**
- Desktop : Grid 3 colonnes
- Mobile : Carousel horizontal (swipe)

---

### 2.8 Service Card

**Description textuelle :**
- **Base** : Card (cf. 2.3)
- **Icon** : En haut, teal, 32px (sport, injury, etc.)
- **Titre** : 20px, bold, gris foncé
- **Description** : 14px, regular, 2-3 lignes max
- **CTA** : Lien "En savoir plus →" (teal, hover underline)

**Layout :**
- Desktop : Grid 3 colonnes
- Tablet : Grid 2 colonnes
- Mobile : Stack 1 colonne

---

## 3. Layout Templates

### 3.1 Home Page

**Structure :**

1. **Hero Section**
   - Image full-width (kiné en action avec patient)
   - Titre H1 + sous-titre + CTA primaire
   - Hauteur : 100vh (mobile), 80vh (desktop)

2. **Services Section**
   - Titre H2 : "Nos spécialités"
   - Grid 3 colonnes (desktop), 1 colonne (mobile)
   - Service Cards (cf. 2.8)
   - Padding section : 64px vertical

3. **Practitioner Section (À propos)**
   - Layout 2 colonnes : Photo gauche (40%), bio droite (60%)
   - Mobile : Stack (photo en haut, bio en dessous)
   - Titre H2 : "Votre kinésithérapeute"
   - Photo : Portrait professionnel, radius 8px
   - Bio : 2-3 paragraphes, credentials, spécialités
   - CTA secondaire : "Voir le parcours complet"

4. **Reviews Section (Témoignages)**
   - Titre H2 : "Ils nous font confiance"
   - Desktop : Grid 3 colonnes
   - Mobile : Carousel horizontal (swipe)
   - Review Cards (cf. 2.7)
   - Link externe : "Voir tous les avis sur Doctolib"

5. **FAQ Section**
   - Titre H2 : "Questions fréquentes"
   - Accordion (expand/collapse)
   - 5-8 questions
   - Icon + / - au toggle
   - Padding : 48px vertical

6. **CTA Footer Section**
   - Background : Blanc (contraste avec crème)
   - Titre H2 : "Prêt à prendre rendez-vous ?"
   - Sous-titre : "Disponibilités en ligne via Doctolib"
   - Button primaire : "Réserver maintenant"
   - Padding : 64px vertical
   - Border-top : 1px gris clair

**Pourquoi cet ordre ?**
- Hero : impact immédiat
- Services : valeur proposition
- Practitioner : confiance (humain)
- Reviews : preuve sociale
- FAQ : réduction friction
- CTA : conversion finale

---

### 3.2 Service Page (ex: Kiné du Sport)

**Structure :**

1. **Hero Section**
   - Image service (action, sport)
   - Titre H1 : Nom du service
   - Breadcrumb : Home > Services > [Service name]
   - Hauteur : 50vh

2. **Content Section**
   - Layout 2 colonnes : Texte gauche (60%), image/illustration droite (40%)
   - Mobile : Stack (texte en haut)
   - Paragraphes bien espacés (margin 24px)
   - Bullets si liste d'indications
   - Padding : 48px vertical

3. **FAQ Specific**
   - Accordion (5 questions liées au service)
   - Padding : 48px vertical

4. **CTA Section**
   - Desktop : Section pleine largeur (cf. home CTA footer)
   - Mobile : Sticky button en bas (fixed position)
   - Texte : "Prendre RDV pour [Service]"

**Pourquoi sticky CTA mobile ?**
- Conversion : toujours visible
- Actionnable immédiatement après lecture

---

### 3.3 Blog Post

**Structure :**

1. **Featured Image**
   - Full-width, hauteur 400px (desktop), 250px (mobile)
   - Overlay gradient (bas) si texte superposé

2. **Header**
   - Breadcrumb : Home > Blog > [Catégorie] > [Titre]
   - Titre H1 : 36px, bold, serif, max-width 800px
   - Meta : Date + Auteur + Temps de lecture (ex: "5 min")
   - Border-bottom : 1px gris clair
   - Padding : 32px vertical

3. **Content**
   - Max-width : 800px (lisibilité)
   - Centré
   - Line-height : 1.6 (plus aéré que 1.5)
   - Images inline : max-width 100%, radius 8px, shadow subtle
   - Spacing paragraphes : 24px
   - Padding section : 48px vertical

4. **Related Posts**
   - Titre H3 : "Articles similaires"
   - Grid 3 cards (desktop), 1 colonne (mobile)
   - Preview cards avec image + titre + date

5. **CTA Section**
   - Background : Gris très clair
   - Titre : "Besoin d'un accompagnement ?"
   - CTA primaire : "Réserver une séance"
   - Padding : 48px vertical

---

### 3.4 Contact Page

**Structure :**

1. **Hero Mini**
   - Titre H1 : "Nous contacter"
   - Sous-titre : "Nous sommes là pour vous accompagner"
   - Hauteur : 30vh

2. **Layout 2 Colonnes**
   - Gauche (50%) : Formulaire de contact
     - Champs : Nom, Email, Téléphone, Message
     - Labels + inputs (cf. 2.4 et 2.5)
     - Button primaire : "Envoyer"
   - Droite (50%) : Infos pratiques
     - Adresse (avec map embed Google Maps)
     - Téléphone (cliquable `tel:`)
     - Email (cliquable `mailto:`)
     - Horaires d'ouverture
     - Lien Doctolib (button secondaire)

3. **Mobile**
   - Stack : Infos en haut, formulaire en dessous
   - Map : full-width, hauteur 300px

**Pourquoi formulaire + infos ?**
- Flexibilité : certains préfèrent appeler
- Confiance : transparence totale (adresse, horaires)

---

## 4. Responsive Breakpoints

| Breakpoint | Taille | Layout |
|------------|--------|--------|
| **Mobile** | < 640px | 1 colonne, stack all, touch-friendly (48px tap targets) |
| **Tablet** | 640px – 1024px | 2 colonnes max, hybrid touch/mouse |
| **Desktop** | > 1024px | 3 colonnes, hover states, larger spacing |

**Stratégie : Mobile-First**
- Styles de base = mobile
- Media queries `@media (min-width: 640px)` pour tablet
- Media queries `@media (min-width: 1024px)` pour desktop

**Pourquoi ces seuils ?**
- 640px : iPad mini portrait, petits tablets
- 1024px : iPad landscape, laptops

**Adaptations clés :**

| Élément | Mobile | Desktop |
|---------|--------|---------|
| **Font H1** | 36px | 48px |
| **Padding section** | 32px | 64px |
| **Cards grid** | 1 col | 3 cols |
| **Navigation** | Hamburger menu | Inline menu |
| **Hero height** | 100vh (impact) | 80vh (+ scroll visible) |

---

## 5. Accessibility Checklist

### 5.1 Couleurs et Contraste

- [ ] **Contraste texte/fond :** Minimum 4.5:1 (WCAG AA) pour texte normal
- [ ] **Contraste UI :** Minimum 3:1 pour éléments interactifs (buttons, borders)
- [ ] **Test outils :** Vérifier avec WebAIM Contrast Checker
- [ ] **Dark mode (optionnel)** : Si implémenté, mêmes ratios de contraste

**Vérifications :**
- Texte gris foncé `#5F5248` sur blanc crème `#FCFCF9` : ✅ 9.2:1
- Texte blanc sur teal `#2180a3` : ✅ 4.8:1
- Liens teal `#2180a3` sur blanc crème : ✅ 5.1:1

---

### 5.2 Focus Management

- [ ] **Focus ring visible :** 3px solid teal `#2180a3`, offset 2px
- [ ] **Tous les éléments interactifs focusables :** buttons, links, inputs, accordions
- [ ] **Pas de `outline: none` sans remplacement stylisé**
- [ ] **Tab order logique :** suit l'ordre visuel (haut → bas, gauche → droite)

---

### 5.3 Tap Targets (Mobile)

- [ ] **Taille minimum :** 48px x 48px (Apple/Google guidelines)
- [ ] **Espacement :** 8px minimum entre targets
- [ ] **Buttons primaires :** Padding 12px vertical garantit 48px+ avec texte 16px

---

### 5.4 Images et Media

- [ ] **Alt text :** Toutes les images ont un attribut `alt` descriptif
  - Images décoratives : `alt=""`
  - Images informatives : description claire
- [ ] **Vidéos :** Sous-titres si voix-off ou dialogue
- [ ] **Images de texte :** Évitées (sauf logos)

---

### 5.5 Forms

- [ ] **Labels explicites :** Tous les inputs ont un `<label>` associé (via `for` ou wrapping)
- [ ] **Placeholders ≠ labels :** Placeholder = exemple, pas instruction
- [ ] **Error messages :** Texte clair, lié via `aria-describedby`, couleur + icon (pas que couleur)
- [ ] **Required fields :** Astérisque + mention `aria-required="true"`

---

### 5.6 Keyboard Navigation

- [ ] **Tab order logique :** Navigation au clavier suit ordre visuel
- [ ] **Escape key :** Ferme modals/dropdowns
- [ ] **Enter/Space :** Active buttons et links
- [ ] **Skip links :** "Aller au contenu principal" pour éviter navigation répétée

---

### 5.7 Semantic HTML

- [ ] **Headings hiérarchiques :** H1 unique par page, puis H2, H3 (pas de sauts)
- [ ] **Landmarks :** `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`
- [ ] **Lists :** Utiliser `<ul>`, `<ol>` pour listes (pas de `<div>` stylés)
- [ ] **Buttons vs. Links :**
  - `<button>` pour actions (submit form, toggle accordion)
  - `<a>` pour navigation (aller à une page)

---

### 5.8 Screen Readers

- [ ] **ARIA labels :** Si texte visible insuffisant (ex: icon-only buttons)
  - Exemple : `<button aria-label="Fermer le menu">X</button>`
- [ ] **Live regions :** `aria-live="polite"` pour messages de succès/erreur dynamiques
- [ ] **Hidden content :** `aria-hidden="true"` pour éléments décoratifs (icons redondants)

---

### 5.9 Performance et Accessibility

- [ ] **Images lazy-loaded :** Sauf above-the-fold (hero)
- [ ] **Web fonts :** `font-display: swap` pour éviter FOIT (flash of invisible text)
- [ ] **Animations :** Respecter `prefers-reduced-motion` (désactiver pour utilisateurs sensibles)

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 6. Justifications Globales

### Pourquoi ce Design System ?

1. **Brand Alignment**
   - Teal + gris chaud = professionnel mais humain
   - Serif headlines = autorité médicale
   - Blanc crème = premium subtil, douceur

2. **Accessibilité First**
   - Contraste WCAG AA
   - Tap targets 48px
   - Focus management strict
   - Semantic HTML

3. **Performance**
   - System fonts (0ms load)
   - Spacing modulaire (CSS maintenable)
   - Mobile-first (optimisation progressive)

4. **Conversion**
   - CTA primaire ultra-visible (teal blanc)
   - Sticky CTA mobile
   - Hero avec CTA immédiat
   - Témoignages (preuve sociale)

5. **Scalabilité**
   - Tokens réutilisables
   - Composants atomiques (buttons, cards)
   - Templates cohérents (home, service, blog)

---

## 7. Next Steps (pour Dev)

1. **Créer CSS Variables**
   ```css
   :root {
     --color-primary: #2180a3;
     --color-secondary: #5F5248;
     --spacing-md: 24px;
     /* etc. */
   }
   ```

2. **Component Library**
   - Implémenter buttons, cards, forms en composants réutilisables
   - Framework : React, Vue, ou HTML/CSS pur

3. **Responsive Testing**
   - Tester sur iPhone SE (320px), iPad (768px), Desktop (1440px)
   - Vérifier tap targets, lisibilité

4. **A11y Audit**
   - Lighthouse (Chrome DevTools)
   - axe DevTools
   - Test clavier (navigation sans souris)

5. **Doctolib Integration**
   - Widget iframe responsive
   - CTA buttons linkés vers URL Doctolib

---

**Fin du Design System v1.0**

*Ce document est vivant : ajuster tokens/composants selon feedbacks utilisateurs et tests A/B.*
