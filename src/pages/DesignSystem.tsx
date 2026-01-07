import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { DoctolibButton } from '../components/ui/DoctolibButton';
import Input from '../components/ui/Input';
import Modal from '../components/ui/Modal';
import { Link } from 'react-router-dom';
import {
    Calendar, Copy, Check, Phone, Mail, User, Activity, Hand,
    AlignVerticalJustifyCenter, Heart, ArrowLeft, ChevronRight,
    ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Design System Showcase Page - Real Site Components
 * Route: /design-system
 */
const DesignSystem: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [copiedColors, setCopiedColors] = useState<Record<string, boolean>>({});
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [activeProposal, setActiveProposal] = useState(1);

    const copyToClipboard = (color: string, colorValue: string) => {
        navigator.clipboard.writeText(colorValue);
        setCopiedColors({ ...copiedColors, [color]: true });
        setTimeout(() => {
            setCopiedColors({ ...copiedColors, [color]: false });
        }, 2000);
    };

    // Color swatches
    const brandColors = [
        { name: 'Doctolib Blue', value: '#107ACA', usage: 'Boutons Doctolib' },
        { name: 'Primary Green', value: '#1A4D2E', usage: 'Boutons principaux' },
        { name: 'Primary Dark', value: '#102E1B', usage: 'Hover states' },
    ];

    const neutralColors = [
        { name: 'Surface Base', value: '#fcfcf9', usage: 'Background principal' },
        { name: 'Surface Elevated', value: '#ffffff', usage: 'Cartes, modales' },
        { name: 'Text Primary', value: '#1e1c1a', usage: 'Texte principal' },
        { name: 'Text Secondary', value: '#5f5248', usage: 'Texte secondaire' },
        { name: 'Text Muted', value: '#867865', usage: 'Métadonnées' },
        { name: 'Border Subtle', value: 'rgba(26, 77, 46, 0.08)', usage: 'Bordures' },
    ];

    const FAQ_MOCK = [
        { question: 'Comment prendre rendez-vous ?', answer: 'Vous pouvez prendre rendez-vous directement sur Doctolib en quelques clics.' },
        { question: 'Quels sont les horaires ?', answer: 'Nous sommes ouverts du lundi au vendredi de 8h à 20h et le samedi de 9h à 14h.' },
        { question: 'Acceptez-vous la carte vitale ?', answer: 'Oui, nous sommes conventionnés secteur 1 et acceptons la carte vitale.' },
    ];

    const typewriterStyles = `
        .typewriter-container {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .last-name-animated {
            overflow: hidden;
            white-space: nowrap;
            max-width: 0;
            border-right: 2px solid transparent;
            display: inline-block;
            vertical-align: bottom;
            transition: max-width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .last-name-animated {
            max-width: 400px;
            animation: 
              typewriter 1.5s steps(20) forwards, 
              blinkingCursor 500ms steps(infinite) infinite normal;
            border-right: 2px solid rgba(255,255,255,.75);
            margin-left: 0.3em;
        }
        .option-3-card:hover .last-name-animated {
            border-right: 2px solid rgba(30,28,26,.75);
        }
        @keyframes typewriter {
          from { max-width: 0; }
          to { max-width: 400px; }
        }
        @keyframes blinkingCursor{
          0%, 100% { border-right-color: rgba(255,255,255,.75); }
          50% { border-right-color: transparent; }
        }
        .option-3-card @keyframes blinkingCursor{
          0%, 100% { border-right-color: rgba(30,28,26,.75); }
          50% { border-right-color: transparent; }
        }
    `;

    return (
        <div className="min-h-screen bg-surface-base pb-20">
            <style>{typewriterStyles}</style>
            {/* Hero Section with Logo Card */}
            <section id="hero" className="py-12 md:py-16 px-6 max-w-7xl mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e1c1a] mb-6">
                        Design System
                    </h1>
                    <p className="text-xl md:text-2xl text-[#5f5248] leading-relaxed mb-8">
                        Référentiel des vrais composants du site
                    </p>

                    {/* Table of Contents */}
                    <nav className="inline-flex flex-wrap justify-center gap-3 p-2 bg-slate-100/50 rounded-2xl border border-slate-200">
                        {[
                            { id: 'couleurs', label: 'Couleurs' },
                            { id: 'evolution', label: 'Charte Graphique' },
                            { id: 'cartes-praticiens', label: 'Cartes Praticiens' },
                            { id: 'typography', label: 'Typo' },
                            { id: 'navigation', label: 'Navigation' },
                            { id: 'faq', label: 'FAQ' },
                            { id: 'expertise', label: 'Expertise' },
                            { id: 'buttons', label: 'Boutons' },
                            { id: 'forms', label: 'Forms' },
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-primary hover:bg-white rounded-xl transition-all shadow-sm hover:shadow-md"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Logo Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="bg-white p-8 md:p-12 text-center rounded-xl border-2 border-gray-200 shadow-lg">
                        <img src="/images/logo.svg" alt="BKS Logo" className="h-24 w-auto mx-auto mb-6" />
                        <h2 className="text-2xl font-sans font-bold text-[#1e1c1a] mb-3">Logo BKS</h2>
                        <p className="text-lg text-[#5f5248] mb-2"><strong>BKS</strong> est l'acronyme de</p>
                        <p className="text-3xl font-sans font-bold text-gradient-primary">Batignolles Kiné Sport</p>
                    </div>
                </motion.div>
            </section>

            {/* Couleurs */}
            <section id="couleurs" className="py-12 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-8">Couleurs</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {brandColors.map((color) => (
                        <motion.div key={color.name} whileHover={{ y: -4 }} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
                            <div className="h-40 flex items-center justify-center relative group" style={{ backgroundColor: color.value }}>
                                <button onClick={() => copyToClipboard(color.name, color.value)} className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md">
                                    {copiedColors[color.name] ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-700" />}
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-[#1e1c1a] mb-2">{color.name}</h3>
                                <p className="text-base font-mono text-[#5f5248] mb-3">{color.value}</p>
                                <p className="text-sm text-[#867865]">{color.usage}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Evolution Charte Graphique - Comparaison Vert */}
            <section id="evolution" className="py-12 px-6 max-w-7xl mx-auto bg-slate-50 rounded-3xl mb-12 border border-slate-200 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
                    <div>
                        <h2 className="text-3xl font-sans font-bold text-[#1e1c1a]">Évolution Charte Graphique</h2>
                        <p className="text-slate-500 mt-2">Proposition de migration vers le nouveau vert <code className="bg-white px-2 py-1 rounded border border-slate-200 text-[#404134] font-bold">#404134</code></p>
                    </div>
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-bold text-xs uppercase tracking-wider border border-yellow-200">Proposition V3</span>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Colonne Actuel */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest leading-none">Actuel</h3>
                            <span className="font-mono text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded">#294c31</span>
                        </div>

                        {/* Swatch */}
                        <div className="h-24 rounded-2xl flex flex-col items-center justify-center text-white shadow-md relative group overflow-hidden" style={{ backgroundColor: '#294c31' }}>
                            <span className="font-mono font-bold text-lg">#294c31</span>
                            <span className="text-white/60 text-xs mt-1">Vert BKS Original</span>
                        </div>

                        {/* Boutons */}
                        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
                            <p className="text-xs font-bold text-slate-400 uppercase mb-2">Boutons</p>
                            <button className="w-full px-4 py-3 rounded-xl font-bold text-white transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 text-sm" style={{ backgroundColor: '#294c31' }}>
                                <Check size={16} /> Principal
                            </button>
                            <button className="w-full px-4 py-3 rounded-xl font-bold transition-all border-2 border-[#294c31] text-[#294c31] active:scale-95 flex items-center justify-center gap-2 text-sm">
                                <Activity size={16} /> Outline
                            </button>
                        </div>

                        {/* UI Elements Divers */}
                        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
                            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Badges & Icônes</p>

                            <div className="flex flex-wrap items-center gap-3">
                                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-opacity-10" style={{ backgroundColor: 'rgba(41, 76, 49, 0.1)', color: '#294c31' }}>
                                    Kiné Sport
                                </span>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-opacity-10" style={{ backgroundColor: 'rgba(41, 76, 49, 0.1)', color: '#294c31' }}>
                                    <Heart size={16} />
                                </div>
                                <a href="#" className="font-bold underline underline-offset-4 decoration-2 text-sm" style={{ color: '#294c31', textDecorationColor: 'rgba(41, 76, 49, 0.3)' }}>Lien</a>
                            </div>

                            {/* Alert / Callout */}
                            <div className="p-3 rounded-lg border-l-4 bg-opacity-5" style={{ backgroundColor: 'rgba(41, 76, 49, 0.05)', borderLeftColor: '#294c31' }}>
                                <p className="text-xs font-medium" style={{ color: '#294c31' }}>Note d'information standard.</p>
                            </div>
                        </div>

                        {/* Texte & Dégradé */}
                        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                            <p className="text-xs font-bold text-slate-400 uppercase mb-3">Typo & Gradient</p>
                            <h4 className="text-2xl font-bold mb-2 tracking-tight" style={{ color: '#294c31' }}>Titre H2</h4>
                            <div className="h-12 rounded-lg w-full mt-2 flex items-center justify-center text-white/90 text-xs font-medium" style={{ background: 'linear-gradient(to right, #294c31, #3d6e46)' }}>
                                Standard
                            </div>
                        </div>
                    </div>

                    {/* Colonne Option 2 (Olive Foncé) */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-[#404134] uppercase tracking-widest leading-none">Option 2</h3>
                            <span className="font-mono text-xs bg-[#404134]/10 text-[#404134] px-2 py-1 rounded font-bold">#404134</span>
                        </div>

                        {/* Swatch */}
                        <div className="h-24 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl ring-4 ring-[#404134]/10 relative overflow-hidden" style={{ backgroundColor: '#404134' }}>
                            <span className="font-mono font-bold text-lg">#404134</span>
                            <span className="text-white/60 text-xs mt-1">Olive Minéral</span>
                        </div>

                        {/* Boutons */}
                        <div className="p-5 bg-white rounded-2xl border border-[#404134]/10 shadow-md ring-1 ring-[#404134]/5 space-y-4">
                            <p className="text-xs font-bold text-[#404134]/50 uppercase mb-2">Boutons</p>
                            <button className="w-full px-4 py-3 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-xl hover:bg-[#404134]/90 active:scale-95 flex items-center justify-center gap-2 text-sm" style={{ backgroundColor: '#404134' }}>
                                <Check size={16} /> Principal
                            </button>
                            <button className="w-full px-4 py-3 rounded-xl font-bold transition-all border-2 border-[#404134] text-[#404134] hover:bg-[#404134]/5 active:scale-95 flex items-center justify-center gap-2 text-sm">
                                <Activity size={16} /> Outline
                            </button>
                        </div>

                        {/* UI Elements Divers */}
                        <div className="p-5 bg-white rounded-2xl border border-[#404134]/10 shadow-md ring-1 ring-[#404134]/5 space-y-4">
                            <p className="text-xs font-bold text-[#404134]/50 uppercase mb-1">Badges & Icônes</p>

                            <div className="flex flex-wrap items-center gap-3">
                                <span className="px-3 py-1 rounded-full text-[10px] font-bold" style={{ backgroundColor: 'rgba(64, 65, 52, 0.1)', color: '#404134' }}>
                                    Kiné Sport
                                </span>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(64, 65, 52, 0.1)', color: '#404134' }}>
                                    <Heart size={16} />
                                </div>
                                <a href="#" className="font-bold underline underline-offset-4 decoration-2 hover:text-opacity-80 transition-colors text-sm" style={{ color: '#404134', textDecorationColor: 'rgba(64, 65, 52, 0.3)' }}>Lien</a>
                            </div>

                            {/* Alert / Callout */}
                            <div className="p-3 rounded-lg border-l-4" style={{ backgroundColor: 'rgba(64, 65, 52, 0.05)', borderLeftColor: '#404134' }}>
                                <p className="text-xs font-medium" style={{ color: '#404134' }}>Sérieux et minéral.</p>
                            </div>
                        </div>

                        {/* Texte & Dégradé */}
                        <div className="p-5 bg-white rounded-2xl border border-[#404134]/10 shadow-md ring-1 ring-[#404134]/5">
                            <p className="text-xs font-bold text-[#404134]/50 uppercase mb-3">Typo & Gradient</p>
                            <h4 className="text-2xl font-bold mb-2 tracking-tight" style={{ color: '#404134' }}>Titre H2</h4>
                            <div className="h-12 rounded-lg w-full mt-2 flex items-center justify-center text-white/90 text-xs font-medium" style={{ background: 'linear-gradient(to right, #404134, #73755c)' }}>
                                Olive → Sauge
                            </div>
                        </div>
                    </div>

                    {/* Colonne Option 3 (Kaki Clair) */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-[#8b8c6f] uppercase tracking-widest leading-none">Option 3</h3>
                            <span className="font-mono text-xs bg-[#8b8c6f]/10 text-[#8b8c6f] px-2 py-1 rounded font-bold">#8b8c6f</span>
                        </div>

                        {/* Swatch */}
                        <div className="h-24 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl ring-4 ring-[#8b8c6f]/10 relative overflow-hidden" style={{ backgroundColor: '#8b8c6f' }}>
                            <div className="absolute top-0 right-0 bg-white/20 px-3 py-1 rounded-bl-xl text-[10px] font-bold uppercase backdrop-blur-sm">New</div>
                            <span className="font-mono font-bold text-lg">#8b8c6f</span>
                            <span className="text-white/80 text-xs mt-1">Kaki Naturel</span>
                        </div>

                        {/* Boutons */}
                        <div className="p-5 bg-white rounded-2xl border border-[#8b8c6f]/10 shadow-md ring-1 ring-[#8b8c6f]/5 space-y-4">
                            <p className="text-xs font-bold text-[#8b8c6f]/50 uppercase mb-2">Boutons</p>
                            <button className="w-full px-4 py-3 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-xl hover:bg-[#8b8c6f]/90 active:scale-95 flex items-center justify-center gap-2 text-sm" style={{ backgroundColor: '#8b8c6f' }}>
                                <Check size={16} /> Principal
                            </button>
                            <button className="w-full px-4 py-3 rounded-xl font-bold transition-all border-2 border-[#8b8c6f] text-[#8b8c6f] hover:bg-[#8b8c6f]/5 active:scale-95 flex items-center justify-center gap-2 text-sm">
                                <Activity size={16} /> Outline
                            </button>
                        </div>

                        {/* UI Elements Divers */}
                        <div className="p-5 bg-white rounded-2xl border border-[#8b8c6f]/10 shadow-md ring-1 ring-[#8b8c6f]/5 space-y-4">
                            <p className="text-xs font-bold text-[#8b8c6f]/50 uppercase mb-1">Badges & Icônes</p>

                            <div className="flex flex-wrap items-center gap-3">
                                <span className="px-3 py-1 rounded-full text-[10px] font-bold" style={{ backgroundColor: 'rgba(139, 140, 111, 0.15)', color: '#6d6e52' }}>
                                    Kiné Sport
                                </span>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(139, 140, 111, 0.15)', color: '#8b8c6f' }}>
                                    <Heart size={16} />
                                </div>
                                <a href="#" className="font-bold underline underline-offset-4 decoration-2 hover:text-opacity-80 transition-colors text-sm" style={{ color: '#8b8c6f', textDecorationColor: 'rgba(139, 140, 111, 0.4)' }}>Lien</a>
                            </div>

                            {/* Alert / Callout */}
                            <div className="p-3 rounded-lg border-l-4" style={{ backgroundColor: 'rgba(139, 140, 111, 0.08)', borderLeftColor: '#8b8c6f' }}>
                                <p className="text-xs font-medium" style={{ color: '#6d6e52' }}>Plus de douceur.</p>
                            </div>
                        </div>

                        {/* Texte & Dégradé */}
                        <div className="p-5 bg-white rounded-2xl border border-[#8b8c6f]/10 shadow-md ring-1 ring-[#8b8c6f]/5">
                            <p className="text-xs font-bold text-[#8b8c6f]/50 uppercase mb-3">Typo & Gradient</p>
                            <h4 className="text-2xl font-bold mb-2 tracking-tight" style={{ color: '#8b8c6f' }}>Titre H2</h4>
                            <div className="h-12 rounded-lg w-full mt-2 flex items-center justify-center text-white/90 text-xs font-medium" style={{ background: 'linear-gradient(to right, #8b8c6f, #a5a68d)' }}>
                                Kaki → Sable
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Exploration UI Cartes */}
            <section id="cartes-praticiens" className="py-12 px-6 max-w-7xl mx-auto bg-slate-50 rounded-3xl mb-12 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
                    <div>
                        <h2 className="text-3xl font-sans font-bold text-[#1e1c1a]">Exploration UI : Cartes Praticiens</h2>
                        <p className="text-slate-500 mt-2">Prénom seul par défaut, Nom + Info au survol</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Option 1: Hiérarchie Texte + Label Explicite */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs">1</div>
                            <h3 className="font-bold text-slate-700">Option "Label Explicite"</h3>
                        </div>

                        {/* Card Preview */}
                        <div className="relative h-[480px] rounded-[40px] overflow-hidden shadow-xl bg-slate-900 group">
                            <img src="https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_400,h_400,c_fill,g_face/gttfrwkqsjxtiiwi4ts5.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" alt="Demo" />
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-black/60 backdrop-blur-xl border border-white/20 rounded-[32px] p-5 text-center text-white transition-all duration-500 group-hover:w-[92%]">
                                <div className="typewriter-container h-8">
                                    <h3 className="text-2xl font-bold font-sans flex items-center">
                                        <span>Léa</span>
                                        <span className="last-name-animated">HLUBINA</span>
                                    </h3>
                                </div>

                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 w-full text-center">
                                    <div className="overflow-hidden">
                                        <p className="text-xs font-medium text-white/50 mb-4 mt-1 uppercase tracking-widest">Kiné du Sport</p>
                                        <div className="border-t border-white/10 pt-4 flex flex-col items-center gap-3">
                                            <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Ses sports</p>
                                            <div className="flex flex-wrap justify-center gap-2">
                                                <span className="px-3 py-1 bg-white/10 border border-white/10 text-white text-[10px] font-bold rounded-xl backdrop-blur-sm">Crossfit</span>
                                                <span className="px-3 py-1 bg-white/10 border border-white/10 text-white text-[10px] font-bold rounded-xl backdrop-blur-sm">Gymnastique</span>
                                            </div>
                                            <button className="flex items-center gap-2 bg-[#107ACA] hover:bg-[#0e69ad] text-white px-5 py-3 rounded-xl font-semibold text-xs transition-colors w-full justify-center mt-2 shadow-lg">
                                                <img src="/images/doctolib/D_White.svg" alt="" className="w-4 h-4" />
                                                Prendre rendez-vous
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 group-hover:hidden text-white/40">
                                    <ChevronDown size={14} className="animate-bounce mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Option 2: Badge Métier vs Tags Sports */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs">2</div>
                            <h3 className="font-bold text-slate-700">Option "Badge Métier"</h3>
                        </div>

                        {/* Card Preview */}
                        <div className="relative h-[480px] rounded-[40px] overflow-hidden shadow-xl bg-slate-900 group">
                            <img src="https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_400,h_400,c_fill,g_face/r8etpv9h9jp9r6nbfien.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" alt="Demo" />

                            <div className="absolute top-6 right-6 z-10">
                                <span className="bg-[#404134] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-2xl ring-1 ring-white/20 backdrop-blur-md">
                                    KINÉ DU SPORT
                                </span>
                            </div>

                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-black/60 backdrop-blur-xl border border-white/20 rounded-[32px] p-5 text-center text-white transition-all duration-500 group-hover:w-[92%]">
                                <div className="typewriter-container h-8">
                                    <h3 className="text-2xl font-bold font-sans flex items-center">
                                        <span>Justine</span>
                                        <span className="last-name-animated">JOSSE</span>
                                    </h3>
                                </div>

                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 w-full text-center">
                                    <div className="overflow-hidden flex flex-col items-center gap-4 pt-4">
                                        <div className="flex items-center gap-2">
                                            <Activity size={14} className="text-white/40" />
                                            <div className="flex items-center gap-1.5 text-xs font-medium text-white/90">
                                                <span>Running</span>
                                                <span className="text-white/20">•</span>
                                                <span>Danse</span>
                                            </div>
                                        </div>
                                        <button className="flex items-center gap-2 bg-[#107ACA] hover:bg-[#0e69ad] text-white px-5 py-3 rounded-xl font-semibold text-xs transition-colors w-full justify-center shadow-lg">
                                            <img src="/images/doctolib/D_White.svg" alt="" className="w-4 h-4" />
                                            Prendre rendez-vous
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-2 group-hover:hidden text-white/40">
                                    <ChevronDown size={14} className="animate-bounce mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Option 3: L'Approche "Luxe & Corner" */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs">3</div>
                            <h3 className="font-bold text-slate-700">Option "Badge Corner"</h3>
                        </div>

                        {/* Card Preview */}
                        <div className="relative h-[480px] rounded-[40px] overflow-hidden shadow-xl bg-slate-900 group">
                            <img src="https://media.doctolib.com/image/upload/q_auto:eco,f_auto,w_1024,h_700,c_limit/fhio2h6fqsfva0rslgjm.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" alt="Demo" />

                            {/* Corner Badge */}
                            <div className="absolute top-0 right-0 bg-[#404134] text-white px-5 py-3 rounded-bl-[24px] font-bold text-[10px] uppercase tracking-widest shadow-xl">
                                Kiné du Sport
                            </div>

                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white backdrop-blur-xl rounded-[32px] p-5 text-center transition-all duration-500 group-hover:w-[92%] shadow-2xl">
                                <div className="typewriter-container h-8">
                                    <h3 className="text-2xl font-bold font-sans text-slate-900 leading-tight flex items-center">
                                        <span>Martin</span>
                                        <span className="last-name-animated text-slate-400">BONNIN</span>
                                    </h3>
                                </div>

                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 w-full text-center">
                                    <div className="overflow-hidden flex flex-col items-center gap-4">
                                        <div className="w-full h-px bg-slate-100 mt-4"></div>
                                        <div className="flex gap-2">
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">Rugby</span>
                                            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">Tennis</span>
                                        </div>
                                        <button className="flex items-center gap-2 bg-[#107ACA] hover:bg-[#0e69ad] text-white px-5 py-4 rounded-xl font-bold text-xs transition-colors w-full justify-center shadow-lg">
                                            <img src="/images/doctolib/D_White.svg" alt="" className="w-4 h-4" />
                                            Prendre rendez-vous
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-2 group-hover:hidden text-slate-300">
                                    <ChevronDown size={14} className="animate-bounce mx-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section id="typography" className="py-12 px-6 max-w-4xl mx-auto">
                <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-8">Typographie</h2>
                <div className="space-y-8">
                    <div className="border-b-2 border-gray-200 pb-6">
                        <h1 className="text-5xl font-sans font-bold text-[#1e1c1a] mb-3">Titre H1 - Inter</h1>
                        <p className="text-base text-[#5f5248] font-mono">48px • Bold • Line-height: 1.2</p>
                    </div>
                    <div>
                        <h2 className="text-5xl font-sans font-bold text-gradient-primary mb-3">Titre avec Dégradé</h2>
                        <p className="text-base text-[#5f5248]">Classe <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm border border-gray-300">.text-gradient-primary</code></p>
                    </div>
                </div>
            </section>

            {/* REAL Hero Section */}
            <section id="hero-section" className="py-12 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-8">Hero Section (Page d'Accueil)</h2>
                <div className="relative w-full h-[60vh] min-h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group border border-white">
                    <div className="absolute inset-0">
                        <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white/40 text-2xl">Image Hero</div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10" />
                    </div>
                    <div className="absolute inset-0 flex items-end z-10">
                        <div className="w-full p-12 pb-16">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 text-white text-xs font-semibold mb-5">
                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                                Kinésithérapie du sport
                            </div>
                            <h1 className="text-6xl font-bold text-white tracking-tight leading-[0.95] mb-4">
                                Batignolles<br />Kiné Sport
                            </h1>
                            <p className="text-gray-200 text-lg leading-relaxed max-w-[65ch] mb-6">
                                Quartier des Batignolles, Paris 17ème
                            </p>
                            <Button variant="booking">Prendre rendez-vous</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section id="navigation" className="py-12 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-8">Navigation</h2>
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-lg">
                        <h3 className="text-2xl font-sans font-semibold text-[#1e1c1a] mb-6">Bouton Retour (Blog)</h3>
                        <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            Retour aux articles
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-lg">
                        <h3 className="text-2xl font-sans font-semibold text-[#1e1c1a] mb-6">Breadcrumbs</h3>
                        <nav className="flex items-center gap-2 text-sm">
                            <Link to="/" className="text-[#5f5248] hover:text-primary transition-colors">Accueil</Link>
                            <ChevronRight className="w-4 h-4 text-[#867865]" />
                            <span className="text-[#1e1c1a] font-semibold">Page actuelle</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* REAL FAQ Accordion */}
            <section id="faq" className="py-12 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-8">Accordéon FAQ (Réel)</h2>
                <div className="border-t border-border-subtle max-w-3xl">
                    {FAQ_MOCK.map((item, idx) => {
                        const isOpen = openFaqIndex === idx;
                        return (
                            <div key={idx} className="border-b border-border-subtle group">
                                <button
                                    className="w-full flex items-center justify-between py-4 text-left"
                                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                >
                                    <span className={`text-base font-medium transition-colors ${isOpen ? 'text-primary' : 'text-text-main group-hover:text-primary'}`}>
                                        {item.question}
                                    </span>
                                    <span className={`ml-6 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-border-subtle transition-all duration-300 ${isOpen ? 'rotate-180 bg-primary border-primary text-white' : 'text-text-muted group-hover:border-primary group-hover:text-primary'}`}>
                                        <ChevronDown size={16} />
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-text-muted text-sm leading-relaxed pb-4">{item.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* REAL Expertise Cards */}
            <section id="expertise" className="py-12 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-8">Cartes d'Expertise (Réelles)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { title: 'Sport & performance', lead: 'Coureur, terrain, reprise sans douleur', tags: ['RUNNING', 'RETOUR TERRAIN'], isMain: true },
                        { title: 'Rééducation & post-op', lead: 'Post-trauma et post-op mobilité', tags: ['POST-OP', 'MOBILITÉ'], isMain: false },
                        { title: 'Prévention', lead: 'Prévention des récidives', tags: ['PRÉVENTION', 'CONTRÔLE'], isMain: false },
                        { title: 'Kiné de la femme', lead: 'Grossesse, post-partum, périnée', tags: ['FEMMES', 'PÉRINÉE'], isMain: false },
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className={`relative p-5 rounded-3xl flex flex-col h-full transition-all duration-300 ${card.isMain
                                ? 'bg-[#193F2B] text-white shadow-xl'
                                : 'bg-white text-slate-900 border border-slate-100 shadow-card hover:shadow-lg'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className={`text-lg font-bold ${card.isMain ? 'text-white' : 'text-slate-900'}`}>{card.title}</h3>
                                <span className={`text-[10px] font-bold tracking-widest ${card.isMain ? 'text-white/60' : 'text-primary'}`}>BLOG</span>
                            </div>
                            <p className={`text-xs font-light leading-relaxed mb-4 ${card.isMain ? 'text-white/80' : 'text-slate-500'}`}>{card.lead}</p>
                            <div className="flex flex-wrap gap-1.5">
                                {card.tags.map(tag => (
                                    <span key={tag} className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${card.isMain ? 'bg-white/10 text-white border border-white/10' : 'bg-slate-50 text-slate-600 border border-slate-100'}`}>{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Buttons */}
            <section id="buttons" className="py-12 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-8">Boutons CTA</h2>
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-lg">
                        <h3 className="text-2xl font-sans font-semibold text-[#1e1c1a] mb-6">Boutons Doctolib</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-lg text-[#1e1c1a] mb-4">Sticky FAB</h4>
                                <div className="relative h-24 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                                    <a href="#" className="flex items-center justify-center w-14 h-14 rounded-full shadow-2xl bg-[#107ACA] border-2 border-white/20 hover:scale-110 active:scale-95 transition-all">
                                        <img src="/images/doctolib/D_White.svg" alt="Doctolib" className="w-8 h-8" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-[#1e1c1a] mb-4">Bouton Carte Équipe</h4>
                                <a href="#" className="w-full max-w-sm flex items-center justify-center gap-2 py-3 rounded-xl bg-[#107ACA] text-white font-semibold text-sm transition-transform active:scale-95 hover:bg-[#0e69ad]">
                                    <img src="/images/doctolib/D_White.svg" alt="" className="w-5 h-5" />
                                    Prendre rendez-vous
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-lg">
                        <h3 className="text-2xl font-sans font-semibold text-[#1e1c1a] mb-6">Boutons Standards</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="tertiary">Tertiary</Button>
                            <Button variant="booking">Réserver</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Card */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-8">Carte Blog</h2>
                <div className="max-w-sm">
                    <article className="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">Image 16:10</div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center text-xs text-[#867865] mb-3 space-x-3">
                                <span className="bg-primary/10 text-primary px-2 py-1 rounded font-medium">Prévention</span>
                                <span className="flex items-center"><Calendar size={14} className="mr-1" />15 jan 2024</span>
                            </div>
                            <h2 className="text-xl font-bold text-[#1e1c1a] mb-3">Titre de l'article</h2>
                            <p className="text-[#5f5248] text-sm line-clamp-3 mb-4 flex-grow">Extrait de l'article...</p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                                <div className="flex items-center text-xs text-[#867865]"><User size={14} className="mr-1" />Dr. Dupont</div>
                                <span className="text-sm font-medium text-primary hover:underline cursor-pointer">Lire l'article</span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* Forms */}
            <section id="forms" className="py-12 px-6 max-w-4xl mx-auto">
                <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-8">Formulaires</h2>
                <div className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-lg space-y-6">
                    <Input label="Champ Standard" placeholder="Entrez..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <Input label="Champ Requis" required />
                    <Input label="État d'Erreur" error="Erreur" />
                    <Input label="État Succès" value="ok@ok.com" success />
                    <Input label="Désactivé" disabled />
                </div>
            </section>

            {/* Modal */}
            <section id="modal" className="py-12 px-6 max-w-4xl mx-auto">
                <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-8">Modale</h2>
                <div className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-lg">
                    <Button variant="primary" onClick={() => setModalOpen(true)}>Ouvrir Modale</Button>
                    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Exemple">
                        <p className="text-[#5f5248] mb-4">Contenu de la modale...</p>
                        <div className="mt-6 flex gap-3">
                            <Button variant="primary" onClick={() => setModalOpen(false)}>OK</Button>
                            <Button variant="secondary" onClick={() => setModalOpen(false)}>Annuler</Button>
                        </div>
                    </Modal>
                </div>
            </section>

            {/* === PROPOSITIONS DE CARTES === */}
            <section className="py-12 px-6 max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-200">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-4">
                        🎨 3 Propositions de Styles de Cartes
                    </h2>
                    <p className="text-lg text-[#5f5248] max-w-2xl mx-auto">
                        Sélectionnez un style pour améliorer la lisibilité sur le fond beige
                    </p>
                </div>

                {/* Sélecteur de proposition */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {[1, 2, 3].map(num => (
                        <button
                            key={num}
                            onClick={() => setActiveProposal(num)}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeProposal === num
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-white text-[#5f5248] border-2 border-gray-200 hover:border-primary hover:text-primary'
                                }`}
                        >
                            {num === 1 ? 'Style Apple' : num === 2 ? 'Néomorphisme' : 'Style Google'}
                        </button>
                    ))}
                </div>

                {/* PROPOSITION 1 : Style Apple (Minimaliste & Premium) */}
                {activeProposal === 1 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl">
                            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 mb-6">
                                <h3 className="text-xl font-bold text-[#1e1c1a] mb-2">🍎 Proposition 1 : Style Apple</h3>
                                <p className="text-sm text-[#5f5248]">
                                    <strong>Caractéristiques :</strong> Cartes blanches immaculées, ombres douces et diffuses, bordures ultra-fines (hairline), coins arrondis (24px).
                                </p>
                                <p className="text-sm text-[#867865] mt-2">
                                    <strong>Philosophie :</strong> Le contenu avant tout. Les cartes "flottent" élégamment sur le fond beige. Contraste par la lumière (ombre) plutôt que par le trait.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Carte Standard */}
                                <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="font-bold text-xl text-[#1e1c1a] tracking-tight">Carte Standard</h4>
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                            <ChevronRight size={16} />
                                        </div>
                                    </div>
                                    <p className="text-[#5f5248] text-base leading-relaxed mb-6">Design épuré avec une ombre portée très douce qui s'accentue au survol.</p>
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-[#1e1c1a] text-xs font-semibold rounded-full">Explore</span>
                                </div>

                                {/* Carte Accentuée (Gradient subtil) */}
                                <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 opacity-50 pointer-events-none" />
                                    <h4 className="font-bold text-xl text-[#107ACA] tracking-tight mb-2 relative z-10">Accentuée</h4>
                                    <p className="text-[#5f5248] text-base leading-relaxed mb-6 relative z-10">Touche de couleur subtile et typographie soignée style San Francisco.</p>
                                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#107ACA] text-xs font-semibold rounded-full">New</span>
                                </div>

                                {/* Carte Sombre (Dark Mode style) */}
                                <div className="bg-[#1e1c1a] p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                                    <h4 className="font-bold text-xl text-white tracking-tight mb-2">Carte Sombre</h4>
                                    <p className="text-gray-400 text-base leading-relaxed mb-6">Contraste fort avec fond noir profond, typique des interfaces iOS Pro.</p>
                                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full backdrop-blur-md">Pro</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* PROPOSITION 2 : Néomorphisme (Conservée) */}
                {activeProposal === 2 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border-2 border-gray-200" style={{ boxShadow: '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff' }}>
                            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200 mb-6">
                                <h3 className="text-xl font-bold text-[#1e1c1a] mb-2">💧 Proposition 2 : Néomorphisme Doux</h3>
                                <p className="text-sm text-[#5f5248]">
                                    <strong>Caractéristiques :</strong> Ombres doubles (lumière/ombre), effet de relief tactile, intégration "organique" au fond.
                                </p>
                                <p className="text-sm text-[#867865] mt-2">
                                    <strong>Note:</strong> Cette proposition est conservée de la version précédente.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-[#fafafa] p-6 rounded-2xl transition-all hover:-translate-y-2 cursor-pointer" style={{ boxShadow: '12px 12px 24px #d1d1d1, -12px -12px 24px #ffffff' }}>
                                    <h4 className="font-bold text-lg text-[#1e1c1a] mb-2">Carte Standard</h4>
                                    <p className="text-[#5f5248] text-sm mb-4">Effet de matière pressée ou extrudée.</p>
                                    <span className="inline-block px-3 py-1 bg-white text-slate-700 text-xs font-semibold rounded-full" style={{ boxShadow: '4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff' }}>Button</span>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl transition-all hover:-translate-y-2 cursor-pointer" style={{ boxShadow: '12px 12px 24px #c5dfc5, -12px -12px 24px #f0fff0' }}>
                                    <h4 className="font-bold text-lg text-emerald-900 mb-2">Accentuée</h4>
                                    <p className="text-emerald-700 text-sm mb-4">Néomorphisme sur surface teintée.</p>
                                    <span className="inline-block px-3 py-1 bg-white text-emerald-700 text-xs font-semibold rounded-full" style={{ boxShadow: '3px 3px 6px #c5dfc5, -3px -3px 6px #f0fff0' }}>Tag</span>
                                </div>

                                <div className="bg-[#193F2B] p-6 rounded-2xl transition-all hover:-translate-y-2 cursor-pointer" style={{ boxShadow: '12px 12px 24px #0f1f15, -12px -12px 24px #235f41' }}>
                                    <h4 className="font-bold text-lg text-white mb-2">Sombre</h4>
                                    <p className="text-white/80 text-sm mb-4">Relief sur fond foncé.</p>
                                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full border border-white/20">Tag</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* PROPOSITION 3 : Style Google (Material You / M3) */}
                {activeProposal === 3 && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <div className="bg-stone-50 p-6 rounded-[28px] border border-stone-200">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
                                <h3 className="text-xl font-bold text-[#1e1c1a] mb-2">🤖 Proposition 3 : Style Google (Material 3)</h3>
                                <p className="text-sm text-[#5f5248]">
                                    <strong>Caractéristiques :</strong> Surfaces "Elevated" ou "Filled", coins très arrondis (28px+), interaction par changement de ton (State Layer), Ripple effect simulé.
                                </p>
                                <p className="text-sm text-[#867865] mt-2">
                                    <strong>Philosophie :</strong> Ludique, accessible et clair. Utilise des surfaces tintées pour différencier les plans.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Outlined Card */}
                                <div className="bg-surface-base border border-stone-300 p-6 rounded-[24px] hover:bg-stone-100 transition-colors cursor-pointer group">
                                    <h4 className="font-medium text-lg text-[#1e1c1a] mb-2 group-hover:text-primary transition-colors">Outlined Card</h4>
                                    <p className="text-[#5f5248] text-sm mb-4">Fond transparent avec bordure visible. Le survol assombrit légèrement le fond.</p>
                                    <div className="flex justify-end">
                                        <button className="px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">Action</button>
                                    </div>
                                </div>

                                {/* Elevated Card */}
                                <div className="bg-white p-6 rounded-[24px] shadow-md hover:shadow-lg hover:bg-stone-50 transition-all cursor-pointer">
                                    <h4 className="font-medium text-lg text-[#1e1c1a] mb-2">Elevated Card</h4>
                                    <p className="text-[#5f5248] text-sm mb-4">Fond blanc qui se détache du fond beige par une ombre portée. Très lisible.</p>
                                    <div className="flex gap-2 mt-4">
                                        <span className="px-3 py-1 rounded-lg bg-stone-100 text-stone-600 text-xs font-medium">Material</span>
                                        <span className="px-3 py-1 rounded-lg bg-stone-100 text-stone-600 text-xs font-medium">Design</span>
                                    </div>
                                </div>

                                {/* Filled Card */}
                                <div className="bg-primary/5 p-6 rounded-[24px] hover:bg-primary/10 transition-colors cursor-pointer border-none">
                                    <h4 className="font-medium text-lg text-primary mb-2">Filled Card</h4>
                                    <p className="text-[#5f5248] text-sm mb-4">Fond coloré très léger (Surface Container). C'est le style le plus moderne de Google.</p>
                                    <button className="w-full py-2.5 mt-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm hover:shadow-md transition-all">
                                        Explorer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Résumé des propositions - Badges de sélection */}
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                    <div className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${activeProposal === 1 ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-primary/30'}`} onClick={() => setActiveProposal(1)}>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">🍎</span>
                            <h4 className="font-bold text-lg text-[#1e1c1a]">Style Apple</h4>
                        </div>
                        <p className="text-xs text-[#5f5248]">Minimalisme, Ombres douces, Coins ronds</p>
                    </div>

                    <div className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${activeProposal === 2 ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-primary/30'}`} onClick={() => setActiveProposal(2)}>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">💧</span>
                            <h4 className="font-bold text-lg text-[#1e1c1a]">Néomorphisme</h4>
                        </div>
                        <p className="text-xs text-[#5f5248]">Relief 3D, Tactile, Intégré</p>
                    </div>

                    <div className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${activeProposal === 3 ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-primary/30'}`} onClick={() => setActiveProposal(3)}>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">🤖</span>
                            <h4 className="font-bold text-lg text-[#1e1c1a]">Style Google</h4>
                        </div>
                        <p className="text-xs text-[#5f5248]">Surfaces tintées, Formes ludiques, Hiérarchie</p>
                    </div>
                </div>
            </section>

            {/* === NOUVELLES PROPOSITIONS CARTES ÉQUIPE === */}
            <section className="py-12 px-6 max-w-7xl mx-auto mt-12 bg-gray-50 rounded-3xl border border-gray-200">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-sans font-bold text-[#1e1c1a] mb-4">
                        👥 Propositions Cartes Équipe
                    </h2>
                    <p className="text-lg text-[#5f5248] max-w-2xl mx-auto">
                        4 styles inspirés d'Apple & Google pour présenter l'équipe (sans description, focus sport)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* PROP 1 : L'Immersif Blur (Martin) */}
                    <article className="relative h-[420px] rounded-[32px] overflow-hidden group shadow-xl">
                        {/* Image Background Mockup */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900">
                            {/* Placeholder for Martin's photo */}
                            <div className="w-full h-full opacity-60 bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                        </div>

                        {/* Top Right Arrow (Screenshot style) */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                        </div>

                        {/* Glassmorphism Bottom Panel */}
                        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-black/40 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-1">Martin</h3>
                            <p className="text-white/60 text-sm font-medium mb-3">Kiné du Sport</p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg backdrop-blur-md">Rugby</span>
                                <span className="px-3 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg backdrop-blur-md">Tennis</span>
                            </div>
                        </div>
                    </article>


                    {/* PROP 2 : Apple Clean (Léa) */}
                    <article className="h-[420px] flex flex-col rounded-[24px] overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                        {/* Image Top */}
                        <div className="h-[75%] bg-gray-200 relative overflow-hidden">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
                            {/* Gradient Protection overlay at bottom of image */}
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-3xl font-bold tracking-tight">Léa</h3>
                            </div>
                        </div>

                        {/* Bottom Info White */}
                        <div className="h-[25%] p-5 flex items-center justify-between">
                            <div className="flex flex-col gap-1.5 w-full">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Expertise</span>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    <span className="text-[#107ACA] font-medium text-sm bg-blue-50 px-2 py-1 rounded-md">Crossfit</span>
                                    <span className="text-[#107ACA] font-medium text-sm bg-blue-50 px-2 py-1 rounded-md">Gymnastique</span>
                                </div>
                            </div>
                        </div>
                    </article>


                    {/* PROP 3 : Google Material You (Justine) */}
                    <article className="h-[420px] rounded-[32px] p-2 bg-[#fdfcfb] shadow-md border border-[#e0e0e0] flex flex-col hover:bg-white hover:shadow-xl transition-all">
                        {/* Image rounded */}
                        <div className="h-[65%] w-full rounded-[28px] overflow-hidden relative mb-2">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-slate-800 shadow-sm">Kiné</div>
                        </div>

                        {/* Content Container */}
                        <div className="flex-1 bg-[#E8DEF8]/30 rounded-[24px] p-5 flex flex-col justify-center items-center text-center">
                            <h3 className="text-xl font-bold text-[#1d1b20] mb-0.5">Justine</h3>
                            <div className="w-8 h-1 bg-primary/20 rounded-full my-3"></div>
                            <div className="flex flex-wrap justify-center gap-2">
                                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-sm">Course à pied</span>
                                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-sm">Danse</span>
                            </div>
                        </div>
                    </article>


                    {/* PROP 4 : Le Flottant (Léonie) */}
                    <article className="group relative h-[420px] rounded-[40px] overflow-hidden shadow-2xl">
                        {/* Full Image */}
                        <div className="absolute inset-0 bg-slate-800">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Floating Pill - Always visible but expands on hover */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-xl rounded-[24px] p-1 shadow-2xl hover:bg-white transition-all duration-300 overflow-hidden group-hover:scale-105 cursor-pointer">
                            <div className="flex flex-col items-center justify-center p-4">
                                <h3 className="text-xl font-bold text-slate-900">Léonie</h3>
                                {/* Hidden by default, shown on group hover (or just small transition) */}
                                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-300 flex flex-col items-center gap-2 mt-0 group-hover:mt-2">
                                    <div className="w-full h-px bg-slate-200"></div>
                                    <div className="flex gap-2 pt-1">
                                        <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded-lg">Course à pied</span>
                                        <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded-lg">Sports nautiques</span>
                                    </div>
                                </div>
                                {/* Indicator that there is more content */}
                                <div className="mt-1 group-hover:hidden text-slate-400">
                                    <ChevronDown size={14} className="animate-bounce" />
                                </div>
                            </div>
                        </div>
                    </article>

                </div>

                {/* === HYBRIDE FINAL (Mix 1 & 4) === */}
                <div className="mt-12 max-w-sm mx-auto">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-[#1e1c1a]">🏆 Le Choix Final (Mix 1 & 4)</h3>
                        <p className="text-[#5f5248]">Base flottante (4) + Style Glassmorphism (1) + CTA Doctolib</p>
                    </div>

                    <article className="group relative h-[480px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 w-full">
                        {/* Full Image */}
                        <div className="absolute inset-0 bg-slate-900">
                            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-90 transition-transform duration-700 group-hover:scale-105"></div>
                            {/* Gradient overlay for text readability if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Floating Glass Pill */}
                        {/* Initial State: Small pill with Name. Hover State: Expands with Blur Dark BG */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] transition-all duration-500 ease-out overflow-hidden
                            bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-[32px]
                            group-hover:w-[92%] group-hover:bg-black/40 group-hover:border-white/30 group-hover:backdrop-blur-xl">

                            <div className="flex flex-col items-center p-5 text-center transition-all duration-300">
                                {/* Name - Always Visible */}
                                <h3 className="text-2xl font-bold text-white mb-0 group-hover:mb-2 transition-all">Justine</h3>

                                {/* Info & CTA - Hidden initially, reveals on hover */}
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 w-full">
                                    <div className="overflow-hidden flex flex-col items-center gap-4">
                                        {/* Divider */}
                                        <div className="w-12 h-1 bg-white/30 rounded-full mb-1"></div>

                                        {/* Sports Tags */}
                                        <div className="flex flex-wrap justify-center gap-2">
                                            <span className="px-3 py-1.5 bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl backdrop-blur-sm">Course à pied</span>
                                            <span className="px-3 py-1.5 bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl backdrop-blur-sm">Danse</span>
                                        </div>

                                        {/* CTA Doctolib */}
                                        <a href="#" className="flex items-center gap-2 bg-[#107ACA] hover:bg-[#0e69ad] text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors w-full justify-center mt-2 shadow-lg">
                                            <img src="/images/doctolib/D_White.svg" alt="" className="w-4 h-4" />
                                            Prendre RDV
                                        </a>
                                    </div>
                                </div>

                                {/* Cheat arrow to incite hover if needed, or keeping it clean */}
                                <div className="mt-2 group-hover:hidden text-white/70">
                                    <ChevronDown size={18} className="animate-bounce" />
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default DesignSystem;
