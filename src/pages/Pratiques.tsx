import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/layout/SEO';
import { DOCTOLIB_URL } from '../utils/constants';
import {
    Activity,
    HeartPulse,
    Baby,
    Hand,
    Zap,
    Droplet,
    Scissors,
    Target,
    TrendingUp,
    FootprintsIcon
} from 'lucide-react';
import { staggerContainer, fadeUp } from '../utils/animations';

// Pratiques principales
const MAIN_PRACTICES = [
    {
        id: 'kine-sport',
        title: 'Kinésithérapie du Sport',
        description: 'Accompagnement des sportifs de tous niveaux : prévention, traitement des blessures, analyse du geste sportif et optimisation de la performance.',
        image: '/images/practices/kine-sport.png',
        icon: Activity,
        highlights: [
            'Diagnostic kinésithérapique du sportif',
            'Réathlétisation progressive',
            'Analyse vidéo du geste technique',
            'Prévention des blessures'
        ]
    },
    {
        id: 'reeducation',
        title: 'Rééducation Post-Traumatique',
        description: 'Suivi rigoureux après chirurgie ou traumatisme : retour à l\'autonomie rapide et sécurisé avec protocoles adaptés à chaque pathologie.',
        image: '/images/practices/reeducation.png',
        icon: HeartPulse,
        highlights: [
            'Protocoles post-opératoires stricts',
            'Mobilisation articulaire progressive',
            'Drainage lymphatique manuel',
            'Récupération fonctionnelle globale'
        ]
    },
    {
        id: 'women',
        title: 'Kiné de la Femme',
        description: 'Expertise en rééducation périnéale, pré/post-partum et reprise sportive sécurisée. Accompagnement personnalisé à chaque étape.',
        image: '/images/practices/women.png',
        icon: Baby,
        highlights: [
            'Rééducation périnéale',
            'Suivi pré et post-partum',
            'Traitement du diastasis',
            'Reprise sportive progressive'
        ]
    }
];

// Techniques et outils complémentaires
const COMPLEMENTARY_PRACTICES = [
    {
        id: 'manual-therapy',
        title: 'Thérapie Manuelle',
        icon: Hand,
        description: 'Mobilisations articulaires et techniques tissulaires pour restaurer la mobilité.'
    },
    {
        id: 'shockwave',
        title: 'Ondes de Choc',
        icon: Zap,
        description: 'Traitement des tendinopathies chroniques et points trigger.'
    },
    {
        id: 'dry-needling',
        title: 'Dry Needling',
        icon: Droplet,
        description: 'Relâchement des tensions musculaires et points trigger myofasciaux.'
    },
    {
        id: 'taping',
        title: 'K-Taping / Strapping',
        icon: Scissors,
        description: 'Soutien articulaire et musculaire pour protection et proprioception.'
    },
    {
        id: 'reathletisation',
        title: 'Réathlétisation',
        icon: Target,
        description: 'Retour au terrain avec validation des critères de reprise sportive.'
    },
    {
        id: 'running-analysis',
        title: 'Analyse de la Foulée',
        icon: FootprintsIcon,
        description: 'Analyse vidéo sur tapis pour optimiser votre technique de course.'
    }
];

// Pathologies par zone anatomique
const PATHOLOGIES = [
    {
        zone: 'Membre Inférieur',
        items: ['Entorse de cheville', 'Tendinite d\'Achille', 'Syndrome rotulien', 'Périostite tibiale', 'Pubalgie', 'Lésion des ischio-jambiers']
    },
    {
        zone: 'Membre Supérieur',
        items: ['Tendinite de l\'épaule', 'Épicondylite', 'Syndrome du canal carpien', 'Instabilité scapulaire']
    },
    {
        zone: 'Tronc',
        items: ['Lombalgie', 'Cervicalgie', 'Douleurs thoraciques', 'Hernie discale']
    },
    {
        zone: 'Sport Spécifique',
        items: ['Course à pied', 'Rugby', 'Danse', 'Gymnastique', 'Cyclisme', 'Tennis']
    }
];

export const Pratiques: React.FC = () => {
    return (
        <>
            <SEO
                title="Nos Pratiques - Kinésithérapie du Sport Paris 17"
                description="Découvrez toutes nos pratiques de kinésithérapie : sport, rééducation post-op, kiné de la femme, thérapie manuelle et techniques avancées. Cabinet à Paris 17 Batignolles."
            />

            {/* Hero Section */}
            <section className="border-b border-slate-100">
                <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
                    <div className="space-y-8 mb-16">
                        {/* Header Section */}
                        <div className="max-w-4xl space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3 py-1 text-sm font-semibold text-primary shadow-soft">
                                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                                Pratiques
                            </div>
                            <h1 className="text-4xl font-bold leading-tight text-text-main sm:text-5xl lg:text-6xl">
                                Des kinés du sport engagés pour votre{' '}
                                <span className="text-gradient-primary">reprise rapide et durable</span>
                            </h1>
                            <p className="text-lg text-text-muted leading-relaxed">
                                Nous combinons expertise scientifique, suivi individualisé et pédagogie pour vous accompagner du diagnostic à la reprise, que vous soyez sportif amateur ou athlète confirmé.
                            </p>
                        </div>

                        {/* CTA Row */}
                        <div className="flex flex-col sm:flex-row items-start md:items-center gap-4">
                            {/* Primary CTA Button */}
                            <a
                                href={DOCTOLIB_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#107ACA] text-white font-semibold text-base transition-all duration-200 hover:bg-[#0e69ad] hover:shadow-lg active:scale-95 md:flex-shrink-0"
                            >
                                <img src="/images/doctolib/D_White.svg" alt="" loading="lazy" className="w-5 h-5" />
                                Prendre rendez-vous
                            </a>

                            {/* Secondary CTA Button */}
                            <button
                                onClick={() => {
                                    document.getElementById('main-practices')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-semibold text-base transition-all duration-200 hover:border-primary hover:text-primary active:scale-95 md:flex-shrink-0"
                            >
                                Découvrir les pratiques
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Practices Section */}
            <section id="main-practices" className="border-b border-slate-100 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="space-y-12"
                    >
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main">
                                Nos pratiques principales
                            </h2>
                            <p className="text-lg text-text-muted">
                                Trois piliers d'expertise pour répondre à vos besoins spécifiques
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MAIN_PRACTICES.map((practice, index) => {
                                const Icon = practice.icon;
                                return (
                                    <motion.article
                                        key={practice.id}
                                        variants={fadeUp}
                                        className="group relative flex flex-col rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-2xl transition-all duration-300 border border-slate-100"
                                    >
                                        {/* Image */}
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={practice.image}
                                                alt={practice.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                            {/* Icon Badge */}
                                            <div className="absolute top-4 right-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-lg">
                                                    <Icon className="w-6 h-6 text-primary" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">{practice.title}</h3>
                                            <p className="text-sm text-slate-600 mb-6 leading-relaxed">{practice.description}</p>

                                            {/* Highlights */}
                                            <ul className="space-y-2 mt-auto">
                                                {practice.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Complementary Practices Section */}
            <section className="border-b border-slate-100 py-16 md:py-24 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="space-y-12"
                    >
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main">
                                Techniques <span className="text-gradient-primary">complémentaires</span>
                            </h2>
                            <p className="text-lg text-text-muted">
                                Des outils avancés pour optimiser votre rééducation
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {COMPLEMENTARY_PRACTICES.map((technique) => {
                                const Icon = technique.icon;
                                return (
                                    <motion.div
                                        key={technique.id}
                                        variants={fadeUp}
                                        className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-base font-bold text-slate-900 mb-2">{technique.title}</h3>
                                                <p className="text-sm text-slate-600 leading-relaxed">{technique.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pathologies Section */}
            <section className="border-b border-slate-100 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="space-y-12"
                    >
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main">
                                Pathologies <span className="text-gradient-primary">traitées</span>
                            </h2>
                            <p className="text-lg text-text-muted">
                                Une expertise étendue sur toutes les zones anatomiques
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {PATHOLOGIES.map((category, index) => (
                                <motion.div
                                    key={category.zone}
                                    variants={fadeUp}
                                    className="p-8 rounded-3xl bg-white border border-slate-100 shadow-card"
                                >
                                    <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                                        {category.zone}
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {category.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
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
                                Prenez rendez-vous dès maintenant pour un premier bilan personnalisé avec l'un de nos kinésithérapeutes spécialisés.
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
