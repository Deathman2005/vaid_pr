import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { 
    title: "Discovery", 
    tag: "01 / AUDIT",
    desc: "We dissect your brand's current frequency and find the gaps in the market." 
  },
  { 
    title: "Strategy", 
    tag: "02 / ARCHITECTURE",
    desc: "Architecting a bespoke narrative designed to resonate with industry titans." 
  },
  { 
    title: "Positioning", 
    tag: "03 / FREQUENCY",
    desc: "Identifying the unique sonic space your brand will own and dominate." 
  },
  { 
    title: "Execution", 
    tag: "04 / TRANSMISSION",
    desc: "Launching high-impact campaigns that break through the noise." 
  },
  { 
    title: "Outreach", 
    tag: "05 / RESONANCE",
    desc: "Connecting with key journalists and influencers to amplify the message." 
  },
  { 
    title: "Optimization", 
    tag: "06 / AMPLITUDE",
    desc: "Measuring resonance and scaling the frequency for maximum impact." 
  }
];

const Workflow = () => {
  const containerRef = useRef(null);
  const wavePathRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create the waving animation
      gsap.to(".wave-path", {
        attr: { d: "M 50 0 Q 70 100 50 200 Q 30 300 50 400 Q 70 500 50 600 Q 30 700 50 800" },
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut"
      });

      // Animate steps on scroll
      steps.forEach((_, i) => {
        gsap.from(`.step-${i}`, {
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100,
          scrollTrigger: {
            trigger: `.step-${i}`,
            start: "top 80%",
            end: "top 50%",
            scrub: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-40 relative bg-background overflow-hidden">
      {/* Background Section Label */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none">
        <h2 className="text-[20vw] font-black uppercase whitespace-nowrap">Pipeline</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-40">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-mono text-accent mb-6"
          >
            Systematic Growth Architecture
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-serif mb-8">
            The Vaid <span className="italic font-light opacity-50">Pipeline.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Wave Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[200px] flex justify-center py-20 pointer-events-none z-0">
            <svg width="100" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none" className="opacity-20">
              <path 
                className="wave-path"
                d="M 50 0 Q 30 100 50 200 Q 70 300 50 400 Q 30 500 50 600 Q 70 700 50 800" 
                stroke="#00D4FF" 
                strokeWidth="2" 
                fill="none" 
              />
            </svg>
            
            {/* Animated Pulse along the line */}
            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 -translate-x-1/2 w-4 h-20 bg-gradient-to-b from-transparent via-accent to-transparent blur-md"
            />
          </div>

          {/* Steps */}
          <div className="space-y-40 relative z-10">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`step-${i} flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="text-mono text-accent mb-4 tracking-[0.3em]">{step.tag}</div>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6 text-white">{step.title}</h3>
                  <p className="text-gray-500 max-w-sm mx-auto lg:mx-0 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>

                {/* Center Node */}
                <div className="relative w-20 h-20 flex items-center justify-center lg:mx-20">
                  <div className="w-4 h-4 bg-accent rounded-full shadow-[0_0_20px_#00D4FF]" />
                  <div className="absolute inset-0 border border-accent/20 rounded-full animate-ping opacity-20" />
                  <div className="absolute -inset-4 border border-accent/10 rounded-full animate-pulse" />
                </div>

                {/* Empty Space for layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
