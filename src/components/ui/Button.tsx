import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { hoverButton } from '../../utils/animations';

export const DoctolibMark: React.FC<{ className?: string; inverted?: boolean }> = ({ className = '', inverted = false }) => {
  const base = 'inline-flex items-center justify-center rounded-full font-semibold text-xs leading-none w-5 h-5';
  const colors = inverted ? 'bg-primary text-white' : 'bg-white text-primary';
  return <span className={`${base} ${colors} ${className}`}>D</span>;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'booking';
  fullWidth?: boolean;
  href?: string;
  // Allow motion props to be passed through
  layoutId?: string;
}

export const Button: React.FC<ButtonProps & HTMLMotionProps<"button"> & HTMLMotionProps<"a">> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  href,
  className = '',
  ...props
}) => {
  const baseStyles = "btn px-5 py-2.5 md:px-6 md:py-3";

  const variantsMap = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    booking: "btn-booking",
    tertiary: "btn-tertiary"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variantsMap[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        variants={hoverButton}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      variants={hoverButton}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {children}
    </motion.button>
  );
};