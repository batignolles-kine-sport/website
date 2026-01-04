# Guide de Migration Cloudinary

Ce guide documente le processus de migration des images vers Cloudinary pour le projet Batignolles Kiné Sport.

## ✅ Migration Terminée

**Date**: 4 janvier 2026  
**Statut**: ✅ **Succès complet**  
**Images migrées**: 95/95 (100%)  
**Échecs**: 0

## Configuration Cloudinary

### Informations du compte

- **Cloud Name**: `dsesaneyj`
- **API Key**: Stockée dans `.env.local`
- **API Secret**: Stockée dans `.env.local`

### Variables d'environnement

Le fichier `.env.local` contient :

```env
VITE_CLOUDINARY_CLOUD_NAME=dsesaneyj
VITE_CLOUDINARY_API_KEY=514413273626436
VITE_CLOUDINARY_API_SECRET=D46BLoB7hcYNm6QajnHaRCKNb0s
CLOUDINARY_URL=cloudinary://514413273626436:D46BLoB7hcYNm6QajnHaRCKNb0s@dsesaneyj
```

## Structure des Images sur Cloudinary

Toutes les images ont été uploadées en conservant la structure de dossiers :

```
blog/
├── allaitement-posture
├── analyse-foulee-coureur
├── arthrose-genou-sport
├── ... (86 autres images)
hero/
├── hero
├── hero-desktop
├── hero-mobile
└── hero-tablet
landing/
├── method1
├── method2
└── method3
og-image
```

## Utilisation dans le Code

### Images dans les composants React

Les composants utilisent maintenant `<AdvancedImage>` de Cloudinary :

```tsx
import { AdvancedImage, responsive, lazyload, placeholder } from '@cloudinary/react';
import { getResponsiveImage, pathToPublicId, isCloudinaryImage } from '../utils/cloudinary';

// Exemple d'utilisation
{isCloudinaryImage(post.image) ? (
  <AdvancedImage
    cldImg={getResponsiveImage(pathToPublicId(post.image), '16:9')}
    plugins={[
      lazyload(),
      responsive({ steps: [480, 640, 768, 1024, 1600] }),
      placeholder('blur')
    ]}
    className="w-full h-full object-cover"
    alt={post.title}
  />
) : (
  <img src={post.image} alt={post.title} />
)}
```

### Images dans les fichiers Markdown

Les images dans les articles de blog (fichiers `.md`) utilisent le chemin local :

```markdown
![Description](/images/blog/douleur-genou.jpg)
```

Le renderer Markdown détecte automatiquement les images locales et les sert via Cloudinary.

## Avantages de Cloudinary

### 🚀 Performance

- **Srcset automatique**: Génération de multiples résolutions (480w, 640w, 768w, 1024w, 1600w)
- **Format WebP**: Conversion automatique en WebP pour les navigateurs compatibles
- **Lazy loading**: Chargement différé des images hors viewport
- **Placeholder blur**: Affichage d'un placeholder flouté pendant le chargement

### 📦 Optimisation

- **Compression automatique**: Cloudinary optimise la qualité/taille automatiquement
- **CDN global**: Distribution via CDN pour des temps de chargement rapides
- **Responsive**: Adaptation automatique à la taille de l'écran

### 🔧 Maintenance

- **Pas de multiples fichiers**: Plus besoin de créer manuellement des versions 480w, 800w, etc.
- **Transformations à la volée**: Redimensionnement, recadrage, effets en temps réel
- **Backup centralisé**: Toutes les images sont stockées sur Cloudinary

## Commandes Utiles

### Relancer la migration

Si vous devez re-uploader des images :

```bash
npm run migrate-images
```

### Vérifier les images sur Cloudinary

1. Connectez-vous sur [cloudinary.com](https://cloudinary.com)
2. Allez dans **Media Library**
3. Vérifiez que tous les dossiers (`blog/`, `hero/`, `landing/`) sont présents

## Rollback (si nécessaire)

Si vous devez revenir en arrière :

1. Restaurer les anciens composants :
   ```bash
   git checkout HEAD -- src/pages/BlogPost.tsx src/pages/Blog.tsx src/pages/Home.tsx
   ```

2. Désinstaller les packages :
   ```bash
   npm uninstall @cloudinary/react @cloudinary/url-gen cloudinary
   ```

3. Supprimer les fichiers de configuration :
   ```bash
   rm .env.local src/utils/cloudinary.ts scripts/migrate-to-cloudinary.ts
   ```

## Support

En cas de problème avec Cloudinary :

- **Documentation**: [cloudinary.com/documentation](https://cloudinary.com/documentation)
- **Support**: [support.cloudinary.com](https://support.cloudinary.com)
- **Limites du plan gratuit**: 25 GB stockage, 25 GB bande passante/mois
