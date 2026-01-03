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
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-1 text-sm font-semibold text-primary shadow-soft">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                Notre équipe pluridisciplinaire
              </div>
              <h1 className="text-4xl font-bold leading-tight text-text-main sm:text-5xl">
                Des experts passionnés<br />
                <span className="bg-gradient-to-r from-[#3b402e] to-[#6d744d] bg-clip-text text-transparent">pour votre santé.</span>
              </h1>
              <p className="text-lg text-text-muted leading-relaxed">
                Chaque praticien apporte son expertise spécifique, du rugby à la danse, pour une prise en charge adaptée à votre pratique.
              </p>
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
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                  {/* Sport Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 text-white text-xs font-semibold tracking-wide">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      Kiné du Sport · {member.sport}
                    </span>
                  </div>
                </div>

                {/* Content - Bottom 40% */}
                <div className="absolute bottom-0 inset-x-0 h-[42%] bg-white rounded-t-3xl p-6 flex flex-col items-start justify-between shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
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
                    <img src="/images/doctolib/D_White.svg" alt="" className="w-5 h-5" />
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