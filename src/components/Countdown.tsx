import React, { useState, useEffect } from 'react';
import { FaDiscord } from 'react-icons/fa';

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-bgDark/50 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-lg min-w-[80px] md:min-w-[120px] mb-2 shadow-lg">
      <span className="font-heading text-3xl md:text-6xl bg-gradient-to-b from-white to-primaryBlue bg-clip-text text-transparent leading-none">
        {value < 10 ? `0${value}` : value}
      </span>
    </div>
    <span className="text-textMuted text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
      {label}
    </span>
  </div>
);

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("Feb 1, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center px-4 pb-20 pt-10 relative z-20">
      <div className="text-center mb-12 animate-float">
        <div className="inline-block border border-accentCyan/30 bg-accentCyan/10 px-4 py-1 rounded-full mb-6 backdrop-blur-md">
          <span className="text-accentCyan font-bold text-sm tracking-widest uppercase animate-pulse">
            Official Launch Date Confirmed
          </span>
        </div>
        <h2 className="font-heading text-white text-4xl md:text-7xl mb-6 uppercase drop-shadow-2xl tracking-wide">
          DriveCity <span className="text-primaryBlue">RP</span>
        </h2>
        <p className="text-textMuted font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A new standard in roleplay performance and immersion. <br/>
          <span className="text-white font-bold">Economy-driven. Community-focused. Developer-backed.</span>
        </p>
      </div>

      <div className="bg-bgPanel/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-5xl w-full mx-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primaryBlue to-transparent opacity-50" />
        
        <h3 className="text-white/80 text-center mb-10 text-sm tracking-[0.3em] uppercase font-bold">
          Server Launch Countdown
        </h3>
        
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap mb-12">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="https://discord.gg/sWQ3dadpyU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <FaDiscord className="text-2xl" />
            <span>Join Discord Community</span>
          </a>
          <div className="flex items-center gap-2 text-textMuted text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            If interested in beta testing join our discord!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;