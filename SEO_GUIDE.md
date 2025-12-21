# 📋 Guide SEO pour Batignolles Kiné Sport

## 🎯 Vue d'ensemble

Ce projet utilise un **système SEO complet et automatisé** pour garantir :

1. ✅ **Titres et meta descriptions optimisés** pour chaque page
2. ✅ **Structured Data (JSON-LD)** pour les rich snippets Google
3. ✅ **Sitemap dynamique** contenant toutes les pathologies
4. ✅ **robots.txt intelligent** avec protection IA éthique
5. ✅ **Blog articles avec SEO science-based**

---

## 📄 Structure des fichiers SEO

### 1. **`src/utils/seoConfig.ts`** - Configuration centralisée
- 📝 Base de données de tous les articles blog
- 🔍 Titres optimisés pour chaque pathologie
- 📊 Meta descriptions adaptées
- 🏷️ Keywords et catégories

**Utilisation :**
```typescript
import { getBlogSEOTitle, getBlogSEODescription } from '@/utils/seoConfig';

const title = getBlogSEOTitle('tendinopathie-rotulienne', fallbackTitle);
const desc = getBlogSEODescription('tendinopathie-rotulienne', fallbackDesc);
```

### 2. **`src/utils/structuredData.ts`** - Schemas JSON-LD
Génère les structures de données pour Google :
- LocalBusiness (affiche étoiles ⭐)
- BlogPosting (articles)
- FAQPage (questions fréquentes)
- BreadcrumbList (navigation)

**Utilisation :**
```typescript
import { generateLocalBusinessSchema, generateArticleSchema } from '@/utils/structuredData';

const schema = generateLocalBusinessSchema();
```

### 3. **`src/pages/Home.tsx`** - Page d'accueil
- ✅ Titre : "Batignolles Kiné Sport | Rééducation, Post-Op, Réathlétisation - Paris 17"
- ✅ Meta description dynamique (adaptée au contexte)
- ✅ LocalBusiness + FAQ schemas
- ✅ 5 étoiles ⭐ affichées sur Google

### 4. **`src/pages/BlogPost.tsx`** - Articles blog
- ✅ Titre SEO généré automatiquement depuis `seoConfig.ts`
- ✅ Meta description optimisée
- ✅ Article + Breadcrumb schemas
- ✅ Structure h1/h2/h3 respectée

### 5. **`public/robots.txt`** - Directives crawling
- ✅ Google/Bing : priorité absolue (Crawl-delay: 0)
- ✅ Perplexity/Claude : autorisés (gain de visibilité IA)
- ✅ Bots agressifs (MJ12bot, Ahrefs) : rate limit 30s
- ✅ Scraping malveillant (CCBot) : bloqué

### 6. **`public/sitemap.xml`** - Sitemap dynamique
- ✅ 5 pages statiques
- ✅ 30 articles pathologies auto-détectés
- ✅ Dates de modification réelles
- ✅ Priorités intelligentes

---

## 🚀 Ajouter un nouvel article blog

### Étape 1 : Créer le fichier Markdown
Créez `src/posts/pathologies/ma-nouvelle-pathologie.md`

### Étape 2 : Ajouter la configuration SEO
Modifiez `src/utils/seoConfig.ts` et ajoutez :

```typescript
'ma-nouvelle-pathologie': {
  slug: 'ma-nouvelle-pathologie',
  title: 'Ma Nouvelle Pathologie : Traitement, Exercices, Récupération',
  metaDescription: 'Votre description courte et percutante (155-160 caractères)',
  excerpt: 'Résumé court pour les listes',
  category: 'sport', // ou 'postop', 'femme', 'prevention', 'general'
  keywords: ['keyword1', 'keyword2', 'keyword3'],
},
```

### Étape 3 : Build et vérification
```bash
npm run build
# Vérifiez que le sitemap inclut votre nouvel article
cat public/sitemap.xml | grep "ma-nouvelle-pathologie"
```

**C'est tout !** ✨ Le titre, la description et les schemas sont gérés automatiquement.

---

## 📊 Stratégie de contenu

### Homepage
- **Titre** : Brand-first + bénéfices (Rééducation, Post-Op, Réathlétisation)
- **Meta description** : Inclusive, pas de jargon marketing
- **Schemas** : LocalBusiness + FAQ

### Articles Blog
- **Titre** : "Pathologie : Cause, Traitement, Retour" (75-80 car)
- **Meta description** : Répond à la question utilisateur (155-160 car)
- **Schemas** : BlogPosting + Breadcrumb
- **Stratégie** : Éducation-first (70%) + CTA discret (30%)

### Contact / Équipe
- **Titres** : Incluent "Batignolles Kiné Sport"
- **Schemas** : LocalBusiness pour localité

---

## 🔍 Monitoring SEO

### Google Search Console
1. Allez dans **Performance**
2. Filtrez par query "kiné paris", "rééducation post-op", etc.
3. Notez : **Position moyenne**, **CTR**, **Impressions**
4. Objectif : Position < 1.5, CTR > 7%

### Métriques clés
| Métrique | Objectif | Outils |
|----------|----------|--------|
| **Position moyenne** | < 1.5 | GSC |
| **CTR** | > 7% | GSC |
| **Rich Snippets** | 5 étoiles ⭐ | SERP |
| **Crawl Budget** | > 90% pages indexées | GSC |

---

## 💡 Bonnes pratiques (niveau Apple)

✅ **DO :**
- Titres concis et bénéfice-focused
- Meta descriptions percutantes et uniques
- H1 unique par page
- Images optimisées avec alt text
- URLs descriptives et courtes
- Contenu original et science-based

❌ **DON'T :**
- Keyword stuffing
- Titres trop longs (> 60 car)
- Descriptions dupliquées
- Jargon médical pour grand public
- Contenu thin (< 300 mots)
- Liens cassés

---

## 📱 Checklist avant publication

- [ ] Titre SEO ajouté dans `seoConfig.ts`
- [ ] Meta description (155-160 char) optimisée
- [ ] H1 unique et clair
- [ ] Images avec alt text descriptif
- [ ] URL courte et slug readable
- [ ] Contenu > 500 mots
- [ ] Liens internes vers autres articles
- [ ] CTA vers Doctolib discret
- [ ] Build réussi : `npm run build`
- [ ] Sitemap inclut l'article : `grep "slug" public/sitemap.xml`

---

## 🛠️ Commandes utiles

```bash
# Build + génère sitemap
npm run build

# Vérifier le sitemap
cat public/sitemap.xml

# Vérifier robots.txt
cat public/robots.txt

# Lancer le dev server
npm run dev
```

---

**Dernière mise à jour** : 21 décembre 2025
**Responsable** : Équipe Batignolles Kiné Sport
**Niveau d'exigence** : Apple ⭐⭐⭐⭐⭐
