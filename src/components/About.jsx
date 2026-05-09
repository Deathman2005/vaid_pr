import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Megaphone, Users, Palette } from 'lucide-react';

const About = () => {
  const sections = [
    {
      title: "Work with VaidPR",
      icon: <Megaphone className="text-brand-lime" size={32} />,
      content: "Choose a personalized PR and branding plan that fits your growth stage — whether you're a startup seeking visibility or an established brand aiming for market dominance. At VaidPR, we don’t offer one-size-fits-all solutions. We craft tailored strategies that elevate your presence, build credibility, and scale with your vision."
    },
    {
      title: "Strategic Collaboration at Every Step",
      icon: <Users className="text-brand-lime" size={32} />,
      content: "Effective public relations is more than just media coverage — it's a partnership. Our team collaborates with you at every step to deeply understand your brand’s identity, values, and goals. From planning to execution, we align each campaign with your voice to ensure consistent, authentic, and impactful storytelling across platforms."
    },
    {
      title: "Creative That Captures Attention",
      icon: <Palette className="text-brand-lime" size={32} />,
      content: "Your brand deserves visuals that do more than look good — they should communicate, engage, and convert. Our creative team designs assets that reflect your identity, connect with your audience, and support your PR objectives. Whether it’s social media creatives, pitch decks, or branded content, we help your message shine visually and strategically."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <span className="text-brand-lime font-black uppercase tracking-[0.3em] text-xs mb-4">About ABOUT US</span>
          <h2 className="text-5xl md:text-7xl text-brand-dark max-w-3xl leading-tight">
            We’re Strategic Digital Marketing Agency
          </h2>
          <p className="text-xl text-brand-dark/60 mt-8 max-w-2xl leading-relaxed">
            In order to scale new customer acquisition for eCommerce brands, we work across the entire funnel. Our team has a successful track record of helping brands scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-10 rounded-[3rem] bg-brand-bg border border-brand-dark/5 hover:border-brand-lime transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-lime/5 rounded-full blur-2xl group-hover:bg-brand-lime/10 transition-colors"></div>
              <div className="mb-8 p-4 bg-brand-dark rounded-2xl inline-block">
                {section.icon}
              </div>
              <h3 className="text-2xl font-black mb-6 text-brand-dark leading-tight uppercase tracking-tighter">
                {section.title}
              </h3>
              <p className="text-brand-dark/60 leading-relaxed font-medium">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>


        {/* CEO Quote */}
        <div className="mt-32 p-12 bg-brand-dark rounded-[4rem] text-brand-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
             <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-lime shrink-0">
               <img src="/ceo-photo.jpg" alt="CEO Name" className="w-full h-full object-cover" />
             </div>
             <div>
                <span className="text-brand-lime font-black uppercase tracking-widest text-xs mb-2 block">CEO Message</span>
                <h4 className="text-3xl md:text-4xl font-black mb-4">Let’s create magic together</h4>
                <p className="text-lg text-brand-white/60 max-w-2xl">
                  Top-notch quality, clear communication, and reliability keep our clients coming back for years.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
