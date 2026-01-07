import React from 'react';

interface BadgeProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'category';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

/**
 * Badge Component - Reusable label badge with multiple variants
 * 
 * Usage:
 * ```tsx
 * <Badge label="Sport" variant="primary" size="md" />
 * <Badge label="Genou" variant="category" />
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
    label,
    variant = 'primary',
    size = 'md',
    className = ''
}) => {
    // Base classes
    const baseClasses = 'inline-flex items-center justify-center rounded-pill font-semibold transition-all';

    // Size classes
    const sizeClasses = {
        sm: 'text-2xs px-2 py-0.5',
        md: 'text-xs px-3 py-1',
        lg: 'text-sm px-4 py-1.5',
    };

    // Variant classes
    const variantClasses = {
        primary: 'bg-primary/10 text-primary border border-primary/20',
        secondary: 'bg-slate-100 text-slate-700 border border-slate-200',
        success: 'bg-green-100 text-green-700 border border-green-200',
        warning: 'bg-amber-100 text-amber-700 border border-amber-200',
        category: 'bg-primary/10 text-primary',
    };

    return (
        <span
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        >
            {label}
        </span>
    );
};
