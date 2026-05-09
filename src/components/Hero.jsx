import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-brand-dark/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-lime/10 rounded-full mb-8">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-brand-lime"></div>
              <div className="w-3 h-3 rounded-full bg-brand-dark"></div>
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-brand-dark">Your Reputation, Our priority</span>
          </div>

          <h1 className="text-huge text-brand-dark mb-10">
            It’s your <br />
            moment — <br />
            <span className="text-brand-dark/20 uppercase">amplified</span>
          </h1>

          <p className="text-xl text-brand-dark/60 max-w-lg mb-12 leading-relaxed font-medium">
            We don’t just get you seen. We make sure you’re remembered. Elevate your brand with VaidPR.
          </p>

          <div className="flex flex-wrap items-center gap-10">
            <button className="btn-primary group">
              Book a free call
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="flex flex-col">
               <span className="text-brand-dark font-black text-2xl">50+</span>
               <span className="text-xs text-brand-dark/50 font-bold uppercase tracking-widest">Trusted Businesses</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Abstract Collage */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[650px] w-full flex items-center justify-center">
            {/* Image 1 - Main Large */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[480px] image-card z-20 rotate-[-4deg] floating">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                alt="Brand Strategy" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Image 2 - Top Right */}
            <div className="absolute top-0 right-0 w-[280px] h-[220px] image-card z-30 translate-x-12 -translate-y-8 rotate-[8deg] floating" style={{ animationDelay: '-2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600" 
                alt="Collaboration" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Hire Us Badge */}
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute bottom-24 left-4 z-40"
            >
              <div className="w-24 h-24 rounded-full bg-brand-dark border-[6px] border-brand-lime flex flex-col items-center justify-center text-center p-2 shadow-2xl">
                <span className="text-[10px] font-black text-brand-lime uppercase tracking-tighter leading-none mb-1">Vaid<br/>PR</span>
                <ArrowUpRight className="text-brand-lime" size={20} />
              </div>
            </motion.div>

            {/* Creative Sparkles */}
            <Sparkles className="absolute top-10 left-0 text-brand-lime animate-pulse" size={32} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
