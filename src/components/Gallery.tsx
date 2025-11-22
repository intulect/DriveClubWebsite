import React, { useState, useEffect } from 'react';

const galleryImages = [
  { label: 'VEHICLES', caption: 'CUSTOM IMPORT VEHICLES' },
  { label: 'ECONOMY', caption: 'PLAYER DRIVEN ECONOMY' },
  { label: 'STREETS', caption: 'GANG TERRITORIES' },
  { label: 'HOUSING', caption: 'LUXURY PROPERTIES' },
  { label: 'POLICE', caption: 'ACTIVE LAW ENFORCEMENT' },
  { label: 'BUSINESS', caption: 'OWNABLE BUSINESSES' },
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="bg-bgLighter py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12 text-textMain border-b-2 border-primaryBlue pb-4 table mx-auto uppercase tracking-wider">
          Visual Experience
        </h2>

        <div className="bg-bgPanel p-4 rounded-2xl border border-white/5 shadow-2xl">
          {/* Main Image Display */}
          <div className="relative w-full h-[400px] md:h-[600px] bg-gradient-to-br from-bgDark via-bgPanel to-bgDark rounded-lg overflow-hidden mb-4 group flex items-center justify-center border border-white/10">
            <div className="text-center z-20">
              <div className="inline-block bg-primaryBlue/20 backdrop-blur-sm border border-primaryBlue/30 px-6 py-2 rounded mb-4">
                <span className="text-accentCyan font-bold text-sm tracking-widest uppercase">
                  Coming Soon
                </span>
              </div>
              <h3 className="font-heading text-3xl md:text-6xl text-white uppercase tracking-wider drop-shadow-lg">
                {galleryImages[currentIndex].caption}
              </h3>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bgDark/90 z-10" />
          </div>

          {/* Thumbnails */}
          <div 
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primaryBlue scrollbar-track-bgDark"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  flex-shrink-0 min-w-[100px] md:min-w-[140px] h-16 md:h-24 rounded-lg overflow-hidden relative
                  transition-all duration-300 border-2 bg-gradient-to-br from-bgDark to-bgPanel
                  flex items-center justify-center
                  ${currentIndex === index 
                    ? 'border-primaryBlue scale-105 shadow-[0_0_15px_rgba(34,132,217,0.5)]' 
                    : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/20'
                  }
                `}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="font-bold text-[10px] md:text-xs text-white uppercase tracking-wider drop-shadow-md text-center px-2">
                    {img.label}
                  </span>
                </div>
                <div className="absolute bottom-1 left-1 right-1">
                  <span className="text-[8px] text-accentCyan font-bold uppercase tracking-wider">
                    Coming Soon
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;