import React from 'react';
import { FaUsers, FaMobileAlt, FaTshirt, FaLaptopHouse } from 'react-icons/fa';
import { FaGun, FaCarBurst } from 'react-icons/fa6';

const features = [
  {
    icon: FaGun,
    title: "Driving & Cars",
    desc: "Custom vehicle fleet for cruising, racing, and police interactions. Smooth handling and realistic behavior."
  },
  {
    icon: FaUsers,
    title: "City Life & RP",
    desc: "Laidback RP environment: family, gang, and community elements. Explore the city, build businesses, interact naturally."
  },
  {
    icon: FaCarBurst,
    title: "Gangs & Territory",
    desc: "Claim blocks or just hang with your crew. Dynamic city interactions, no overbearing rules."
  },
  {
    icon: FaMobileAlt,
    title: "Next-Gen UI",
    desc: "Clean HUDs and modular interface. Custom phone with social features, city info, and RP tools. Emphasis on fixing CSS and style."
  },
  {
    icon: FaTshirt,
    title: "Fashion & Style",
    desc: "Thousands of clothing options, accessories, and style items. Express yourself freely without limits."
  },
  {
    icon: FaLaptopHouse,
    title: "Economy & Jobs",
    desc: "Balanced economy: legal/illegal work, player-run organizations. Smooth, intuitive interactions."
  }
];

const Features: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <h2 className="font-heading text-3xl md:text-4xl text-center mb-12 text-textMain border-b-2 border-primaryBlue pb-4 table mx-auto">
        Server Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group bg-bgPanel border border-white/5 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-primaryBlue hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primaryBlue to-accentCyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="text-4xl text-primaryBlue mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <feature.icon />
            </div>
            
            <h3 className="font-heading text-xl mb-4 text-textMain">
              {feature.title}
            </h3>
            
            <p className="text-textMuted leading-relaxed text-sm">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
