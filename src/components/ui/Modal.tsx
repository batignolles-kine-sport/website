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
    className?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title,
    maxWidth = 'md',
    showCloseButton = true,
    closeOnEscape = true,
    closeOnBackdropClick = true,
    className = '',
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    // Max width classes
    const maxWidthClasses = {
        sm: 'max-w-md',
        md: 'max-w-xl',
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

    const isDark = className.includes('bg-slate-900') || className.includes('bg-black') || className.includes('#1e1c1a') || className.includes('bg-[#1e1c1a]');

    const modalContent = (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                aria-hidden="true"
            />

            {/* Modal Panel */}
            <div
                ref={modalRef}
                tabIndex={-1}
                className={`
                    relative
                    w-full
                    max-h-[90vh]
                    overflow-y-auto
                    ${maxWidthClasses[maxWidth]}
                    ${className || 'bg-white'}
                    shadow-2xl
                    animate-slide-up
                    rounded-[32px]
                `}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                {(title || showCloseButton) && (
                    <div className="flex items-center justify-between p-8 pb-0">
                        {title && (
                            <h2
                                id="modal-title"
                                className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
                            >
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className={`
                                    ml-auto
                                    rounded-full
                                    p-1
                                    transition-all
                                    duration-200
                                    hover:scale-110
                                    active:scale-95
                                    focus:outline-none
                                    ${isDark ? 'text-white/40 hover:text-white' : 'text-slate-400 hover:text-slate-900'}
                                `}
                                aria-label="Fermer"
                            >
                                <svg
                                    className="w-6 h-6 stroke-[2px] hover:stroke-[2.5px] transition-all"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className="p-8">{children}</div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default Modal;
