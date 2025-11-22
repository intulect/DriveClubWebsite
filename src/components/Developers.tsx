import React from 'react';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { Section, SectionTitle } from './ui/Section';
import { GlassPanel } from './ui/GlassPanel';

const developers = [
  {
    name: "Intulect",
    role: "Founder & Lead Operator",
    desc: "The visionary behind DriveCity RP. Strategic operator overseeing the entire project.",
    icon: FaCode
  },
  {
    name: "CaptainGuinea",
    role: "Lead Developer",
    desc: "Brings exceptional technical expertise to every feature. Known for polished, high-quality systems.",
    icon: FaServer
  },
  {
    name: "SmokeOpps",
    role: "Backend Specialist",
    desc: "FiveM veteran with deep game knowledge building robust server infrastructure.",
    icon: FaDatabase
  }
];

const Developers: React.FC = () => {
  return (
    <Section id="team" className="bg-bgPanel/30 border-y border-white/5">
      <SectionTitle title="The Team" subtitle="Behind the Scenes" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {developers.map((dev, index) => (
          <GlassPanel key={index} className="p-8 text-center group">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative w-full h-full bg-bgDark rounded-full border border-white/10 flex items-center justify-center text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
                <dev.icon />
              </div>
            </div>
            
            <h3 className="font-heading text-2xl text-white mb-2">
              {dev.name}
            </h3>
            <div className="text-accent-cyan text-xs font-bold uppercase tracking-widest mb-4">
              {dev.role}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {dev.desc}
            </p>
          </GlassPanel>
        ))}
      </div>
    </Section>
  );
};

export default Developers;
