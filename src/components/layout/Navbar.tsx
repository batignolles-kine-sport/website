import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { LOGO_URL, DOCTOLIB_URL } from '../../utils/constants';

interface NavbarProps {
    isScrolled: boolean;
    isNavVisible: boolean;
    isDesktop: boolean;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
    isScrolled,
    isNavVisible,
    isDesktop,
    mobileMenuOpen,
    setMobileMenuOpen
}) => {
    return (
        <>
            {/* --- FLOATING NAVBAR WRAPPER --- */}
            <div className={`fixed top-0 left-0 w-full z-50 flex justify-center items-start pointer-events-none transition-transform duration-300 h-20 md:h-28 ${!isNavVisible && !mobileMenuOpen ? '-translate-y-full md:translate-y-0' : 'translate-y-0'}`}>
                <motion.header
                    className="pointer-events-auto flex items-center justify-between w-full max-w-[1400px]"
                    initial="top"
                    animate={isScrolled ? "scrolled" : "top"}
                    variants={{
                        top: {
                            width: "100%",
                            marginTop: 0,
                            backgroundColor: "rgba(255, 255, 255, 0)",
                            backdropFilter: "blur(0px) saturate(100%)",
                            borderRadius: "0px",
                            border: "1px solid rgba(255, 255, 255, 0)",
                            boxShadow: "none",
                            paddingLeft: "1.5rem",
                            paddingRight: "1.5rem",
                            paddingTop: isDesktop ? "1.75rem" : "1rem",
                            paddingBottom: isDesktop ? "1.75rem" : "1rem",
                        },
                        scrolled: {
                            width: "95%",
                            marginTop: isDesktop ? "20px" : "10px",
                            backgroundColor: "rgba(255, 255, 255, 0.70)",
                            backdropFilter: "blur(20px) saturate(180%)",
                            borderRadius: "9999px",
                            border: "1px solid rgba(255, 255, 255, 0.5)",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)",
                            paddingLeft: "2rem",
                            paddingRight: "2rem",
                            paddingTop: "0.75rem",
                            paddingBottom: "0.75rem",
                        }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <div className="w-full flex justify-between items-center">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <motion.img
                                src={LOGO_URL}
                                alt="BKS - Batignolles Kiné Sport"
                                className="w-auto object-contain"
                                variants={{
                                    top: { height: isDesktop ? "3.5rem" : "3rem" },
                                    scrolled: { height: "2.5rem" }
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
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
                                className="bg-primary text-white hover:bg-primary/90 transition-colors text-sm px-5 py-2.5 rounded-full flex items-center gap-2 font-medium"
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
                </motion.header>
            </div>

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
        </>
    );
};
