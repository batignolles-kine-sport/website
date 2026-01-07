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

            {/* CTA Row Removed */}{/* <div className="flex flex-col sm:flex-row items-start md:items-center gap-6"></div> */}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <article
                key={member.id}
                className="group relative h-[480px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-slate-900 w-full"
              >
                {/* Full Image */}
                <div className="absolute inset-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 lg:group-hover:scale-105"
                  />
                  {/* Gradient overlay for contrast - Stronger on mobile since content is always there */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:from-black/40 lg:via-transparent"></div>
                </div>

                {/* Floating Glass Pill 
                    Mobile: Expanded state fixed (w-[92%], bg-black/60, blur-xl)
                    Desktop: Initial small state, expands on hover (lg:w-[85%] -> lg:group-hover:w-[92%])
                */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-500 ease-out overflow-hidden z-10
                  w-[92%] bg-black/60 border-white/30 backdrop-blur-xl border
                  lg:w-[85%] lg:bg-white/10 lg:border-white/20 lg:backdrop-blur-md
                  lg:group-hover:w-[92%] lg:group-hover:bg-black/60 lg:group-hover:border-white/30 lg:group-hover:backdrop-blur-xl
                  shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-[32px]"
                >
                  <div className="flex flex-col items-center p-5 text-center transition-all duration-300">
                    {/* Name */}
                    <h3 className="text-xl font-bold text-white mb-2 lg:mb-0 lg:group-hover:mb-2 transition-all font-sans leading-tight">
                      {member.name}
                    </h3>

                    {/* Info & CTA 
                        Mobile: Always visible (max-height auto)
                        Desktop: Hidden initially (max-height 0), reveals on hover (max-height 500px)
                    */}
                    <div className="w-full transition-all duration-500 ease-in-out max-h-[500px] lg:max-h-0 lg:group-hover:max-h-[500px] overflow-hidden">
                      <div className="flex flex-col items-center gap-3 pt-2">
                        {/* Divider Removed */}

                        {/* Sports Tags */}
                        <div className="flex flex-wrap justify-center gap-2">
                          {member.sports.map((sport) => (
                            <span key={sport} className="px-3 py-1 bg-white/10 border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded-xl backdrop-blur-sm">
                              {sport}
                            </span>
                          ))}
                        </div>

                        {/* CTA Doctolib */}
                        <a
                          href={member.doctolibUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-[#107ACA] hover:bg-[#0e69ad] active:bg-[#0c5a94] text-white px-5 py-3 rounded-xl font-semibold text-xs transition-colors w-full justify-center mt-1 shadow-lg"
                        >
                          <img src="/images/doctolib/D_White.svg" alt="" className="w-4 h-4" />
                          Prendre RDV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};