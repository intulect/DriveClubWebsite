import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../images/logo.png';
import { Button } from './ui/Button';
import { FaDiscord, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.9)']
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(16px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Features', 'Team', 'Gallery'];

  return (
    <motion.header 
      style={{ backgroundColor: headerBackground, backdropFilter: headerBlur }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'border-white/5' : 'border-transparent'}`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-20' : 'h-24'}`}>
        
        {/* Logo Area */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/50 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            <img src={logo} alt="DriveCity RP" className="h-12 md:h-14 object-contain relative z-10" />
          </div>
          <div className="hidden md:block">
            <div className="font-heading text-xl tracking-widest text-white leading-none group-hover:text-primary transition-colors duration-300">DRIVECITY</div>
            <div className="text-gray-500 text-xs tracking-[0.6em] font-bold group-hover:text-white transition-colors duration-300">ROLEPLAY</div>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-8"
        >
          <nav className="flex items-center bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
            {navItems.map((item, i) => (
              <React.Fragment key={item}>
                <a 
                  href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="relative px-4 py-1 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all group"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out" />
                </a>
                {i < navItems.length - 1 && <span className="w-1 h-1 bg-white/10 rounded-full" />}
              </React.Fragment>
            ))}
          </nav>
          
          <div className="h-8 w-[1px] bg-white/10 mx-2" />

          <Button 
            variant="discord" 
            size="sm" 
            icon={<FaDiscord />}
            glow
            onClick={() => window.open('https://discord.gg/sWQ3dadpyU', '_blank')}
          >
            Join City
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white text-2xl p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-bgDark/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
              className="text-center py-3 text-gray-300 font-heading text-xl uppercase tracking-wider hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full mt-4" variant="discord">Join Discord</Button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
