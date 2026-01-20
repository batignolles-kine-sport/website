# 📚 Index des Guides - Documentation Complète

**Répertoire** : `export_back-end/guides/`  
**Objectif** : Guides pratiques pour utiliser et optimiser votre site

---

## 📖 Guides Disponibles

### 1. Guide de Rédaction Blog

**Fichier** : [`01_GUIDE_REDACTION_BLOG.md`](file:///Users/matthieu/Offline%20documents/UNMISSABL/CLIENTS/BKS/bks-web/export_back-end/guides/01_GUIDE_REDACTION_BLOG.md)

**Contenu** :

- Structure immuable des articles (6 sections)
- Méthode P.E.P pour introductions
- Règles de style et ton
- Frontmatter YAML
- Optimisation SEO & E-E-A-T
- Checklist qualité avant publication
- Exemples de structures (Guide, Actualité)
- Recommandations longueur par type

**Pour qui** : Rédacteurs, content managers, IA de génération

**Utilisation** :

- Template pour tous nouveaux articles
- Prompt système pour génération IA
- Reference pour maintenir qualité

---

### 2. Guide Schema Markup

**Fichier** : [`02_GUIDE_SCHEMA_MARKUP.md`](file:///Users/matthieu/Offline%20documents/UNMISSABL/CLIENTS/BKS/bks-web/export_back-end/guides/02_GUIDE_SCHEMA_MARKUP.md)

**Contenu** :

- Explication Schema Markup & JSON-LD
- Types de schemas inclus (LocalBusiness, Article, FAQ, Breadcrumb)
- Configuration requise (infos business, GPS, type)
- Validation (Rich Results Test, Schema Validator)
- Structures JSON attendues
- Bénéfices SEO (Rich Snippets, Knowledge Graph)
- Maintenance (avis, horaires, updates)
- Troubleshooting

**Pour qui** : Développeurs, SEO managers

**Utilisation** :

- Comprendre structured data
- Configurer `structuredData.ts`
- Valider implémentation

---

### 3. Checklist SEO

**Fichier** : [`03_CHECKLIST_SEO.md`](file:///Users/matthieu/Offline%20documents/UNMISSABL/CLIENTS/BKS/bks-web/export_back-end/guides/03_CHECKLIST_SEO.md)

**Contenu** :

- **Optimisations techniques** : métadonnées, canonical, favicons, OG, Twitter Cards
- **Structured Data** : schemas et validation
- **Contenu** : hiérarchie titres, optimisation texte, images
- **Performance** : compression, cache, chargement
- **Sécurité** : headers, HTTPS, HSTS
- **SEO Local** : Google My Business, NAP, geo
- **Indexation** : robots.txt, sitemap, Search Console
- **Blog** : structure articles, frontmatter, SEO
- **Validation** : tests automatiques et manuels
- **Monitoring** : KPIs, outils

**Pour qui** : Équipe complète (dev, SEO, content)

**Utilisation** :

- Checklist pré-lancement
- Audit SEO régulier
- Validation post-déploiement

---

## 🎯 Quand Utiliser Chaque Guide

### Au Démarrage du Projet

1. ✅ **Checklist SEO** - S'assurer que tout est configuré
2. ✅ **Schema Markup** - Implémenter structured data
3. ℹ️ **Rédaction Blog** - Comprendre le système

### Production de Contenu

1. 📝 **Rédaction Blog** - Créer nouveaux articles
2. ✅ **Checklist SEO** (section Blog) - Valider avant publication

### Maintenance

1. 🔍 **Schema Markup** - Mettre à jour infos business
2. ✅ **Checklist SEO** (Monitoring) - Audits réguliers

---

## 📊 Quick Reference

| Guide | Longueur | Difficulté | Fréquence |
|-------|----------|------------|-----------|
| Rédaction Blog | ~6 pages | ⭐⭐ Moyenne | Par article |
| Schema Markup | ~8 pages | ⭐⭐⭐ Avancée | Setup initial + updates |
| Checklist SEO | ~10 pages | ⭐⭐ Moyenne | Pré-launch + audits |

---

## 🔗 Liens avec Templates

Ces guides utilisent les fichiers templates :

| Guide | Templates Liés |
|-------|----------------|
| Rédaction Blog | `templates/exemple-article.md` |
| | `templates/src/utils/seoConfig.ts` |
| Schema Markup | `templates/src/utils/structuredData.ts` |
| Checklist SEO | `templates/public/robots.txt` |
| | `templates/public/admin/config.yml` |
| | `templates/config/.env.local.template` |

---

## ✅ Checklist d'Utilisation Guides

### Avant de Lancer le Site

- [ ] Lire **Checklist SEO** complète
- [ ] Suivre **Schema Markup** pour configuration
- [ ] Compléter tous les TODO dans `structuredData.ts`
- [ ] Valider avec Rich Results Test
- [ ] Créer `og-image.jpg` (1200x630px)
- [ ] Générer favicons

### Avant Chaque Article

- [ ] Relire **Rédaction Blog** (méthode P.E.P)
- [ ] Utiliser structure 6 sections
- [ ] Ajouter SEO config dans `seoConfig.ts`
- [ ] Vérifier checklist qualité (section 6)
- [ ] Optimiser images avec alt text
- [ ] Minimum 500 mots

### Audit Trimestriel

- [ ] Revoir **Checklist SEO** complète
- [ ] Tester tous liens (Rich Results, PageSpeed, etc.)
- [ ] Mettre à jour KPIs
- [ ] Vérifier Search Console pour erreurs
- [ ] Optimiser pages avec faibles performances

---

## 🆘 Support & Questions

**Questions techniques** : Voir `GUIDE_TECHNIQUE_ANTIGRAVITY.md`

**Architecture** : Voir `README_COMPREHENSION_GLOBALE.md`

**Référence rapide** : Voir `REFERENCE_SYSTEMES.md`

**Templates** : Voir `templates/README_TEMPLATES.md`

---

## 📝 Mise à Jour des Guides

Ces guides doivent être mis à jour :

**Quand** :

- Changement majeur Google (algorithme, guidelines)
- Nouvelle feature Schema.org
- Évolution best practices SEO
- Feedback utilisateurs sur clarté

**Par qui** :  
L'équipe technique ou SEO responsable du projet

**Versioning** :  
Ajouter la date de dernière modification en bas de chaque guide

---

## 🎓 Ressources Complémentaires

**Documentation Officielle** :

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Web.dev](https://web.dev/)

**Outils** :

- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema Validator](https://validator.schema.org/)

**Dans ce Projet** :

- `SEO_GUIDE.md` (dans projet BKS original)
- `GOOGLE_MY_BUSINESS.md` (dans projet BKS original)

---

**Index créé le** : 14 janvier 2026  
**Guides inclus** : 3  
**Pages totales** : ~24 pages de documentation  
**Statut** : ✅ Prêt à utiliser

---

## Navigation Rapide

- [← Retour export_back-end/](file:///Users/matthieu/Offline%20documents/UNMISSABL/CLIENTS/BKS/bks-web/export_back-end/)
- [Templates →](file:///Users/matthieu/Offline%20documents/UNMISSABL/CLIENTS/BKS/bks-web/export_back-end/templates/)
- [Documentation →](file:///Users/matthieu/Offline%20documents/UNMISSABL/CLIENTS/BKS/bks-web/export_back-end/README.md)
