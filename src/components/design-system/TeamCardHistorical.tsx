import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Modal from '../ui/Modal';

interface TeamMember {
    id: number;
    name: string;
    title: string;
    sports: string[];
    image: string;
    doctolibUrl: string;
    rpps?: string;
    diploma?: string;
    certifications?: string[];
}

interface TeamCardHistoricalProps {
    member: TeamMember;
}

/**
 * TeamCardHistorical - Version complète avec états fermé/ouvert
 * Cette version est conservée pour l'historique dans le Design System
 * Elle montre l'évolution du design avec les deux états de la carte
 */
export const TeamCardHistorical: React.FC<TeamCardHistoricalProps> = ({ member }) => {
    const [isMobileExpanded, setIsMobileExpanded] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isCardHovered, setIsCardHovered] = React.useState(false);

    const isLeonie = member.id === 3;

    return (
        <article
            className={`group relative h-[480px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-slate-900 w-full cursor-pointer lg:cursor-default transition-all duration-500`}
            onClick={() => window.innerWidth < 1024 && setIsMobileExpanded(!isMobileExpanded)}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
        >
            {/* Full Image */}
            <div className="absolute inset-0">
                <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 lg:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:from-black/40 lg:via-transparent"></div>
            </div>

            {/* Badge Métier - Modal on Click */}
            <div className="absolute top-6 right-6 z-20">
                <motion.button
                    layout
                    initial={false}
                    animate={{
                        scale: isCardHovered ? 1.05 : 1,
                        backgroundColor: isCardHovered ? '#4a4b3d' : '#404134',
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        mass: 1
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(true);
                    }}
                    className="text-white text-[11px] font-bold px-6 py-3 rounded-full shadow-2xl ring-1 ring-white/20 backdrop-blur-md uppercase tracking-wider flex items-center justify-center gap-2 group/badge cursor-pointer overflow-hidden min-h-[40px]"
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {isCardHovered ? (
                            <motion.div
                                key="diploma"
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="flex items-center gap-2"
                            >
                                <span className="whitespace-nowrap">Expériences</span>
                                <ArrowUpRight size={16} className="text-white shrink-0" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="title"
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <span className="whitespace-nowrap">{member.title}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Bottom Content Area */}
            <div className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out z-10
        shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-[32px] p-5
        
        ${isMobileExpanded
                    ? 'bottom-3 w-[92%] bg-black/60 border-white/30 backdrop-blur-xl border mobile-expanded'
                    : 'bottom-6 w-[85%] bg-white/10 border-white/20 backdrop-blur-md border'}
        
        lg:bottom-6 lg:w-[85%] lg:bg-white/10 lg:border-white/20 lg:backdrop-blur-md
        lg:group-hover:bottom-3 lg:group-hover:w-[92%] lg:group-hover:bg-black/60 lg:group-hover:border-white/30 lg:group-hover:backdrop-blur-xl
      `}>

                <div className="h-8 relative flex items-center justify-center pr-8">
                    <h3 className="text-xl font-bold font-sans text-white leading-tight">
                        {member.name}
                    </h3>

                    {/* Chevron */}
                    <div className={`
            absolute right-0 transition-all duration-700 ease-in-out flex items-center
            lg:group-hover:opacity-0 lg:group-hover:translate-x-4
            ${isMobileExpanded ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}
          `}>
                        <ChevronDown
                            size={24}
                            strokeWidth={3}
                            className="text-white/70 -rotate-90"
                        />
                    </div>
                </div>

                {/* Revealable Content */}
                <div className={`
          grid transition-[grid-template-rows] duration-500 w-full
          ${isMobileExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
          lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]
        `}>
                    <div className="overflow-hidden">
                        <div className="flex flex-col items-center gap-4 pt-4">
                            {/* CTA Doctolib */}
                            <a
                                href={member.doctolibUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-2 bg-[#107ACA] hover:bg-[#0e69ad] active:bg-[#0c5a94] text-white px-5 py-3 rounded-xl font-semibold text-xs transition-colors w-full justify-center shadow-lg"
                            >
                                <img src="/images/doctolib/D_White.svg" alt="" className="w-4 h-4" />
                                Prendre rendez-vous
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={member.name}
                maxWidth={isLeonie ? 'xl' : 'md'}
                className="bg-[#1e1c1a] border border-white/5"
            >
                <div className="space-y-12 py-2">
                    {member.rpps && (
                        <div className="-mt-4 mb-4">
                            <p className="text-sm font-mono font-medium text-slate-400 uppercase tracking-widest">
                                RPPS {member.rpps}
                            </p>
                        </div>
                    )}

                    <div className="space-y-10">
                        {member.diploma && (
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-white tracking-wide normal-case">
                                    Diplôme d'État
                                </h4>
                                <div className="text-slate-300 text-lg font-medium leading-relaxed">
                                    {member.diploma}
                                </div>
                            </div>
                        )}

                        {member.sports && member.sports.length > 0 && (
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-white tracking-wide normal-case">
                                    Sports pratiqués
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {member.sports.map((sport, index) => (
                                        <span key={index} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 font-medium">
                                            {sport}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {member.certifications && member.certifications.length > 0 && (
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-white tracking-wide normal-case">
                                    Formations & Expertise
                                </h4>
                                <ul className="space-y-4">
                                    {member.certifications.map((cert, index) => (
                                        <li key={index} className="flex items-start gap-4 text-lg text-slate-300 font-medium leading-relaxed">
                                            <span className="text-[#404134] mt-2.5 text-[8px] shrink-0">●</span>
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="pt-2">
                            <a
                                href={member.doctolibUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-[#107ACA] hover:bg-[#0e69ad] active:scale-[0.98] text-white py-4 rounded-2xl text-lg font-bold shadow-2xl transition-all duration-200"
                            >
                                <img src="/images/doctolib/D_White.svg" alt="" className="w-6 h-6" />
                                Prendre rendez-vous
                            </a>
                        </div>
                    </div>
                </div>
            </Modal>
        </article>
    );
};
