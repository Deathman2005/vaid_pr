import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-white py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center overflow-hidden">
             <div className="w-6 h-6 bg-brand-dark rounded-full"></div>
          </div>
          <span className="text-2xl font-black text-brand-dark tracking-tighter">
            VaidPR<span className="text-brand-lime">.</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8">
          {['Home', 'Services', 'About Us', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-[13px] font-black uppercase tracking-widest text-brand-text/50 hover:text-brand-dark transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-lime transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>


        {/* CTA */}
        <button className="btn-primary hidden sm:flex">
          Get A Quote
        </button>

        {/* Mobile Menu Toggle (simplified) */}
        <div className="lg:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer">
          <div className="w-full h-0.5 bg-brand-dark"></div>
          <div className="w-2/3 h-0.5 bg-brand-dark"></div>
          <div className="w-full h-0.5 bg-brand-dark"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
