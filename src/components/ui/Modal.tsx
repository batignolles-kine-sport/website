import React, { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    showCloseButton?: boolean;
    closeOnEscape?: boolean;
    closeOnBackdropClick?: boolean;
}

/**
 * Modal Component - iOS-Inspired Design
 * 
 * Features:
 * - Backdrop blur effect (iOS sheet style)
 * - Slide-up animation with fade-in
 * - Focus trap (accessibility)
 * - Escape key + click outside to close
 * - Portal rendering (top-level DOM)
 * 
 * HIG Principles:
 * - Depth: Blur preserves context
 * - Direct Manipulation: Click/Escape to dismiss
 * - Accessibility: Focus trap, keyboard nav
 */
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title,
    maxWidth = 'md',
    showCloseButton = true,
    closeOnEscape = true,
    closeOnBackdropClick = true,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    // Max width classes
    const maxWidthClasses = {
        sm: 'max-w-md',
        md: 'max-w-modal',
        lg: 'max-w-3xl',
        xl: 'max-w-5xl',
    };

    // Handle escape key
    useEffect(() => {
        if (!isOpen || !closeOnEscape) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, closeOnEscape, onClose]);

    // Focus trap
    useEffect(() => {
        if (!isOpen) return;

        // Store previous focus
        previousFocusRef.current = document.activeElement as HTMLElement;

        // Focus modal
        modalRef.current?.focus();

        // Restore focus on unmount
        return () => {
            previousFocusRef.current?.focus();
        };
    }, [isOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Handle backdrop click
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (closeOnBackdropClick && e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    const modalContent = (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
        >
            {/* Backdrop with iOS-style blur */}
            <div
                className="absolute inset-0 bg-surface-overlay backdrop-blur-[var(--modal-backdrop-blur)] animate-fade-in"
                style={{ opacity: 'var(--modal-backdrop-opacity)' }}
            />

            {/* Modal Panel */}
            <div
                ref={modalRef}
                tabIndex={-1}
                className={`
          relative
          w-full
          ${maxWidthClasses[maxWidth]}
          bg-surface-elevated
          shadow-modal
          overflow-hidden
          animate-slide-up
        `}
                style={{
                    borderRadius: 'var(--modal-radius)',
                    padding: 'var(--modal-padding)',
                }}
            >
                {/* Header */}
                {(title || showCloseButton) && (
                    <div className="flex items-center justify-between mb-6">
                        {title && (
                            <h2
                                id="modal-title"
                                className="text-2xl font-semibold text-text-primary"
                            >
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className="
                  p-2
                  -mr-2
                  rounded-md
                  text-text-secondary
                  hover:text-text-primary
                  hover:bg-surface-subtle
                  transition-colors
                  focus:outline-none
                  focus:ring-2
                  focus:ring-border-focus
                  focus:ring-offset-2
                "
                                aria-label="Close modal"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className="text-text-primary">{children}</div>
            </div>
        </div>
    );

    // Render modal in portal (top-level DOM)
    return createPortal(modalContent, document.body);
};

export default Modal;
