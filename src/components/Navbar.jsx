import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-white py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer relative z-[110]">
            <img src="/file.png" alt="VaidPR" className="h-8 md:h-10 w-auto brightness-0" />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'Services', 'About Us', 'Blog', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-[13px] font-black uppercase tracking-widest text-brand-text/50 hover:text-brand-dark transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-lime transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="btn-primary">
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5 cursor-pointer relative z-[110]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div 
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 7 : 0, width: isMenuOpen ? '100%' : '100%' }}
              className="w-full h-0.5 bg-brand-dark origin-center"
            ></motion.div>
            <motion.div 
              animate={{ opacity: isMenuOpen ? 0 : 1, width: isMenuOpen ? '0%' : '70%' }}
              className="h-0.5 bg-brand-dark"
            ></motion.div>
            <motion.div 
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0, width: isMenuOpen ? '100%' : '100%' }}
              className="w-full h-0.5 bg-brand-dark origin-center"
            ></motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center p-10"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {['Home', 'Services', 'About Us', 'Blog', 'Contact'].map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-4xl font-black text-brand-dark tracking-tighter hover:text-brand-lime transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="btn-primary mt-8 px-12 py-5 text-lg"
              >
                Get A Quote
              </motion.button>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-brand-dark/30">
              <span>© 2024 VaidPR</span>
              <div className="flex gap-4">
                <a href="#">TW</a>
                <a href="#">IG</a>
                <a href="#">LI</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
