import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Map, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/layout/SEO';

export const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <SEO
                title="Page non trouvée - Batignolles Kiné Sport"
                description="Erreur 404 - La page que vous cherchez n'existe pas ou a été déplacée. Retournez à l'accueil du cabinet de kinésithérapie du sport Paris 17."
            />

            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 px-4 py-20">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 -left-1/4 w-full h-full bg-linear-to-r from-primary/30 to-transparent rotate-12 blur-3xl scale-150" />
                    <div className="absolute bottom-0 -right-1/4 w-full h-full bg-linear-to-l from-primary/30 to-transparent -rotate-12 blur-3xl scale-150" />
                </div>

                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    {/* Icon Animation */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
                                <Map className="w-16 h-16 text-primary" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter"
                    >
                        404
                    </motion.h1>

                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-2xl md:text-3xl font-medium text-white/90 mb-6"
                    >
                        Faux mouvement ?
                    </motion.h2>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-lg text-slate-400 mb-10 max-w-md mx-auto leading-relaxed"
                    >
                        Cette page semble avoir disparu ou n'a jamais existé.
                        Un peu comme une douleur fantôme, on ne sait pas d'où elle vient.
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button variant="primary" onClick={() => navigate('/')}>
                            Retour à l'accueil
                        </Button>

                        <Link
                            to="/contact"
                            className="px-6 py-3 rounded-xl text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group font-medium"
                        >
                            Nous contacter
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default NotFound;
