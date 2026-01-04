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

      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="space-y-8 mb-16">
            {/* Header Section */}
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-1 text-sm font-semibold text-primary shadow-soft">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                Notre équipe pluridisciplinaire
              </div>
              <h1 className="text-4xl font-bold leading-tight text-text-main sm:text-5xl lg:text-6xl">
                Des kinés du sport engagés pour votre{' '}
                <span className="text-gradient-primary">reprise rapide et durable</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Nous combinons expertise scientifique, suivi individualisé et pédagogie pour vous accompagner du diagnostic à la reprise, que vous soyez sportif amateur ou athlète confirmé.
              </p>
            </div>

            {/* Stats + CTA Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 flex-1">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-text-main">2 500+</div>
                  <div className="text-sm text-text-muted">Patients accompagnés/an</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-text-main">20+</div>
                  <div className="text-sm text-text-muted">Sports couverts</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-text-main">&lt;48h</div>
                  <div className="text-sm text-text-muted">Rendez-vous en urgence</div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://www.doctolib.fr/cabinet-de-kinesitherapie/paris/batignolles-kine-sport"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#107ACA] text-white font-semibold text-base transition-all duration-200 hover:bg-[#0e69ad] hover:shadow-lg active:scale-95 md:flex-shrink-0"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Prendre rendez-vous
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <article
                key={member.id}
                className="group relative flex flex-col h-[520px] rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                {/* Full Bleed Image - Top 60% */}
                <div className="absolute top-0 inset-x-0 h-[60%] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                  {/* Sport Badge - Top Right */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 px-4 py-2 text-slate-900 text-sm font-bold tracking-wide shadow-lg">
                      {member.sport === 'Gymnastique' && <span className="text-lg">🤸</span>}
                      {member.sport === 'Course à pied' && <span className="text-lg">🏃</span>}
                      {member.sport === 'Danse' && <span className="text-lg">💃</span>}
                      {member.sport === 'Rugby' && <span className="text-lg">🏉</span>}
                      {member.sport}
                    </span>
                  </div>
                </div>

                {/* Content - Bottom 40% */}
                <div className="absolute bottom-0 inset-x-0 h-[44%] bg-white rounded-t-3xl p-6 flex flex-col items-start justify-between shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                  <div className="w-full">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.title}</p>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <a
                    href={member.doctolibUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#107ACA] text-white font-semibold text-sm transition-transform active:scale-95 hover:bg-[#0e69ad]"
                  >
                    <img src="/images/doctolib/D_White.svg" alt="" loading="lazy" className="w-5 h-5" />
                    Prendre rendez-vous
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};