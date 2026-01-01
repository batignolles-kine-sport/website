import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import reviewsData from '../../data/avis.json';

// Helper for formatting rating
const formatGoogleRating = (rating: number) => rating.toFixed(1).replace('.', ',');

const REVIEWS = [
    {
        id: 'ai-summary',
        type: 'ai-summary',
        summary: "Les retours soulignent une expertise rare en rééducation du sport, un plateau technique moderne et un accompagnement humain constant de la part de l'équipe.",
        tags: ["Expertise Sport", "Plateau Technique", "Bienveillance"]
    },
    {
        id: 'matthieu',
        type: 'google',
        author: "Matthieu Dalle-Berardinelli",
        date: "Il y a quelques jours",
        initial: "M",
        colorBg: "bg-gray-900",
        colorText: "text-white",
        rating: 5,
        content: "Un immense merci ! Grâce à la rééducation du genou, j'ai pu reprendre la course à pied en quelques semaines et atteindre mes objectifs sans douleur. Je suis aussi une préparation physique générale chez BKS, c'est top !"
    },
    {
        id: 'cecilia',
        type: 'google',
        author: "Cecilia Chort",
        date: "Il y a 3 semaines",
        initial: "CC",
        colorBg: "bg-blue-50",
        colorText: "text-blue-600",
        rating: 5,
        content: "Rééducation de la cheville suite à une grosse entorse… Justine m’a énormément rassuré ! Super travail de stabilité, renforcement et pliométrie. Cabinet super bien équipé, les filles sont tellement gentilles !"
    },
    {
        id: 'audrey',
        type: 'google',
        author: "Audrey",
        date: "Il y a 6 jours",
        initial: "A",
        colorBg: "bg-emerald-50",
        colorText: "text-emerald-600",
        rating: 5,
        content: "J’avais mal aux genoux après mes footings depuis plusieurs mois. Grâce aux exercices de la kiné je peux de nouveau courir sans problème. Cabinet très bien aménagé et agréable."
    },
    {
        id: 'guillaume',
        type: 'google',
        author: "Guillaume Guiral",
        date: "Il y a 2 mois",
        initial: "GG",
        colorBg: "bg-orange-50",
        colorText: "text-orange-600",
        rating: 5,
        content: "Tendinopathie guérie rapidement grâce au travail et conseils pro de Léonie qui a su cibler mes problématiques. Excellente ambiance dans ce cabinet !"
    },
    {
        id: 'lena',
        type: 'google',
        author: "Lena Michelet",
        date: "Il y a 4 mois",
        initial: "LM",
        colorBg: "bg-purple-50",
        colorText: "text-purple-600",
        rating: 5,
        content: "Rééducation après opération du LCA. Léonie est professionnelle et motivante. Séances vraiment axées sur le retour au sport !"
    },
    {
        id: 'cta',
        type: 'cta'
    }
];

export const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null); // Reset touch end
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && currentIndex < maxIndex) {
            moveNext();
        }

        if (isRightSwipe && currentIndex > 0) {
            movePrev();
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getItemsInView = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
        }
        return 1;
    };

    const maxIndex = Math.max(0, REVIEWS.length - getItemsInView());

    const moveNext = () => {
        const itemsToMove = getItemsInView();
        setCurrentIndex(prev => Math.min(prev + itemsToMove, maxIndex));
    };

    const movePrev = () => {
        const itemsToMove = getItemsInView();
        setCurrentIndex(prev => Math.max(prev - itemsToMove, 0));
    };

    const translateX = trackRef.current && trackRef.current.children.length > 0
        ? currentIndex * ((trackRef.current.children[0] as HTMLElement).offsetWidth + 20) // 20px gap
        : 0;

    // Style injection for custom animations/transitions if needed (or using Tailwind config)
    // Using inline style for carousel transform for performance

    return (
        <section>
            {/* Header / Standard Section Layout */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl">
                    <SectionHeader
                        badge="AVIS PATIENTS"
                        title={
                            <>
                                Ce que disent<br />
                                <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">nos patients.</span>
                            </>
                        }
                        className="mb-6"
                    />

                    {/* Integrated Google Rating Badge */}
                    <div className="flex items-center gap-4 bg-white/50 backdrop-blur-md p-3 rounded-lg border border-slate-100 shadow-sm w-fit">
                        <div className="flex gap-0.5 text-rating text-sm">★★★★★</div>
                        <span className="font-semibold text-slate-900">{formatGoogleRating(reviewsData.note_moyenne)}/5</span>
                        <span className="text-slate-500 text-sm">sur {reviewsData.nombre_avis_total} avis Google</span>
                    </div>
                </div>

                {/* Navigation Buttons (Desktop) */}
                <div className="hidden md:flex items-center gap-3 pb-2">
                    <button
                        onClick={movePrev}
                        disabled={currentIndex === 0}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-105 hover:border-primary transition-all disabled:opacity-20 disabled:cursor-default bg-white"
                        aria-label="Précédent"
                    >
                        <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button
                        onClick={moveNext}
                        disabled={currentIndex >= maxIndex}
                        className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:scale-105 hover:border-primary transition-all disabled:opacity-20 disabled:cursor-default bg-white"
                        aria-label="Suivant"
                    >
                        <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="carousel-container relative">
                {/* Fade overlay on right */}
                <div className="absolute top-0 right-0 bottom-0 w-[40px] md:w-[60px] bg-gradient-to-l from-gray-200/0 via-gray-200/50 to-transparent z-10 pointer-events-none hidden"></div>
                {/* Note: Background fade disabled or adjusted if needed, usually transparent needed if bg is gray */}

                <div
                    ref={trackRef}
                    className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] gap-5 py-4 touch-pan-y"
                    style={{ transform: `translateX(-${translateX}px)` }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="flex-none w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.833rem)]">
                            {review.type === 'ai-summary' && (
                                <div className="p-8 rounded-3xl shadow-sm h-full flex flex-col transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-hover border border-blue-100 bg-gradient-to-br from-white to-blue-50/50">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                                                <span className="text-[10px] font-bold text-blue-700 tracking-widest uppercase">Résumé par IA</span>
                                            </div>
                                            <p className="text-[11px] font-medium text-blue-400">Analyse consolidée de la fiche BKS</p>
                                        </div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                                            className="w-6 h-6 object-contain" alt="Google Logo" />
                                    </div>

                                    <p className="text-sm text-slate-800 leading-relaxed mb-8 italic flex-grow">
                                        {review.summary}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {review.tags?.map(tag => (
                                            <span key={tag} className="bg-white/70 border border-black/5 text-blue-800 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {review.type === 'google' && (
                                <div className="border border-white/50 bg-white p-8 rounded-3xl h-full flex flex-col transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-hover hover:border-gray-200">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-full ${review.colorBg} flex items-center justify-center ${review.colorText} font-bold text-sm`}>
                                            {review.initial}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900">{review.author}</h4>
                                            <p className="text-[11px] text-slate-400">{review.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex text-rating text-xs mb-4 tracking-tighter">★★★★★</div>
                                    <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                                        {review.content}
                                    </p>
                                </div>
                            )}

                            {review.type === 'cta' && (
                                <a href="https://maps.app.goo.gl/evjY9vsdNhuFT4pb9" target="_blank" rel="noopener noreferrer" className="p-8 rounded-3xl flex flex-col items-center justify-center text-center group h-full border border-white/50 bg-white transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-hover hover:border-gray-200">
                                    <img src="https://www.hedinghamhounds.co.uk/wp-content/uploads/2019/12/google-reviews-logo.png"
                                        alt="Google Reviews Logo"
                                        className="h-16 w-auto object-contain mb-6 group-hover:scale-105 transition-transform" />
                                    <h4 className="text-lg font-bold mb-2 text-slate-900">Rejoignez-nous</h4>
                                    <p className="text-sm text-slate-400 mb-8 px-4">Découvrez pourquoi nos patients nous recommandent.</p>
                                    <span className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-black transition-colors">
                                        Ouvrir Google Maps
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center justify-between mt-8">
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest pl-1">Faites défiler</span>
                <div className="flex gap-4">
                    <button
                        onClick={movePrev}
                        className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center active:scale-90 transition-all text-slate-800 bg-white"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button
                        onClick={moveNext}
                        className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center active:scale-90 transition-all text-slate-800 bg-white"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};
