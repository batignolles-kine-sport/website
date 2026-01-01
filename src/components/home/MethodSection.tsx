import React, { useState, useEffect } from 'react';
import { DOCTOLIB_URL } from '../../utils/constants';
import { SectionHeader } from '../ui/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { BKS_EASE, staggerContainer, fadeUp, fadeRight, hoverScale } from '../../utils/animations';

export const MethodSection: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number>(1);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (cardNumber: number) => {
        if (isDesktop) {
            setActiveCard(cardNumber);
        }
    };

    return (
        <section id="parcours" className="w-full">
            {/* Header de Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeRight}
                    className="flex-1"
                >
                    <SectionHeader
                        badge="MÉTHODE"
                        title={
                            <>
                                Votre parcours<br />
                                <span className="bg-gradient-to-r from-[#3b402e] to-[#6d744d] bg-clip-text text-transparent">de soin.</span>
                            </>
                        }
                        description="Un protocole clair et structuré. Du diagnostic initial jusqu'au retour terrain, chaque étape est validée."
                    />
                </motion.div>
            </div>

            {/* L'Accordéon */}
            <motion.div
                id="accordion-container"
                className="flex flex-col md:flex-row gap-6 md:gap-4 items-center md:items-center min-h-0 md:min-h-[460px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                {/* Cards */}
                {[1, 2, 3].map((num) => (
                    <MethodCard
                        key={num}
                        num={num}
                        activeCard={activeCard}
                        isDesktop={isDesktop}
                        handleMouseEnter={handleMouseEnter}
                    />
                ))}
            </motion.div>
        </section>
    );
};

const MethodCard = ({
    num,
    activeCard,
    isDesktop,
    handleMouseEnter
}: {
    num: number;
    activeCard: number;
    isDesktop: boolean;
    handleMouseEnter: (n: number) => void;
}) => {
    const isActive = activeCard === num;
    // Data for each card
    const data = [
        {
            title: "Bilan diagnostic",
            desc: "Analyse approfondie : tests de mobilité, force et contrôle moteur. Nous identifions la cause racine de la pathologie.",
            img: "/images/landing/method1.png",
            iconMobile: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
            iconDesktop: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
            label: "Diagnostic"
        },
        {
            title: "Protocole de soins",
            desc: "Séances de thérapie manuelle et exercices correctifs. Programmation individualisée adaptée à vos contraintes.",
            img: "/images/landing/method2.png",
            iconMobile: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
            iconDesktop: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
            label: "Soins"
        },
        {
            title: "Réathlétisation",
            desc: "Validation des critères de retour au sport. Gestion de la charge et prévention des récidives.",
            img: "/images/landing/method3.png",
            iconMobile: "M13 10V3L4 14h7v7l9-11h-7z",
            iconDesktop: "M13 10V3L4 14h7v7l9-11h-7z",
            label: "Sport"
        }
    ][num - 1];

    // Color Progression Logic (Nuances of Green - Inspiration "de soin.")
    const getInactiveStyles = (index: number) => {
        // Nuances based on #3b402e and #6d744d
        if (index === 1) return {
            icon: 'text-[#6d744d]/60', // Pale Olive
            label: 'text-[#6d744d]/60',
            bg: 'bg-[#6d744d]/5',
            border: 'border-[#6d744d]/20'
        };
        if (index === 2) return {
            icon: 'text-[#545a3b]/80', // Mid Green
            label: 'text-[#545a3b]/80',
            bg: 'bg-[#545a3b]/5',
            border: 'border-[#545a3b]/20'
        };
        return {
            icon: 'text-[#3b402e]', // Full Brand Green
            label: 'text-[#3b402e]',
            bg: 'bg-[#3b402e]/5',
            border: 'border-[#3b402e]/20'
        };
    };

    const colors = getInactiveStyles(num);

    return (
        <motion.div
            layout
            onMouseEnter={() => handleMouseEnter(num)}
            variants={fadeUp}
            transition={{ layout: { duration: 0.5, ease: BKS_EASE } }}
            className={`
                relative flex flex-col rounded-2xl transition-all duration-500
                ${isDesktop
                    ? (isActive
                        ? 'h-[440px] shadow-2xl border border-transparent bg-slate-900 text-white z-10 overflow-hidden'
                        : `h-[440px] cursor-pointer shadow-inner border hover:border-border-subtle z-0 bg-slate-50 ${colors.border} overflow-hidden`)
                    : 'w-full h-auto bg-white border-slate-100 px-8 pb-8 pt-16 shadow-soft overflow-visible'
                }
                ${isDesktop && isActive ? 'p-0' : 'p-8'}
            `}
            style={{
                flex: isDesktop ? (isActive ? 7 : 1) : 'none' // Increased expansion ratio
            }}
        >
            {/* Background Illustration (Desktop Active) */}
            <AnimatePresence>
                {isDesktop && isActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-0"
                    >
                        <motion.img
                            src={data.img}
                            alt={data.title}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 10, ease: "linear" }}
                        />
                        {/* Immersive Gradient Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Number - Architectural Typography */}
            <motion.span
                layout="position"
                className={`
                    absolute font-black z-20 pointer-events-none transition-all duration-500 select-none
                    ${isDesktop
                        ? (isActive
                            ? 'top-8 left-8 text-[5rem] leading-[0.8] opacity-10 text-white'
                            : `top-[-10px] left-[-10px] text-[10rem] leading-none opacity-[0.05] text-[#3b402e]`) // Larger, green-tinted #
                        : 'top-4 right-2 text-[3.25rem] text-slate-100 opacity-100'
                    }
                `}
            >
                0{num}
            </motion.span>

            {/* MOBILE ICON (Absolute on border) */}
            <div className={`
                absolute -top-6 left-8 z-30
                w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg
                ${isDesktop ? 'hidden' : 'flex'}
            `}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={data.iconMobile} /></svg>
            </div>

            {/* Content Container (Active) */}
            <div className={`flex flex-col flex-1 relative z-20 ${isDesktop && !isActive ? 'hidden' : 'flex'}`}>
                {/* Using AnimatePresence for content fade in/out on desktop switch */}
                <motion.div
                    className={`flex flex-col gap-6 mt-auto ${isDesktop && isActive ? 'p-12 w-full max-w-2xl' : ''}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                >
                    <div className="flex flex-row items-center gap-4 md:justify-between w-full">
                        <motion.h3
                            layout="position"
                            className={`font-bold tracking-tight ${isDesktop && isActive ? 'text-5xl md:text-7xl text-white mb-2' : 'text-2xl md:text-2xl text-slate-900'}`} // Increased Title Size
                        >
                            {data.title}
                        </motion.h3>
                    </div>

                    <motion.p
                        layout="position"
                        className={`font-light leading-relaxed ${isDesktop && isActive ? 'text-2xl text-white/80' : 'text-sm text-slate-500'}`} // Increased Desc Size
                    >
                        {data.desc}
                    </motion.p>
                </motion.div>
            </div>

            {/* Desktop Inactive State Content */}
            {isDesktop && !isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-x-0 bottom-16 flex flex-col items-center justify-center gap-6" // Raised slightly
                >
                    <div className={`
                        w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300
                        ${colors.bg} backdrop-blur-sm
                    `}>
                        <svg className={`w-10 h-10 transition-colors duration-300 ${colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={data.iconDesktop} /></svg>
                    </div>
                    <span className={`font-bold text-sm uppercase tracking-[0.25em] transition-colors duration-300 ${colors.label}`}>{data.label}</span>
                </motion.div>
            )}
        </motion.div>
    );
};

