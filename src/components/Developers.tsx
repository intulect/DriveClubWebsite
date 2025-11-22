import React from 'react';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const developers = [
  {
    name: "Dev One",
    role: "Lead Developer & Systems",
    desc: "Expert in core framework optimization and custom resource development. Ensures the city runs smooth at 144 FPS.",
    icon: FaCode
  },
  {
    name: "Dev Two",
    role: "Economy & Balancing",
    desc: "Focused on creating a realistic, sustainable economy. Manages business scripts, job payouts, and market fluctuations.",
    icon: FaDatabase
  },
  {
    name: "Dev Three",
    role: "Vehicle & Asset Manager",
    desc: "Handling all vehicle handling files, clothing imports, and map optimizations. bringing the highest quality assets to the city.",
    icon: FaServer
  }
];

const Developers: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl text-textMain mb-4 uppercase tracking-wider">
          Dedicated Development Team
        </h2>
        <p className="text-textMuted max-w-2xl mx-auto">
          Our team of 3 full-time developers works daily to push updates, fix bugs, and introduce new content. We are committed to long-term stability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {developers.map((dev, index) => (
          <div 
            key={index}
            className="bg-bgPanel/50 border border-white/5 p-8 rounded-2xl hover:border-primaryBlue/50 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-bgDark rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 mx-auto text-primaryBlue text-2xl">
              <dev.icon />
            </div>
            
            <div className="text-center">
              <h3 className="font-heading text-xl text-white mb-2">
                {dev.name}
              </h3>
              <div className="text-accentCyan text-xs font-bold uppercase tracking-widest mb-4">
                {dev.role}
              </div>
              <p className="text-textMuted text-sm leading-relaxed">
                {dev.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Developers;
