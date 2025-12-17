import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, Instagram, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { toTelHref } from '../../utils/helpers';
import { ADDRESS, DOCTOLIB_URL, EMAIL, INSTAGRAM_URL, LOGO_URL, PHONE } from '../../utils/constants';

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
            <a 
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group ${
                isScrolled ? 'px-4 py-2' : 'px-5 py-2.5'
              }`}
            >
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
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

      <footer className="bg-secondary border-t border-gray-200 pb-8 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="col-span-1 md:col-span-1">
              <span className="mb-4 block text-xl font-bold text-primary">BKS</span>
              <p className="mb-4 text-sm text-text-light">
                Votre partenaire santé et performance au cœur des Batignolles. Une équipe de passionnés à votre écoute.
              </p>
              <div className="flex items-center space-x-2">
                <a href={INSTAGRAM_URL} className="flex items-center text-text-light transition-colors hover:text-primary" target="_blank" rel="noreferrer">
                  <Instagram size={20} />
                </a>
                <span className="text-xs uppercase tracking-[0.3em] text-text-light">batignolleskinesport</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-main">Navigation</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/equipe" className="text-sm text-text-light hover:text-primary">
                    L'Équipe
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-text-light hover:text-primary">
                    Contact & Accès
                  </Link>
                </li>
                <li>
                  <Link to="/mentions-legales" className="text-sm text-text-light hover:text-primary">
                    Mentions Légales
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-main">Pathologies</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/services/kine-sport" className="text-sm text-text-light hover:text-primary">
                    Kiné du Sport
                  </Link>
                </li>
                <li>
                  <Link to="/services/reeducation-post-traumatique" className="text-sm text-text-light hover:text-primary">
                    Rééducation Post-Op
                  </Link>
                </li>
                <li>
                  <Link to="/services/prevention-preparation-physique" className="text-sm text-text-light hover:text-primary">
                    Prévention & Préparation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-main">Infos Pratiques</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start text-sm text-text-light">
                  <MapPin size={18} className="mr-2 shrink-0 text-primary" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-center text-sm text-text-light">
                  <Phone size={18} className="mr-2 shrink-0 text-primary" />
                  <a href={toTelHref(PHONE)} className="hover:text-primary">
                    {PHONE}
                  </a>
                </li>
                <li className="flex items-center text-sm text-text-light">
                  <Mail size={18} className="mr-2 shrink-0 text-primary" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-text-light">&copy; {new Date().getFullYear()} Batignolles Kiné Sport. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};