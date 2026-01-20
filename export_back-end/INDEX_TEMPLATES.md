# 📦 Index des Templates - Guide Complet

**Répertoire** : `export_back-end/templates/`  
**Statut** : Prêt à utiliser ✅  
**Dernière mise à jour** : 14 janvier 2026

---

## 📊 Vue d'Ensemble

Ce répertoire contient **18 fichiers backend** anonymisés et prêts à être réutilisés pour votre nouveau projet SS2I.

### Statistiques

- **14 fichiers** à adapter (avec TODO)
- **4 fichiers** à copier tel quel
- **89 TODO** au total dans le code
- **Temps estimé** : 2-3h pour tout compléter

---

## 📁 Inventaire Complet des Fichiers

### 1. Scripts (2 fichiers)

| Fichier | Taille | Action | TODO |
|---------|--------|--------|------|
| `scripts/generate-blog-metadata.js` | ~5 KB | Adapter | 7 TODO |
| `scripts/generate-sitemap.js` | ~4 KB | Adapter | 8 TODO |

**Modifications** :

- Chemins vers articles
- Domaine du site
- Nom auteur/équipe
- Pages statiques

---

### 2. Utilitaires (4 fichiers)

| Fichier | Taille | Action | TODO |
|---------|--------|--------|------|
| `src/utils/cloudinary.ts` | ~4 KB | ✓ Copier | 0 |
| `src/utils/markdownRenderer.ts` | ~10 KB | ✓ Copier | 0 |
| `src/utils/seoConfig.ts` | ~2 KB | Adapter | 12 TODO |
| `src/utils/structuredData.ts` | ~5 KB | Adapter | 35 TODO |

**Modifications** :

- **seoConfig.ts** : Remplacer exemple par vos articles
- **structuredData.ts** : Toutes les infos business (nom, adresse, tel, email, geo, etc.)

---

### 3. Styles (4 fichiers CSS)

| Fichier | Taille | Action | Adaptation Requise |
|---------|--------|--------|-------------------|
| `src/styles/design-tokens.css` | ~19 KB | Adapter | Couleurs uniquement |
| `src/styles/components.css` | ~3 KB | ✓ Copier | Non |
| `src/styles/fonts.css` | ~2 KB | Adapter | Si changement font |
| `src/styles/main.css` | ~2 KB | ✓ Copier | Non |

**Modifications** :

- **design-tokens.css** : Remplacer variables couleurs (`--primitive-color-*`)
- **fonts.css** : Remplacer @font-face si fonts différentes

---

### 4. CMS Decap (2 fichiers)

| Fichier | Taille | Action | TODO |
|---------|--------|--------|------|
| `public/admin/config.yml` | ~2 KB | Adapter | 15 TODO |
| `public/admin/index.html` | ~0.5 KB | ✓ Copier | 0 |

**Modifications** :

- Repo GitHub
- Catégories et types d'articles
- Champs formulaire selon besoins

---

### 5. SEO & Indexation (1 fichier)

| Fichier | Taille | Action | TODO |
|---------|--------|--------|------|
| `public/robots.txt` | ~0.5 KB | Adapter | 2 TODO |

**Modifications** :

- URL du sitemap

---

### 6. Configuration (5 fichiers)

| Fichier | Taille | Action | TODO |
|---------|--------|--------|------|
| `config/.env.local.template` | ~0.5 KB | Adapter | 5 TODO |
| `config/package.json.template` | ~1 KB | Adapter | 1 TODO |
| `config/postcss.config.js` | ~0.1 KB | ✓ Copier | 0 |
| `config/tsconfig.json` | ~1 KB | ✓ Copier | 0 |
| `config/.npmrc` | ~0.1 KB | ✓ Copier | 0 |

**Modifications** :

- **.env.local** : Credentials Cloudinary
- **package.json** : Nom du projet

---

### 7. Documentation & Exemples

| Fichier | Type | Description |
|---------|------|-------------|
| `README_TEMPLATES.md` | Doc | Guide d'utilisation des templates |
| `exemple-article.md` | Exemple | Template article Markdown |

---

## 🎯 Checklist d'Utilisation

### Phase 1 : Copie Initiale

- [ ] Copier `templates/` dans votre nouveau projet
- [ ] Renommer `.template` en fichiers réels
- [ ] Installer dépendances : `npm install`

### Phase 2 : Configuration Rapide

- [ ] **`.env.local`** (5 min)
  - [ ] Créer compte Cloudinary
  - [ ] Remplir CLOUD_NAME, API_KEY, API_SECRET
- [ ] **`package.json`** (1 min)
  - [ ] Changer "name"

### Phase 3 : CMS & Content

- [ ] **`public/admin/config.yml`** (15 min)
  - [ ] Changer repo GitHub
  - [ ] Adapter catégories
  - [ ] Adapter types
  - [ ] Vérifier champs
- [ ] **Créer 1 article test** (10 min)
  - [ ] Copier `exemple-article.md`
  - [ ] Adapter et placer dans `src/posts/pathologies/`

### Phase 4 : SEO Configuration

- [ ] **`src/utils/structuredData.ts`** (30 min)
  - [ ] Nom entreprise
  - [ ] Description
  - [ ] Adresse complète
  - [ ] Coordonnées GPS
  - [ ] Téléphone & email
  - [ ] URL & domaine
  - [ ] Réseaux sociaux
  - [ ] Horaires
  - [ ] Domaines expertise
- [ ] **`src/utils/seoConfig.ts`** (variable)
  - [ ] Supprimer exemple
  - [ ] Ajouter vos articles avec SEO

### Phase 5 : Génération & Build

- [ ] **`scripts/generate-sitemap.js`** (10 min)
  - [ ] Remplacer DOMAIN
  - [ ] Adapter staticPages[]
  - [ ] Adapter servicePaths si applicable
- [ ] **`scripts/generate-blog-metadata.js`** (5 min)
  - [ ] Adapter nom auteur
  - [ ] Vérifier chemins
- [ ] **`public/robots.txt`** (2 min)
  - [ ] Remplacer domaine dans Sitemap

### Phase 6 : Design System

- [ ] **`src/styles/design-tokens.css`** (60 min)
  - [ ] Définir palette couleurs
  - [ ] Remplacer toutes `--primitive-color-*`
  - [ ] Tester cohérence
- [ ] **`src/styles/fonts.css`** (15 min si changement)
  - [ ] Remplacer @font-face si nécessaire

### Phase 7 : Vérification

- [ ] Lancer `grep -r "TODO:" .` pour vérifier
- [ ] Test dev : `npm run dev`
- [ ] Test build : `npm run build`
- [ ] Vérifier `sitemap.xml` généré
- [ ] Vérifier `blog-metadata.json` généré

---

## 🔢 Statistiques par Action

### À Copier Tel Quel (4 fichiers)

```
src/utils/cloudinary.ts
src/utils/markdownRenderer.ts
public/admin/index.html
config/postcss.config.js
config/tsconfig.json
config/.npmrc
```

### À Adapter - Facile ⭐ (4 fichiers, ~20 min)

```
.env.local (5 TODO)
package.json (1 TODO)
robots.txt (2 TODO)
generate-blog-metadata.js (partie chemins)
```

### À Adapter - Moyen ⭐⭐ (3 fichiers, ~60 min)

```
config.yml (15 TODO)
generate-sitemap.js (8 TODO)
seoConfig.ts (12 TODO)
```

### À Adapter - Important ⭐⭐⭐ (2 fichiers, ~90 min)

```
structuredData.ts (35 TODO - infos business complètes)
design-tokens.css (couleurs selon DA)
```

---

## 📝 Ordre Recommandé de Complétion

1. **`.env.local`** (obligatoire pour dev)
2. **`package.json`** (nom projet)
3. **`structuredData.ts`** (infos business)
4. **`config.yml`** (CMS)
5. **Créer 1 article test**
6. **`seoConfig.ts`** (SEO article test)
7. **`generate-sitemap.js`** (pages)
8. **`generate-blog-metadata.js`** (auteur)
9. **`robots.txt`** (domaine)
10. **`design-tokens.css`** (couleurs)
11. **Test final**

**Temps total** : ~3h pour backend complet

---

## 🎨 Modifications Design System

### Couleurs à Remplacer (design-tokens.css)

```css
/* Primaires */
--primitive-color-olive-500: #404134;  → VOTRE_PRIMAIRE
--primitive-color-sage-400: #73755c;   → VOTRE_SECONDAIRE

/* Neutrals */
--primitive-color-neutral-900: #0a0f0d; → VOTRE_NOIR
--primitive-color-neutral-50: #f8f9f8;  → VOTRE_BLANC

/* Status */
--primitive-color-success-500: #10b981; → VOTRE_SUCCESS
--primitive-color-error-500: #ef4444;   → VOTRE_ERROR
--primitive-color-warning-500: #f59e0b; → VOTRE_WARNING
--primitive-color-info-500: #3b82f6;    → VOTRE_INFO
```

**Note** : Conserver les noms de variables, changer uniquement les valeurs hexadécimales.

---

## 🆘 Aide & Documentation

### Documentation Principale

- **README_TEMPLATES.md** : Guide d'utilisation
- **exemple-article.md** : Template article

### Documentation Projet

- **README_COMPREHENSION_GLOBALE.md** : Comprendre les systèmes
- **GUIDE_TECHNIQUE_ANTIGRAVITY.md** : Guide implémentation complet
- **REFERENCE_SYSTEMES.md** : Référence rapide
- **FICHIERS_A_REUTILISER.md** : Checklist détaillée

### Commandes Utiles

```bash
# Lister tous les TODO
grep -r "TODO:" . --exclude-dir=node_modules

# Compter les TODO restants
grep -r "TODO:" . --exclude-dir=node_modules | wc -l

# TODO par fichier
grep -r "TODO:" . --exclude-dir=node_modules --include="*.js" --include="*.ts" --include="*.yml" | sort
```

---

## ✅ Validation Finale

Avant de considérer le backend complété, vérifier :

- [ ] Aucun `[PLACEHOLDER]` restant dans le code
- [ ] Aucun TODO non résolu
- [ ] `.env.local` créé avec vraies credentials
- [ ] Au moins 1 article dans `src/posts/`
- [ ] `npm run dev` fonctionne
- [ ] `npm run build` réussit
- [ ] `sitemap.xml` généré dans `public/`
- [ ] `blog-metadata.json` généré dans `src/data/`
- [ ] Palette couleurs cohérente dans `design-tokens.css`

---

**Total fichiers** : 18  
**Total TODO** : 89  
**Temps estimé** : 2-3h  
**Difficulté** : Moyenne ⭐⭐  
**Statut** : Prêt à utiliser ✅

---

**Créé le** : 14 janvier 2026  
**Basé sur** : BKS-Web Backend Analysis  
**Version** : 1.0 Final
