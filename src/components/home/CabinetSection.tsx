import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CABINET_PHOTOS = [
    '/images/landing/presentation/cab1.webp',
    '/images/landing/presentation/cab2.webp',
    '/images/landing/presentation/cab3.webp',
    '/images/landing/presentation/cab4.webp'
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 1
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 1
    })
};

export const CabinetSection: React.FC = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const currentIndex = (page % CABINET_PHOTOS.length + CABINET_PHOTOS.length) % CABINET_PHOTOS.length;

    const paginate = useCallback((newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    }, [page]);

    // Touch handlers for swipe gestures
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
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

        if (isLeftSwipe) {
            paginate(1);
        }

        if (isRightSwipe) {
            paginate(-1);
        }
    };

    // Auto-scroll logic - set to 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [paginate]);

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* 1. Description - Top on mobile, Left on desktop */}
                <div>
                    <SectionHeader
                        badge="CABINET"
                        title={<>Un espace dédié à <span className="text-gradient-primary">votre santé.</span></>}
                        description="Situé au coeur du quartier des Batignolles, notre cabinet de kinésithérapie allie santé et sport. Que vous soyez sportif ou non, amateur ou confirmé nous vous accompagnons dans votre rééducation et votre remise en forme."
                    />
                </div>

                {/* 2. Carousel - Bottom on mobile, Right on desktop */}
                <div
                    className="relative aspect-[3/4] max-w-sm mx-auto lg:ml-auto w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border border-slate-100"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={page}
                            src={CABINET_PHOTOS[currentIndex]}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            alt={`Cabinet de kinésithérapie Batignolles - Photo ${currentIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="eager"
                            width="600"
                            height="800"
                        />
                    </AnimatePresence>

                    {/* Persistent Controls - High Contrast Glassmorphism */}
                    <div className="absolute inset-0 flex items-center justify-between p-4 z-10 pointer-events-none">
                        <button
                            onClick={() => paginate(-1)}
                            className="p-3 rounded-full bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white transition-all border border-white/50 shadow-xl pointer-events-auto active:scale-95 touch-manipulation"
                            aria-label="Photo précédente"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="p-3 rounded-full bg-white/80 backdrop-blur-md text-slate-900 hover:bg-white transition-all border border-white/50 shadow-xl pointer-events-auto active:scale-95 touch-manipulation"
                            aria-label="Photo suivante"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 p-2.5 rounded-full bg-black/30 backdrop-blur-md z-10">
                        {CABINET_PHOTOS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setPage([idx, idx > currentIndex ? 1 : -1])}
                                aria-label={`Aller à la photo ${idx + 1}`}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-5' : 'bg-white/40 hover:bg-white/70'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
