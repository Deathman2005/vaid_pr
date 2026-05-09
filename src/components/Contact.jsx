import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Side - Info */}
          <div>
            <span className="text-brand-lime font-black uppercase tracking-[0.3em] text-xs mb-4 block">Get in touch</span>
            <h2 className="text-6xl md:text-8xl text-brand-dark mb-12 leading-[0.85] font-black tracking-tighter">
              Let’s start <br /> something <br /> <span className="text-brand-dark/20 uppercase">great</span>
            </h2>

            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-dark shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-brand-dark/30 mb-1">(+91) 8766212132</h4>
                  <p className="text-lg font-bold">We're here to assist you with your creative & tech needs.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-dark shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-brand-dark/30 mb-1">suppoort@vaidpr.com</h4>
                  <p className="text-lg font-bold">Reach out for queries, collaborations, or media assistance.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-dark shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-brand-dark/30 mb-1">Greater Noida, India</h4>
                  <p className="text-lg font-bold">Proudly building brands from the heart of India to the world.</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-20 p-10 bg-brand-dark rounded-[3rem] text-brand-white relative overflow-hidden">
               <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4">Our Newsletters</h4>
                  <p className="text-brand-white/60 mb-8 font-medium">Stay updated with the latest in digital branding, PR strategies, and design innovations from VaidPR.</p>
                  <div className="flex bg-white/10 rounded-full p-2 border border-white/10 focus-within:border-brand-lime transition-all">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-transparent border-none outline-none flex-1 px-6 text-sm font-bold placeholder:text-white/30" 
                    />
                    <button className="w-12 h-12 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center hover:scale-105 transition-transform">
                       <Send size={18} />
                    </button>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-brand-bg p-12 md:p-16 rounded-[4rem] border border-brand-dark/5">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-4">Name</label>
                  <input type="text" className="w-full bg-white rounded-full px-8 py-5 border-none outline-none font-bold text-brand-dark shadow-sm focus:ring-2 focus:ring-brand-lime transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-4">Company Name</label>
                  <input type="text" className="w-full bg-white rounded-full px-8 py-5 border-none outline-none font-bold text-brand-dark shadow-sm focus:ring-2 focus:ring-brand-lime transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-4">Email</label>
                <input type="email" className="w-full bg-white rounded-full px-8 py-5 border-none outline-none font-bold text-brand-dark shadow-sm focus:ring-2 focus:ring-brand-lime transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-4">Phone No</label>
                <input type="tel" className="w-full bg-white rounded-full px-8 py-5 border-none outline-none font-bold text-brand-dark shadow-sm focus:ring-2 focus:ring-brand-lime transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-4">Query</label>
                <textarea rows="4" className="w-full bg-white rounded-[2rem] px-8 py-5 border-none outline-none font-bold text-brand-dark shadow-sm focus:ring-2 focus:ring-brand-lime transition-all"></textarea>
              </div>

              <button className="w-full btn-primary justify-center py-6 text-lg tracking-widest uppercase shadow-2xl shadow-brand-dark/20">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
