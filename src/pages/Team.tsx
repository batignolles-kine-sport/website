import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/layout/SEO';
import { TEAM, DOCTOLIB_URL } from '../utils/constants';
import { ChevronDown, Activity, ArrowUpRight } from 'lucide-react';
import Modal from '../components/ui/Modal';

const TeamCard: React.FC<{ member: typeof TEAM[0] }> = ({ member }) => {
  const [firstName, ...lastNameParts] = member.name.split(' ');
  const lastName = lastNameParts.join(' ');
  const [isMobileExpanded, setIsMobileExpanded] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isCardHovered, setIsCardHovered] = React.useState(false);

  // Identify if this is Leonie's card (ID 3)
  const isLeonie = member.id === 3;

  return (
    <article
      className={`group relative h-[480px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-slate-900 w-full cursor-pointer lg:cursor-default transition-all duration-500`}
      onClick={() => window.innerWidth < 1024 && setIsMobileExpanded(!isMobileExpanded)}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {/* Typewriter Styles */}
      <style>{`
        /* Base state: hidden last name */
        .last-name-animated {
          overflow: hidden;
          white-space: nowrap;
          max-width: 0;
          border-right: 2px solid transparent; /* Hide border initially */
          display: inline-block;
          vertical-align: bottom;
          /* Smooth closing transition for max-width */
          transition: max-width 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        /* Desktop Hover: Open and Type */
        @media (min-width: 1024px) {
          .group:hover .last-name-animated {
            border-right: 2px solid rgba(255,255,255,.75);
            margin-left: 0.3em;
            /* Animation handles both expansion and cursor */
            animation: 
              typewriter 1.5s steps(20) forwards, 
              blinkingCursor 2.2s steps(2) normal forwards; 
              /* Cursor runs a bit longer than type (1.5s) then stops */
          }
        }

        /* Mobile Expanded: Open without typing animation */
        @media (max-width: 1023px) {
          .mobile-expanded .last-name-animated {
            max-width: 400px;
            margin-left: 0.3em;
            border-right: none;
            transition: max-width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }
        }

        @keyframes typewriter {
          from { max-width: 0; }
          to { max-width: 400px; }
        }
        
        /* Cursor blinks then disappears */
        @keyframes blinkingCursor {
          0% { border-right-color: rgba(255,255,255,.75); }
          20% { border-right-color: transparent; }
          40% { border-right-color: rgba(255,255,255,.75); }
          60% { border-right-color: transparent; }
          75% { border-right-color: rgba(255,255,255,.75); }
          100% { border-right-color: transparent; }
        }
        
        .typewriter-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
      `}</style>

      {/* Full Image */}
      <div className="absolute inset-0">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 lg:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:from-black/40 lg:via-transparent"></div>
      </div>

      {/* Badge Métier Prominent - Modal on Click */}
      <div className="absolute top-6 right-6 z-20">
        <motion.button
          layout
          initial={false}
          animate={{
            scale: isCardHovered ? 1.05 : 1,
            backgroundColor: isCardHovered ? '#4a4b3d' : '#404134',
          }}
          transition={{
            type: "spring",
            stiffness: 100, // Smoother spring
            damping: 20,
            mass: 1
          }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          className="text-white text-[11px] font-bold px-6 py-3 rounded-full shadow-2xl ring-1 ring-white/20 backdrop-blur-md uppercase tracking-wider flex items-center justify-center gap-2 group/badge cursor-pointer overflow-hidden min-h-[40px]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {isCardHovered ? (
              <motion.div
                key="diploma"
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center gap-2"
              >
                <span className="whitespace-nowrap">Diplôme & Formations</span>
                <ArrowUpRight size={16} className="text-white shrink-0" />
              </motion.div>
            ) : (
              <motion.div
                key="title"
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="whitespace-nowrap">{member.title}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Bottom Content Area */}
      <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out z-10
        shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-[32px] p-5
        
        /* Spacing and Width Logic (Uniform expansion downwards and outwards) */
        ${isMobileExpanded
          ? 'bottom-3 w-[92%] bg-black/60 border-white/30 backdrop-blur-xl border mobile-expanded'
          : 'bottom-6 w-[85%] bg-white/10 border-white/20 backdrop-blur-md border'}
        
        /* Desktop Logic */
        lg:bottom-6 lg:w-[85%] lg:bg-white/10 lg:border-white/20 lg:backdrop-blur-md
        lg:group-hover:bottom-3 lg:group-hover:w-[92%] lg:group-hover:bg-black/60 lg:group-hover:border-white/30 lg:group-hover:backdrop-blur-xl
      `}>

        <div className="typewriter-container h-8 relative flex items-center justify-center">
          <h3 className="text-2xl font-bold font-sans flex items-center text-white leading-tight">
            <span>{firstName}</span>
            <span className="last-name-animated">{lastName}</span>
          </h3>

          {/* Chevron Fixed on the right - follows Apple affordance pattern */}
          <div className={`
            absolute right-0 transition-all duration-700 ease-in-out flex items-center
            lg:group-hover:opacity-0 lg:group-hover:translate-x-4
            ${isMobileExpanded ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}
          `}>
            <ChevronDown
              size={24}
              strokeWidth={3}
              className="text-white/70 -rotate-90"
            />
          </div>
        </div>

        {/* Revealable Content */}
        <div className={`
          grid transition-[grid-template-rows] duration-500 w-full
          ${isMobileExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
          lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]
        `}>
          <div className="overflow-hidden">
            <div className="flex flex-col items-center gap-4 pt-4">
              {/* Sports Style Updated */}
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-white/40 shrink-0" />

                {/* Leonie Specific Layout or Standard */}
                {isLeonie ? (
                  <div className="flex flex-col items-center text-xs font-medium text-white/90">
                    {member.sports.map((sport) => (
                      <span key={sport}>{sport}</span>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs font-medium text-white/90">
                    {member.sports.map((sport, idx) => (
                      <React.Fragment key={sport}>
                        <span>{sport}</span>
                        {idx < member.sports.length - 1 && <span className="text-white/20 text-[10px]">•</span>}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA Doctolib */}
              <a
                href={member.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevent card toggle when clicking button
                className="flex items-center gap-2 bg-[#107ACA] hover:bg-[#0e69ad] active:bg-[#0c5a94] text-white px-5 py-3 rounded-xl font-semibold text-xs transition-colors w-full justify-center shadow-lg"
              >
                <img src="/images/doctolib/D_White.svg" alt="" className="w-4 h-4" />
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Practitioner Modal (Official Anthracite Theme) */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={member.name}
        maxWidth={isLeonie ? 'xl' : 'md'}
        className="bg-[#1e1c1a] border border-white/5"
      >
        <div className="space-y-12 py-2">
          {/* Content Section */}
          <div className="space-y-10">

            {/* Diploma Section */}
            {member.diploma && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white tracking-wide normal-case">
                  Diplôme d'État
                </h4>
                <div className="text-slate-300 text-lg font-medium leading-relaxed">
                  {member.diploma}
                </div>
              </div>
            )}

            {/* Certifications Section */}
            {member.certifications && member.certifications.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white tracking-wide normal-case">
                  Formations & Expertise
                </h4>
                <ul className="space-y-4">
                  {member.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-4 text-lg text-slate-300 font-medium leading-relaxed">
                      <span className="text-[#404134] mt-2.5 text-[8px] shrink-0">●</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* RPPS Number */}
            {member.rpps && (
              <div className="pt-8 flex justify-end">
                <p className="text-sm font-mono font-medium text-slate-500 uppercase tracking-widest px-4 py-2 rounded-xl bg-white/5 border border-white/5">
                  RPPS {member.rpps}
                </p>
              </div>
            )}

            {/* Footer Action */}
            <div className="pt-2">
              <a
                href={member.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#107ACA] hover:bg-[#0e69ad] active:scale-[0.98] text-white py-4 rounded-2xl text-lg font-bold shadow-2xl transition-all duration-200"
              >
                <img src="/images/doctolib/D_White.svg" alt="" className="w-6 h-6" />
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </article>
  );
};

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
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-text-main">
                Prêt à démarrer votre <span className="text-gradient-primary">rééducation ?</span>
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                L’équipe de Batignolles Kiné Sport vous accompagne dans votre rééducation, que vous soyez sportif ou non, pour vous aider à retrouver vos capacités, améliorer vos performances ou reprendre vos activités quotidiennes sans douleur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#107ACA] text-white font-semibold text-base transition-all duration-200 hover:bg-[#0e69ad] hover:shadow-lg active:scale-95"
              >
                <img src="/images/doctolib/D_White.svg" alt="" loading="lazy" className="w-5 h-5" />
                Prendre rendez-vous
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-900 font-semibold text-base transition-all duration-200 hover:border-primary hover:text-primary active:scale-95"
              >
                Nous contacter
              </a>
            </div>

            <p className="text-sm text-slate-500 pt-4">
              Cabinet ouvert du lundi au vendredi · Rendez-vous en urgence sous 48h
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};