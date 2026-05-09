import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".editorial-line", { 
        width: 0, 
        duration: 1.5, 
        ease: "expo.inOut" 
      });
      gsap.from(".reveal-text", { 
        y: 100, 
        opacity: 0, 
        duration: 1.2, 
        stagger: 0.1, 
        ease: "power4.out",
        delay: 0.5
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content - Editorial Style */}
        <div className="lg:col-span-8 z-10">
          <div className="mb-12 overflow-hidden">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-mono text-accent mb-4 flex items-center gap-4"
            >
              <div className="editorial-line w-12 h-px bg-accent" />
              <span>Elite PR & Brand Architecture</span>
            </motion.div>
          </div>

          <h1 className="text-7xl md:text-9xl mb-12">
            <div className="overflow-hidden">
              <span className="reveal-text block">Your Reputation.</span>
            </div>
            <div className="overflow-hidden">
              <span className="reveal-text block italic font-light text-white/40">Amplified.</span>
            </div>
          </h1>

          <div className="max-w-xl mb-12">
            <p className="reveal-text text-lg text-gray-400 leading-relaxed">
              VaidPR builds digital dominance for founders, startups, and established visionaries. We don't just get you seen; we architect your authority in a crowded market.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 reveal-text">
            <button className="btn-elite group">
              Book Strategy Call <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="btn-outline-elite">
              Our Vision
            </button>
          </div>
        </div>

        {/* Right Content - Abstract Artifact */}
        <div className="lg:col-span-4 relative hidden lg:block">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* The "Artifact" - Abstract glass-like shape */}
            <div className="w-80 h-96 glass border border-white/10 rounded-[60px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 blur-[60px] rounded-full animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent/20 blur-[60px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              
              {/* Internal Grid Effect */}
              <div className="absolute inset-0 opacity-10" 
                   style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
              />
            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-8 -right-8 glass-card p-4 rounded-none border-l-4 border-l-accent">
              <div className="text-mono text-white mb-1">Impact Scale</div>
              <div className="text-2xl font-serif text-accent">100%</div>
            </div>
          </motion.div>

          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -z-10" />
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute left-6 bottom-20 vertical-text hidden lg:block">
        <span className="text-mono text-gray-600">EST. 2024 / VAIDPR ARCHIVE</span>
      </div>
    </section>
  );
};

export default Hero;
