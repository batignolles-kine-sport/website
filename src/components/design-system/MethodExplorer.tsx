import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA ---
const METHOD_DATA = [
    {
        id: 1,
        title: "Bilan diagnostic",
        desc: "Identification précise de l’origine de votre douleur et des mécanismes responsables. Mise en place d’un plan de traitement adapté à vos objectifs.",
        img: "/images/landing/method1.webp",
        iconMobile: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        iconDesktop: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        label: "Diagnostic"
    },
    {
        id: 2,
        title: "Protocole de soins",
        desc: "Grâce à un matériel adapté et des techniques s’appuyant sur les derniers données scientifiques les séances sont personnalisées et élaborées pour optimiser votre récupération.",
        img: "/images/landing/method2.webp",
        iconMobile: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        iconDesktop: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
        label: "Soins"
    },
    {
        id: 3,
        title: "Réathlétisation",
        desc: "Validation des critères de retour au sport. Gestion de la charge et prévention des récidives.",
        img: "/images/landing/method3.webp",
        iconMobile: "M13 10V3L4 14h7v7l9-11h-7z",
        iconDesktop: "M13 10V3L4 14h7v7l9-11h-7z",
        label: "Sport"
    }
];

// --- CORE LOGIC HOOK ---
const useMethodLogic = () => {
    const [activeCard, setActiveCard] = useState<number>(1);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (id: number) => {
        if (isDesktop) setActiveCard(id);
    };

    return { activeCard, isDesktop, handleMouseEnter };
};

// --- VARIANT 1: ORIGIN DARK (Current Site Logic) ---
const VariantDark = () => {
    const { activeCard, isDesktop, handleMouseEnter } = useMethodLogic();

    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-3 items-center md:items-center min-h-0 md:min-h-[340px] overflow-visible md:overflow-hidden">
            {METHOD_DATA.map((item) => {
                const isActive = activeCard === item.id;
                return (
                    <motion.div
                        key={item.id}
                        layout
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        className={`
                            relative flex flex-col rounded-2xl transition-all duration-500 overflow-hidden
                            ${isDesktop
                                ? (isActive
                                    ? 'h-[340px] shadow-2xl bg-slate-900 text-white z-10'
                                    : 'h-[340px] cursor-pointer shadow-inner bg-slate-50 border border-slate-100')
                                : 'w-full h-auto bg-white border border-slate-100 px-8 pb-8 pt-16 shadow-lg'
                            }
                            ${isDesktop && isActive ? 'p-0' : 'p-6'}
                        `}
                        style={{ flex: isDesktop ? (isActive ? 7 : 1) : 'none' }}
                    >
                        {/* Desktop Active BG */}
                        <AnimatePresence>
                            {isDesktop && isActive && (
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-0"
                                >
                                    <motion.img
                                        src={item.img} alt={item.title} className="w-full h-full object-cover opacity-90"
                                        initial={{ scale: 1 }} animate={{ scale: 1.1 }} transition={{ duration: 10, ease: "linear" }}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)] z-10 pointer-events-none mix-blend-multiply" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Number */}
                        <motion.span
                            layout="position"
                            className={`
                                absolute font-black z-20 pointer-events-none transition-all duration-500 select-none
                                ${isDesktop
                                    ? (isActive ? 'top-6 left-6 text-[4rem] leading-[0.8] opacity-10 text-white' : 'top-[-10px] left-[-5px] text-[8rem] leading-none opacity-[0.05] text-slate-900')
                                    : 'top-4 right-2 text-[3.25rem] text-slate-100 opacity-100'
                                }
                            `}
                        >
                            0{item.id}
                        </motion.span>

                        {/* Mobile Icon */}
                        <div className={`md:hidden absolute -top-6 left-8 z-30 w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconMobile} /></svg>
                        </div>

                        {/* Active Content */}
                        <div className={`flex flex-col flex-1 relative z-20 ${isDesktop && !isActive ? 'hidden' : 'flex'}`}>
                            <motion.div
                                className={`flex flex-col gap-4 mt-auto ${isDesktop && isActive ? 'p-8 w-full max-w-xl' : ''}`}
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                            >
                                <h3 className={`font-bold tracking-tight ${isDesktop && isActive ? 'text-3xl md:text-4xl text-white' : 'text-xl text-slate-900'}`}>{item.title}</h3>
                                <p className={`font-light leading-relaxed ${isDesktop && isActive ? 'text-lg text-white/80' : 'text-sm text-slate-500'}`}>{item.desc}</p>
                            </motion.div>
                        </div>

                        {/* Inactive Desktop Content */}
                        {isDesktop && !isActive && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center gap-6"
                            >
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-slate-200/50">
                                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.iconDesktop} /></svg>
                                </div>
                                <span className="font-bold text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</span>
                            </motion.div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};

// --- VARIANT 2: SOFT GLASS (Health) ---
const VariantGlass = () => {
    const { activeCard, isDesktop, handleMouseEnter } = useMethodLogic();

    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 items-center md:items-center min-h-0 md:min-h-[340px]">
            {METHOD_DATA.map((item) => {
                const isActive = activeCard === item.id;
                return (
                    <motion.div
                        key={item.id}
                        layout
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        className={`
                            relative flex flex-col rounded-[2rem] transition-all duration-500 overflow-hidden
                            ${isDesktop
                                ? (isActive
                                    ? 'h-[340px] shadow-2xl bg-white/40 border border-white/60 z-10'
                                    : 'h-[340px] cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20')
                                : 'w-full h-auto bg-white/60 backdrop-blur-md border border-white/50 px-8 pb-8 pt-16'
                            }
                            ${isDesktop && isActive ? 'p-0' : 'p-6'}
                        `}
                        style={{ flex: isDesktop ? (isActive ? 7 : 1) : 'none' }}
                    >
                        {/* Desktop Active BG - Image underneath */}
                        <AnimatePresence>
                            {isDesktop && isActive && (
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-0"
                                >
                                    <motion.img
                                        src={item.img}
                                        alt=""
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}
                                    />
                                    <div className="absolute inset-0 bg-white/70 backdrop-blur-md z-10" />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Number */}
                        <motion.span
                            layout="position"
                            className={`
                                absolute font-bold z-20 pointer-events-none transition-all duration-500
                                ${isDesktop
                                    ? (isActive ? 'top-8 left-8 text-4xl text-slate-800/80' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80px] text-6xl text-slate-900/5')
                                    : 'top-6 right-6 text-4xl text-slate-200'
                                }
                            `}
                        >
                            0{item.id}
                        </motion.span>

                        {/* Active Content */}
                        <div className={`flex flex-col flex-1 relative z-20 ${isDesktop && !isActive ? 'hidden' : 'flex'}`}>
                            <motion.div
                                className={`flex flex-col gap-3 mt-auto ${isDesktop && isActive ? 'p-10 w-full max-w-xl' : ''}`}
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            >
                                <div className="w-12 h-12 bg-white/50 border border-white/50 shadow-sm rounded-2xl flex items-center justify-center text-blue-600 mb-2 backdrop-blur-sm">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconMobile} /></svg>
                                </div>
                                <h3 className="font-bold text-slate-900 text-2xl">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        </div>

                        {/* Inactive Desktop Content */}
                        {isDesktop && !isActive && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center pt-10"
                            >
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 vertical-text rotate-180" style={{ writingMode: 'vertical-rl' }}>{item.label}</span>
                            </motion.div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};

// --- VARIANT 3: SWISS TECH (Performance) ---
const VariantSwiss = () => {
    const { activeCard, isDesktop, handleMouseEnter } = useMethodLogic();

    return (
        <div className="flex flex-col md:flex-row gap-0 items-stretch min-h-0 md:min-h-[340px] border border-slate-200 bg-slate-50">
            {METHOD_DATA.map((item) => {
                const isActive = activeCard === item.id;
                return (
                    <motion.div
                        key={item.id}
                        layout
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        className={`
                            relative flex flex-col transition-all duration-300 ease-out
                            ${isDesktop
                                ? (isActive
                                    ? 'h-[340px] bg-white z-10 border-r border-slate-200'
                                    : 'h-[340px] cursor-pointer bg-slate-50 border-r border-slate-200 hover:bg-slate-100')
                                : 'w-full h-auto bg-white border-b border-slate-200 px-6 py-8'
                            }
                        `}
                        style={{ flex: isDesktop ? (isActive ? 7 : 1) : 'none' }}
                    >
                        {/* Power Line */}
                        {isActive && <motion.div layoutId="powerline" className="absolute top-0 left-0 w-full h-1.5 md:w-1.5 md:h-full bg-primary z-30" />}

                        {/* Active Content */}
                        <div className={`flex flex-col flex-1 relative z-20 h-full ${isDesktop && !isActive ? 'hidden' : 'flex'}`}>

                            {/* Desktop Image Sidebar (Right Half) */}
                            {isDesktop && isActive && (
                                <motion.div
                                    className="absolute right-0 top-0 bottom-0 w-[55%] z-0"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
                                >
                                    <img src={item.img} className="w-full h-full object-cover grayscale contrast-125 brightness-110" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
                                </motion.div>
                            )}

                            {/* Text Content Area */}
                            <div className={`flex flex-col justify-between h-full bg-white relative z-10 ${isDesktop && isActive ? 'w-[45%] p-10 pl-16 shadow-[20px_0_40px_-10px_rgba(0,0,0,0.05)]' : ''}`}>
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-sm text-slate-400">STEP 0{item.id}</span>
                                    <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconMobile} /></svg>
                                </div>

                                <div className="mt-8 md:mt-0">
                                    <h3 className="font-black text-4xl text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-slate-500 font-mono text-xs uppercase tracking-wider leading-relaxed max-w-md border-l-2 border-slate-200 pl-4">
                                         // {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Inactive Desktop Content */}
                        {isDesktop && !isActive && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                            >
                                <span className="font-mono text-xl font-bold text-slate-300">0{item.id}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 -rotate-90 whitespace-nowrap">{item.label}</span>
                            </motion.div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};

// --- MAIN EXPORT ---
export const MethodExplorer: React.FC = () => {
    return (
        <div className="space-y-24">
            {/* OPTION 1 */}
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 border-slate-900 pl-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">1. Dark Immersive (Original)</h3>
                        <p className="text-slate-500 mt-1">L'expérience actuelle du site. Profondeur, gradient et images.</p>
                    </div>
                </div>
                <div className="rounded-3xl border border-slate-200 p-4 md:p-8 bg-white">
                    <VariantDark />
                </div>
            </div>

            {/* OPTION 2 */}
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 border-blue-200 pl-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">2. Soft Glass / Clinical</h3>
                        <p className="text-slate-500 mt-1">Approche "Santé". Plus lumineux, plus rassurant, jeu de transparences.</p>
                    </div>
                </div>
                <div className="rounded-3xl border border-white/20 p-4 md:p-8 bg-gradient-to-br from-slate-100 to-slate-200">
                    <VariantGlass />
                </div>
            </div>

            {/* OPTION 3 */}
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-l-4 border-primary pl-6">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">3. Swiss Tech / Performance</h3>
                        <p className="text-slate-500 mt-1">Approche "Data & Sport". Rigueur de la grille, minimalisme, typographie.</p>
                    </div>
                </div>
                <div className="rounded-3xl border border-slate-200 p-4 md:p-12 bg-white">
                    <VariantSwiss />
                </div>
            </div>
        </div>
    );
};
