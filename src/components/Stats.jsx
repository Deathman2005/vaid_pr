import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      value: "Trusted",
      label: "Trusted by 50+ Businesses",
      id: "/01"
    },
    {
      value: "Rated",
      label: "Rated 3.5/5 from over 60 reviews",
      id: "/02"
    },

    {
      value: "Founded in 2024",
      label: "1+ year of transforming brands with tech-enabled creative solutions",
      id: "/03"
    },
    {
      value: "India",
      label: "Rooted in India, scaling globally with the power of digital media & AI",
      id: "/04"
    },
    {
      value: "All-in-One VaidPR Solution",
      label: "From PR to websites, designs to campaigns — everything your brand needs, under one roof",
      id: "/05"
    }
  ];

  return (
    <section className="py-32 px-6 bg-brand-dark text-brand-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime/5 rounded-full blur-[150px]"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl font-black text-brand-lime tracking-tighter group-hover:scale-110 transition-transform origin-left inline-block">
                  {stat.value}
                </span>
                <span className="text-xs font-black text-brand-white/20 tracking-[0.5em]">
                  {stat.id}
                </span>
              </div>
              <div className="h-[2px] w-full bg-white/10 mb-6 group-hover:bg-brand-lime transition-colors"></div>
              <p className="text-lg text-brand-white/60 font-medium leading-relaxed uppercase tracking-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
