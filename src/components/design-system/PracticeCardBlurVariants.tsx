import React from 'react';
import { Activity, Heart, ArrowRight } from 'lucide-react';

const SAMPLE_PRACTICES = [
    {
        id: 1,
        title: "Kinésithérapie du sport",
        description: "Accompagnement du sportif : retour terrain sans douleur et performance optimisée.",
        highlights: ["Bilan kiné du sportif", "Plan de soin sur mesure", "Réathlétisation", "Prévention"],
        image: "/images/practices/kine-sport.webp",
        icon: Activity
    },
    {
        id: 2,
        title: "Rééducation globale",
        description: "Suivi post-trauma ou chirurgie : retour à l'autonomie avec des soins adaptés.",
        highlights: ["Prise en charge globale", "Suivi post-opératoire", "Rééducation sur mesure", "Exercices personnalisés"],
        image: "/images/practices/reeducation.webp",
        icon: Heart
    }
];

export const PracticeCardBlurVariants: React.FC = () => {
    return (
        <div className="space-y-24">

            {/* VARIANT 1: DYNAMIC SCRIM (IOS 17) */}
            <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold text-slate-900">1. Dynamic Scrim (iOS 17)</h3>
                    <p className="text-slate-600">Gradient sophistiqué, texte blanc sur image, immersion totale.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {SAMPLE_PRACTICES.map((practice) => (
                        <article key={practice.id} className="group relative h-[500px] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl transition-all duration-500 hover:shadow-3xl">
                            {/* Image */}
                            <div className="absolute inset-0">
                                <img src={practice.image} alt={practice.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>

                            {/* Icon */}
                            <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center z-10 border border-white/20">
                                <practice.icon className="w-6 h-6 text-primary" />
                            </div>

                            {/* Scrim & Content */}
                            <div className="absolute inset-x-0 bottom-0 top-1/3 flex flex-col justify-end p-8">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <div
                                    className="absolute inset-0 backdrop-blur-[2px]"
                                    style={{
                                        maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
                                    }}
                                ></div>

                                <div className="relative z-10 space-y-3">
                                    <h4 className="text-2xl font-bold text-white leading-tight drop-shadow-md">{practice.title}</h4>
                                    <p className="text-white/90 font-medium leading-relaxed drop-shadow-sm">{practice.description}</p>
                                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
                                        {practice.highlights.map((h, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-white/80 font-medium">
                                                <span className="w-1 h-1 rounded-full bg-white shrink-0"></span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* VARIANT 2: FLOATING GLASS ISLAND (VisionOS) */}
            <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold text-slate-900">2. Floating Glass Island (VisionOS)</h3>
                    <p className="text-slate-600">Image plein écran, contenu isolé dans une île flottante en verre dépoli.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {SAMPLE_PRACTICES.map((practice) => (
                        <article key={practice.id} className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-slate-900">
                            {/* Image - Darkened slightly for pop */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-300 group-hover:bg-transparent"></div>
                                <img src={practice.image} alt={practice.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            </div>

                            {/* Icon - Floating separately */}
                            <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full shadow-lg flex items-center justify-center z-10 border border-white/20 text-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
                                <practice.icon className="w-5 h-5" />
                            </div>

                            {/* Floating Island Content */}
                            <div className="absolute bottom-4 left-4 right-4 z-20">
                                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/40 transition-transform duration-300 group-hover:-translate-y-1">
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{practice.title}</h4>
                                    <p className="text-sm text-slate-700 font-medium mb-4 line-clamp-2">{practice.description}</p>

                                    <div className="h-px w-full bg-slate-200/60 mb-3"></div>

                                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                                        {practice.highlights.map((h, i) => (
                                            <li key={i} className="text-xs text-slate-600 font-medium truncate">• {h}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* VARIANT 3: CLEAN SPLIT (Minimalist) */}
            <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold text-slate-900">3. Clean Split (Minimalist Premium)</h3>
                    <p className="text-slate-600">Séparation nette Image / Contenu. Ultra lisible, style galerie d'art.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {SAMPLE_PRACTICES.map((practice) => (
                        <article key={practice.id} className="group h-[500px] flex flex-col rounded-[2rem] overflow-hidden bg-white shadow-lg border border-slate-100 hover:shadow-2xl hover:border-slate-200 transition-all duration-300">
                            {/* Image Section (55%) */}
                            <div className="relative h-[55%] overflow-hidden">
                                <div className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                                    <practice.icon className="w-5 h-5 text-slate-900" />
                                </div>
                                <img src={practice.image} alt={practice.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>

                            {/* Content Section (45%) */}
                            <div className="flex-1 p-8 flex flex-col justify-between bg-white relative">
                                <div>
                                    <h4 className="text-2xl font-extrabold text-[#111] mb-3 tracking-tight">{practice.title}</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm mb-4 font-medium">{practice.description}</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="h-0.5 w-12 bg-primary"></div>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {practice.highlights.map((h, i) => (
                                            <li key={i} className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{h}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* VARIANT 4: FOCUS GRADIENT (Cinematic) */}
            <div className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-bold text-slate-900">4. Focus Gradient (Cinematic)</h3>
                    <p className="text-slate-600">Noir & Blanc par défaut, Couleur au survol. Texte blanc sur fond sombre.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {SAMPLE_PRACTICES.map((practice) => (
                        <article key={practice.id} className="group relative h-[500px] rounded-[2rem] overflow-hidden bg-black shadow-2xl">
                            {/* Image - BW to Color */}
                            <div className="absolute inset-0">
                                <img
                                    src={practice.image}
                                    alt={practice.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90"></div>
                            </div>

                            {/* Floating Icon */}
                            <div className="absolute top-0 right-0 p-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                <practice.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-8 transform transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                                    <span className="text-primary font-bold tracking-widest text-xs uppercase">Expertise</span>
                                    <div className="h-px bg-primary w-8"></div>
                                </div>

                                <h4 className="text-3xl font-bold text-white mb-2">{practice.title}</h4>
                                <p className="text-gray-300 text-sm mb-6 max-w-[90%] font-light">{practice.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {practice.highlights.map((h, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs text-white/90">
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center text-white text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200">
                                    Découvrir <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

        </div>
    );
};
