import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { FaDiscord, FaPlay, FaCircle, FaUserFriends, FaSignal } from 'react-icons/fa';

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center mx-2 md:mx-4 group">
    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-xl min-w-[80px] md:min-w-[110px] mb-3 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Digital Noise Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
      
      <span className="font-mono text-4xl md:text-6xl text-white font-bold tracking-tighter leading-none block text-center relative z-10 drop-shadow-lg group-hover:text-primary transition-colors duration-300">
        {value < 10 ? `0${value}` : value}
      </span>
    </div>
    <span className="text-gray-500 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase group-hover:text-primary transition-colors">
      {label}
    </span>
  </div>
);

const ServerStatus = () => (
  <div className="absolute top-32 right-6 md:top-40 md:right-10 hidden lg:flex flex-col gap-3 z-20">
    <GlassBadge icon={<FaCircle className="text-green-500 text-[10px] animate-pulse" />} label="Status" value="Online" />
    <GlassBadge icon={<FaUserFriends className="text-primary text-xs" />} label="Players" value="1,240/2048" />
    <GlassBadge icon={<FaSignal className="text-accent-cyan text-xs" />} label="Ping" value="12ms" />
  </div>
);

const GlassBadge = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full shadow-lg hover:bg-black/60 transition-colors cursor-default group">
    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold leading-none mb-0.5">{label}</span>
      <span className="text-xs text-white font-mono font-bold leading-none">{value}</span>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("Feb 1, 2026 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(interval); return; }
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bgDark/80 z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10 mix-blend-overlay" />
        <div 
          className="w-full h-full bg-cover bg-center scale-105 animate-[pulse-slow_10s_ease-in-out_infinite]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-bgDark/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-bgDark via-transparent to-bgDark z-10 opacity-80" />
      </div>

      <ServerStatus />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 hover:bg-primary/20 transition-colors cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-[pulse_2s_infinite]" />
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Launch Sequence Initiated</span>
          </div>

          <div className="relative mb-6 group">
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-white uppercase tracking-tighter drop-shadow-2xl leading-none">
              Drive<span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-dim to-accent-cyan group-hover:animate-pulse">City</span>
            </h1>
            <h1 className="absolute inset-0 font-heading text-6xl md:text-8xl lg:text-[10rem] text-primary opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 uppercase tracking-tighter leading-none pointer-events-none">
              DriveCity
            </h1>
          </div>
          
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-14 leading-relaxed font-light">
            A new era of immersive roleplay.
            <span className="block text-white font-medium mt-2 tracking-wide">Built for performance. Designed for storytellers.</span>
          </p>

          <div className="flex justify-center flex-wrap mb-16 gap-4">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Mins" />
            <TimeUnit value={timeLeft.seconds} label="Secs" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button 
              variant="discord" 
              size="lg" 
              glow 
              icon={<FaDiscord />}
              className="w-full md:w-auto min-w-[200px]"
              onClick={() => window.open('https://discord.gg/sWQ3dadpyU', '_blank')}
            >
              Join Discord
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon={<FaPlay className="text-xs" />}
              className="w-full md:w-auto min-w-[200px] border-white/10 hover:bg-white/5"
            >
              Watch Trailer
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bgDark to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
