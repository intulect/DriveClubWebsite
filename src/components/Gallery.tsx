import React, { useState, useEffect } from 'react';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200&auto=format&fit=crop', label: 'HUD', caption: 'NEXT-GEN UI & PHONE' },
  { url: 'https://images.unsplash.com/photo-1605218457336-92748b9d00d8?q=80&w=1200&auto=format&fit=crop', label: 'GANGS', caption: 'GANGS & TERRITORY' },
  { url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop', label: 'CARS', caption: 'DRIVING & CARS' },
  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop', label: 'CITY', caption: 'CITY LIFE & RP' },
  { url: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop', label: 'STYLE', caption: 'FASHION & STYLE' },
  { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop', label: 'JOBS', caption: 'ECONOMY & JOBS' },
  { url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1200&auto=format&fit=crop', label: 'EVENTS', caption: 'COMMUNITY EVENTS' }
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
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12 text-textMain border-b-2 border-primaryBlue pb-4 table mx-auto">
          Visual Proof
        </h2>

        <div className="bg-bgPanel p-4 rounded-2xl border border-white/5">
          {/* Main Image Display */}
          <div className="relative w-full h-[400px] md:h-[600px] bg-black rounded-lg overflow-hidden mb-4 group">
            <img 
              src={galleryImages[currentIndex].url} 
              alt={galleryImages[currentIndex].caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8 pt-20">
              <h3 className="font-heading text-2xl md:text-4xl text-white uppercase tracking-wider">
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
                  min-w-[100px] md:min-w-[120px] h-16 md:h-20 rounded-md flex items-center justify-center
                  font-bold text-xs md:text-sm transition-all duration-200 border
                  ${currentIndex === index 
                    ? 'bg-primaryBlue/10 border-primaryBlue text-white scale-105' 
                    : 'bg-bgDark border-white/10 text-textMuted hover:border-primaryBlue hover:text-white hover:-translate-y-1'
                  }
                `}
              >
                {img.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
