import React, { useState, useEffect } from 'react';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop', label: 'VEHICLES', caption: 'CUSTOM IMPORT VEHICLES' },
  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop', label: 'ECONOMY', caption: 'PLAYER DRIVEN ECONOMY' },
  { url: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1200&auto=format&fit=crop', label: 'STREETS', caption: 'GANG TERRITORIES' },
  { url: 'https://images.unsplash.com/photo-1600596542815-2250657d2fc5?q=80&w=1200&auto=format&fit=crop', label: 'HOUSING', caption: 'LUXURY PROPERTIES' },
  { url: 'https://images.unsplash.com/photo-1543005678-35f587d25244?q=80&w=1200&auto=format&fit=crop', label: 'POLICE', caption: 'ACTIVE LAW ENFORCEMENT' },
  { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop', label: 'BUSINESS', caption: 'OWNABLE BUSINESSES' },
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
          <div className="relative w-full h-[400px] md:h-[600px] bg-black rounded-lg overflow-hidden mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bgDark/90 z-10" />
            <img 
              src={galleryImages[currentIndex].url} 
              alt={galleryImages[currentIndex].caption}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full z-20 p-8 pt-20 text-center md:text-left">
              <div className="inline-block bg-primaryBlue/20 backdrop-blur-sm border border-primaryBlue/30 px-4 py-1 rounded mb-2">
                <span className="text-accentCyan font-bold text-sm tracking-widest uppercase">
                  Live Gameplay
                </span>
              </div>
              <h3 className="font-heading text-2xl md:text-5xl text-white uppercase tracking-wider drop-shadow-lg">
                {galleryImages[currentIndex].caption}
              </h3>
            </div>
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
                  transition-all duration-300 border-2
                  ${currentIndex === index 
                    ? 'border-primaryBlue scale-105 shadow-[0_0_15px_rgba(34,132,217,0.5)]' 
                    : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/20'
                  }
                `}
              >
                <img 
                  src={img.url} 
                  alt={img.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="font-bold text-[10px] md:text-xs text-white uppercase tracking-wider drop-shadow-md">
                    {img.label}
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