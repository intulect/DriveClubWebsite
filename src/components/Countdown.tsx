import React, { useState, useEffect } from 'react';

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

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="font-heading text-4xl md:text-6xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-none">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-primaryBlue text-xs md:text-sm font-bold mt-2 tracking-widest uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <section className="flex flex-col items-center px-4 pb-20">
      <div className="text-center mb-16 animate-float">
        <h2 className="font-heading text-textMain text-3xl md:text-5xl mb-4 uppercase">
          Respect Earned
        </h2>
        <p className="text-accentPurple font-bold text-lg md:text-xl tracking-widest uppercase drop-shadow-[0_0_15px_rgba(188,19,254,0.3)]">
          The New Standard in FiveM RP
        </p>
      </div>

      <div className="bg-[rgba(26,27,30,0.8)] backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-4xl w-full mx-4">
        <h3 className="text-textMuted text-center mb-8 text-sm tracking-[0.2em] uppercase font-bold">
          Server Launch
        </h3>
        <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hrs" />
          <TimeUnit value={timeLeft.minutes} label="Min" />
          <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
