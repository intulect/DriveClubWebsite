import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

export const GlassPanel: React.FC<GlassPanelProps> = ({ 
  children, 
  className,
  hoverEffect = false,
  intensity = 'medium'
}) => {
  const intensityMap = {
    low: 'bg-black/40',
    medium: 'bg-black/60',
    high: 'bg-black/80'
  };

  return (
    <motion.div 
      className={twMerge(
        "relative backdrop-blur-xl border border-white/5 rounded-xl shadow-2xl overflow-hidden group",
        intensityMap[intensity],
        hoverEffect && "hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated Shine Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/50 pointer-events-none" />
      
      {/* Hover Glow Spot */}
      {hoverEffect && (
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-primary/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
      )}
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 rounded-br-lg" />

      {children}
    </motion.div>
  );
};
