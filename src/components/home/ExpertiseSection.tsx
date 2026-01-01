import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { staggerContainer, fadeUp, fadeRight, hoverScale } from '../../utils/animations';
import {
    Activity,
    ClipboardList,
    Baby,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';

const EXPERTISE_DATA = [
    {
        id: 'sport-perf',
        badge: 'BLOG',
        title: 'Sport & performance',
        lead: 'Coureur, terrain, reprise sans douleur et charge maîtrisée.',
        tags: ['RUNNING', 'RETOUR TERRAIN', 'PRÉPA PHYSIQUE'],
        highlights: [
            'Prise en charge du coureur',
            'Kiné du sport',
            'Réathlétisation'
        ]
    },
    {
        id: 'reeducation',
        badge: 'BLOG',
        title: 'Rééducation & post-op',
        lead: 'Post-trauma et post-op : mobilité, force et confiance.',
        tags: ['POST-OP', 'MOBILITÉ', 'FORCE'],
        highlights: [
            'Rééducation globale',
            'Suivi post-op / traumato',
            'Progressions sécurisées'
        ]
    },
    {
        id: 'prevention',
        badge: 'BLOG',
        title: 'Prévention & spécifique',
        lead: 'Prévention des récidives, plancher pelvien, reprise progressive.',
        tags: ['PRÉVENTION', 'PLANCHER PELVIEN', 'CHARGE PROGRESSIVE'],
        highlights: [
            'Prévention et contrôle moteur',
            'Kiné de la femme (partum / post-partum)'
        ]
    },
    {
        id: 'women',
        badge: 'BLOG',
        title: 'Kiné de la femme',
        lead: 'Grossesse, post-partum, périnée, reprise sportive en douceur.',
        tags: ['FEMMES', 'PÉRINÉE', 'RETOUR AU SPORT'],
        highlights: [
            'Rééducation périnéale',
            'Pré / post-partum',
            'Reprise sport sécurisée'
        ]
    }
];

export const ExpertiseSection: React.FC = () => {
    // Merge variants for the card (Entry + Hover)
    const cardVariants = {
        ...fadeUp,
        ...hoverScale
    };

    return (
        <section className="w-full relative py-12">
            <div className="w-full">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        className="flex-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeRight}
                    >
                        <SectionHeader
                            badge="EXPERTISE"
                            title={
                                <>
                                    Motifs de<br />
                                    <span className="bg-gradient-to-r from-[#3b402e] to-[#6d744d] bg-clip-text text-transparent">consultation.</span>
                                </>
                            }
                            description="Notre prise en charge s'adresse aux sportifs de tous niveaux, du post-opératoire à la recherche de performance."
                        />
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {EXPERTISE_DATA.map((card, index) => {
                        const isMain = index === 0;
                        return (
                            <motion.div
                                key={card.id}
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                                className={`
                                    relative p-8 rounded-3xl flex flex-col h-full transition-all duration-300
                                    ${isMain
                                        ? 'bg-[#193F2B] text-white shadow-xl'
                                        : 'bg-white text-slate-900 border border-slate-100 shadow-card hover:shadow-lg'
                                    }
                                `}
                            >
                                {/* Header: Title + Blog Badge */}
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className={`text-2xl font-bold leading-tight ${isMain ? 'text-white' : 'text-slate-900'}`}>
                                        {card.title}
                                    </h3>
                                    <span className={`text-[10px] font-bold tracking-widest uppercase mt-1 ${isMain ? 'text-white/60' : 'text-primary'}`}>
                                        {card.badge}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className={`text-sm font-light leading-relaxed mb-6 ${isMain ? 'text-white/80' : 'text-slate-500'}`}>
                                    {card.lead}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {card.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className={`
                                                px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase
                                                ${isMain
                                                    ? 'bg-white/10 text-white border border-white/10'
                                                    : 'bg-slate-50 text-slate-600 border border-slate-100'
                                                }
                                            `}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Highlights */}
                                <ul className="space-y-3 mt-auto">
                                    {card.highlights.map((item, i) => (
                                        <li key={i} className={`flex items-start gap-3 text-sm font-medium ${isMain ? 'text-white' : 'text-slate-600'}`}>
                                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isMain ? 'bg-white/80' : 'bg-primary'}`} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="mt-16 flex justify-center">
                    <a
                        href="/pathologies"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-900 hover:border-primary hover:text-primary transition-colors duration-300 shadow-sm font-medium"
                    >
                        Voir toutes nos prises en charge
                    </a>
                </div>
            </div>
        </section>
    );
};

