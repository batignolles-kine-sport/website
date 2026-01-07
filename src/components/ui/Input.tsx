import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    success?: boolean;
    helperText?: string;
    required?: boolean;
    fullWidth?: boolean;
}

/**
 * Input Component - Apple HIG Compliant
 * 
 * Features:
 * - Multi-state feedback (focus, error, success, disabled)
 * - 16px font-size (prevents iOS auto-zoom)
 * - Accessible with aria attributes
 * - Icons + color for redundancy (not just color)
 * 
 * HIG Principles:
 * - Clarity: Clear visual states
 * - Deference: Labels always visible (not just placeholders)
 * - Feedback: Immediate state indication
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            success,
            helperText,
            required,
            fullWidth = false,
            className = '',
            id,
            disabled,
            ...props
        },
        ref
    ) => {
        // Generate unique ID if not provided
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
        const errorId = `${inputId}-error`;
        const helperId = `${inputId}-helper`;

        // Determine state classes
        const stateClasses = error
            ? 'border-status-error focus:border-status-error focus:shadow-[0_0_0_3px_rgba(220,38,38,0.1)]'
            : success
                ? 'border-status-success focus:border-status-success focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]'
                : 'border-border-medium focus:border-border-focus focus:shadow-input-focus';

        const baseClasses = `
      input-base
      w-full
      text-text-primary
      placeholder:text-text-tertiary
      disabled:bg-input-bg-disabled
      disabled:cursor-not-allowed
      disabled:opacity-50
      transition-all
      outline-none
      ${stateClasses}
      ${className}
    `.trim().replace(/\s+/g, ' ');

        return (
            <div className={`${fullWidth ? 'w-full' : ''}`}>
                {/* Label */}
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-text-secondary mb-2"
                    >
                        {label}
                        {required && (
                            <span className="text-status-error ml-1" aria-label="required">
                                *
                            </span>
                        )}
                    </label>
                )}

                {/* Input Field */}
                <div className="relative">
                    <input
                        ref={ref}
                        id={inputId}
                        disabled={disabled}
                        required={required}
                        aria-invalid={error ? 'true' : 'false'}
                        aria-describedby={
                            error ? errorId : helperText ? helperId : undefined
                        }
                        className={baseClasses}
                        {...props}
                    />

                    {/* Success Icon */}
                    {success && !error && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-status-success"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    )}

                    {/* Error Icon */}
                    {error && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-status-error"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Error Message */}
                {error && (
                    <p
                        id={errorId}
                        className="mt-2 text-sm text-status-error flex items-center gap-1"
                        role="alert"
                    >
                        {error}
                    </p>
                )}

                {/* Helper Text */}
                {!error && helperText && (
                    <p id={helperId} className="mt-2 text-sm text-text-tertiary">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
