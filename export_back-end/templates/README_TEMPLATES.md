# 📦 Templates - Fichiers Backend Réutilisables

Ce répertoire contient **tous les fichiers backend nécessaires** pour créer un nouveau site avec la même infrastructure que BKS, mais anonymisés et prêts à adapter.

---

## 📁 Structure

```
templates/
├── scripts/                  # Scripts de génération
│   ├── generate-blog-metadata.js
│   └── generate-sitemap.js
│
├── src/
│   ├── utils/               # Utilitaires backend
│   │   ├── cloudinary.ts
│   │   ├── markdownRenderer.ts
│   │   ├── seoConfig.ts
│   │   └── structuredData.ts
│   └── styles/              # Design System CSS
│       ├── design-tokens.css
│       ├── components.css
│       ├── fonts.css
│       └── main.css
│
├── public/
│   ├── admin/               # Decap CMS
│   │   ├── config.yml
│   │   └── index.html
│   └── robots.txt
│
└── config/                  # Fichiers de configuration
    ├── .env.local.template
    ├── package.json.template
    ├── postcss.config.js
    ├── tsconfig.json
    └── .npmrc
```

---

## ✅ Fichiers Prêts à l'Emploi (Copier Tel Quel)

Ces fichiers peuvent être copiés directement sans modification :

### Utilitaires

- ✓ `src/utils/cloudinary.ts` - Helper Cloudinary
- ✓ `src/utils/markdownRenderer.ts` - Convertisseur Markdown → HTML

### Configuration Build

- ✓ `config/postcss.config.js`
- ✓ `config/tsconfig.json`
- ✓ `config/.npmrc`

### CMS

- ✓ `public/admin/index.html` - Interface Decap CMS

---

## ⚠️ Fichiers À Adapter (Contiennent des TODO)

Ces fichiers contiennent des **commentaires `TODO:`** indiquant exactement quoi modifier :

### Scripts (Chemins et Domaine)

- `scripts/generate-blog-metadata.js`
  - TODO: Adapter chemins vers articles
  - TODO: Remplacer image fallback
  - TODO: Adapter nom auteur/équipe

- `scripts/generate-sitemap.js`
  - TODO: Remplacer DOMAIN
  - TODO: Adapter pages statiques
  - TODO: Adapter routes services

### SEO & Structured Data

- `src/utils/seoConfig.ts`
  - TODO: **Supprimer exemple et ajouter vos articles**
  - Chaque article nécessite: title, metaDescription, category, keywords

- `src/utils/structuredData.ts`
  - TODO: **Remplacer TOUTES les infos business**
  - Nom, adresse, téléphone, email, coordonnées GPS
  - Horaires, réseaux sociaux, domaine d'expertise

### CMS Configuration

- `public/admin/config.yml`
  - TODO: **Changer repo GitHub**
  - TODO: Adapter catégories et types
  - TODO: Adapter champs selon vos besoins

### Autres

- `public/robots.txt`
  - TODO: Remplacer domaine dans Sitemap

### Environnement

- `config/.env.local.template`
  - TODO: Créer compte Cloudinary
  - TODO: Remplir credentials

---

## 🎨 Fichiers CSS (Structure à Garder, Couleurs à Changer)

Les fichiers CSS utilisent un **Design System 3 niveaux** :

### `src/styles/design-tokens.css`

**Action requise** : Remplacer les variables de couleurs

```css
/* TODO: Changer ces couleurs selon votre DA */
--primitive-color-olive-500: #404134;  /* → Votre couleur primaire */
--primitive-color-sage-400: #73755c;   /* → Votre couleur secondaire */
/* etc. */
```

**À conserver** : Structure, noms de variables, spaces, shadows

### `src/styles/components.css`

**Action** : Utiliser tel quel (référence les tokens)

### `src/styles/fonts.css`

**Action** : Remplacer par vos @font-face si fonts différentes

### `src/styles/main.css`

**Action** : Utiliser tel quel

---

## 📝 Comment Utiliser Ces Templates

### 1. Copier les Fichiers

```bash
# Dans votre nouveau projet
cp -r export_back-end/templates/scripts/ ./
cp -r export_back-end/templates/src/ ./
cp -r export_back-end/templates/public/ ./
cp export_back-end/templates/config/* ./
```

### 2. Renommer .template

```bash
mv package.json.template package.json
mv .env.local.template .env.local
```

### 3. Rechercher Tous les TODO

```bash
# Lister tous les TODO dans le projet
grep -r "TODO:" . --exclude-dir=node_modules
```

### 4. Compléter Fichier par Fichier

Suivre l'ordre suivant :

1. **`.env.local`** - Credentials Cloudinary
2. **`package.json`** - Nom du projet
3. **`public/admin/config.yml`** - Repo GitHub, catégories
4. **`src/utils/structuredData.ts`** - Infos business complètes
5. **`src/utils/seoConfig.ts`** - Vos articles avec SEO
6. **`scripts/generate-sitemap.js`** - Domaine et pages
7. **`scripts/generate-blog-metadata.js`** - Nom auteur
8. **`src/styles/design-tokens.css`** - Vos couleurs
9. **`public/robots.txt`** - Votre domaine

---

## 🔍 Format des TODO

Tous les TODO suivent ce format :

```javascript
// TODO: Description claire de ce qu'il faut faire
const VARIABLE = '[PLACEHOLDER]';  // À remplacer
```

Les placeholders sont entre crochets : `[VOTRE-DOMAINE]`, `[NOM_ENTREPRISE]`, etc.

---

## 📚 Fichiers Non Inclus (À Créer)

Ces fichiers doivent être créés pour votre nouveau projet :

### Configuration Build

- `vite.config.ts` - Voir `GUIDE_TECHNIQUE_ANTIGRAVITY.md` phase 10
- `tailwind.config.js` - Voir guide
- `netlify.toml` - Voir guide
- `src/routes.ts` - Définir vos routes

### Frontend

- Tous les composants (`src/components/`)
- Toutes les pages (`src/pages/`)
- `src/App.tsx`
- `src/main.tsx` (adapter)
- `index.html` (adapter)

### Content

- Articles `.md` dans `src/posts/pathologies/`
- Images dans `public/images/`
- Favicons

### Constantes

- `src/utils/constants.ts` (vos constantes métier)

---

## ⚡ Quick Start

1. **Copier templates** dans nouveau projet
2. **Installer dépendances** : `npm install`
3. **Rechercher TODO** : `grep -r "TODO:" .`
4. **Compléter fichiers** un par un
5. **Créer article test** : `src/posts/pathologies/test.md`
6. **Lancer dev** : `npm run dev`
7. **Vérifier build** : `npm run build`

---

## 🎯 Résumé des Modifications

| Fichier | Action | Difficulté |
|---------|--------|------------|
| `.env.local` | Compléter credentials | Facile ⭐ |
| `package.json` | Changer nom | Facile ⭐ |
| `config.yml` | Repo + catégories | Facile ⭐ |
| `structuredData.ts` | Infos business | Moyenne ⭐⭐ |
| `seoConfig.ts` | Ajouter articles | Moyenne ⭐⭐ |
| `generate-sitemap.js` | Pages + domaine | Facile ⭐ |
| `design-tokens.css` | Couleurs DA | Moyenne ⭐⭐ |

**Temps estimé** : 2-3h pour compléter tous les TODO

---

## 🆘 Aide

- **Liste complète TODO** : `FICHIERS_A_REUTILISER.md`
- **Guide implémentation** : `GUIDE_TECHNIQUE_ANTIGRAVITY.md`
- **Référence rapide** : `REFERENCE_SYSTEMES.md`

---

**Créé le** : 14 janvier 2026  
**Templates basés sur** : BKS-Web v1.0  
**Statut** : Prêt à utiliser ✅
