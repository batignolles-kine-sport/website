import React from 'react';
import { SEO } from '../components/layout/SEO';
import { TEAM } from '../utils/constants';
import { Button } from '../components/ui/Button';

export const Team: React.FC = () => {
  return (
    <>
      <SEO
        title="Notre Équipe - Kinésithérapeutes Paris 17"
        description="Découvrez Batignolles Kiné Sport : une équipe pluridisciplinaire spécialisée en kinésithérapie du sport et rééducation personnalisée à Paris 17."
      />

      <section className="bg-surface border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-1 text-sm font-semibold text-primary shadow-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Notre équipe pluridisciplinaire
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-text-main sm:text-5xl">
                Des kinés du sport engagés pour votre reprise rapide et durable
              </h1>
              <p className="max-w-2xl text-lg text-text-muted">
                Nous combinons expertise scientifique, suivi individualisé et pédagogie pour vous accompagner du diagnostic à la reprise, que vous soyez sportif amateur ou athlète confirmé.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[{
                  label: 'Patients accompagnés/an',
                  value: '2 500+',
                }, {
                  label: 'Sports couverts',
                  value: '20+',
                }, {
                  label: 'Rendez-vous en urgence',
                  value: '<48h',
                }].map((item) => (
                  <div key={item.label} className="rounded-4xl border border-slate-100 bg-white px-5 py-4 shadow-card">
                    <p className="text-2xl font-semibold text-primary">{item.value}</p>
                    <p className="text-sm text-text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <p className="text-sm text-text-muted">
                  Disponibilités rapides en présentiel seulement.
                </p>
              </div>
            </div>
            <div className="rounded-5xl border border-slate-100 bg-white p-8 shadow-elevated">
              <h2 className="mb-4 text-xl font-semibold text-text-main">Qui sommes-nous ?</h2>
              <p className="mb-6 text-base leading-relaxed text-text-muted">
                Batignolles Kiné Sport est un cabinet de kinésithérapie du sport situé à Paris 17. Nous réunissons des thérapeutes formés aux dernières techniques de rééducation, aux protocoles de retour au jeu et à la prévention des récidives.
              </p>
              <div className="space-y-4">
                {["Programmes individualisés basés sur votre geste et votre charge d'entraînement.", 'Suivi coordonné avec médecins, chirurgiens et préparateurs physiques.', 'Éducation et auto-rééducation pour rendre chaque patient autonome.'].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">✓</span>
                    <p className="text-sm leading-relaxed text-text-main">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Rencontrez l'équipe</p>
              <h2 className="text-3xl font-bold text-text-main sm:text-4xl">Des profils complémentaires pour chaque besoin</h2>
              <p className="max-w-3xl text-base text-text-muted">
                Kinés du sport, thérapie manuelle, traumatologie, pédiatrie ou réathlétisation : chaque praticien apporte son expertise pour couvrir l'ensemble du parcours de soin.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {TEAM.map((member) => (
              <article
                key={member.id}
                className="flex flex-col gap-6 rounded-4xl border border-slate-100 bg-surface px-6 py-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="w-full max-w-[180px] shrink-0 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-text-main">{member.name}</h3>
                    <p className="text-primary font-medium">{member.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="rounded-full border border-primary/15 bg-white px-3 py-1 text-xs font-semibold text-text-main"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-text-muted">{member.bio}</p>

                <div className="flex flex-wrap items-center gap-3">
                  <Button href={member.doctolibUrl} variant="booking" className="text-sm">
                    Prendre rendez-vous
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};