import React from 'react';
import { motion } from 'framer-motion';
import { Head } from 'vite-react-ssg';
import { SEO } from '../components/layout/SEO';
import { Section } from '../components/layout/Section';
import { TEAM, DOCTOLIB_URL } from '../utils/constants';
import { generatePersonSchema } from '../utils/structuredData';
import { Link } from 'react-router-dom';
import { ArrowUpRight, GraduationCap, Award, Dumbbell } from 'lucide-react';
import { staggerContainer, fadeUp } from '../utils/animations';

const TeamCard: React.FC<{ member: typeof TEAM[0] }> = ({ member }) => {
  const slug = member.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.article
      variants={fadeUp}
      id={slug}
      className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 border border-slate-100"
    >
      {/* Image Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={member.image}
          alt={`${member.name}, ${member.title} à Batignolles Kiné Sport Paris 17`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Name overlay on image */}
        <div className="absolute bottom-0 inset-x-0 p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
            {member.name}
          </h2>
          <p className="text-white/80 font-medium mt-1">{member.title}</p>
        </div>
      </div>

      {/* Content Section — Fully crawlable by Google */}
      <div className="p-6 md:p-8 space-y-6">

        {/* Sports */}
        {member.sports && member.sports.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Dumbbell size={16} className="text-primary" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Sports pratiqués</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {member.sports.map((sport, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs text-primary font-medium">
                  {sport}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Diploma */}
        {member.diploma && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={16} className="text-primary" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Diplôme</h3>
            </div>
            <p className="text-sm text-slate-600">{member.diploma}</p>
          </div>
        )}

        {/* Certifications */}
        {member.certifications && member.certifications.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-primary" />
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Formations & Expertise</h3>
            </div>
            <ul className="space-y-2">
              {member.certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-primary mt-1.5 text-[6px] shrink-0">●</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* RPPS */}
        {member.rpps && (
          <p className="text-xs text-slate-400 font-mono">
            N° RPPS : {member.rpps}
          </p>
        )}

        {/* CTA Doctolib */}
        <a
          href={member.doctolibUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-[#107ACA] hover:bg-[#0e69ad] active:scale-[0.98] text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg"
        >
          <img src="/images/doctolib/D_White.svg" alt="" className="w-5 h-5" />
          Prendre rendez-vous avec {member.name.split(' ')[0]}
        </a>
      </div>
    </motion.article>
  );
};

export const Team: React.FC = () => {
  return (
    <>
      <SEO
        title="Notre Équipe de Kinés du Sport — Paris 17"
        description={`Découvrez l'équipe de Batignolles Kiné Sport : ${TEAM.map(m => m.name).join(', ')}. Kinésithérapeutes du sport diplômés, spécialisés course, rugby, danse, post-partum. Paris 17.`}
        breadcrumbs={[
          { name: 'Accueil', url: 'https://batignolleskinesport.fr' },
          { name: 'Équipe', url: 'https://batignolleskinesport.fr/equipe' }
        ]}
      />

      {/* Person Schemas for each practitioner — enriched with bio */}
      <Head>
        {TEAM.map(member => (
          <script key={member.id} type="application/ld+json">
            {JSON.stringify(generatePersonSchema({
              name: member.name,
              title: member.title,
              image: member.image,
              doctolibUrl: member.doctolibUrl,
              rpps: member.rpps,
              diploma: member.diploma,
              specialties: member.specialties,
              bio: member.bio,
            }))}
          </script>
        ))}
      </Head>

      {/* Hero Section */}
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

        {/* Team Grid — Full content exposed */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2"
        >
          {TEAM.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>

        {/* SEO Content Block — Crawlable by Google */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-3xl bg-slate-50 border border-slate-100 p-8 md:p-12 space-y-6 text-sm text-slate-600 leading-relaxed"
        >
          <h2 className="text-xl md:text-2xl font-bold text-text-main">
            Une équipe de kinésithérapeutes du sport au cœur de Paris 17
          </h2>
          <p>
            Batignolles Kiné Sport réunit quatre kinésithérapeutes diplômés d'État, tous spécialisés dans la prise en charge du sportif : <strong>Justine Josse</strong>, <strong>Leonie Taton</strong>, <strong>Léa Hlubina</strong> et <strong>Martin Bonnin</strong>. Chacun apporte une expertise complémentaire — course à pied, danse, gymnastique, rugby — pour couvrir l'ensemble des blessures et pathologies rencontrées dans la pratique sportive amateur ou de compétition.
          </p>
          <p>
            Notre cabinet de kinésithérapie du sport, situé au 6 rue des Batignolles (Paris 17<sup>e</sup>), propose des bilans individualisés, des protocoles de rééducation post-traumatique et des programmes de réathlétisation. Nos kinésithérapeutes interviennent sur les pathologies musculo-squelettiques les plus fréquentes : entorses, tendinopathies, douleurs lombaires, fractures de fatigue, syndromes rotuliens, lésions musculaires et suites opératoires (LCA, coiffe des rotateurs, etc.).
          </p>
          <p>
            Formés aux approches les plus récentes — thérapie manuelle orthopédique, pilates clinique, neurodynamique, analyse de la foulée, renforcement fonctionnel — nos praticiens s'engagent dans une formation continue rigoureuse pour vous offrir une prise en charge fondée sur les dernières données probantes de la recherche en kinésithérapie sportive.
          </p>
          <p>
            Que vous vous prépariez à un marathon, que vous repreniez le sport après une opération, ou que vous cherchiez à prévenir les blessures liées à votre discipline, l'équipe de Batignolles Kiné Sport vous accompagne à chaque étape, du premier bilan au retour à la compétition.
          </p>
        </motion.div>
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
                L'équipe de Batignolles Kiné Sport vous accompagne dans votre rééducation, que vous soyez sportif ou non, pour vous aider à retrouver vos capacités, améliorer vos performances ou reprendre vos activités quotidiennes sans douleur.
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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-900 font-semibold text-base transition-all duration-200 hover:border-primary hover:text-primary active:scale-95"
              >
                Nous contacter
              </Link>
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