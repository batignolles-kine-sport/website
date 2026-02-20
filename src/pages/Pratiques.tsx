import React from 'react';
import { motion } from 'framer-motion';
import { Head } from 'vite-react-ssg';
import { SEO } from '../components/layout/SEO';
import { Section } from '../components/layout/Section';
import { DOCTOLIB_URL } from '../utils/constants';
import { generateFAQSchema } from '../utils/structuredData';
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
    FootprintsIcon,
    ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeUp } from '../utils/animations';

// Pratiques principales
export const MAIN_PRACTICES = [
    {
        id: 'kine-sport',
        title: 'Kinésithérapie du sport',
        description: 'Accompagnement du sportif : retour terrain sans douleur et performance optimisée.',
        image: '/images/practices/kine-sport.webp',
        icon: Activity,
        highlights: [
            'Bilan kiné du sportif',
            'Plan de soin sur mesure',
            'Réathlétisation progressive',
            'Prévention des blessures'
        ]
    },
    {
        id: 'reeducation',
        title: 'Rééducation globale',
        description: 'Suivi post-trauma ou chirurgie : retour à l’autonomie avec des soins adaptés.',
        image: '/images/practices/reeducation.webp',
        icon: HeartPulse,
        highlights: [
            'Prise en charge globale',
            'Suivi post-opératoire strict',
            'Rééducation sur mesure',
            'Exercices personnalisés'
        ]
    },
    {
        id: 'runner',
        title: 'Prise en charge du coureur',
        description: 'Accompagnement personnalisé du coureur, du profil débutant au confirmé.',
        image: '/images/practices/coureur.webp',
        icon: FootprintsIcon,
        isPrimary: true,
        highlights: [
            'Soins des blessures de course',
            'Analyse vidéo de course',
            'Plan d’entraînement dédié',
            'Conseils et prévention'
        ]
    },
    {
        id: 'women',
        title: 'Kiné de la femme',
        description: 'Rééducation abdominale post-partum et reprise du sport sécurisée et personnalisée.',
        image: '/images/practices/women.webp',
        icon: Baby,
        highlights: [
            'Rééducation abdominale',
            'Traitement du diastasis',
            'Reprise sportive progressive',
            'Soin des pathologies sportives'
        ]
    }
];

import { PracticeCard } from '../components/ui/PracticeCard';

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
        zone: 'Membre supérieur',
        items: [
            'Traumatisme et chirurgie du membre supérieur',
            'Tendinopathie de l\'épaule',
            'Instabilité de l\'épaule',
            'Capsulite',
            'Tennis elbow',
            'Pathologie de la main et du poignet'
        ]
    },
    {
        zone: 'Membre inférieur',
        items: [
            'Entorse de cheville',
            'Tendinopathie du membre inférieur',
            'Ligament croisé antérieur (LCA) en pré et post-opératoire',
            'Entorse de genou',
            'Syndrome fémoropatellaire',
            'Syndrome de l\'essuie-glace',
            'Lésion musculaire',
            'Pubalgie',
            'Chirurgie du membre inférieur (PTH, PTG, ligamentoplastie…)'
        ]
    },
    {
        zone: 'Tronc',
        items: [
            'Cervicalgie',
            'Névralgie cervico-brachiale',
            'Dorsalgie',
            'Lombalgie',
            'Rééducation abdominale post-partum'
        ]
    }
];

export const Pratiques: React.FC = () => {
    return (
        <>
            <SEO
                title="Kinésithérapie du Sport : Nos Spécialités"
                description="4 spécialités kiné sport : coureurs, post-op, femmes. 85% de retour terrain en 8 sem. 📍 Paris 17 Batignolles – RDV Doctolib."
                breadcrumbs={[
                    { name: 'Accueil', url: 'https://batignolleskinesport.fr' },
                    { name: 'Pratiques', url: 'https://batignolleskinesport.fr/pratiques' }
                ]}
            />

            {/* FAQ Schema */}
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(generateFAQSchema([
                        {
                            question: 'Quelles sont vos spécialités en kinésithérapie ?',
                            answer: 'Nous sommes spécialisés en kinésithérapie du sport, rééducation globale post-opératoire, prise en charge du coureur et kinésithérapie de la femme (rééducation abdominale post-partum). Notre équipe utilise des techniques avancées comme la thérapie manuelle, les ondes de choc, le dry needling et l\'analyse de la foulée.'
                        },
                        {
                            question: 'Prenez-vous en charge les sportifs de tous niveaux ?',
                            answer: 'Oui, nous accompagnons tous les profils de sportifs, du débutant à l\'athlète confirmé. Notre approche personnalisée s\'adapte à vos objectifs spécifiques, que ce soit pour une reprise après blessure, une optimisation de performance ou de la prévention.'
                        },
                        {
                            question: 'Combien de séances sont nécessaires ?',
                            answer: 'Le nombre de séances varie selon votre pathologie et vos objectifs. Lors du premier bilan, nous établissons un plan de traitement personnalisé. En moyenne, un suivi peut aller de quelques séances pour une blessure mineure à plusieurs semaines pour une rééducation post-opératoire.'
                        },
                        {
                            question: 'Proposez-vous de la réathlétisation ?',
                            answer: 'Oui, la réathlétisation fait partie intégrante de notre approche. Nous vous accompagnons progressivement du retour au mouvement jusqu\'à la reprise sportive complète, en validant les critères de performance et de sécurité à chaque étape.'
                        }
                    ]))}
                </script>
            </Head>

            {/* Hero Section */}
            <section className="relative border-b border-slate-100 min-h-[80vh] flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 w-full">
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

                {/* Scroll Indicator */}
                <motion.a
                    href="#main-practices"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-primary transition-colors cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('main-practices')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <span className="text-xs uppercase tracking-widest font-medium">Découvrir</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </motion.a>
            </section>

            {/* Main Practices Section */}
            <Section id="main-practices" spacing="default" className="border-b border-slate-100 bg-slate-50/50">
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
                            Quatre piliers d'expertise pour répondre à vos besoins spécifiques
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {MAIN_PRACTICES.map((practice) => {
                            const Icon = practice.icon;
                            return (
                                <motion.article
                                    key={practice.id}
                                    variants={fadeUp}
                                    className="group relative h-[500px] rounded-[2rem] overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-all duration-500"
                                >
                                    {/* Image - Full Color Permanent */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={practice.image}
                                            alt={practice.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
                                    </div>

                                    {/* Floating Icon */}
                                    <div className="absolute top-0 right-0 p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                        <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-x-0 bottom-0 p-8">

                                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">{practice.title}</h3>
                                        <p className="text-gray-200 text-sm mb-6 max-w-[95%] font-medium leading-relaxed drop-shadow-sm">{practice.description}</p>

                                        {/* Highlights as Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {practice.highlights.map((h, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white/95 font-medium shadow-sm">
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </motion.div>
            </Section>

            {/* Comparison Section - Featured Snippet Optimized */}
            <Section spacing="default" className="border-b border-slate-100">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="space-y-12"
                >
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main">
                            Kiné du Sport vs Kiné Classique : <span className="text-gradient-primary">Quelle différence ?</span>
                        </h2>
                        <p className="text-lg text-text-muted">
                            <strong>Réponse directe :</strong> La kinésithérapie du sport se concentre sur la performance,
                            la prévention et le retour terrain optimisé, tandis que la kiné classique vise principalement
                            la rééducation post-traumatique et le retour à l'autonomie quotidienne.
                        </p>
                    </div>

                    <motion.div variants={fadeUp} className="overflow-x-auto">
                        <table className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-card overflow-hidden">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100">
                                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Critère</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-primary">Kiné du Sport</th>
                                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">Kiné Classique</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Approche</td>
                                    <td className="px-6 py-4 text-sm text-slate-700">Performance + prévention + retour terrain</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">Rééducation post-traumatique</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Objectif final</td>
                                    <td className="px-6 py-4 text-sm text-slate-700">Retour au sport optimisé</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">Retour à l'autonomie quotidienne</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Analyse</td>
                                    <td className="px-6 py-4 text-sm text-slate-700">Analyse vidéo de foulée, tests spécifiques</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">Bilan fonctionnel standard</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Techniques</td>
                                    <td className="px-6 py-4 text-sm text-slate-700">Ondes de choc, dry needling, réathlétisation</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">Mobilisations, exercices fonctionnels</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Durée séance</td>
                                    <td className="px-6 py-4 text-sm text-slate-700">45-60 minutes</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">30 minutes</td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Suivi</td>
                                    <td className="px-6 py-4 text-sm text-slate-700">Critères de reprise sport validés</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">Récupération fonctionnelle</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>

                    <div className="text-center">
                        <p className="text-sm text-slate-500">
                            Chez BKS, nous combinons les deux approches pour une prise en charge complète.
                        </p>
                    </div>
                </motion.div>
            </Section>

            {/* Complementary Practices Section - Hidden for now
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
            */}

            {/* Pathologies Section - SEO Optimized */}
            <Section spacing="default" className="border-b border-slate-100">
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PATHOLOGIES.map((category) => (
                            <motion.article
                                key={category.zone}
                                variants={fadeUp}
                                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-xl transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                                    {category.zone}
                                </h3>
                                <ul className="space-y-3">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </Section>


            {/* FAQ Section */}
            <Section spacing="default" className="border-b border-slate-100 bg-slate-50/50">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="space-y-12"
                >
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main">
                            Questions <span className="text-gradient-primary">fréquentes</span>
                        </h2>
                        <p className="text-lg text-text-muted">
                            Tout ce que vous devez savoir sur nos pratiques
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        <motion.details
                            variants={fadeUp}
                            className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer group border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <summary className="font-semibold list-none flex justify-between items-center text-text-main text-lg">
                                Quelles sont vos spécialités en kinésithérapie ?
                                <span className="transition group-open:rotate-180 text-primary">
                                    <ChevronDown size={24} />
                                </span>
                            </summary>
                            <p className="text-text-muted mt-4 leading-relaxed">
                                Nous sommes spécialisés en kinésithérapie du sport, rééducation globale post-opératoire, prise en charge du coureur et kinésithérapie de la femme (rééducation abdominale post-partum). Notre équipe utilise des techniques avancées comme la thérapie manuelle, les ondes de choc, le dry needling et l'analyse de la foulée.
                            </p>
                        </motion.details>

                        <motion.details
                            variants={fadeUp}
                            className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer group border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <summary className="font-semibold list-none flex justify-between items-center text-text-main text-lg">
                                Prenez-vous en charge les sportifs de tous niveaux ?
                                <span className="transition group-open:rotate-180 text-primary">
                                    <ChevronDown size={24} />
                                </span>
                            </summary>
                            <p className="text-text-muted mt-4 leading-relaxed">
                                Oui, nous accompagnons tous les profils de sportifs, du débutant à l'athlète confirmé. Notre approche personnalisée s'adapte à vos objectifs spécifiques, que ce soit pour une reprise après blessure, une optimisation de performance ou de la prévention.
                            </p>
                        </motion.details>

                        <motion.details
                            variants={fadeUp}
                            className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer group border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <summary className="font-semibold list-none flex justify-between items-center text-text-main text-lg">
                                Combien de séances sont nécessaires ?
                                <span className="transition group-open:rotate-180 text-primary">
                                    <ChevronDown size={24} />
                                </span>
                            </summary>
                            <p className="text-text-muted mt-4 leading-relaxed">
                                Le nombre de séances varie selon votre pathologie et vos objectifs. Lors du premier bilan, nous établissons un plan de traitement personnalisé. En moyenne, un suivi peut aller de quelques séances pour une blessure mineure à plusieurs semaines pour une rééducation post-opératoire.
                            </p>
                        </motion.details>

                        <motion.details
                            variants={fadeUp}
                            className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer group border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <summary className="font-semibold list-none flex justify-between items-center text-text-main text-lg">
                                Proposez-vous de la réathlétisation ?
                                <span className="transition group-open:rotate-180 text-primary">
                                    <ChevronDown size={24} />
                                </span>
                            </summary>
                            <p className="text-text-muted mt-4 leading-relaxed">
                                Oui, la réathlétisation fait partie intégrante de notre approche. Nous vous accompagnons progressivement du retour au mouvement jusqu'à la reprise sportive complète, en validant les critères de performance et de sécurité à chaque étape.
                            </p>
                        </motion.details>
                    </div>
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
