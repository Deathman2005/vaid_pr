import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const ExtraServices = () => {
  const services = [
    {
      title: "Lead Generation",
      desc: "Drive high-quality prospects to your business with targeted, data-backed acquisition strategies.",
      image: "leadgeneration.png",
      highlight: false
    },
    {
      title: "Social Media Templates",
      desc: "Custom-designed, high-converting templates for your social media posts to maintain brand consistency.",
      image: "SOCIALMEDIATEMPLATES.png",
      highlight: true
    },
    {
      title: "Analytics & Reporting",
      desc: "Comprehensive digital reports that provide deep insights into your campaign performance and ROI.",
      image: "Analytics&Reporting.png",
      highlight: false
    },
    {
      title: "Website Making",
      desc: "Premium, responsive, and tech-enabled websites that reflect your brand's elite digital presence.",
      image: "websitemaking.png",
      highlight: true
    },
    {
      title: "Crisis Management",
      desc: "Strategic PR support to manage and mitigate risks while protecting your brand's reputation.",
      image: "CrisisManagement.png",
      highlight: false
    },
    {
      title: "Graphic Designing",
      desc: "From invitation makers to complex branding, we create visuals that capture attention and influence.",
      image: "GRAPHICDESIGNING.png",
      highlight: true
    }

  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-brand-dark text-brand-white relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lime/5 rounded-full blur-[150px]"></div>
 
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-10 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter">
              Boost Your Brand <br /> with <span className="text-brand-lime uppercase">Our Expertise</span>
            </h2>
          </div>
        </div>


        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-2 rounded-[2.5rem] transition-all duration-500 group ${service.highlight ? 'bg-brand-lime text-brand-dark' : 'bg-white/5 hover:bg-white/10'}`}
            >
              <div className="relative h-full flex flex-col p-6">
                 {/* Image Container */}
                 <div className="h-60 rounded-[2rem] overflow-hidden mb-8 border border-white/10">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${service.highlight ? '' : 'grayscale'}`}
                    />
                 </div>

                 {/* Content */}
                 <div className="flex-1 px-4 pb-4">
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{service.title}</h3>
                    <p className={`text-sm leading-relaxed mb-8 font-medium ${service.highlight ? 'text-brand-dark/70' : 'text-brand-white/50'}`}>
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest cursor-pointer group/link">
                      <span>Learn more</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraServices;
