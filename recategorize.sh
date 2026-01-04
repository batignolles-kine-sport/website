#!/bin/bash

# Script de recatégorisation des articles du blog
# Remplace les catégories sport par des catégories anatomiques
# Ajoute un champ sport pour conserver l'information

cd "$(dirname "$0")"

# Course à pied → Répartition anatomique
sed -i '' 's/^category: "Course à pied"$/category: "Jambe"\nsport: "Course à pied"/' src/posts/pathologies/crampes-course-pied.md
sed -i '' 's/^category: "Course à pied"$/category: "Hanche"\nsport: "Course à pied"/' src/posts/pathologies/douleur-hanche-coureur.md
sed -i '' 's/^category: "Course à pied"$/category: "Jambe"\nsport: "Course à pied"/' src/posts/pathologies/douleur-mollet-coureur.md
sed -i '' 's/^category: "Course à pied"$/category: "Prévention"\nsport: "Course à pied"/' src/posts/pathologies/echauffement-course-pied.md
sed -i '' 's/^category: "Course à pied"$/category: "Jambe"\nsport: "Course à pied"/' src/posts/pathologies/fracture-fatigue-coureur.md
sed -i '' 's/^category: "Course à pied"$/category: "Jambe"\nsport: "Course à pied"/' src/posts/pathologies/periostite-tibiale-coureur.md
sed -i '' 's/^category: "Course à pied"$/category: "Prévention"\nsport: "Course à pied"/' src/posts/pathologies/premier-marathon-preparation.md
sed -i '' 's/^category: "Course à pied"$/category: "Prévention"\nsport: "Course à pied"/' src/posts/pathologies/preparation-physique-coureur.md
sed -i '' 's/^category: "Course à pied"$/category: "Prévention"\nsport: "Course à pied"/' src/posts/pathologies/recuperation-coureur.md

# Football → Répartition anatomique
sed -i '' 's/^category: "Football"$/category: "Genou"\nsport: "Football"/' src/posts/pathologies/changements-direction-football.md
sed -i '' 's/^category: "Football"$/category: "Cuisse"\nsport: "Football"/' src/posts/pathologies/dechirure-adducteurs-football.md
sed -i '' 's/^category: "Football"$/category: "Genou"\nsport: "Football"/' src/posts/pathologies/entorse-genou-gardien-football.md
sed -i '' 's/^category: "Football"$/category: "Jambe"\nsport: "Football"/' src/posts/pathologies/retour-football-fracture-jambe.md

# Boxe → Répartition anatomique
sed -i '' 's/^category: "Boxe"$/category: "Cheville"\nsport: "Boxe"/' src/posts/pathologies/cheville-instable-boxeur.md
sed -i '' 's/^category: "Boxe"$/category: "Poignet"\nsport: "Boxe"/' src/posts/pathologies/douleur-poignet-boxeur.md
sed -i '' 's/^category: "Boxe"$/category: "Poignet"\nsport: "Boxe"/' src/posts/pathologies/fracture-pouce-boxeur.md
sed -i '' 's/^category: "Boxe"$/category: "Épaule"\nsport: "Boxe"/' src/posts/pathologies/tendinite-epaule-boxeur.md

# Télétravail → Répartition anatomique (cervicalgie déjà Dos)
sed -i '' 's/^category: "Télétravail"$/category: "Dos"\nsport: "Télétravail"/' src/posts/pathologies/douleur-inter-scapulaire-teletravail.md
sed -i '' 's/^category: "Télétravail"$/category: "Dos"\nsport: "Télétravail"/' src/posts/pathologies/lombalgie-teletravail-routine.md
sed -i '' 's/^category: "Télétravail"$/category: "Épaule"\nsport: "Télétravail"/' src/posts/pathologies/syndrome-traversee-thoraco-brachiale.md
sed -i '' 's/^category: "Télétravail"$/category: "Poignet"\nsport: "Télétravail"/' src/posts/pathologies/tendinite-de-quervain-teletravail.md

# Tennis → Répartition anatomique
sed -i '' 's/^category: "Tennis"$/category: "Poignet"\nsport: "Tennis"/' src/posts/pathologies/canal-carpien-tennis.md
sed -i '' 's/^category: "Tennis"$/category: "Jambe"\nsport: "Tennis"/' src/posts/pathologies/claquage-mollet-tennis.md
sed -i '' 's/^category: "Tennis"$/category: "Genou"\nsport: "Tennis"/' src/posts/pathologies/luxation-rotule-tennis.md

# Danse → Répartition anatomique
sed -i '' 's/^category: "Danse"$/category: "Pied"\nsport: "Danse"/' src/posts/pathologies/hallux-valgus-danseuse.md
sed -i '' 's/^category: "Danse"$/category: "Cheville"\nsport: "Danse"/' src/posts/pathologies/instabilite-cheville-danseuse.md
sed -i '' 's/^category: "Danse"$/category: "Pied"\nsport: "Danse"/' src/posts/pathologies/syndrome-os-naviculaire-danse.md

# Vélo → Répartition anatomique
sed -i '' 's/^category: "Vélo"$/category: "Poignet"\nsport: "Vélo"/' src/posts/pathologies/engourdissement-mains-cycliste.md
sed -i '' 's/^category: "Vélo"$/category: "Hanche"\nsport: "Vélo"/' src/posts/pathologies/syndrome-piriforme-cycliste.md

# Rugby → Répartition anatomique
sed -i '' 's/^category: "Rugby"$/category: "Dos"\nsport: "Rugby"/' src/posts/pathologies/melee-rugby-lombalgie-pilier.md
sed -i '' 's/^category: "Rugby"$/category: "Épaule"\nsport: "Rugby"/' src/posts/pathologies/plaquage-rugby-epaule.md

# Natation → Répartition anatomique
sed -i '' 's/^category: "Natation"$/category: "Genou"\nsport: "Natation"/' src/posts/pathologies/genou-nageur-brasse.md
sed -i '' 's/^category: "Natation"$/category: "Dos"\nsport: "Natation"/' src/posts/pathologies/grand-dorsal-nageur.md

# Gymnastique → Répartition anatomique
sed -i '' 's/^category: "Gymnastique"$/category: "Dos"\nsport: "Gymnastique"/' src/posts/pathologies/dechirure-abdomen-gymnaste.md
sed -i '' 's/^category: "Gymnastique"$/category: "Dos"\nsport: "Gymnastique"/' src/posts/pathologies/spondylolyse-gymnaste.md

# Musculation → Répartition anatomique
sed -i '' 's/^category: "Musculation"$/category: "Genou"\nsport: "Musculation"/' src/posts/pathologies/syndrome-rotulien-powerlifter.md
sed -i '' 's/^category: "Musculation"$/category: "Épaule"\nsport: "Musculation"/' src/posts/pathologies/tendinite-long-biceps-musculation.md

# Prévention → Garder Prévention
sed -i '' 's/^category: "Prévention"$/category: "Prévention"\nsport: "Général"/' src/posts/pathologies/echauffement-prevention.md
sed -i '' 's/^category: "Prévention"$/category: "Prévention"\nsport: "Ski"/' src/posts/pathologies/preparation-ski.md

# Récupération → Garder Prévention
sed -i '' 's/^category: "Récupération"$/category: "Prévention"\nsport: "Général"/' src/posts/pathologies/recuperation-sportive.md
sed -i '' 's/^category: "Récupération"$/category: "Prévention"\nsport: "Général"/' src/posts/pathologies/reprise-sport-blessure.md

# Articles uniques → Répartition anatomique
sed -i '' 's/^category: "Escalade"$/category: "Poignet"\nsport: "Escalade"/' src/posts/pathologies/blessure-doigt-escalade-poulie.md
sed -i '' 's/^category: "Padel"$/category: "Épaule"\nsport: "Padel"/' src/posts/pathologies/blessures-padel-debutant.md
sed -i '' 's/^category: "CrossFit"$/category: "Épaule"\nsport: "CrossFit"/' src/posts/pathologies/douleur-epaule-crossfit.md
sed -i '' 's/^category: "Yoga"$/category: "Poignet"\nsport: "Yoga"/' src/posts/pathologies/douleur-poignet-yoga.md
sed -i '' 's/^category: "Golf"$/category: "Coude"\nsport: "Golf"/' src/posts/pathologies/golf-elbow-epicondylite-mediale.md
sed -i '' 's/^category: "Course"$/category: "Jambe"\nsport: "Course à pied"/' src/posts/pathologies/periostite-coureur-urbain-paris.md
sed -i '' 's/^category: "Cabinet"$/category: "Prévention"\nsport: "Méthodologie"/' src/posts/pathologies/methodologie-ebp.md
sed -i '' 's/^category: "Soins"$/category: "Prévention"\nsport: "Technique"/' src/posts/pathologies/strapping-taping.md

echo "✅ Recatégorisation terminée !"
echo "Vérification des catégories..."
grep "^category:" src/posts/pathologies/*.md | grep -v -E "(Genou|Cheville|Hanche|Cuisse|Jambe|Pied|Épaule|Coude|Poignet|Dos|Tête|Périnée|Grossesse|Post-partum|Prévention)" && echo "❌ Articles avec catégories invalides trouvés" || echo "✅ Toutes les catégories sont valides"
