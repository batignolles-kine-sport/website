import React from 'react';

export const DoctolibMark: React.FC<{ className?: string; inverted?: boolean }> = ({ className = '', inverted = false }) => {
  const base = 'inline-flex items-center justify-center rounded-full font-semibold text-xs leading-none w-5 h-5';
  const colors = inverted ? 'bg-[#1A4D2E] text-white' : 'bg-white text-[#1A4D2E]';
  return <span className={`${base} ${colors} ${className}`}>D</span>;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold tracking-tight transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed gap-2";

  const variants = {
    primary: "bg-[#1A4D2E] text-white hover:bg-[#143d24] shadow-lg rounded-full px-6 py-3 border border-transparent focus:ring-[#1A4D2E]",
    secondary: "bg-white text-[#1A4D2E] border border-[#1A4D2E] hover:bg-[#E8F5F1] rounded-full px-6 py-3 shadow-md focus:ring-[#1A4D2E]",
    tertiary: "bg-transparent text-[#1A4D2E] hover:text-[#143d24] underline underline-offset-4 decoration-2 px-0 py-0 font-semibold"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : '_self'} rel={href.startsWith('http') ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};