import React from 'react';
import logo from '../images/logo.png';

const Header: React.FC = () => {
  return (
    <header className="relative z-10 flex flex-col items-center justify-center pt-8 pb-6 text-center">
      <div className="mb-3 transition-transform duration-300 hover:scale-105 cursor-pointer flex justify-center">
        <img 
          src={logo} 
          alt="DriveCity RP" 
          className="w-full max-w-[250px] h-auto drop-shadow-[0_0_40px_rgba(0,243,255,0.6)] object-contain bg-transparent filter brightness-110"
        />
      </div>
      
      <div className="font-body text-accentCyan text-lg tracking-[0.5em] font-bold uppercase mb-3 drop-shadow-[0_0_10px_rgba(0,243,255,0.4)]">
        Roleplay
      </div>
      
      <div className="inline-flex items-center bg-[rgba(34,132,217,0.1)] border border-[rgba(34,132,217,0.3)] px-5 py-2 rounded-full font-bold text-sm text-primaryBlue shadow-[0_0_20px_rgba(34,132,217,0.1)] backdrop-blur-sm">
        <span className="w-2 h-2 bg-accentCyan rounded-full mr-2 shadow-[0_0_8px_#00f3ff] animate-pulse"></span>
        Under Construction
      </div>
    </header>
  );
};

export default Header;
