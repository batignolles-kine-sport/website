import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';
import { LucideIcon } from 'lucide-react';

export type PracticeVariant = 'apple' | 'google' | 'glass' | 'bento' | 'interactive';

export interface PracticeCardProps {
    practice: {
        id: string;
        title: string;
        description: string;
        image: string;
        icon: LucideIcon;
        highlights: string[];
    };
    variant?: PracticeVariant;
    isPrimary?: boolean;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({ practice, variant = 'apple', isPrimary = false }) => {
    const Icon = practice.icon;

    // Apple Style (Default) - Clean, rounded, minimal
    if (variant === 'apple') {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <motion.article
                variants={fadeUp}
                className={`group relative flex flex-col h-full rounded-[2rem] overflow-hidden border transition-all duration-500 will-change-transform ${isPrimary
                    ? 'bg-primary text-white border-primary shadow-xl scale-[1.02] z-10'
                    : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-xl'
                    }`}
            >
                <div className="relative h-36 overflow-hidden">
                    <img
                        src={practice.image}
                        alt={`Illustration ${practice.title}`}
                        width="800"
                        height="600"
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: 'center 10%' }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent ${isPrimary ? 'opacity-20' : 'opacity-10'}`} />
                    <div className={`absolute top-3 right-3 backdrop-blur-md p-1.5 rounded-lg shadow-lg border ${isPrimary ? 'bg-white/10 border-white/20' : 'bg-white/95 border-white'
                        }`}>
                        <Icon className={`w-4 h-4 ${isPrimary ? 'text-white' : 'text-primary'}`} />
                    </div>
                </div>

                <div className="p-4 flex flex-col flex-1 relative">
                    <div className="flex justify-between items-start mb-1.5">
                        <h3 className={`text-base font-bold leading-tight ${isPrimary ? 'text-white' : 'text-slate-900'
                            }`}>
                            {practice.title}
                        </h3>

                        {/* Toggle Button */}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(!isOpen);
                            }}
                            className={`flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-300 ${isPrimary
                                ? 'bg-white/20 border-white/40 text-white hover:bg-white/30'
                                : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
                                }`}
                            aria-label={isOpen ? "Fermer les détails" : "Voir les détails"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5v14" />
                            </svg>
                        </button>
                    </div>

                    {/* Content Switcher */}
                    <div className="relative min-h-[4rem]">
                        {/* Description (Default) */}
                        <div className={`transition-all duration-300 absolute inset-0 ${isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                            <p className={`text-[13px] font-medium leading-relaxed ${isPrimary ? 'text-white/80' : 'text-slate-500'}`}>
                                {practice.description}
                            </p>
                        </div>

                        {/* Bullets (Toggled) */}
                        <div className={`transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute inset-0'}`}>
                            <ul className={`grid grid-cols-2 gap-x-2 gap-y-1 ${isPrimary ? 'text-white/90' : 'text-slate-600'}`}>
                                {practice.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-1.5 text-[10px] font-medium tracking-tight">
                                        <div className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${isPrimary ? 'bg-white/60' : 'bg-primary opacity-80'}`} />
                                        <span className="leading-tight">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.article>
        );
    }

    // Google Material 3 - Filled, colorful, playful
    if (variant === 'google') {
        return (
            <motion.article
                variants={fadeUp}
                className="group relative flex flex-col h-full bg-slate-50 rounded-3xl overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-300"
            >
                <div className="p-3 pb-0">
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden">
                        <img
                            src={practice.image}
                            alt={`Illustration ${practice.title}`}
                            width="800"
                            height="600"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-3 right-3 bg-primary text-white p-3 rounded-xl shadow-md">
                            <Icon className="w-5 h-5" />
                        </div>
                    </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                        {practice.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                        {practice.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-100">
                        <ul className="space-y-2">
                            {practice.highlights.slice(0, 3).map((highlight, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                                    <span className="w-1 h-1 rounded-full bg-slate-400" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.article>
        );
    }

    // Glassmorphism - Premium, dark, overlay
    if (variant === 'glass') {
        return (
            <motion.article
                variants={fadeUp}
                className="group relative flex flex-col h-full rounded-3xl overflow-hidden shadow-2xl"
            >
                <div className="absolute inset-0">
                    <img
                        src={practice.image}
                        alt={`Illustration ${practice.title}`}
                        width="800"
                        height="600"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                </div>

                <div className="relative p-6 flex flex-col h-full text-white">
                    <div className="flex justify-between items-start mb-auto">
                        <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                            <Icon className="w-5 h-5 text-white" />
                        </div>
                    </div>

                    <div className="space-y-3 mt-8">
                        <h3 className="text-xl font-bold leading-tight drop-shadow-sm">
                            {practice.title}
                        </h3>
                        <p className="text-sm text-white/80 leading-relaxed font-light">
                            {practice.description}
                        </p>
                        <div className="pt-4 border-t border-white/10">
                            <ul className="space-y-2">
                                {practice.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.article>
        );
    }

    // Bento Grid - Structured, dense, bordered
    if (variant === 'bento') {
        return (
            <motion.article
                variants={fadeUp}
                className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 hover:border-primary/50 overflow-hidden transition-colors duration-300"
            >
                <div className="flex h-32 border-b border-slate-100">
                    <div className="w-1/3 border-r border-slate-100 p-4 flex items-center justify-center bg-slate-50">
                        <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-slate-700" />
                        </div>
                    </div>
                    <div className="w-2/3 relative overflow-hidden">
                        <img
                            src={practice.image}
                            alt={`Illustration ${practice.title}`}
                            width="800"
                            height="600"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide mb-2">
                        {practice.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 border-l-2 border-primary/20 pl-3">
                        {practice.description}
                    </p>
                    <ul className="mt-auto space-y-1.5">
                        {practice.highlights.map((highlight, i) => (
                            <li key={i} className="text-[10px] font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded border border-slate-100 truncate">
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.article>
        );
    }

    // Interactive Style (Landing Page) - Compact, reveal on hover
    // Interactive Style (Landing Page) - Compact, reveal on hover
    if (variant === 'interactive') {
        const [isMobileOpen, setIsMobileOpen] = React.useState(false);

        return (
            <motion.article
                variants={fadeUp}
                style={isPrimary ? { boxShadow: '0 0 40px rgba(64,65,52,0.6)' } : undefined}
                className={`group relative flex flex-col h-[400px] rounded-[2rem] overflow-hidden border transition-all duration-500 will-change-transform cursor-pointer ${isPrimary
                    ? 'bg-primary border-2 border-[#404134] z-10'
                    : 'bg-white border-slate-100 shadow-sm hover:shadow-xl'
                    }`}
                onClick={() => {
                    // Mobile click interactive area logic could be added here if needed
                }}
            >
                {/* Background Image - Full height */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src={practice.image}
                        alt={`Illustration ${practice.title}`}
                        width="800"
                        height="600"
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full object-cover transition-all duration-700 md:group-hover:scale-110 md:group-hover:blur-[3px] ${isMobileOpen ? 'scale-105 blur-[2px]' : ''}`}
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition-opacity duration-500 ${isPrimary
                        ? 'opacity-90'
                        : `opacity-80 md:group-hover:opacity-95 ${isMobileOpen ? 'opacity-95' : ''}`
                        }`} />
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full p-8 text-white">
                    {/* Header : Icon + Description (Top) */}
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <div className={`backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-white/20 bg-white/10`}>
                                <Icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Mobile Toggle Button - Visible ONLY on Mobile */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent card click
                                    setIsMobileOpen(!isMobileOpen);
                                }}
                                className={`md:hidden flex items-center justify-center w-14 h-14 rounded-full border border-white/30 bg-white/20 backdrop-blur-md text-white transition-all duration-300 ${isMobileOpen ? 'bg-white text-primary rotate-45' : ''}`}
                                aria-label={isMobileOpen ? "Fermer les détails" : "Voir les détails"}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                            </button>
                        </div>

                        {/* Description - HIDDEN by default, visible on HOVER (Desktop) or OPEN (Mobile) */}
                        <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isMobileOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] md:group-hover:grid-rows-[1fr]'
                            }`}>
                            <div className={`overflow-hidden transition-opacity duration-500 delay-100 ${isMobileOpen ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                                }`}>
                                <p className="text-sm text-white/90 font-medium leading-relaxed max-w-[90%] drop-shadow-md pb-2">
                                    {practice.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Area : Title (Default) vs Highlights (Hover) */}
                    <div className="mt-auto relative min-h-[80px] flex items-end">

                        {/* Title - Visible by default, fades out on hover/open */}
                        <h3 className={`text-3xl font-bold leading-none drop-shadow-xl transition-all duration-500 transform ${isMobileOpen
                            ? 'opacity-0 translate-y-4'
                            : 'opacity-100 translate-y-0 md:group-hover:opacity-0 md:group-hover:translate-y-4'
                            }`}>
                            {practice.title}
                        </h3>

                        {/* Highlights - Hidden by default, fades in on hover/open in place of title */}
                        <div className={`absolute inset-x-0 bottom-0 transition-all duration-500 transform ${isMobileOpen
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0'
                            }`}>
                            <ul className="space-y-2">
                                {practice.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] shrink-0" />
                                        <span className="leading-snug drop-shadow-md">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.article>
        );
    }

    return null;
};
