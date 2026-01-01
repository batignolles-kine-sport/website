import { Variants, BezierDefinition } from 'framer-motion';

// --- PHYSICS & CURVES ---
// "BKS Signature" easing: Weighted, premium feel.
export const BKS_EASE: BezierDefinition = [0.2, 0.8, 0.2, 1];

export const TRANSITION_FAST = { duration: 0.2, ease: BKS_EASE };
export const TRANSITION_NORMAL = { duration: 0.6, ease: BKS_EASE };
export const TRANSITION_SLOW = { duration: 1.0, ease: BKS_EASE };

// --- STAGING & CHOREOGRAPHY ---

// Stagger container: Orchestrates the appearance of children.
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

// Fade Up: The standard "Red Carpet" entry.
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ...TRANSITION_NORMAL },
    },
};

// Fade Right: Good for section headers.
export const fadeRight: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { ...TRANSITION_NORMAL },
    },
};

// Scale In: For icons or popping elements.
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { ...TRANSITION_NORMAL },
    },
};

// --- MICRO-INTERACTIONS ---

export const hoverScale: Variants = {
    hover: {
        scale: 1.02,
        y: -4,
        transition: { ...TRANSITION_FAST },
    },
};


export const hoverButton: Variants = {
    hover: {
        scale: 1.05,
        transition: { ...TRANSITION_FAST },
    },
    tap: {
        scale: 0.95,
    },
};

// --- RED CARPET ---
export const pulseLoop: Variants = {
    visible: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 1, // Start after entry
        },
    },
};
