import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = 'left',
  className = "",
  light = false
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-full shadow-sm mb-6 ${isCenter ? 'mx-auto' : ''}`}
      >
        <div className="w-2 h-2 rounded-full bg-[#3b402e]"></div>
        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">{badge}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 ${light ? 'text-white' : 'text-slate-900'}`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className={`text-lg md:text-xl leading-relaxed max-w-lg ${isCenter ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-500'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
