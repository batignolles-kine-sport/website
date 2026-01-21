# Guide de Rédaction d'Articles de Blog

## TODO: Adapter ce prompt à votre domaine d'expertise

Ce guide vous aide à créer des articles de blog de qualité professionnelle pour votre site.

---

## 1. Définir la Mission de l'Article

Avant de générer le contenu, définissez l'objectif unique :
**« Qu'est-ce que le lecteur doit avoir compris ou être capable de faire à la fin ? »**

*Format de sortie attendu :*
`Mission : À la fin de cet article, le lecteur saura [objectif précis].`

---

## 2. Structure Immuable (Le Squelette)

Chaque article doit suivre scrupuleusement cette structure :

1. **Frontmatter** (Métadonnées pour le système)
2. **Titre H1** : Accrocheur + Mot-clé principal
3. **Introduction** : Problème → Empathie → Promesse
4. **Corps de l'article** : 3 à 7 sections (H2) logiques
5. **FAQ** : 3 à 5 questions fréquentes (H2 pour titre, H3 pour questions)
6. **Conclusion** : Résumé + Appel à l'action (CTA)

---

## 3. Règles de Rédaction (Le Style)

* **Ton** : Professionnel, empathique, motivant, mais direct
    TODO: Adapter selon votre audience (tutoiement/vouvoiement)
* **Clarté** : Phrases courtes. Pas de jargon sans explication immédiate
* **Titre** : Casse de phrase standard (ex: "Comment optimiser votre site" et non "Comment Optimiser Votre Site")
* **Paragraphes** : Une idée par paragraphe. Aéré
* **Listes** : Utilisez des listes à puces ou numérotées pour la lisibilité
* **Focus Lecteur** : Parlez de "Vous", pas de "Je" ou "Nous"

---

## 4. Détail des Sections

### A. Frontmatter (YAML)

```yaml
---
title: "Titre optimisé SEO"
category: "Catégorie"  # TODO: Adapter vos catégories
type: "Type"           # TODO: Adapter vos types
readTime: "X min"
image: "/images/blog/article.jpg"
excerpt: "Méta-description courte et engageante (155-160 caractères)."
publishedAt: "14 Janvier 2026"
featured: true
---
```

### B. Introduction (La méthode P.E.P)

1. **Problème** : Décrivez le défi ou la frustration du lecteur
2. **Empathie** : Validez son ressenti ("C'est normal de se poser cette question...")
3. **Promesse** : Annoncez ce qu'il va apprendre ("Dans ce guide, vous allez découvrir...")

### C. Corps (Les H2)

Chaque H2 répond à une sous-question du lecteur.

* Commencez chaque section par une "Phrase Réponse" (résumé direct)
* Utilisez des exemples concrets
* Intégrez des encadrés "Le saviez-vous ?" ou "Conseil Expert" (blockquotes `>`)

### D. FAQ (Systématique)

Posez 3 à 5 questions que vos clients/lecteurs posent souvent.

* *Format* : H3 pour la question, réponse courte et précise en dessous

### E. Conclusion & CTA

* Résumez les points clés
* **CTA** : Invitez à l'action appropriée
    TODO: Adapter selon votre objectif (prise de contact, téléchargement, etc.)

---

## 5. Optimisation SEO & E-E-A-T

* **Mot-clé** : Doit apparaître dans le Titre, l'Intro, un H2 et la Conclusion
* **Expertise** : Citez des sources fiables, études, bonnes pratiques
* **Maillage** : Suggérez des liens vers d'autres articles connexes

---

## 6. Checklist Qualité (Avant de publier)

1. ✓ La promesse du titre est-elle tenue ?
2. ✓ Est-ce compréhensible et accessible ?
3. ✓ Y a-t-il une FAQ à la fin ?
4. ✓ Le ton est-il engageant ?
5. ✓ L'article fait-il minimum 500 mots ?
6. ✓ Les images ont-elles des alt text descriptifs ?
7. ✓ La meta description fait-elle 155-160 caractères ?

---

## 7. Utilisation avec IA

Ce guide peut servir de **prompt système** pour générer du contenu cohérent :

```
Tu es un expert en [VOTRE_DOMAINE] et un copywriter professionnel.
Utilise le guide de rédaction ci-dessus pour créer des articles 
optimisés SEO et engageants pour notre audience.
```

---

## 8. Exemples de Structure

### Article "Guide Pratique"

```markdown
# Comment [Action] : Guide Complet 2026

## Introduction
[Problème → Empathie → Promesse]

## Qu'est-ce que [Concept] ?
[Définition claire]

## Pourquoi [Action] est important
[Bénéfices]

## Comment [Action] : Étapes détaillées
1. Étape 1
2. Étape 2
3. Étape 3

## Erreurs à éviter
[Liste des pièges communs]

## FAQ
### Question 1 ?
Réponse

### Question 2 ?
Réponse

## Conclusion
[Résumé + CTA]
```

### Article "Actualité/Analyse"

```markdown
# [Événement/Tendance] : Ce que vous devez savoir

## Introduction
[Contexte → Impact → Promesse]

## Les faits essentiels
[Points clés]

## Analyse détaillée
[Implications]

## Impact pour vous
[Conséquences pratiques]

## Que faire maintenant ?
[Recommandations]

## FAQ
[Questions pertinentes]

## Conclusion
[Takeaways + CTA]
```

---

## 9. Longueur Recommandée par Type

| Type d'Article | Mots Min | Optimal |
|----------------|----------|---------|
| Guide Complet | 1000 | 1500-2000 |
| Tutoriel | 800 | 1200-1500 |
| Actualité | 500 | 800-1000 |
| Liste/Top | 600 | 1000-1200 |
| FAQ | 400 | 600-800 |

---

## 10. Optimisation Images

* **Featured Image** (couverture) :
  * Taille min : 1200x630px
  * Format : WebP ou JPG
  * Alt text descriptif

* **Images dans l'article** :
  * Max 200 KB par image
  * Compressées via Cloudinary
  * Alt text systématique

---

## 11. Optimisation Featured Snippets (Position Zero)

Pour maximiser les chances d'apparaître en Featured Snippet sur Google, appliquez ces techniques :

### A. Formulation "Réponse Directe" (Answer-First)

Chaque section H2 doit commencer par une réponse directe de 2-3 phrases.

**Avant :**

```markdown
## Comment traiter une tendinite ?
La tendinite est une pathologie complexe qui nécessite une approche progressive...
```

**Après :**

```markdown
## Comment traiter une tendinite ?
**Réponse directe :** Un traitement efficace de tendinite combine repos relatif, 
anti-inflammatoires naturels et rééducation progressive sur 4-8 semaines.

La tendinite est une pathologie complexe qui nécessite une approche progressive...
```

### B. Boîte de Définition (Articles Pathologies)

Ajoutez une définition encadrée (40-60 mots) après l'introduction :

```markdown
> **Définition** : La [pathologie] est [cause principale], caractérisée par 
> [symptômes principaux]. Elle touche principalement [population concernée] 
> et se traite par [approche générale].
```

### C. Tableaux Stratégiques

Créez des tableaux comparatifs pour structurer l'information :

**Tableau Symptômes/Actions :**

```markdown
| Symptôme | Signification | Action recommandée |
|----------|---------------|-------------------|
| Douleur matinale | Inflammation active | Réduire la charge |
| Douleur à l'effort seul | Tendon surchargé | Repos relatif |
| Douleur au repos | Phase aiguë | Consultation urgente |
```

**Tableau Phases de traitement :**

```markdown
| Phase | Durée | Objectif | Actions clés |
|-------|-------|----------|-------------|
| Aiguë | S1-S2 | Calmer douleur | Repos, isométrie |
| Renforcement | S3-S8 | Reconstruire | Excentrique, charges |
| Réathlétisation | S8+ | Retour terrain | Pliométrie, sport |
```

### D. Listes Numérotées pour les Processus

Convertissez les guides "Comment faire" en listes numérotées avec résumé :

```markdown
### Comment reprendre la course après blessure ?

**Résumé des étapes :**
1. Bilan kiné et feu vert médical
2. Reprise progressive (marche → course alternée)
3. Réintroduction du volume puis de l'intensité

#### Étape détaillée :
1. **Bilan initial** : Évaluation complète de la blessure...
2. **Reprise progressive** : Commencez par des séances courtes...
3. **Réintroduction** : Une fois le volume récupéré...
```

### E. Cibler les "People Also Ask" (PAA)

* Recherchez les questions PAA sur Google pour votre mot-clé
* Intégrez ces questions exactes comme H3 dans votre FAQ
* Répondez en 40-60 mots maximum pour chaque question PAA

---

**Document créé** : 14 janvier 2026  
**Mis à jour** : 21 janvier 2026 (ajout section Featured Snippets)  
**Basé sur** : Bonnes pratiques SEO & Content Marketing  
**À utiliser pour** : Tous vos nouveaux articles blog
