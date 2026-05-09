import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-32 pb-12 bg-brand-dark text-brand-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center">
              <div className="w-6 h-6 bg-brand-dark rounded-full"></div>
            </div>
            <span className="text-2xl font-black tracking-tighter">VaidPR.</span>
          </div>
          <h4 className="text-3xl font-black leading-tight">Your Reputation <br /> <span className="text-brand-lime">Our priority</span></h4>
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-dark hover:border-brand-lime transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-brand-lime font-black mb-8 uppercase text-xs tracking-[0.2em]">Services</h4>
          <ul className="space-y-4 text-brand-white/70 font-bold uppercase text-xs tracking-widest">
            <li><a href="#" className="hover:text-brand-lime transition-colors">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-brand-lime transition-colors">Content Creation</a></li>
            <li><a href="#" className="hover:text-brand-lime transition-colors">Event Promotion</a></li>
            <li><a href="#" className="hover:text-brand-lime transition-colors">Intern Dashboard</a></li>
            <li><a href="#" className="hover:text-brand-lime transition-colors">Feedback & Complaints</a></li>
            <li><a href="#" className="hover:text-brand-lime transition-colors">Vaid EMS</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-lime font-black mb-8 uppercase text-xs tracking-[0.2em]">Quick Links</h4>
          <ul className="space-y-4 text-brand-white/70 font-bold uppercase text-xs tracking-widest">
            <li><a href="#" className="hover:text-brand-lime transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-brand-lime transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-brand-lime transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-brand-lime transition-colors">Support</a></li>
            <li><a href="#" className="hover:text-brand-lime transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-brand-lime font-black mb-8 uppercase text-xs tracking-[0.2em]">Contact</h4>
          <ul className="space-y-6 text-brand-white/70 font-medium">
            <li className="flex items-start gap-4">
              <Mail size={20} className="text-brand-lime shrink-0" />
              <span>suppoort@vaidpr.com</span>
            </li>
            <li className="flex items-start gap-4">
              <Phone size={20} className="text-brand-lime shrink-0" />
              <span>(+91) 8766212132</span>
            </li>
            <li className="flex items-start gap-4">
              <MapPin size={20} className="text-brand-lime shrink-0" />
              <span>Greater Noida, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-brand-white/40 font-bold uppercase tracking-widest text-[10px]">
        <p>© 2024-2025 Vaid Public Relation. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-white transition-colors">Terms of Use</a>
        </div>
      </div>

      {/* Background Decorative Gradient */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-lime/5 rounded-full blur-[120px]" />
    </footer>
  );
};

export default Footer;
