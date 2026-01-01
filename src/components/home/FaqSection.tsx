import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FAQ_ENTRIES } from '../../utils/constants';

export const FaqSection: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <section id="faq">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <SectionHeader
                    badge="FAQ"
                    title={
                        <>
                            Questions<br />
                            <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">fréquentes.</span>
                        </>
                    }
                    description="Retrouvez les réponses aux questions les plus courantes sur le fonctionnement du cabinet."
                />
            </div>

            <div className="border-t border-border-subtle max-w-3xl">
                {FAQ_ENTRIES.map((item, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                        <div key={item.question} className="border-b border-border-subtle group">
                            <button
                                className="w-full flex items-center justify-between py-6 text-left focus-visible:outline-none"
                                onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                                aria-expanded={isOpen}
                            >
                                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-text-main group-hover:text-primary'}`}>
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
                                        <p className="text-text-muted text-base leading-relaxed max-w-2xl pb-8">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
