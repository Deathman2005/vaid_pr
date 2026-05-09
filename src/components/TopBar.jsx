import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-brand-dark text-brand-white/80 py-2.5 px-10 hidden md:flex justify-between items-center text-[11px] font-bold tracking-wider border-b border-white/5">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Phone size={12} className="text-brand-lime transition-transform group-hover:rotate-12" />
          <span className="group-hover:text-brand-lime transition-colors">(000) 000-0000</span>
        </div>
        <div className="flex items-center gap-2 group cursor-pointer">
          <Mail size={12} className="text-brand-lime transition-transform group-hover:-rotate-12" />
          <span className="group-hover:text-brand-lime transition-colors">example@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 group cursor-pointer">
          <MapPin size={12} className="text-brand-lime transition-transform group-hover:scale-110" />
          <span className="group-hover:text-brand-lime transition-colors">2464 Royal Ln. Mesa, New Jersey 45463</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
          <a key={index} href="#" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark transition-all duration-500 hover:-translate-y-0.5">
            <Icon size={12} />
          </a>
        ))}
      </div>

    </div>

  );
};

export default TopBar;
