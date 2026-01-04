import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toTelHref } from '../../utils/helpers';
import { DOCTOLIB_URL, TEAM } from '../../utils/constants';
import { SchemaMarkup } from './SchemaMarkup';
import { AuroraBackground } from '../ui/AuroraBackground';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import reviewsData from '../../data/avis.json';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFAB, setShowFAB] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 768 : false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  // Check screen size for responsive navbar padding
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle Floating Action Button visibility (Doctolib)
  useEffect(() => {
    // Apparition après 2 secondes (similaire à OpenWidget)
    const timer = setTimeout(() => {
      setShowFAB(true);
    }, 2000);

    // Ou apparition au premier scroll ou action
    const triggerFAB = () => {
      setShowFAB(true);
    };

    // On écoute le scroll sur window et sur le potentiel conteneur de la Home
    window.addEventListener('scroll', triggerFAB, { passive: true });
    window.addEventListener('mousedown', triggerFAB);
    window.addEventListener('touchstart', triggerFAB);
    window.addEventListener('keydown', triggerFAB);

    // Check for home scroll container (for desktop performance/action)
    const homeScroll = document.querySelector('.lg\\:overflow-y-scroll');
    if (homeScroll) {
      homeScroll.addEventListener('scroll', triggerFAB, { passive: true });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', triggerFAB);
      window.removeEventListener('mousedown', triggerFAB);
      window.removeEventListener('touchstart', triggerFAB);
      window.removeEventListener('keydown', triggerFAB);
      if (homeScroll) {
        homeScroll.removeEventListener('scroll', triggerFAB);
      }
    };
  }, [location.pathname]);

  // Handle Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // Liquid Glass State
      setIsScrolled(currentScrollY > 10);

      // Smart Nav (Mobile) State
      // Hide on scroll down, show on scroll up (only active after slight scroll)
      // On Desktop, always visible
      if (window.innerWidth < 768) {
        if (currentScrollY > 50) {
          setIsNavVisible(!isScrollingDown);
        } else {
          setIsNavVisible(true);
        }
      } else {
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le scroll quand menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="flex min-h-screen flex-col font-sans text-text-main relative selection:bg-primary/20">
      <AuroraBackground />
      {/* JSON-LD Schema Markup for SEO */}
      <SchemaMarkup
        practitioners={TEAM}
        aggregateRating={{
          ratingValue: reviewsData.note_moyenne,
          reviewCount: reviewsData.nombre_avis_total,
        }}
      />

      <Navbar
        isScrolled={isScrolled}
        isNavVisible={isNavVisible}
        isDesktop={isDesktop}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Spacer pour compenser la navbar fixed */}
      <div className="h-14 md:h-16" />

      <main className="grow relative z-10">{children}</main>

      {/* Spacer with site background to separate content from footer without exposing body color */}

      {/* Footer is disabled on Home page because Home manages its own scroll snap container with an internal Footer */}
      {location.pathname !== '/' && <Footer />}

      {/* --- DOCTOLIB FLOATING ACTION BUTTON --- */}
      <AnimatePresence>
        {showFAB && !mobileMenuOpen && (
          <motion.a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-[90px] right-3 z-[9999] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all bg-brand-blue border-2 border-white/20"
            aria-label="Prendre rendez-vous sur Doctolib"
          >
            <img
              src="/images/doctolib/D_White.svg"
              alt="Doctolib"
              className="w-8 h-8 object-contain"
            />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
};