import React from 'react';
import { FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bgDark py-20 px-6 text-center border-t border-white/5 relative overflow-hidden">
      <div className="relative z-10">
        <div className="mb-12">
          <a 
            href="https://discord.gg/sWQ3dadpyU" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 md:px-16 md:py-6 bg-[#5865F2] hover:bg-[#4752C4] rounded-xl text-white font-heading text-xl md:text-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(88,101,242,0.4)] border border-white/10 group"
          >
            <FaDiscord className="text-3xl md:text-4xl group-hover:rotate-[15deg] transition-transform duration-300" />
            <div className="text-left">
              <div className="leading-none">JOIN THE FAMILY</div>
              <div className="text-xs md:text-sm font-body font-normal opacity-80 tracking-wider mt-1">
                If interested in beta testing join our discord!
              </div>
            </div>
          </a>
        </div>
        
        <p className="text-textMuted text-sm tracking-widest">
          &copy; 2026 DRIVE CITY RP // EST. LOS SANTOS
        </p>
      </div>
      
      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primaryBlue/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
