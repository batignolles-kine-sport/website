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
import { PracticeCard } from '../ui/PracticeCard';
import { MAIN_PRACTICES } from '../../pages/Pratiques';

export const ExpertiseSection: React.FC = () => {
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
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 max-w-7xl">
                            <motion.p
                                variants={fadeUp}
                                className="text-base md:text-lg leading-relaxed max-w-2xl text-slate-500"
                            >
                                Nous combinons expertise scientifique, suivi individualisé et pédagogie pour vous accompagner du diagnostic à la reprise.
                            </motion.p>

                            {/* Desktop CTA */}
                            <div className="hidden lg:block shrink-0">
                                <a
                                    href="/pratiques"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-900 hover:border-primary hover:text-primary transition-colors duration-300 shadow-sm font-bold text-xs"
                                >
                                    Voir tout
                                    <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Grid - Unified Design */}
                <div className="relative">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {MAIN_PRACTICES.map((practice) => (
                            <PracticeCard
                                key={practice.id}
                                practice={practice}
                                variant="interactive"
                                isPrimary={practice.isPrimary}
                            />
                        ))}
                    </motion.div>
                </div>

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
