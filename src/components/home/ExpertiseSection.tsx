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
        title: 'Sport & performance',
        lead: 'Coureur, terrain, reprise sans douleur and charge maîtrisée.',
        tags: ['RUNNING', 'RETOUR TERRAIN', 'PRÉPA PHYSIQUE'],
        highlights: [
            'Prise en charge du coureur',
            'Kiné du sport',
            'Réathlétisation'
        ]
    },
    {
        id: 'reeducation',
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
        title: 'Prévention & kiné de la femme',
        lead: 'Prévention des récidives. Plancher pelvien et reprise post-partum sécurisée.',
        tags: ['PRÉVENTION', 'PLANCHER PELVIEN', 'CHARGE PROGRESSIVE'],
        highlights: [
            'Prévention et contrôle moteur',
            'Kiné de la femme (partum / post-partum)'
        ]
    },
    {
        id: 'women',
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
        <div className="w-full relative">
            <div className="w-full">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <motion.div
                        className="flex-1 w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeRight}
                    >
                        <SectionHeader
                            badge="EXPERTISE"
                            title={
                                <>
                                    Nos domaines<br />
                                    <span className="text-gradient-primary">d'expertise.</span>
                                </>
                            }
                        />

                        {/* Description & CTA Layout - Matches Hero Landing */}
                        <div className="mt-2 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 max-w-7xl">
                            <p className="text-base md:text-lg leading-relaxed max-w-2xl text-slate-500">
                                Nous combinons expertise scientifique, suivi individualisé et pédagogie pour vous accompagner du diagnostic à la reprise, que vous soyez sportif amateur ou athlète confirmé.
                            </p>

                            {/* Desktop CTA */}
                            <div className="hidden lg:block shrink-0">
                                <a
                                    href="/pratiques"
                                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-slate-200 text-slate-900 hover:border-primary hover:text-primary transition-colors duration-300 shadow-sm font-bold text-sm"
                                >
                                    Voir toutes nos prises en charge
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
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
                                    relative p-5 rounded-3xl flex flex-col h-full transition-all duration-300
                                    ${isMain
                                        ? 'bg-[#193F2B] text-white shadow-xl'
                                        : 'bg-white text-slate-900 border border-slate-100 shadow-card hover:shadow-lg'
                                    }
                                `}
                            >
                                {/* Header: Title */}
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className={`text-lg font-bold leading-tight ${isMain ? 'text-white' : 'text-slate-900'}`}>
                                        {card.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className={`text-xs font-light leading-relaxed mb-4 ${isMain ? 'text-white/80' : 'text-slate-500'}`}>
                                    {card.lead}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-6">
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
                                        <li key={i} className={`flex items-start gap-3 text-xs font-medium ${isMain ? 'text-white' : 'text-slate-600'}`}>
                                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isMain ? 'bg-white/80' : 'bg-primary'}`} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="mt-8 flex justify-center lg:hidden">
                    <a
                        href="/pratiques"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-900 hover:border-primary hover:text-primary transition-colors duration-300 shadow-sm font-medium"
                    >
                        Voir toutes nos prises en charge
                    </a>
                </div>
            </div>
        </div>
    );
};

