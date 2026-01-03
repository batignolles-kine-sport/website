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

      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400 mb-3">Mentions légales</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Mentions Légales</h1>
            <p className="mt-4 text-slate-500 text-base leading-relaxed max-w-3xl">
              Informations légales relatives au site www.batignolleskinesport.fr. Une présentation sobre, lisible, pensée comme une page de référence.
            </p>
          </div>

          <div className="space-y-8">
            <section className="rounded-2xl border border-slate-100 bg-white/80 shadow-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-2">1. Éditeur du site</p>
              <div className="text-slate-700 text-base leading-relaxed space-y-2">
                <p>Le site internet accessible à l’adresse www.batignolleskinesport.fr est édité par la société Batignolles Kiné Sport :</p>
                <ul className="space-y-1 text-slate-700">
                  <li><span className="text-slate-500">Forme sociale :</span> SELASU au capital de 120 €.</li>
                  <li><span className="text-slate-500">Siège social :</span> {ADDRESS}.</li>
                  <li><span className="text-slate-500">Immatriculation :</span> RCS Paris n° 944 266 253.</li>
                  <li><span className="text-slate-500">SIRET :</span> 944 266 253 00011.</li>
                  <li><span className="text-slate-500">Contact :</span> 09 62 43 49 61 — contact@batignolleskinesport.fr.</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-100 bg-white/80 shadow-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-2">2. Direction de la publication</p>
              <p className="text-slate-700 text-base leading-relaxed">
                La directrice de la publication est Justine Josse, en sa qualité de présidente de la société Batignolles Kiné Sport.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-100 bg-white/80 shadow-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-2">3. Profession réglementée</p>
              <div className="text-slate-700 text-base leading-relaxed space-y-1.5">
                <p>L'activité de masseur-kinésithérapeute est une profession de santé réglementée.</p>
                <p><span className="text-slate-500">Titre professionnel :</span> Masseur-Kinésithérapeute Diplômé d'État (France).</p>
                <p><span className="text-slate-500">Numéro RPPS :</span> 10102313755.</p>
                <p><span className="text-slate-500">Instance ordinale :</span> Inscrit au Conseil National de l’Ordre des Masseurs-Kinésithérapeutes (CNOMK).</p>
                <p><span className="text-slate-500">Règles déontologiques :</span> L'exercice de la profession est régi par le Code de Déontologie, intégré au Code de la Santé Publique.</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-100 bg-white/80 shadow-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-2">4. Hébergement</p>
              <div className="text-slate-700 text-base leading-relaxed space-y-1.5">
                <p>Le site est hébergé par la société Netlify, Inc. :</p>
                <p><span className="text-slate-500">Adresse :</span> 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA.</p>
                <p><span className="text-slate-500">Contact :</span> support@netlify.com.</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-100 bg-white/80 shadow-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-2">5. Conception et développement</p>
              <div className="text-slate-700 text-base leading-relaxed space-y-1.5">
                <p>Ce site a été conçu et développé par l'agence <strong>UNMISSABL</strong>.</p>
                <p><span className="text-slate-500">Raison sociale :</span> ZenNest.</p>
                <p><span className="text-slate-500">RCS :</span> 928 130 848.</p>
                <p><span className="text-slate-500">Contact :</span> <a href="mailto:hello@unmissabl.com" className="text-teal-600 hover:underline">hello@unmissabl.com</a>.</p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-100 bg-white/80 shadow-sm p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-2">6. Propriété intellectuelle</p>
              <p className="text-slate-700 text-base leading-relaxed">
                L'ensemble des éléments constituant ce site (structure, textes, photographies, logos) est la propriété exclusive de Batignolles Kiné Sport. Toute reproduction, représentation ou diffusion, en tout ou partie, du contenu de ce site sur quelque support ou par tout procédé que ce soit est interdite sans autorisation expresse.
              </p>
            </section>
          </div>

          <div className="pt-10 text-center text-sm text-slate-400">
            © 2025 Batignolles Kiné Sport — Santé & Performance.
          </div>
        </div>
      </div>
    </>
  );
};