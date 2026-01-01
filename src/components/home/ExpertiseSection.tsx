import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import {
    Activity,
    ClipboardList,
    Baby,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';

const EXPERTISE_DATA = [
    {
        id: 'running',
        icon: Activity,
        badge: 'Course',
        title: 'Vous courez (ou voulez recourir)',
        lead: 'Reprendre progressivement, sans repartir à zéro.',
        highlights: [
            'Bilan précis + repères simples (douleur, charge)',
            'Plan de reprise compatible avec vos objectifs',
            'Réduction du risque de rechute'
        ]
    },
    {
        id: 'post-op',
        icon: ClipboardList,
        badge: 'Post‑op / Trauma',
        title: 'Après une opération ou un traumatisme',
        lead: 'Retrouver mobilité, force et confiance — étape par étape.',
        highlights: [
            'Objectifs clairs à chaque séance',
            'Renforcement, contrôle moteur, réassurance',
            'Retour au sport encadré et mesurable'
        ]
    },
    {
        id: 'post-partum',
        icon: Baby,
        badge: 'Post‑partum',
        title: 'Post‑partum & plancher pelvien',
        lead: 'Reprendre le sport en sécurité, en comprenant ce qui se passe.',
        highlights: [
            'Rééducation périnéale et prise en charge globale',
            'Reprise progressive adaptée au quotidien',
            'Renforcement pour éviter les symptômes'
        ]
    },
    {
        id: 'prevention',
        icon: ShieldCheck,
        badge: 'Prévention',
        title: 'Prévention & préparation physique',
        lead: 'Rester durablement sur le terrain, sans accumuler les alertes.',
        highlights: [
            'Renforcement ciblé et contrôle moteur',
            'Travail technique et gestion de la charge',
            'Préparer une saison ou une échéance'
        ]
    }
];

export const ExpertiseSection: React.FC = () => {
    return (
        <section className="w-full relative">
            <div className="w-full">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <SectionHeader
                        badge="EXPERTISE"
                        title={
                            <>
                                Motifs de<br />
                                <span className="text-primary">consultation.</span>
                            </>
                        }
                        description="Notre prise en charge s'adresse aux sportifs de tous niveaux, du post-opératoire à la recherche de performance."
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.3 }}
                        className="hidden md:block pb-2"
                    >
                        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-primary">
                            <ArrowRight className="w-6 h-6" />
                        </div>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {EXPERTISE_DATA.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 md:p-10 rounded-lg bg-white border border-slate-100 hover:border-border-subtle shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Background Layer */}
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] transition-colors duration-500" />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-slate-200 rounded-full">
                                        <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">{card.badge}</span>
                                    </div>
                                    <div className="w-14 h-14 rounded-lg bg-surface flex items-center justify-center text-primary border border-transparent group-hover:border-primary/10 group-hover:scale-105 transition-all duration-300">
                                        <card.icon className="w-7 h-7 stroke-[1.5]" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                    {card.title}
                                </h3>

                                <p className="text-slate-500 mb-8 leading-relaxed font-light">
                                    {card.lead}
                                </p>

                                <ul className="space-y-3">
                                    {card.highlights.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-slate-600">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors duration-300 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

