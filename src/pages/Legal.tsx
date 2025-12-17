import React from 'react';
import { SEO } from '../components/layout/SEO';
import { ADDRESS } from '../utils/constants';

export const Legal: React.FC = () => {
  return (
    <>
      <SEO 
        title="Mentions Légales" 
        description="Mentions légales, politique de confidentialité et conditions d'utilisation du site Batignolles Kiné Sport." 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-text-main mb-8">Mentions Légales</h1>
        
        <div className="prose prose-sm md:prose-base text-text-light max-w-none">
          <h3>1. Éditeur du site</h3>
          <p>
            Le site <strong>Batignolles Kiné Sport</strong> est édité par la société BKS, Société Civile de Moyens (SCM) au capital de 1000€.<br/>
            Siège social : {ADDRESS}<br/>
            SIRET : 123 456 789 00012<br/>
            Directeur de la publication : Thomas Dubois
          </p>

          <h3>2. Hébergement</h3>
          <p>
            Ce site est hébergé par Vercel Inc.<br/>
            Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
          </p>

          <h3>3. Propriété Intellectuelle</h3>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>

          <h3>4. Données Personnelles (RGPD)</h3>
          <p>
            Les informations recueillies via le formulaire de contact sont enregistrées dans un fichier informatisé par BKS pour la gestion de la clientèle. Elles sont conservées pendant 3 ans et sont destinées uniquement à l'équipe du cabinet.
          </p>
          <p>
            Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : contact@batignolles-kine-sport.fr
          </p>

          <h3>5. Cookies</h3>
          <p>
            Ce site utilise des cookies techniques nécessaires à son bon fonctionnement et des cookies de mesure d'audience (Google Analytics) anonymisés.
          </p>
        </div>
      </div>
    </>
  );
};