import React from 'react';
import { FaChartLine, FaTools, FaHandshake, FaUserTie, FaCogs, FaSitemap } from 'react-icons/fa';
import { Section, SectionTitle } from './ui/Section';
import { GlassPanel } from './ui/GlassPanel';

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
    <Section id="features" className="bg-bgDark">
      <SectionTitle title="Why Choose Us" subtitle="The DriveCity Difference" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <GlassPanel key={index} hoverEffect className="p-8 group">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <feature.icon />
            </div>
            
            <h3 className="font-heading text-xl text-white mb-4 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </GlassPanel>
        ))}
      </div>
    </Section>
  );
};

export default Features;
