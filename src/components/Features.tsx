import React from 'react';
import { FaChartLine, FaTools, FaHandshake, FaUserTie, FaCogs, FaSitemap } from 'react-icons/fa';

const features = [
  {
    icon: FaChartLine,
    title: "Player-Driven Economy",
    desc: "Advanced market systems, player-owned businesses, and realistic inflation. Every dollar is earned and spent in a living economy."
  },
  {
    icon: FaTools,
    title: "Dedicated Development",
    desc: "A team of 3 full-time developers ensuring daily updates, custom scripts, and rapid bug fixes for a seamless experience."
  },
  {
    icon: FaHandshake,
    title: "Immersive Community",
    desc: "Regular community events, active staff, and a welcoming environment. We prioritize story-driven RP over winning."
  },
  {
    icon: FaUserTie,
    title: "Serious Roleplay",
    desc: "Strict RP rules and quality standards ensure high-quality interactions. No low-effort characters allowed."
  },
  {
    icon: FaCogs,
    title: "Custom Framework",
    desc: "Unique scripts and systems built from the ground up for performance. Optimized for high FPS and stability."
  },
  {
    icon: FaSitemap,
    title: "Gangs & Organizations",
    desc: "Dynamic territory systems, organizational management tools, and deep progression for criminal and legal groups."
  }
];

const Features: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <h2 className="font-heading text-3xl md:text-4xl text-center mb-12 text-textMain border-b-2 border-primaryBlue pb-4 table mx-auto uppercase tracking-wider">
        Why Choose DriveCity?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group bg-bgPanel border border-white/5 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-primaryBlue hover:shadow-[0_10px_30px_rgba(34,132,217,0.2)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primaryBlue to-accentCyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="text-4xl text-primaryBlue mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <feature.icon />
            </div>
            
            <h3 className="font-heading text-xl mb-4 text-textMain tracking-wide">
              {feature.title}
            </h3>
            
            <p className="text-textMuted leading-relaxed text-sm font-medium">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;