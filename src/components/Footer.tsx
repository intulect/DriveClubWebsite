import React from 'react';
import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bgPanel border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img src={logo} alt="DriveCity" className="h-12 mb-6 opacity-80 grayscale hover:grayscale-0 transition-all" />
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              DriveCity RP is a premier roleplay community built on innovation, performance, and player experience. Join us and define your story.
            </p>
            <div className="flex gap-4">
              {[FaDiscord, FaTwitter, FaYoutube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-400">
              {['Home', 'Features', 'Team', 'Gallery'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rules</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DriveCity RP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
