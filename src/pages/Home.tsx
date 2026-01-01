import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { motion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '../components/layout/SEO';
import { Button } from '../components/ui/Button';
import { DOCTOLIB_URL, ADDRESS, HERO_IMAGE_URL, GOOGLE_MAPS_URL } from '../utils/constants';
import { generateLocalBusinessSchema, generateFAQSchema } from '../utils/structuredData';
import { MethodSection } from '../components/home/MethodSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ExpertiseSection } from '../components/home/ExpertiseSection';
import { FaqSection } from '../components/home/FaqSection';
import { AccessSection } from '../components/home/AccessSection';
import { FAQ_ENTRIES } from '../utils/constants';








const formatGoogleRating = (value: number) => {
    if (Number.isInteger(value)) return String(value);
    return value.toFixed(1).replace('.', ',');
};

// Animation Variants
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

export const Home: React.FC = () => {
    const metaDescription =
        'Kinés du sport à Paris 17 – Batignolles. Coureurs, post‑op, post‑partum. Bilan précis, plan sur mesure, retour au sport encadré.';

    const faqSchema = generateFAQSchema(FAQ_ENTRIES);
    const localBusinessSchema = generateLocalBusinessSchema();


    const { scrollY } = useScroll();
    const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

    return (
        <>
            <SEO
                title="Batignolles Kiné Sport | Rééducation, Post-Op, Réathlétisation - Paris 17"
                description={metaDescription}
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
            </Helmet>

            <div className="min-h-screen text-slate-900 overflow-hidden">
                {/* Hero w/ Parallax Scale */}
                <section className="px-3 sm:px-4 md:px-6 pb-3 md:pb-4 flex flex-col">
                    <motion.div
                        style={{ scale: heroScale, opacity: heroOpacity }}
                        className="relative w-full h-[calc(100dvh-5rem-0.75rem)] md:h-[calc(100vh-7rem-1.5rem)] min-h-[500px] rounded-3xl md:rounded-4xl lg:rounded-5xl overflow-hidden shadow-2xl shadow-slate-200 bg-slate-900 group border border-white"
                    >
                        <div className="absolute inset-0">
                            <img
                                src={HERO_IMAGE_URL}
                                alt="Cabinet de kinésithérapie du sport à Paris 17 Batignolles"
                                className="w-full h-full object-cover opacity-90 transition-transform duration-[20s] group-hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.src = '/images/hero/hero.jpeg';
                                }}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10" />
                        </div>

                        <div className="absolute inset-0 flex items-end z-10">
                            <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 pb-8 md:pb-16">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="max-w-content mx-auto w-full"
                                >
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 text-white text-2xs sm:text-xs md:text-sm font-semibold tracking-wide mb-5">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                                        Kinés du sport · Paris 17 – Batignolles
                                    </div>

                                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95] mb-6 drop-shadow-lg">
                                        Reprendre le sport
                                        <br />
                                        sans douleur.
                                    </h1>

                                    <div className="mt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-6">
                                        <p className="text-gray-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-[65ch] truncate">
                                            Bilan précis, plan sur mesure, retour au sport encadré.
                                        </p>
                                        <Button
                                            href={DOCTOLIB_URL}
                                            variant="booking"
                                        >
                                            Prendre rendez-vous
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <div className="max-w-content w-full mx-auto px-4 md:px-6 space-y-12 md:space-y-32 pt-8 pb-8 md:pt-24 md:pb-24">

                    {/* 1. PARCOURS DE SOIN (New Method Section) */}
                    <MethodSection />

                    {/* 2. PROFILS (Bento Grid Animated) */}
                    {/* 2. EXPERTISE (Now separated) */}
                    <ExpertiseSection />

                    {/* 3. AVIS PATIENTS (Staggered) */}
                    {/* 3. AVIS PATIENTS (New Testimonials Section) */}
                    <TestimonialsSection />

                    {/* 4. FAQ (Fluid Accordion) */}
                    {/* 4. FAQ (Fluid Accordion) */}
                    {/* 4. FAQ (Fluid Accordion) */}
                    {/* 4. FAQ (Fluid Accordion) */}
                    <FaqSection />
                </div>

                <div className="max-w-content w-full mx-auto px-4 md:px-6 pt-8 pb-8 md:pt-24 md:pb-24">
                    {/* Accès */}
                    {/* Accès */}
                    <AccessSection />
                </div>
            </div>
        </>
    );
};

export default Home;
