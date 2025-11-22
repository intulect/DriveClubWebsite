import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'discord';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon,
  glow = false,
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary hover:bg-primary-hover text-white border-transparent',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border-transparent backdrop-blur-sm',
    outline: 'bg-transparent border-white/20 hover:border-primary text-white hover:text-primary',
    discord: 'bg-[#5865F2] hover:bg-[#4752C4] text-white border-transparent'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={twMerge(
        "relative inline-flex items-center justify-center gap-2 font-bold tracking-wide rounded-lg border transition-all duration-300 uppercase",
        variants[variant],
        sizes[size],
        glow && "shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]",
        className
      )}
      {...props}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {children}
      
      {/* Button Shine */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 overflow-hidden pointer-events-none" />
    </motion.button>
  );
};
