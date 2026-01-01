import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { toTelHref } from '../../utils/helpers';
import { ADDRESS, DOCTOLIB_URL, EMAIL, INSTAGRAM_URL, PHONE, GOOGLE_MAPS_URL } from '../../utils/constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-slate-200 pb-12 pt-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="block">
                            <span className="text-2xl font-bold text-slate-800 tracking-tight">Batignolles Kiné Sport</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Cabinet de kinésithérapie du sport.<br />
                            Rééducation, performance et prévention à Paris Batignolles.
                        </p>
                        <div className="flex gap-4">
                            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group">
                                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href={`mailto:${EMAIL}`} className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group">
                                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Navigation</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-sm text-slate-600 hover:text-primary transition-colors font-medium">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="/equipe" className="text-sm text-slate-600 hover:text-primary transition-colors font-medium">
                                    L'Équipe
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm text-slate-600 hover:text-primary transition-colors font-medium">
                                    Contact & Accès
                                </Link>
                            </li>
                            <li>
                                <a href={DOCTOLIB_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                                    Prendre rendez-vous
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Pathologies */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Expertise</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/pathologies" className="text-sm text-slate-600 hover:text-primary transition-colors font-medium">
                                    Traumatologie du sport
                                </Link>
                            </li>
                            <li>
                                <Link to="/pathologies" className="text-sm text-slate-600 hover:text-primary transition-colors font-medium">
                                    Rééducation Post-Op
                                </Link>
                            </li>
                            <li>
                                <Link to="/pathologies" className="text-sm text-slate-600 hover:text-primary transition-colors font-medium">
                                    Prévention
                                </Link>
                            </li>
                            <li>
                                <Link to="/mentions-legales" className="text-sm text-slate-600 hover:text-primary transition-colors font-medium">
                                    Mentions Légales
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="shrink-0 text-primary mt-0.5" />
                                <a
                                    href={GOOGLE_MAPS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-slate-600 leading-relaxed hover:text-primary transition-colors"
                                >
                                    {ADDRESS}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={toTelHref(PHONE)}
                                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary transition-colors group"
                                >
                                    <Phone size={16} className="shrink-0 text-primary group-hover:scale-110 transition-transform" />
                                    <span className="font-medium">{PHONE}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary transition-colors group"
                                >
                                    <Mail size={16} className="shrink-0 text-primary group-hover:scale-110 transition-transform" />
                                    <span className="font-medium text-sm break-all">{EMAIL}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <p className="text-sm text-slate-600">
                            &copy; {new Date().getFullYear()} Batignolles Kiné Sport. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
