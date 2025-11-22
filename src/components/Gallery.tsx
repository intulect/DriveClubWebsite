import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionTitle } from './ui/Section';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const galleryImages = [
  { label: 'VEHICLES', caption: 'CUSTOM IMPORT VEHICLES', url: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2000&auto=format&fit=crop' },
  { label: 'ECONOMY', caption: 'PLAYER DRIVEN ECONOMY', url: 'https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=2000&auto=format&fit=crop' },
  { label: 'STREETS', caption: 'GANG TERRITORIES', url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop' },
  { label: 'HOUSING', caption: 'LUXURY PROPERTIES', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop' },
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <Section id="gallery" className="pb-32">
      <SectionTitle title="Visuals" subtitle="Experience the City" />

      <div className="relative w-full aspect-video max-h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${galleryImages[currentIndex].url}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
          <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-block bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-1 rounded mb-4">
              <span className="text-accent-cyan font-bold text-xs tracking-widest uppercase">
                {galleryImages[currentIndex].label}
              </span>
            </div>
            <h3 className="font-heading text-3xl md:text-5xl text-white uppercase tracking-wider drop-shadow-lg">
              {galleryImages[currentIndex].caption}
            </h3>
          </motion.div>
        </div>

        {/* Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
        >
          <FaChevronLeft />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
        >
          <FaChevronRight />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-20">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-primary' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
