import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, BarChart2, Puzzle, Zap, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Strategic Brand Positioning",
      desc: "We position your brand with purpose and precision.",
      icon: <Target className="text-brand-lime" size={28} />
    },
    {
      title: "Creative Communication Solutions",
      desc: "We craft clear, creative campaigns that connect, inspire, and influence.",
      icon: <Shield className="text-brand-lime" size={28} />
    },
    {
      title: "Data-Driven Approach",
      desc: "Our strategies are driven by data to ensure real impact.",
      icon: <BarChart2 className="text-brand-lime" size={28} />
    },
    {
      title: "Customized Client Strategies",
      desc: "We create custom plans that reflect your brand’s unique voice and audience.",
      icon: <Puzzle className="text-brand-lime" size={28} />
    },
    {
      title: "Agile & Proactive Execution",
      desc: "We move fast to adapt, manage risks, and seize opportunities.",
      icon: <Zap className="text-brand-lime" size={28} />
    },
    {
      title: "End-to-End Communication Support",
      desc: "We move fast to adapt, manage risks, and seize opportunities.",
      icon: <Users className="text-brand-lime" size={28} />
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16 md:mb-24">
          <div className="text-center lg:text-left">
            <span className="text-brand-lime font-black uppercase tracking-[0.3em] text-xs mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-7xl text-brand-dark leading-[0.9] font-black tracking-tighter">Your Reputation, <br /> Our <span className="text-brand-dark/20 uppercase">Priority</span></h2>
          </div>
          <p className="text-base md:text-lg text-brand-dark/60 font-medium leading-relaxed max-w-xl text-center lg:text-left">
            At our PR agency, we don’t just promote — we connect. Our expert strategies help elevate your brand’s voice, engage your audience, and foster lasting relationships with media, influencers, and the public.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-brand-bg border border-brand-dark/5 hover:bg-brand-dark hover:text-brand-white transition-all duration-500 group"
            >
              <div className="mb-8">
                <div className="p-4 bg-brand-dark rounded-2xl group-hover:bg-white/10 w-fit">
                   {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4 leading-tight uppercase tracking-tighter">
                {card.title}
              </h3>
              <p className="text-brand-dark/60 group-hover:text-brand-white/60 font-medium leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default WhyChooseUs;
