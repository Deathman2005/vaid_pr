import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Search, PenTool, Rocket, BarChart3, Settings, ClipboardCheck } from 'lucide-react';

const Process = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the progress line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      title: "Consultation",
      desc: "Discuss your business goals and marketing needs. We dive deep into your brand identity and market positioning.",
      icon: <Search size={32} />,
      label: "Discovery Phase"
    },
    {
      title: "Strategy Development",
      desc: "We’ll craft a digital marketing strategy tailored to you. A blueprint designed for scalability and impact.",
      icon: <PenTool size={32} />,
      label: "The Blueprint"
    },
    {
      title: "Implementation",
      desc: "We launch and manage your campaign across channels. Every touchpoint is optimized for conversion.",
      icon: <Rocket size={32} />,
      label: "The Launch"
    },
    {
      title: "Monitoring",
      desc: "Track performance to ensure efficiency and ROI. Real-time data informs every decision we make.",
      icon: <BarChart3 size={32} />,
      label: "The Vigilance"
    },
    {
      title: "Optimization",
      desc: "Continually improve your campaign performance. We refine, test, and iterate for maximum growth.",
      icon: <Settings size={32} />,
      label: "The Refinement"
    },
    {
      title: "Reporting",
      desc: "Regular analytics and reports for full transparency. You'll always know exactly where your investment is going.",
      icon: <ClipboardCheck size={32} />,
      label: "Final Delivery"
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-white py-32 px-6 md:px-12 lg:px-20 overflow-visible" id="services">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">
        
        {/* LEFT SIDE - Sticky Heading & Progress */}
        <div className="md:w-[40%] lg:w-1/3 md:sticky md:top-32 h-fit mb-12 md:mb-0">
          <span className="text-brand-lime font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">How it works</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-dark leading-[0.9] mb-12">
            Our <br /> Process <br /> <span className="text-brand-dark/20 uppercase">Workflow</span>
          </h2>

          {/* Vertical Progress Bar - Visible on MD and up */}
          <div className="relative hidden md:block w-1 h-[250px] bg-brand-dark/5 rounded-full overflow-hidden mb-12">
             <motion.div 
               style={{ scaleY }}
               className="absolute top-0 left-0 w-full h-full bg-brand-lime origin-top"
             />
          </div>

          <div className="hidden md:block">
            <p className="text-brand-dark/40 font-bold uppercase tracking-widest text-[9px] leading-relaxed">
              Scroll to explore <br /> our specialized <br /> methodology
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Scrolling Steps */}
        <div className="md:w-[60%] lg:w-2/3 space-y-24 md:space-y-40">

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              {/* Step Background Number */}
              <span className="absolute -top-12 -left-8 text-[12rem] font-black text-brand-dark/[0.03] select-none pointer-events-none group-hover:text-brand-lime/[0.05] transition-colors duration-700">
                0{index + 1}
              </span>

              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
                {/* Icon Box */}
                <div className="w-20 h-20 shrink-0 rounded-3xl bg-brand-dark text-brand-lime flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                   {step.icon}
                </div>

                <div className="flex-1 pt-2">
                  <span className="text-brand-lime font-black uppercase tracking-widest text-[11px] mb-3 block">
                    {step.label}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 uppercase tracking-tighter">
                    {step.title}
                  </h3>
                  <p className="text-xl text-brand-dark/60 font-medium leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                  
                  {/* Decorative line for right column flow */}
                  <div className="mt-10 w-20 h-1 bg-brand-dark/5 rounded-full group-hover:w-full group-hover:bg-brand-lime transition-all duration-700"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Sparkles */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-lime/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-dark/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Process;
