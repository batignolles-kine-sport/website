import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/layout/SEO';
import { Section } from '../components/layout/Section';
import { TEAM, DOCTOLIB_URL } from '../utils/constants';
import { ArrowUpRight } from 'lucide-react';
import Modal from '../components/ui/Modal';

const TeamCard: React.FC<{ member: typeof TEAM[0] }> = ({ member }) => {

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Identify if this is Leonie's card (ID 3)
  const isLeonie = member.id === 3;

  return (
    <article
      className={`group relative h-[480px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-slate-900 w-full transition-all duration-500`}
    >


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
            scale: 1.05,
            backgroundColor: '#4a4b3d',
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
          <span className="whitespace-nowrap">Expériences</span>
          <ArrowUpRight size={16} className="text-white shrink-0" />
        </motion.button>
      </div>

      {/* Bottom Content Area - Always Expanded */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-[32px] p-5 bottom-3 w-[92%] bg-black/60 border-white/30 backdrop-blur-xl border">

        <div className="relative flex items-center justify-center mb-4">
          <h3 className="text-xl font-bold font-sans text-white leading-tight text-center">
            {member.name}
          </h3>
        </div>

        {/* CTA Doctolib */}
        <a
          href={member.doctolibUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 bg-[#107ACA] hover:bg-[#0e69ad] active:bg-[#0c5a94] text-white px-5 py-3 rounded-xl font-semibold text-xs transition-colors w-full justify-center shadow-lg"
        >
          <img src="/images/doctolib/D_White.svg" alt="" className="w-4 h-4" />
          Prendre rendez-vous
        </a>
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
          {/* RPPS Number under name */}
          {member.rpps && (
            <div className="-mt-4 mb-4">
              <p className="text-sm font-mono font-medium text-slate-400 uppercase tracking-widest">
                RPPS {member.rpps}
              </p>
            </div>
          )}

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

            {/* Sports Section */}
            {member.sports && member.sports.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white tracking-wide normal-case">
                  Sports pratiqués
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.sports.map((sport, index) => (
                    <span key={index} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 font-medium">
                      {sport}
                    </span>
                  ))}
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

      <Section spacing="default" className="border-b border-slate-100">
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
      </Section>

      {/* CTA Section */}
      <Section spacing="default" className="bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-4xl text-center">
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
      </Section>
    </>
  );
};