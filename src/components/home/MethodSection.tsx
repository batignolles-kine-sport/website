import React, { useState, useEffect } from 'react';
import { DOCTOLIB_URL } from '../../utils/constants';
import { SectionHeader } from '../ui/SectionHeader';

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
                <SectionHeader
                    badge="MÉTHODE"
                    title={
                        <>
                            Votre parcours<br />
                            <span className="text-primary">de soin.</span>
                        </>
                    }
                    description="Un protocole clair et structuré. Du diagnostic initial jusqu'au retour terrain, chaque étape est validée."
                />

                <div className="hidden md:block pb-2">
                    <a
                        href={DOCTOLIB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary bg-primary text-white hover:bg-primary-dark rounded-full px-8 py-3 transition-colors duration-300"
                    >
                        Prendre rendez-vous
                    </a>
                </div>
            </div>

            {/* L'Accordéon */}
            <div id="accordion-container" className="flex flex-col md:flex-row gap-10 md:gap-4 items-center md:items-center min-h-0 md:min-h-[460px]">

                {/* Étape 01 */}
                <div
                    onMouseEnter={() => handleMouseEnter(1)}
                    className={`
                        relative flex flex-col rounded-lg border
                        transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
                        ${isDesktop
                            ? (activeCard === 1
                                ? 'flex-[6] h-[440px] shadow-hover border-transparent bg-primary text-white overflow-hidden'
                                : 'flex-1 h-[280px] cursor-pointer shadow-soft border-slate-100 bg-white text-slate-900 overflow-hidden hover:border-border-subtle')
                            : 'w-full h-auto mb-8 overflow-visible bg-white border-slate-100 px-8 pb-8 pt-16 shadow-soft'
                        }
                        ${isDesktop && activeCard === 1 ? 'p-10' : 'p-8'}
                    `}
                >
                    <span className={`
                        font-bold absolute transition-all duration-700 z-10
                        ${isDesktop
                            ? (activeCard === 1
                                ? 'top-8 left-8 text-[5rem] leading-[0.8] opacity-10 text-white'
                                : 'top-8 left-8 text-2xl opacity-20 text-slate-900')
                            : 'top-4 right-2 left-auto text-[3.25rem] text-slate-100 opacity-100'
                        }
                    `}>
                        01
                    </span>

                    {/* MOBILE ICON (Absolute on border) */}
                    <div className={`
                        absolute -top-6 left-8 z-30
                        w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg
                        ${isDesktop ? 'hidden' : 'flex'}
                    `}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    </div>

                    <div className={`flex flex-col flex-1 transition-all duration-500 ${isDesktop ? (activeCard !== 1 ? 'hidden opacity-0 translate-y-5' : 'flex opacity-100 translate-y-0') : 'flex opacity-100'}`}>


                        <div className="flex flex-col gap-6 mt-auto">
                            <div className="flex flex-row items-center gap-4 md:justify-between w-full">
                                <h3 className={`font-bold tracking-tight transition-all duration-300 ${isDesktop && activeCard === 1 ? 'text-[2.5rem] leading-[1.1] text-white' : 'text-2xl md:text-2xl text-slate-900'}`}>
                                    Bilan diagnostic
                                </h3>
                                {/* DESKTOP ICON (Inline) */}
                                <div className={`
                                    rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 z-10
                                    ${activeCard === 1 ? 'bg-white/10 text-white border border-white/20' : 'bg-slate-50 text-primary'}
                                    ${isDesktop && activeCard === 1 ? 'w-[4.5rem] h-[4.5rem]' : 'w-12 h-12 md:w-10 md:h-10'}
                                    ${!isDesktop ? 'hidden' : 'static'}
                                `}>
                                    <svg className={`${isDesktop && activeCard === 1 ? 'w-9 h-9' : 'w-5 h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                                </div>
                            </div>
                            <p className={`font-light leading-relaxed transition-all duration-300 ${isDesktop && activeCard === 1 ? 'text-lg max-w-lg text-white/80' : 'text-sm text-slate-500'}`}>
                                Analyse approfondie : tests de mobilité, force et contrôle moteur. Nous identifions la cause racine de la pathologie.
                            </p>
                        </div>
                    </div>

                    <div className={`mt-auto flex flex-col gap-3 ${isDesktop && activeCard !== 1 ? 'flex' : 'hidden'}`}>
                        <div className="w-16 h-16 rounded-lg bg-surface flex items-center justify-center border border-border-subtle group-hover:bg-primary/5 transition-colors">
                            <svg className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                        </div>
                        <span className="font-bold text-slate-400 text-[10px] uppercase tracking-widest group-hover:text-primary transition-colors">Diagnostic</span>
                    </div>
                </div>

                {/* Étape 02 */}
                <div
                    onMouseEnter={() => handleMouseEnter(2)}
                    className={`
                        relative flex flex-col rounded-lg border
                        transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
                        ${isDesktop
                            ? (activeCard === 2
                                ? 'flex-[6] h-[440px] shadow-hover border-transparent bg-primary text-white overflow-hidden'
                                : 'flex-1 h-[280px] cursor-pointer shadow-soft border-slate-100 bg-white text-slate-900 overflow-hidden hover:border-border-subtle')
                            : 'w-full h-auto mb-8 overflow-visible bg-white border-slate-100 px-8 pb-8 pt-16 shadow-soft'
                        }
                        ${isDesktop && activeCard === 2 ? 'p-10' : 'p-8'}
                    `}
                >
                    <span className={`
                        absolute font-bold transition-all duration-700
                        ${isDesktop
                            ? (activeCard === 2
                                ? 'opacity-10 text-white top-8 left-8 text-[5rem] leading-[0.8]'
                                : 'opacity-20 text-2xl text-slate-900 top-8 left-8')
                            : 'opacity-100 text-[3.25rem] text-slate-100 top-4 right-2'}
                    `}>02</span>

                    {/* MOBILE ICON (Absolute on border) */}
                    <div className={`
                        absolute -top-6 left-8 z-30
                        w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg
                        ${isDesktop ? 'hidden' : 'flex'}
                    `}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>

                    <div className={`flex flex-col flex-1 transition-all duration-500 ${isDesktop ? (activeCard !== 2 ? 'hidden opacity-0 translate-y-5' : 'flex opacity-100 translate-y-0') : 'flex opacity-100'}`}>


                        <div className="flex flex-col gap-6 mt-auto">
                            <div className="flex flex-row items-center gap-4 md:justify-between w-full">
                                <h3 className={`font-bold tracking-tight transition-all duration-300 ${isDesktop && activeCard === 2 ? 'text-[2.5rem] leading-[1.1] text-white' : 'text-2xl md:text-2xl text-slate-900'}`}>
                                    Protocole de soins
                                </h3>
                                {/* DESKTOP ICON */}
                                <div className={`
                                    rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 z-10
                                    ${activeCard === 2 ? 'bg-white/10 text-white border border-white/20' : 'bg-slate-50 text-primary'}
                                    ${isDesktop && activeCard === 2 ? 'w-[4.5rem] h-[4.5rem]' : 'w-12 h-12 md:w-10 md:h-10'}
                                    ${!isDesktop ? 'hidden' : 'static'}
                                `}>
                                    <svg className={`${isDesktop && activeCard === 2 ? 'w-9 h-9' : 'w-5 h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </div>
                            </div>
                            <p className={`font-light leading-relaxed transition-all duration-300 ${isDesktop && activeCard === 2 ? 'text-lg max-w-lg text-white/80' : 'text-sm text-slate-500'}`}>
                                Séances de thérapie manuelle et exercices correctifs. Programmation individualisée adaptée à vos contraintes.
                            </p>
                        </div>
                    </div>

                    <div className={`mt-auto flex flex-col gap-3 ${isDesktop && activeCard !== 2 ? 'flex' : 'hidden'}`}>
                        <div className="w-16 h-16 rounded-lg bg-surface flex items-center justify-center border border-border-subtle group-hover:bg-primary/5 transition-colors">
                            <svg className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                        <span className="font-bold text-slate-400 text-[10px] uppercase tracking-widest group-hover:text-primary transition-colors">Soins</span>
                    </div>
                </div>

                {/* Étape 03 */}
                <div
                    onMouseEnter={() => handleMouseEnter(3)}
                    className={`
                        relative flex flex-col rounded-lg border
                        transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
                        ${isDesktop
                            ? (activeCard === 3
                                ? 'flex-[6] h-[440px] shadow-hover border-transparent bg-primary text-white overflow-hidden'
                                : 'flex-1 h-[280px] cursor-pointer shadow-soft border-slate-100 bg-white text-slate-900 overflow-hidden hover:border-border-subtle')
                            : 'w-full h-auto mb-8 overflow-visible bg-white border-slate-100 px-8 pb-8 pt-16 shadow-soft'
                        }
                        ${isDesktop && activeCard === 3 ? 'p-10' : 'p-8'}
                    `}
                >
                    <span className={`
                        absolute font-bold transition-all duration-700
                        ${isDesktop
                            ? (activeCard === 3
                                ? 'opacity-10 text-white top-8 left-8 text-[5rem] leading-[0.8]'
                                : 'opacity-20 text-2xl text-slate-900 top-8 left-8')
                            : 'opacity-100 text-[3.25rem] text-slate-100 top-4 right-2'}
                    `}>03</span>

                    {/* MOBILE ICON (Absolute on border) */}
                    <div className={`
                        absolute -top-6 left-8 z-30
                        w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg
                        ${isDesktop ? 'hidden' : 'flex'}
                    `}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>

                    <div className={`flex flex-col flex-1 transition-all duration-500 ${isDesktop ? (activeCard !== 3 ? 'hidden opacity-0 translate-y-5' : 'flex opacity-100 translate-y-0') : 'flex opacity-100'}`}>


                        <div className="flex flex-col gap-6 mt-auto">
                            <div className="flex flex-row items-center gap-4 md:justify-between w-full">
                                <h3 className={`font-bold tracking-tight transition-all duration-300 ${isDesktop && activeCard === 3 ? 'text-[2.5rem] leading-[1.1] text-white' : 'text-2xl md:text-2xl text-slate-900'}`}>
                                    Réathlétisation
                                </h3>
                                {/* DESKTOP ICON */}
                                <div className={`
                                    rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 z-10
                                    ${activeCard === 3 ? 'bg-white/10 text-white border border-white/20' : 'bg-slate-50 text-primary'}
                                    ${isDesktop && activeCard === 3 ? 'w-[4.5rem] h-[4.5rem]' : 'w-12 h-12 md:w-10 md:h-10'}
                                    ${!isDesktop ? 'hidden' : 'static'}
                                `}>
                                    <svg className={`${isDesktop && activeCard === 3 ? 'w-9 h-9' : 'w-5 h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                            </div>
                            <p className={`font-light leading-relaxed transition-all duration-300 ${isDesktop && activeCard === 3 ? 'text-lg max-w-lg text-white/80' : 'text-sm text-slate-500'}`}>
                                Validation des critères de retour au sport. Gestion de la charge et prévention des récidives.
                            </p>
                        </div>
                    </div>

                    <div className={`mt-auto flex flex-col gap-3 ${isDesktop && activeCard !== 3 ? 'flex' : 'hidden'}`}>
                        <div className="w-16 h-16 rounded-lg bg-surface flex items-center justify-center border border-border-subtle group-hover:bg-primary/5 transition-colors">
                            <svg className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <span className="font-bold text-slate-400 text-[10px] uppercase tracking-widest group-hover:text-primary transition-colors">Sport</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

