import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from './Button';
import { DOCTOLIB_URL } from '../../utils/constants';

interface DoctolibButtonProps {
    variant?: 'primary' | 'secondary' | 'floating';
    customUrl?: string;
    className?: string;
    children?: React.ReactNode;
}

/**
 * DoctolibButton Component - Standardized Doctolib booking button
 * 
 * Usage:
 * ```tsx
 * <DoctolibButton variant="primary" />
 * <DoctolibButton variant="secondary">Consulter les disponibilités</DoctolibButton>
 * <DoctolibButton variant="floating" customUrl="https://doctolib.fr/..." />
 * ```
 */
export const DoctolibButton: React.FC<DoctolibButtonProps> = ({
    variant = 'primary',
    customUrl,
    className = '',
    children
}) => {
    const url = customUrl || DOCTOLIB_URL;

    // Default labels per variant
    const defaultLabels = {
        primary: 'Prendre RDV',
        secondary: 'Voir les disponibilités',
        floating: 'RDV en ligne',
    };

    const label = children || defaultLabels[variant];

    if (variant === 'floating') {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-interactive-primary-hover transition-all duration-300 font-semibold text-sm ${className}`}
                aria-label="Prendre rendez-vous sur Doctolib"
            >
                <Calendar size={20} />
                {label}
            </a>
        );
    }

    return (
        <Button
            variant={variant}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            icon={Calendar}
        >
            {label}
        </Button>
    );
};
