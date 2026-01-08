import React from 'react';

type SectionSpacing = 'default' | 'compact' | 'hero' | 'none';

interface SectionProps {
    spacing?: SectionSpacing;
    children: React.ReactNode;
    className?: string;
    id?: string;
    /** Enable snap behavior for scroll containers (e.g., Home page) */
    enableSnap?: boolean;
    /** Flex alignment for content */
    alignContent?: 'start' | 'center' | 'end';
}

/**
 * Section Component - Unified Spacing System
 * 
 * Provides consistent vertical spacing across all page sections using design system tokens.
 * 
 * @param spacing - Spacing variant:
 *   - 'hero': 40px/80px (mobile/desktop) - for hero/full-screen sections
 *   - 'default': 48px/96px - standard content sections
 *   - 'compact': 32px/64px - related content blocks
 *   - 'none': no vertical padding - for custom layouts
 * @param enableSnap - Enables scroll snap behavior (used on Home page)
 * @param alignContent - Flex alignment for section content
 */
export const Section: React.FC<SectionProps> = ({
    spacing = 'default',
    children,
    className = '',
    id,
    enableSnap = false,
    alignContent = 'center'
}) => {
    // Map spacing prop to CSS classes using design tokens
    const spacingClasses: Record<SectionSpacing, string> = {
        hero: 'py-[var(--section-spacing-hero)] md:py-[var(--section-spacing-hero-desktop)]',
        default: 'py-[var(--section-spacing-default)] md:py-[var(--section-spacing-default-desktop)]',
        compact: 'py-[var(--section-spacing-compact)] md:py-[var(--section-spacing-compact-desktop)]',
        none: ''
    };

    const alignmentClasses = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end'
    };

    return (
        <section
            id={id}
            className={`
                ${enableSnap ? 'snap-start min-h-screen' : ''}
                ${spacing !== 'none' ? 'flex' : ''}
                ${spacing !== 'none' ? alignmentClasses[alignContent] : ''}
                ${spacingClasses[spacing]}
                ${className}
            `.trim().replace(/\s+/g, ' ')}
            style={enableSnap ? { scrollMarginTop: '-5vh' } : undefined}
        >
            <div className="max-w-content w-full mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
};
