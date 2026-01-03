# 🎯 UX SPECIFICATION - Batignolles Kiné Sport

**Date:** 2026-01-03  
**Project:** Batignolles Kiné Sport Website  
**Designer:** UX-Designer Agent  
**Version:** 1.0

---

## 📋 Executive Summary

This document defines the complete user experience architecture for the Batignolles Kiné Sport website. The design is **mobile-first** (70% mobile traffic expected), conversion-focused (primary CTA: "Prendre RDV" → Doctolib), and optimized for patients seeking rapid physiotherapy appointments in Paris 17.

**Key UX Principles:**
- **Speed to conversion:** CTA visible within first viewport
- **Trust signals early:** Reviews, credentials, specialization upfront
- **Mobile-optimized flows:** Touch-friendly, one-column layouts
- **Clear information hierarchy:** Services → Practitioner → Book

---

## 1. SITE ARCHITECTURE (ARBORESCENCE)

```
🏠 HOME (/)
│
├─── 📱 HEADER (Global - Sticky on scroll)
│    ├─ Logo Batignolles Kiné Sport (link to home)
│    ├─ Navigation
│    │  ├─ Services
│    │  ├─ À propos (Justine)
│    │  ├─ Avis
│    │  ├─ Blog
│    │  └─ Contact
│    └─ CTA Button: "Prendre RDV" (Doctolib) - Primary color, always visible
│
├─── 🎯 HERO SECTION
│    ├─ Main Headline: "Rééducation du sportif, rapidement à Paris 17"
│    ├─ Sub-headline: Trust signals (10+ ans expérience, Doctolib 24/7)
│    ├─ Primary CTA: "Voir disponibilités Doctolib"
│    └─ Trust badges: Conventionnée, RPPS, Google 4.8★
│
├─── 💼 SERVICES SECTION
│    ├─ Section Headline: "Nos spécialités"
│    ├─ Service Cards (3)
│    │  ├─ 1. Kiné du Sport (Runner, sportifs amateurs)
│    │  ├─ 2. Rééducation (Post-op, mobilité)
│    │  └─ 3. Prévention & Wellness (Check-ups, posture)
│    └─ Each card: Icon + Title + Short description + "En savoir plus" link
│
├─── 👤 PRACTITIONER SECTION (Justine)
│    ├─ Photo (professional, warmth)
│    ├─ Bio (credentials, specialization, approach)
│    ├─ Credentials: RPPS n°, Conventionnée
│    └─ Secondary CTA: "Prendre RDV avec Justine"
│
├─── ⭐ REVIEWS SECTION
│    ├─ Section Headline: "Ce que nos patients disent"
│    ├─ Google Reviews (carousel on mobile, grid on desktop)
│    │  ├─ Review 1 (5★, patient name, excerpt)
│    │  ├─ Review 2
│    │  └─ Review 3
│    ├─ Overall Rating: 4.8★ (XX avis Google)
│    └─ CTA: "Voir tous les avis Google" (external link)
│
├─── ❓ FAQ SECTION
│    ├─ Section Headline: "Questions fréquentes"
│    ├─ Accordion Items (5-7)
│    │  ├─ "Quel est le délai pour un RDV ?"
│    │  ├─ "Acceptez-vous la carte Vitale ?"
│    │  ├─ "Quels sont vos horaires ?"
│    │  ├─ "Où se trouve le cabinet ?"
│    │  └─ "Comment annuler un RDV Doctolib ?"
│    └─ Format: Expand/collapse, one active at a time
│
├─── 📍 CONTACT SECTION
│    ├─ Section Headline: "Prenez rendez-vous"
│    ├─ Contact Info
│    │  ├─ Address: Paris 17, Batignolles (map embed optional)
│    │  ├─ Phone: [à remplir]
│    │  └─ Email: [optionnel]
│    ├─ Quick Contact Form (optional)
│    │  ├─ Name
│    │  ├─ Phone
│    │  ├─ Message (optional)
│    │  └─ Submit → Opens Doctolib or sends notification
│    └─ Primary CTA: "Réserver sur Doctolib"
│
├─── 📰 BLOG PREVIEW (Optional on Home)
│    ├─ Section Headline: "Conseils et actualités"
│    ├─ Latest Posts (3 cards)
│    │  ├─ Featured Image
│    │  ├─ Title
│    │  ├─ Excerpt (2 lines)
│    │  └─ "Lire l'article" link
│    └─ CTA: "Voir tous les articles"
│
└─── 🦶 FOOTER (Global)
     ├─ Quick Links (Services, À propos, Avis, Blog, Contact)
     ├─ Legal (Mentions légales, Politique confidentialité)
     ├─ Social (Google My Business, Instagram optionnel)
     └─ Copyright: © 2026 Batignolles Kiné Sport

---

📄 SERVICE DETAIL PAGE (/services/[service-slug])
│
├─ Breadcrumb: Home > Services > [Service Name]
├─ Hero: Service Title + Image
├─ Description (2 columns: text + image)
├─ Who is it for? (bullet points)
├─ What to expect (process)
├─ FAQ (service-specific)
└─ CTA: "Prendre RDV pour [service]"

---

📝 BLOG (/blog)
│
├─ Page Title: "Blog & Conseils"
├─ Posts Grid (reverse chronological)
│  └─ Each card: Featured image, title, excerpt, date, CTA
└─ Pagination (if >9 posts)

---

📖 BLOG POST (/blog/[slug])
│
├─ Breadcrumb: Home > Blog > [Post Title]
├─ Featured Image (full-width)
├─ Meta: Date, Author (Justine), Reading Time
├─ Content (max 800px width, well-spaced)
├─ Related Posts (3 cards)
└─ CTA: "Réserver une séance"

---

📞 CONTACT PAGE (/contact)
│
├─ Page Title: "Nous contacter"
├─ Address + Map
├─ Phone + Email
├─ Contact Form (Name, Phone, Message)
└─ Primary CTA: "Ou réserver directement via Doctolib"
```

---

## 2. USER JOURNEYS (3 CRITICAL PATHS)

### Journey 1: "Je suis blessé, besoin RDV rapide"

| **Étape** | **Détail** |
|-----------|------------|
| **Persona** | Marc, 34 ans, runner parisien |
| **Déclencheur** | Douleur au genou après semi-marathon, recherche Google "kiné urgence Paris 17" ou "kiné sport Batignolles" |
| **État mental** | Anxieux, besoin d'aide vite, peu de temps pour lire |
| **Device** | Mobile (80% probable) |

**Chemin étape-par-étape:**

1. **Google SERP → Site Home**
   - Clique sur résultat "Batignolles Kiné Sport - RDV rapide Doctolib"
   - **Attente:** Voir immédiatement "kiné sport" + "RDV rapide"

2. **Hero Section (first viewport)**
   - Lit headline: "Rééducation du sportif, rapidement à Paris 17"
   - Voit sub-headline: "RDV en 24-48h via Doctolib"
   - **Décision:** "C'est pour moi"
   - **Action:** Clique CTA "Voir disponibilités Doctolib" (hero)

3. **Doctolib (external)**
   - S'ouvre dans new tab ou in-app browser
   - Sélectionne créneau dans les 48h
   - Crée compte Doctolib (si besoin)
   - **Conversion:** RDV confirmé

**Points de friction potentiels:**
- ❌ CTA Doctolib pas visible sans scroll → abandonne
- ❌ Headline générique ("Cabinet kiné Paris") → pas sûr de la spécialisation
- ❌ Trop de texte dans hero → patience limitée sur mobile

**Conversion rate espérée:** 35-45% (landing → Doctolib click)

---

### Journey 2: "Je cherche une bonne kiné à Paris 17"

| **Étape** | **Détail** |
|-----------|------------|
| **Persona** | Sophie, 52 ans, post-opération genou |
| **Déclencheur** | Recommandation médecin: "Trouvez une kiné conventionnée" - recherche Google "meilleure kiné Paris 17" |
| **État mental** | Prudent, besoin de confiance, compare plusieurs options |
| **Device** | Desktop ou tablette (plus de temps) |

**Chemin étape-par-étape:**

1. **Google SERP → Explore plusieurs sites**
   - Compare 3-4 cabinets
   - Regarde avis Google
   - Clique sur "Batignolles Kiné Sport"

2. **Hero Section**
   - Lit headline + trust signals (RPPS, conventionnée)
   - Scroll vers bas (pas encore prête à réserver)

3. **Services Section**
   - Cherche "Rééducation post-op"
   - Lit description courte
   - **Décision:** "Ça correspond"

4. **Practitioner Section**
   - Lit bio de Justine
   - Voit credentials (10+ ans, RPPS)
   - Voit photo (approche humaine)
   - **Confiance +1**

5. **Reviews Section**
   - Lit 2-3 avis Google
   - Voit note globale 4.8★
   - **Confiance +2** → Décision de réserver

6. **Clique CTA "Prendre RDV"** (sticky header ou section contact)
   - Doctolib s'ouvre
   - **Conversion:** RDV confirmé

**Points de friction potentiels:**
- ❌ Pas de credentials visibles → manque de confiance
- ❌ Avis Google non affichés → va chercher ailleurs
- ❌ Bio trop courte ou trop générique → pas convaincue

**Conversion rate espérée:** 25-35% (plus de comparaison)

---

### Journey 3: "Je veux lire des infos avant d'appeler"

| **Étape** | **Détail** |
|-----------|------------|
| **Persona** | Thomas, 28 ans, douleur lombaire chronique |
| **Déclencheur** | Recherche Google "exercices pour lombalgie" → tombe sur blog Batignolles Kiné |
| **État mental** | Curieux, éduqué, pas urgent mais cherche solution |
| **Device** | Mobile (lecture soir) |

**Chemin étape-par-étape:**

1. **Google SERP → Blog Post**
   - Clique sur article "Lombalgie du sportif : prévention et exercices"
   - Lit l'article (800 mots)
   - **Valeur perçue:** Contenu utile, expertise

2. **End of Article → CTA**
   - Voit CTA: "Besoin d'un diagnostic ? Réserver une séance"
   - **Décision:** "Peut-être, mais je veux voir le cabinet d'abord"
   - Clique "En savoir plus" ou logo → Home

3. **Home (landing depuis blog)**
   - Re-voit hero (rassure)
   - Scroll vers Services
   - Scroll vers FAQ
   - Lit Q&A: "Quel est le délai RDV ?" → 24-48h

4. **FAQ → Contact**
   - Soit clique CTA Doctolib
   - Soit remplit form contact (question spécifique)
   - **Action:** Envoie question → Future conversion

**Points de friction potentiels:**
- ❌ Blog sans CTA → sortie du site
- ❌ CTA trop agressif ("RÉSERVEZ MAINTENANT!") → repoussant
- ❌ FAQ inexistante → appelle (moins pratique)

**Conversion rate espérée:** 15-25% (plus long nurture cycle, mais blog = SEO long-terme)

---

## 3. WIREFLOWS (SECTIONS CLÉS - FLUX TEXTUELS)

### Wireflow 1: CTA Doctolib - Omniprésence

**Objectif:** User peut réserver depuis N'IMPORTE QUELLE page, N'IMPORTE OÙ

**Implémentation:**

| **Emplacement** | **Format** | **Comportement** |
|----------------|-----------|------------------|
| **Header (sticky)** | Button "Prendre RDV" - Teal, 16px bold | Toujours visible au scroll, clique → open Doctolib (new tab) |
| **Hero Section** | Large button "Voir disponibilités Doctolib" | Above fold (mobile + desktop), primary CTA |
| **After Services** | Button "Réserver une séance" | Après avoir lu services |
| **After Practitioner** | Button "Prendre RDV avec Justine" | Après lecture bio |
| **Contact Section** | Large button "Réserver sur Doctolib" | Final CTA avant footer |
| **Blog Post End** | Button "Réserver une séance" | Après lecture contenu |
| **Mobile Sticky Bottom** | Floating bar "Prendre RDV" (optional) | Alternative: sticky bottom bar (iOS Safari compatible) |

**Link Target:**
- External: `https://www.doctolib.fr/[justine-profile]`
- Open in: `target="_blank" rel="noopener"`

---

### Wireflow 2: Avis Google - Affichage

**Objectif:** Montrer social proof sans sortir l'user du site

**Implémentation:**

| **Device** | **Format** | **Comportement** |
|-----------|-----------|------------------|
| **Mobile** | Horizontal carousel | Swipe gauche/droite, dots indicators, 1 review visible à la fois |
| **Tablet** | Grid 2 colonnes | 2 reviews visibles, scroll vertical si >4 |
| **Desktop** | Grid 3 colonnes | 3 reviews visibles, "Voir tous les avis" CTA en bas |

**Review Card Content:**
- ⭐ Rating (5 stars)
- 📝 Excerpt (2-3 lignes max)
- 👤 Patient name (initials: M.D.)
- 📅 Date (relative: "Il y a 2 mois")

**Source:**
- Google My Business API (si possible)
- Ou: Copié manuellement dans CMS (update mensuel)

**CTA Action:**
- "Voir tous les avis Google" → Opens Google My Business in new tab
- "Laisser un avis" → Opens Google review form (logged-in state)

---

### Wireflow 3: Navigation - Sticky vs Off-Canvas

**Mobile (<640px):**

| **État** | **Comportement** |
|---------|------------------|
| **Default (top)** | Logo left + Hamburger icon right + CTA "RDV" button (small) |
| **Scroll down** | Header shrinks (smaller logo) + sticky at top + shadow |
| **Menu Open** | Off-canvas slide from right: Nav links (Services, À propos, Avis, Blog, Contact) + Large CTA Doctolib top |
| **Menu Close** | Slide out, backdrop fade |

**Desktop (>1024px):**

| **État** | **Comportement** |
|---------|------------------|
| **Default (top)** | Logo left + Nav links center + CTA "Prendre RDV" right |
| **Scroll down** | Sticky top, background solid (vs transparent), subtle shadow |
| **Hover links** | Underline animation (teal) |

---

### Wireflow 4: Form Contact - Email vs Doctolib

**Scenario A: User remplit form contact**

1. User entre: Name, Phone, Message
2. Clique "Envoyer"
3. **Action backend:**
   - Send email to: `justine@batignolles-kine.fr` (ou autre)
   - Auto-reply to user: "Merci ! Nous vous répondrons sous 24h. Ou réservez directement via Doctolib: [lien]"
4. **UI:** Success message + CTA "Ou réserver maintenant sur Doctolib"

**Scenario B: User clique CTA Doctolib direct**

1. Skip form
2. Open Doctolib immediately
3. **Conversion rate:** Expected higher (moins de friction)

**Recommandation UX:**
- Primary path = Doctolib direct (button above form)
- Secondary path = Form contact (pour questions spécifiques)
- Form should NOT be required to book

---

## 4. INTERACTION PATTERNS

### 4.1 Button States (CTA Doctolib)

| **State** | **Visual** | **Behavior** |
|-----------|-----------|--------------|
| **Default** | Background: Teal #2180a3, Text: White, Padding: 12px 24px, Radius: 8px, Shadow: subtle | - |
| **Hover** | Background: Darker teal (#1a6a8a), Shadow: medium, Cursor: pointer | Transition: 0.2s ease |
| **Active (click)** | Background: Even darker (#14566f), Scale: 0.98 | - |
| **Focus (keyboard)** | Outline: 3px teal, Offset: 2px | Accessible keyboard nav |
| **Disabled** | Background: Gray #A7A9A9, Opacity: 0.5, Cursor: not-allowed | Example: form loading |
| **Loading** | Background: Teal, Spinner icon (white), Text: "Connexion..." | During form submit or redirect |

### 4.2 Form Validation

**Strategy:** Real-time validation (on blur)

| **Field** | **Validation** | **Error State** |
|-----------|---------------|-----------------|
| **Name** | Required, min 2 chars | "Veuillez entrer votre nom" (below input, red text, red border) |
| **Phone** | Required, format FR (06/07 or 01) | "Format invalide (ex: 06 12 34 56 78)" |
| **Email** (si présent) | Optional, but if filled: valid format | "Email invalide" |
| **Message** | Optional | - |

**Submit behavior:**
- If errors → Block submit + Focus first error field + Shake animation
- If valid → Show loading state + Submit

### 4.3 Modal/Popup Behavior

**Use cases:**
- Avis Google (optional: click review → full review in modal)
- Contact form success
- Cookie consent (legal)

**Modal Pattern:**
- Overlay: Dark backdrop (rgba(0,0,0,0.5))
- Modal: White card, centered, max-width 600px, padding 24px, radius 12px
- Close: X icon top-right + ESC key + Click outside to close
- Focus trap: Tab navigation contained in modal
- Scroll: Body scroll locked when modal open

### 4.4 Scroll Behavior

| **Effect** | **Where** | **Behavior** |
|-----------|----------|--------------|
| **Fade-in on scroll** | Service cards, Review cards | Opacity 0 → 1, translateY(20px) → 0, trigger when 80% in viewport |
| **Sticky header** | Navigation | Position sticky top: 0, shadow appears on scroll |
| **Parallax (optional)** | Hero background image | Slower scroll speed (subtle, not jarring) |
| **Smooth scroll** | Anchor links (ex: "En savoir plus" → Services) | `scroll-behavior: smooth` |

---

## 5. MOBILE-FIRST CHECKLIST

### ✅ Core UX Requirements

- [x] **CTA Doctolib visible sans scroll** (hero section, above fold 375px viewport)
- [x] **Services lisibles une colonne** (stack cards vertically, full-width)
- [x] **Avis défilables horizontalement** (carousel swipe, touch-friendly)
- [x] **Tap targets min 48x48px** (all buttons, links, form inputs)
- [x] **Texte lisible sans zoom** (min 16px body, 24px+ headlines)
- [x] **Form inputs larges** (min height 48px, padding 12px, not cramped)

### ✅ Technical Requirements

- [x] **Viewport meta tag:** `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [x] **Touch optimization:** No hover-only interactions (all hover states have tap equivalent)
- [x] **Orientation support:** Both portrait + landscape (responsive)
- [x] **iOS Safari safe areas:** Padding for notch (iPhone X+)
- [x] **Android Chrome bottom bar:** Account for address bar height changes

### ✅ Performance

- [x] **Fast First Contentful Paint:** Hero image optimized (<200KB), lazy load below fold
- [x] **No layout shift:** Reserve space for images (aspect ratio boxes)
- [x] **Touch delay removed:** `touch-action: manipulation` on buttons (no 300ms delay)

### ✅ Accessibility (Mobile)

- [x] **Focus indicators visible** (3px teal outline)
- [x] **Labels for all inputs** (not placeholder-only)
- [x] **Error messages clear** (below input, red, with icon)
- [x] **Screen reader friendly:** Semantic HTML (`<nav>`, `<section>`, `<button>`)
- [x] **Keyboard nav:** Tab order logical (header → hero CTA → services → etc.)

### ✅ Content Prioritization (Mobile)

**Above fold (375x667px - iPhone SE):**
1. Logo + Menu icon
2. Hero headline (2 lines max)
3. Sub-headline (1 line)
4. CTA "Prendre RDV" button
5. Trust badges (tiny icons: ⭐4.8 | ✅ Conventionnée)

**Below fold (scroll):**
1. Services (3 cards, stack)
2. Practitioner (photo + bio collapsed)
3. Reviews (carousel)
4. FAQ (accordion, first 3 visible)
5. Contact (CTA Doctolib + phone + address)

---

## 6. UX DECISION RATIONALE

### Why Mobile-First?
- **Data:** 70% trafic mobile attendu (patients cherchent kiné en déplacement, post-blessure)
- **Context:** Use cases urgents (douleur → recherche immédiate sur smartphone)

### Why Sticky CTA Doctolib?
- **Conversion:** Toujours accessible = moins de friction
- **Benchmark:** Sites médicaux best-practice (Doctolib, Docavenue, etc.)

### Why Carousel for Reviews (Mobile)?
- **Space:** 1 review bien lisible > 3 reviews cramped
- **Engagement:** Swipe = interaction (plus engaging que scroll)

### Why Accordion for FAQ?
- **Scanability:** User voit toutes les questions d'un coup
- **Mobile-friendly:** Pas de scroll infini

### Why Real-time Validation (Form)?
- **UX:** Feedback immédiat (user sait si erreur avant submit)
- **Accessibility:** Screen readers annoncent erreurs

---

## 7. NEXT STEPS (POUR UI DESIGNER)

L'UX Designer recommande au UI Designer de :

1. **Créer design system tokens** alignés avec cette arborescence
2. **Prioritiser composants** :
   - CTA Button (primary, secondary)
   - Review Card
   - Service Card
   - FAQ Accordion
   - Form Input + Label
3. **Valider responsive breakpoints** (mobile 375px, tablet 768px, desktop 1280px)
4. **Designer hero section** en priorité (impact conversion max)
5. **Accessibilité:** Color contrast checker, focus states, tap target sizing

---

## 8. SUCCESS METRICS (KPIs UX)

| **Metric** | **Target** | **Tool** |
|-----------|-----------|----------|
| **Hero CTA Click Rate** | >35% | Google Analytics (event tracking) |
| **Time to First CTA Click** | <8 secondes (median) | Hotjar, GA |
| **Mobile Bounce Rate** | <45% | GA |
| **Doctolib Conversion** | >25% (landing → Doctolib) | UTM tracking |
| **Review Section Engagement** | >60% scroll reach | GA scroll depth |
| **Form Completion Rate** | >70% (si form utilisé) | GA events |

---

## 📝 CONCLUSION

Cette spécification UX pose les fondations d'un site **conversion-focused, mobile-first, patient-centric**.

**Principes clés respectés :**
✅ **Rapidité** : CTA Doctolib omniprésent  
✅ **Confiance** : Trust signals (avis, credentials) early  
✅ **Clarté** : Arborescence simple, navigation intuitive  
✅ **Accessibilité** : Mobile-first checklist + a11y patterns  

**Livrables prêts pour :**
- UI Designer → Design system + composants
- Copywriter → Textes par section
- Developer → Architecture technique

---

**Document créé par:** UX-Designer Agent  
**Pour validation par:** PM-Orchestrator  
**Prochaine étape:** UI-Designer (design system + composants visuels)
