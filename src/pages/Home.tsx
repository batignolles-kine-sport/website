import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { motion, useScroll, useTransform } from 'framer-motion';
// AdvancedImage removed as we use native picture tag for Hero
// import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import { SEO } from '../components/layout/SEO';
import { Button } from '../components/ui/Button';
import { DOCTOLIB_URL, HERO_IMAGE_URL } from '../utils/constants'; // Removing unused import if any
import { generateLocalBusinessSchema, generateFAQSchema } from '../utils/structuredData';
import { MethodSection } from '../components/home/MethodSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ExpertiseSection } from '../components/home/ExpertiseSection';
import { FaqSection } from '../components/home/FaqSection';
import { AccessSection } from '../components/home/AccessSection';
import { FAQ_ENTRIES } from '../utils/constants';
import { staggerContainer, fadeUp, pulseLoop } from '../utils/animations';
import { ChevronDown } from 'lucide-react';
import { getCloudinaryImage, pathToPublicId, isCloudinaryImage } from '../utils/cloudinary';
import { Footer } from '../components/layout/Footer';

const formatGoogleRating = (value: number) => {
    if (Number.isInteger(value)) return String(value);
    return value.toFixed(1).replace('.', ',');
};

export const Home: React.FC = () => {
    const metaDescription =
        'Kinés du sport à Paris 17 – Batignolles. Coureurs, post‑op, post‑partum. Bilan précis, plan sur mesure, retour au sport encadré.';

    const faqSchema = generateFAQSchema(FAQ_ENTRIES);
    const localBusinessSchema = generateLocalBusinessSchema();

    // Detect mobile to disable parallax
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({ container: containerRef });
    // Disable parallax on mobile for performance
    const heroScaleTransform = useTransform(scrollY, [0, 500], [1, 0.95]);
    const heroOpacityTransform = useTransform(scrollY, [0, 300], [1, 0.8]);

    const heroScale = isMobile ? 1 : heroScaleTransform;
    const heroOpacity = isMobile ? 1 : heroOpacityTransform;

    return (
        <>
            <SEO
                title="Kiné du Sport Paris 17 | Batignolles Kiné Sport"
                description="Cabinet de kinésithérapie du sport à Paris 17 Batignolles. Spécialistes course, post-op, périnée. Bilan précis, protocole validé, retour terrain encadré."
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
            </Helmet>

            <div ref={containerRef} className="text-slate-900 lg:h-screen lg:overflow-y-scroll lg:snap-y lg:snap-mandatory">
                {/* Hero w/ Parallax Scale */}
                <section id="hero" className="px-3 sm:px-4 md:px-6 flex flex-col snap-start snap-always min-h-screen">
                    <motion.div
                        style={{ scale: heroScale, opacity: heroOpacity }}
                        className="relative w-full h-[90dvh] md:h-[90vh] min-h-[450px] max-h-[95vh] rounded-3xl md:rounded-4xl lg:rounded-5xl overflow-hidden shadow-2xl shadow-slate-200 bg-slate-900 group border border-white"
                    >
                        <div className="absolute inset-0">
                            {isCloudinaryImage(HERO_IMAGE_URL) ? (
                                <picture>
                                    <source
                                        media="(max-width: 768px)"
                                        srcSet={`${getCloudinaryImage(pathToPublicId(HERO_IMAGE_URL), {
                                            width: 800,
                                            aspectRatio: '9:16',
                                            gravity: 'auto'
                                        }).toURL()} 1x, ${getCloudinaryImage(pathToPublicId(HERO_IMAGE_URL), {
                                            width: 1600,
                                            aspectRatio: '9:16',
                                            gravity: 'auto'
                                        }).toURL()} 2x`}
                                    />
                                    <source
                                        media="(min-width: 769px)"
                                        srcSet={`${getCloudinaryImage(pathToPublicId(HERO_IMAGE_URL), {
                                            width: 1920,
                                            aspectRatio: '16:9',
                                            gravity: 'auto'
                                        }).toURL()} 1x, ${getCloudinaryImage(pathToPublicId(HERO_IMAGE_URL), {
                                            width: 2560,
                                            aspectRatio: '16:9',
                                            gravity: 'auto'
                                        }).toURL()} 2x`}
                                    />
                                    <img
                                        src={getCloudinaryImage(pathToPublicId(HERO_IMAGE_URL), {
                                            width: 1920,
                                            aspectRatio: '16:9',
                                            gravity: 'auto'
                                        }).toURL()}
                                        alt="Cabinet de kinésithérapie du sport à Paris 17 Batignolles"
                                        className="w-full h-full object-cover opacity-90 transition-transform duration-[20s] group-hover:scale-105"
                                        fetchPriority="high"
                                        loading="eager"
                                    />
                                </picture>
                            ) : (
                                <img
                                    src={HERO_IMAGE_URL}
                                    alt="Cabinet de kinésithérapie du sport à Paris 17 Batignolles"
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-[20s] group-hover:scale-105"
                                    fetchPriority="high"
                                    loading="eager"
                                    width="1920"
                                    height="1080"
                                    onError={(e) => {
                                        e.currentTarget.src = '/images/hero/hero.jpeg';
                                    }}
                                />
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10" />
                        </div>

                        <div className="absolute inset-0 flex items-end z-10">
                            <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 pb-8 md:pb-16">
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={staggerContainer}
                                    className="max-w-content mx-auto w-full px-4 md:px-6"
                                >
                                    <motion.div
                                        variants={fadeUp}
                                        className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 text-white text-2xs sm:text-xs md:text-sm font-semibold tracking-wide mb-5"
                                    >
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                                        Kinés du sport · Paris 17 – Batignolles
                                    </motion.div>

                                    <motion.h1
                                        variants={fadeUp}
                                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[0.95] mb-4 drop-shadow-lg"
                                    >
                                        Reprendre le sport
                                        <br />
                                        sans douleur.
                                    </motion.h1>

                                    <div className="mt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-6">
                                        <motion.p
                                            variants={fadeUp}
                                            className="text-gray-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-[65ch]"
                                        >
                                            Bilan précis, plan sur mesure, retour au sport encadré.
                                        </motion.p>

                                        <motion.div variants={fadeUp}>
                                            <Button
                                                href={DOCTOLIB_URL}
                                                variant="booking"
                                                variants={pulseLoop}
                                            // We don't need animate="visible" here as it inherits from parent, 
                                            // but passing it explicitly guards against any context issues if variants names differed
                                            >
                                                Prendre rendez-vous
                                            </Button>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                {/* Scroll Indicator */}
                                <motion.a
                                    href="#parcours"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                    className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer z-20"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (window.innerWidth >= 1024 && containerRef.current) {
                                            // Desktop: Scroll container
                                            containerRef.current.scrollBy({
                                                top: window.innerHeight,
                                                behavior: 'smooth'
                                            });
                                        } else {
                                            // Mobile/Tablet: Scroll window
                                            const parcoursSection = document.getElementById('parcours');
                                            parcoursSection?.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    <span className="text-xs uppercase tracking-widest font-medium">Découvrir</span>
                                    <motion.div
                                        animate={{ y: [0, 6, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                    >
                                        <ChevronDown size={20} />
                                    </motion.div>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 1. PARCOURS DE SOIN */}
                <section id="parcours" className="snap-start min-h-screen flex items-center py-10 md:py-20" style={{ scrollMarginTop: '-5vh' }}>
                    <div className="max-w-content w-full mx-auto px-4 md:px-6">
                        <MethodSection />
                    </div>
                </section>

                {/* 2. EXPERTISE */}
                <section id="expertise" className="snap-start min-h-screen flex items-center py-10 md:py-20" style={{ scrollMarginTop: '-5vh' }}>
                    <div className="max-w-content w-full mx-auto px-4 md:px-6">
                        <ExpertiseSection />
                    </div>
                </section>

                {/* 3. AVIS PATIENTS */}
                <section id="avis" className="snap-start min-h-screen flex items-center py-10 md:py-20" style={{ scrollMarginTop: '-5vh' }}>
                    <div className="max-w-content w-full mx-auto px-4 md:px-6">
                        <TestimonialsSection />
                    </div>
                </section>

                {/* 4. FAQ */}
                <section id="faq" className="snap-start min-h-screen flex items-center py-10 md:py-20" style={{ scrollMarginTop: '-5vh' }}>
                    <div className="max-w-content w-full mx-auto px-4 md:px-6">
                        <FaqSection />
                    </div>
                </section>

                {/* 5. ACCÈS */}
                <section id="acces" className="snap-start min-h-screen flex items-center py-10 md:py-20" style={{ scrollMarginTop: '-5vh' }}>
                    <div className="max-w-content w-full mx-auto px-4 md:px-6">
                        <AccessSection />
                    </div>
                </section>

                {/* Footer integrated in scroll snap */}
                <div className="snap-end">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Home;
