import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, Instagram, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { toTelHref } from '../../utils/helpers';
import { ADDRESS, DOCTOLIB_URL, EMAIL, INSTAGRAM_URL, LOGO_URL, PHONE, TEAM, GOOGLE_MAPS_URL } from '../../utils/constants';
import { SchemaMarkup } from './SchemaMarkup';
import { Button } from '../ui/Button';
import reviewsData from '../../data/avis.json';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Gestion du scroll pour l'effet Liquid Glass
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
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
    <div className="flex min-h-screen flex-col font-sans text-text-main">
      {/* JSON-LD Schema Markup for SEO */}
      <SchemaMarkup
        practitioners={TEAM}
        aggregateRating={{
          ratingValue: reviewsData.note_moyenne,
          reviewCount: reviewsData.nombre_avis_total,
        }}
      />
      <style>{`
        .glass-nav {
          background: rgba(255, 255, 255, 0.90);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(203, 213, 225, 0.4);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      {/* --- STICKY NAVBAR --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-6 ${
          isScrolled ? 'glass-nav py-3' : 'bg-surface py-4 md:py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src={LOGO_URL}
              alt="BKS - Batignolles Kiné Sport"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-12 md:h-14'
              }`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors relative group ${isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'}`
              }
            >
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </NavLink>
            <NavLink 
              to="/pathologies"
              className={({ isActive }) => 
                `text-sm font-medium transition-colors relative group ${isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'}`
              }
            >
              Pathologies
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </NavLink>
            <NavLink 
              to="/equipe"
              className={({ isActive }) => 
                `text-sm font-medium transition-colors relative group ${isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'}`
              }
            >
              Équipe
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                `text-sm font-medium transition-colors relative group ${isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'}`
              }
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </NavLink>
          </nav>

          {/* CTA Tablette/Desktop */}
          <div className="hidden sm:block">
            <Button
              href={DOCTOLIB_URL}
              variant="booking"
              className={`text-sm ${isScrolled ? 'px-4 py-2' : 'px-5 py-2.5'} rounded-full`}
            >
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Burger Mobile */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-slate-900 p-2 -mr-2"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Fullscreen */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center gap-8 animate-fade-in lg:hidden px-6 text-center">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-slate-900 text-2xl md:text-3xl font-serif font-medium tracking-tight transition-colors relative group ${isActive ? 'text-primary' : 'hover:text-primary'}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Accueil
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-12" />
          </NavLink>
          <NavLink 
            to="/pathologies"
            className={({ isActive }) => 
              `text-slate-900 text-2xl md:text-3xl font-serif font-medium tracking-tight transition-colors relative group ${isActive ? 'text-primary' : 'hover:text-primary'}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Pathologies
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-16" />
          </NavLink>
          <NavLink 
            to="/equipe"
            className={({ isActive }) => 
              `text-slate-900 text-2xl md:text-3xl font-serif font-medium tracking-tight transition-colors relative group ${isActive ? 'text-primary' : 'hover:text-primary'}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Équipe
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-12" />
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              `text-slate-900 text-2xl md:text-3xl font-serif font-medium tracking-tight transition-colors relative group ${isActive ? 'text-primary' : 'hover:text-primary'}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-12" />
          </NavLink>
        </div>
      )}

      {/* Spacer pour compenser la navbar fixed */}
      <div className="h-16 md:h-20" />

      <main className="grow">{children}</main>

      {/* Spacer with site background to separate content from footer without exposing body color */}
      <div className="h-10 md:h-12 bg-surface" />

      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* CTA Banner */}
          <div className="mb-12 md:mb-16 bg-linear-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">Prêt à reprendre l'activité ?</h3>
                <p className="text-slate-300 text-sm md:text-base">Prenez rendez-vous avec notre équipe pour un bilan personnalisé.</p>
              </div>
              <Button href={DOCTOLIB_URL} variant="booking" className="shrink-0 text-sm flex items-center gap-2">
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-2">
              <span className="mb-4 block text-2xl font-bold text-white">Batignolles Kiné Sport</span>
              <p className="mb-6 text-sm text-slate-300 leading-relaxed">
                Batignolles Kiné Sport – kinés du sport à Paris 17, quartier Batignolles.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-white/10 hover:bg-primary/20 rounded-lg text-slate-300 hover:text-primary transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href={`mailto:${EMAIL}`}
                  className="p-2.5 bg-white/10 hover:bg-primary/20 rounded-lg text-slate-300 hover:text-primary transition-all group"
                  aria-label="Email"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href={toTelHref(PHONE)}
                  className="p-2.5 bg-white/10 hover:bg-primary/20 rounded-lg text-slate-300 hover:text-primary transition-all group"
                  aria-label="Téléphone"
                >
                  <Phone size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>

              {/* Rating Badge */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-xs text-slate-400 mb-2">Noté par nos patients</p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                >
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold">
                    {Number.isInteger(reviewsData.note_moyenne)
                      ? String(reviewsData.note_moyenne)
                      : reviewsData.note_moyenne?.toFixed(1).replace('.', ',')}
                  </span>
                  <span className="text-xs text-slate-300">({reviewsData.nombre_avis_total} avis)</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-slate-400 hover:text-primary transition-colors font-medium">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/equipe" className="text-sm text-slate-400 hover:text-primary transition-colors font-medium">
                    L'Équipe
                  </Link>
                </li>
                <li>
                  <Link to="/pathologies" className="text-sm text-slate-400 hover:text-primary transition-colors font-medium">
                    Pathologies
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-slate-400 hover:text-primary transition-colors font-medium">
                    Contact & Accès
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/pathologies" className="text-sm text-slate-400 hover:text-primary transition-colors font-medium">
                    Kiné du Sport
                  </Link>
                </li>
                <li>
                  <Link to="/pathologies" className="text-sm text-slate-400 hover:text-primary transition-colors font-medium">
                    Rééducation Post-Op
                  </Link>
                </li>
                <li>
                  <Link to="/pathologies" className="text-sm text-slate-400 hover:text-primary transition-colors font-medium">
                    Prévention
                  </Link>
                </li>
                <li>
                  <Link to="/mentions-legales" className="text-sm text-slate-400 hover:text-primary transition-colors font-medium">
                    Mentions Légales
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="shrink-0 text-primary mt-0.5" />
                  <div className="text-sm text-slate-300 leading-relaxed">{ADDRESS}</div>
                </li>
                <li>
                  <a 
                    href={toTelHref(PHONE)} 
                    className="flex items-center gap-3 text-sm text-slate-300 hover:text-primary transition-colors group"
                  >
                    <Phone size={16} className="shrink-0 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{PHONE}</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 text-sm text-slate-300 hover:text-primary transition-colors group"
                  >
                    <Mail size={16} className="shrink-0 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-sm break-all">{EMAIL}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm text-slate-400">
                &copy; {new Date().getFullYear()} Batignolles Kiné Sport. Tous droits réservés.
              </p>
              <div className="flex items-center gap-6">
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-primary transition-colors">
                  Instagram
                </a>
                <Link to="/mentions-legales" className="text-xs text-slate-400 hover:text-primary transition-colors">
                  Mentions Légales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};