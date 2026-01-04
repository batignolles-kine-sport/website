import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../utils/animations';

/**
 * SectionHeader - Standardized header component for pages and sections
 * 
 * @description
 * Provides consistent styling for headers across the website with badge, title, and description.
 * Includes Framer Motion animations and responsive design.
 * 
 * @example
 * ```tsx
 * // Page header (h1)
 * <SectionHeader
 *   badge="BLOG"
 *   level="h1"
 *   title={<>Le Blog <span className="text-gradient-primary">BKS</span></>}
 *   description="Conseils d'experts"
 * />
 * 
 * // Section header (h2)
 * <SectionHeader
 *   badge="FAQ"
 *   title={<>Questions <span className="text-gradient-primary">fréquentes.</span></>}
 * />
 * ```
 */
interface SectionHeaderProps {
  /** Uppercase badge text (e.g., "BLOG", "CONTACT", "FAQ") */
  badge: string;
  /** Title content - can include gradient spans */
  title: React.ReactNode;
  /** Optional description text below title */
  description?: string;
  /** Text alignment - default left */
  align?: 'left' | 'center';
  /** Additional CSS classes */
  className?: string;
  /** Light mode for dark backgrounds */
  light?: boolean;
  /** Semantic heading level for SEO - h1 for page headers, h2 for sections */
  level?: 'h1' | 'h2' | 'h3';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = 'left',
  className = "",
  light = false,
  level = 'h2'
}) => {
  const isCenter = align === 'center';
  const HeadingTag: React.ElementType = level;

  return (
    <motion.div
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div
        variants={fadeUp}
        className={`inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-full shadow-sm mb-4 ${isCenter ? 'mx-auto' : ''}`}
      >
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-600 uppercase">{badge}</span>
      </motion.div>

      <motion.div
        variants={fadeUp}
      >
        <HeadingTag
          className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 ${light ? 'text-white' : 'text-slate-900'}`}
        >
          {title}
        </HeadingTag>
      </motion.div>

      {description && (
        <motion.p
          variants={fadeUp}
          className={`text-base md:text-lg leading-relaxed max-w-lg ${isCenter ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-500'}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
