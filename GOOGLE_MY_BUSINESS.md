# 🔗 Guide de liaison Google My Business

## ✅ Ce qui a été fait

### 1. **Structured Data optimisé**
- ✅ `aggregateRating` **retiré** des schemas (Google utilisera GMB automatiquement)
- ✅ Schema LocalBusiness complet avec :
  - `@id` pour identification unique
  - `geo` coordinates (latitude/longitude)
  - `sameAs` pointant vers Doctolib et Instagram
  - `openingHoursSpecification` détaillées
  - `@type` multiple : LocalBusiness + MedicalBusiness + HealthAndBeautyBusiness

### 2. **NAP optimisé**
```
Name: Batignolles Kiné Sport
Address: 6 rue des Batignolles, 75017 Paris
Phone: +33962434961
```

### 3. **Titre et Meta Description optimisés**
- **Titre** : "Batignolles Kiné Sport | Rééducation, Post-Op, Réathlétisation - Paris 17"
- **Description** : "Rééducation fonctionnelle, post-op, sport-santé. Cabinet spécialisé Paris 17. Équipe 5 kinés. Prise en charge globale, résultats durables. Prendre RDV."

---

## 🚀 Étapes pour afficher vos 36 avis Google

### **ÉTAPE 1 : Vérifier le NAP dans Google My Business**

1. Allez sur https://business.google.com
2. Sélectionnez votre fiche "Batignolles Kiné Sport"
3. Vérifiez que ces informations sont **EXACTEMENT** comme sur le site :
   ```
   Nom : Batignolles Kiné Sport
   Adresse : 6 rue des Batignolles, 75017 Paris
   Téléphone : +33 9 62 43 49 61
   Site web : https://batignolleskinesport.fr
   ```

**⚠️ IMPORTANT** : Si une seule lettre diffère, Google ne fera pas le lien !

---

### **ÉTAPE 2 : Google Search Console**

1. **Créer/Vérifier la propriété** :
   - Allez sur https://search.google.com/search-console
   - Cliquez "Ajouter une propriété"
   - Entrez : `batignolleskinesport.fr`
   - Choisissez "Préfixe d'URL"

2. **Vérification** (plusieurs méthodes au choix) :

   **Option A - Fichier HTML (recommandée)** :
   ```bash
   # Google vous donne un fichier type : google1234567890abcdef.html
   # Placez-le dans public/
   cp google1234567890abcdef.html public/
   npm run build
   # Déployez, puis cliquez "Vérifier" dans GSC
   ```

   **Option B - Balise HTML** :
   ```html
   <!-- Ajoutez dans index.html <head> -->
   <meta name="google-site-verification" content="VOTRE_CODE_ICI" />
   ```

   **Option C - DNS (si vous gérez le DNS)** :
   ```
   TXT @ google-site-verification=VOTRE_CODE
   ```

3. **Soumettez le sitemap** :
   - Une fois vérifié, allez dans "Sitemaps"
   - Ajoutez : `https://batignolleskinesport.fr/sitemap.xml`
   - Cliquez "Envoyer"

---

### **ÉTAPE 3 : Attendre la synchronisation Google**

**Timeline :**
- ⏱️ **48-72 heures** : Google indexe votre site
- ⏱️ **1-2 semaines** : Google synchronise GMB ↔ Site web
- ⏱️ **2-4 semaines** : Étoiles ⭐ apparaissent dans les SERP

**Vérification** :
1. Allez sur Google et tapez : `site:batignolleskinesport.fr`
2. Vérifiez que votre site apparaît
3. Tapez : `Batignolles Kiné Sport`
4. Les étoiles devraient apparaître sous votre résultat

---

### **ÉTAPE 4 : Tester les Rich Snippets**

1. Allez sur https://search.google.com/test/rich-results
2. Entrez votre URL : `https://batignolleskinesport.fr`
3. Vérifiez que vous voyez :
   - ✅ LocalBusiness détecté
   - ✅ Nom, adresse, téléphone
   - ✅ Horaires d'ouverture
   - ✅ Coordonnées GPS
   - ❌ PAS de "aggregateRating" (c'est normal !)

---

## 🔍 Checklist de vérification

### **NAP cohérence (100% identique partout)**
- [ ] Site web : `6 rue des Batignolles, 75017 Paris`
- [ ] Google My Business : identique
- [ ] Doctolib : identique
- [ ] Instagram bio : identique
- [ ] Annuaires (Pages Jaunes, etc.) : identique

### **URLs cohérentes**
- [ ] Site web principal : `https://batignolleskinesport.fr`
- [ ] Google My Business : même URL
- [ ] Pas de variantes (www, http, https mixés)

### **Téléphone formaté correctement**
- [ ] Site : `+33962434961` ou `09 62 43 49 61`
- [ ] GMB : identique
- [ ] Format international recommandé : `+33 9 62 43 49 61`

---

## 📊 Monitoring post-implémentation

### **Semaine 1-2 : Indexation**
- Google Search Console → Couverture → "Pages indexées" devrait augmenter
- Test : `site:batignolleskinesport.fr` doit montrer toutes vos pages

### **Semaine 2-4 : Synchronisation GMB**
- Cherchez "Batignolles Kiné Sport" sur Google
- Les étoiles ⭐⭐⭐⭐⭐ (36 avis) devraient apparaître
- Rich snippet avec horaires et téléphone

### **Mois 1-2 : Optimisation CTR**
- Google Search Console → Performance
- Notez : CTR, Position moyenne, Impressions
- Objectif : CTR > 7%, Position < 1.5

---

## ⚠️ Problèmes fréquents

### **"Les étoiles n'apparaissent pas"**
- ✅ Vérifiez NAP strictement identique
- ✅ Attendez 2-4 semaines (c'est normal)
- ✅ Vérifiez que GMB est bien "Vérifié"
- ✅ Vérifiez que vous avez > 5 avis Google

### **"Google ne trouve pas mon site"**
- ✅ Vérifiez dans Search Console que la propriété est validée
- ✅ Soumettez manuellement le sitemap
- ✅ Demandez une indexation manuelle (URL Inspection Tool)

### **"Rich Snippets ne s'affichent pas"**
- ✅ Testez sur https://search.google.com/test/rich-results
- ✅ Corrigez les erreurs JSON-LD si détectées
- ✅ Re-déployez et attendez 48-72h

---

## 🎯 Résultat attendu (2-4 semaines)

**Avant :**
```
batignolleskinesport.fr › paris
Batignolles Kiné Sport...
Description texte simple
```

**Après :**
```
batignolleskinesport.fr › paris › kinésithérapie
⭐⭐⭐⭐⭐ 5,0 (36 avis)
Batignolles Kiné Sport | Rééducation, Post-Op, Réathlétisation - Paris 17
Rééducation fonctionnelle, post-op, sport-santé. Cabinet spécialisé Paris 17...
📍 6 rue des Batignolles · ⏰ Fermé · Ouvre lun. 08:00
```

---

## 📞 Support

Si problèmes après 4 semaines :
1. Vérifiez Search Console → Améliorations → Rich Snippets
2. Vérifiez GMB est bien "Vérifié" et "Actif"
3. Contactez support Google My Business si nécessaire

**Dernière mise à jour** : 21 décembre 2025
