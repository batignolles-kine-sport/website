#!/usr/bin/env python3
"""
Script de recatégorisation des articles du blog
Remplace les catégories sport par des catégories anatomiques
Ajoute un champ sport pour conserver l'information
"""

import re
from pathlib import Path

# Mapping: filename -> (new_category, sport_value)
RECATEGORIZATION_MAP = {
    # Course à pied → Répartition anatomique
    "crampes-course-pied.md": ("Jambe", "Course à pied"),
    "douleur-hanche-coureur.md": ("Hanche", "Course à pied"),
    "douleur-mollet-coureur.md": ("Jambe", "Course à pied"),
    "echauffement-course-pied.md": ("Prévention", "Course à pied"),
    "fracture-fatigue-coureur.md": ("Jambe", "Course à pied"),
    "periostite-tibiale-coureur.md": ("Jambe", "Course à pied"),
    "premier-marathon-preparation.md": ("Prévention", "Course à pied"),
    "preparation-physique-coureur.md": ("Prévention", "Course à pied"),
    "recuperation-coureur.md": ("Prévention", "Course à pied"),
    
    # Football → Répartition anatomique
    "changements-direction-football.md": ("Genou", "Football"),
    "dechirure-adducteurs-football.md": ("Cuisse", "Football"),
    "entorse-genou-gardien-football.md": ("Genou", "Football"),
    "retour-football-fracture-jambe.md": ("Jambe", "Football"),
    
    # Boxe → Répartition anatomique
    "cheville-instable-boxeur.md": ("Cheville", "Boxe"),
    "douleur-poignet-boxeur.md": ("Poignet", "Boxe"),
    "fracture-pouce-boxeur.md": ("Poignet", "Boxe"),
    "tendinite-epaule-boxeur.md": ("Épaule", "Boxe"),
    
    # Télétravail → Répartition anatomique
    "douleur-inter-scapulaire-teletravail.md": ("Dos", "Télétravail"),
    "lombalgie-teletravail-routine.md": ("Dos", "Télétravail"),
    "syndrome-traversee-thoraco-brachiale.md": ("Épaule", "Télétravail"),
    "tendinite-de-quervain-teletravail.md": ("Poignet", "Télétravail"),
    
    # Tennis → Répartition anatomique
    "canal-carpien-tennis.md": ("Poignet", "Tennis"),
    "claquage-mollet-tennis.md": ("Jambe", "Tennis"),
    "luxation-rotule-tennis.md": ("Genou", "Tennis"),
    
    # Danse → Répartition anatomique
    "hallux-valgus-danseuse.md": ("Pied", "Danse"),
    "instabilite-cheville-danseuse.md": ("Cheville", "Danse"),
    "syndrome-os-naviculaire-danse.md": ("Pied", "Danse"),
    
    # Vélo → Répartition anatomique
    "engourdissement-mains-cycliste.md": ("Poignet", "Vélo"),
    "syndrome-piriforme-cycliste.md": ("Hanche", "Vélo"),
    
    # Rugby → Répartition anatomique
    "melee-rugby-lombalgie-pilier.md": ("Dos", "Rugby"),
    "plaquage-rugby-epaule.md": ("Épaule", "Rugby"),
    
    # Natation → Répartition anatomique
    "genou-nageur-brasse.md": ("Genou", "Natation"),
    "grand-dorsal-nageur.md": ("Dos", "Natation"),
    
    # Gymnastique → Répartition anatomique
    "dechirure-abdomen-gymnaste.md": ("Dos", "Gymnastique"),
    "spondylolyse-gymnaste.md": ("Dos", "Gymnastique"),
    
    # Musculation → Répartition anatomique
    "syndrome-rotulien-powerlifter.md": ("Genou", "Musculation"),
    "tendinite-long-biceps-musculation.md": ("Épaule", "Musculation"),
    
    # Prévention → Garder Prévention
    "echauffement-prevention.md": ("Prévention", "Général"),
    "preparation-ski.md": ("Prévention", "Ski"),
    
    # Récupération → Garder Prévention
    "recuperation-sportive.md": ("Prévention", "Général"),
    "reprise-sport-blessure.md": ("Prévention", "Général"),
    
    # Articles uniques → Répartition anatomique
    "blessure-doigt-escalade-poulie.md": ("Poignet", "Escalade"),
    "blessures-padel-debutant.md": ("Épaule", "Padel"),
    "douleur-epaule-crossfit.md": ("Épaule", "CrossFit"),
    "douleur-poignet-yoga.md": ("Poignet", "Yoga"),
    "golf-elbow-epicondylite-mediale.md": ("Coude", "Golf"),
    "periostite-coureur-urbain-paris.md": ("Jambe", "Course à pied"),
    "methodologie-ebp.md": ("Prévention", "Méthodologie"),
    "strapping-taping.md": ("Prévention", "Technique"),
}

def recategorize_article(file_path: Path, new_category: str, sport_value: str):
    """Recatégorise un article en modifiant son frontmatter"""
    content = file_path.read_text(encoding='utf-8')
    
    # Pattern pour trouver et remplacer la ligne category
    # On cherche category: "..." et on ajoute sport: "..." juste après
    pattern = r'(---\n.*?)category: "[^"]*"(\n.*?---)'
    replacement = rf'\1category: "{new_category}"\nsport: "{sport_value}"\2'
    
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    if new_content != content:
        file_path.write_text(new_content, encoding='utf-8')
        return True
    return False

def main():
    posts_dir = Path("src/posts/pathologies")
    
    if not posts_dir.exists():
        print(f"❌ Répertoire {posts_dir} introuvable")
        return
    
    modified_count = 0
    skipped_count = 0
    
    for filename, (new_category, sport_value) in RECATEGORIZATION_MAP.items():
        file_path = posts_dir / filename
        
        if not file_path.exists():
            print(f"⚠️  Fichier non trouvé: {filename}")
            skipped_count += 1
            continue
        
        if recategorize_article(file_path, new_category, sport_value):
            print(f"✅ {filename} → {new_category} (sport: {sport_value})")
            modified_count += 1
        else:
            print(f"⚠️  {filename} - Aucune modification")
            skipped_count += 1
    
    print(f"\n📊 Résumé:")
    print(f"  - {modified_count} fichiers modifiés")
    print(f"  - {skipped_count} fichiers ignorés")
    print(f"  - Total: {len(RECATEGORIZATION_MAP)} fichiers traités")

if __name__ == "__main__":
    main()
