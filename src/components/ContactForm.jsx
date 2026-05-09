import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Calendar, Phone, Mail, ArrowRight } from 'lucide-react';

const ContactForm = ({ selectedService = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService,
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      console.log('Form data:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: selectedService, message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Let's Create<br /><span className="text-primary">Magic</span> Together.</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md">Ready to scale your brand? Our elite PR strategies are designed for founders who are ready to lead.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Book a Call</h4>
                <p className="text-gray-400">calendly.com/vaidpr/strategy</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Email Us</h4>
                <p className="text-gray-400">hello@vaidpr.com</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-14 rounded-[40px] relative"
        >
          {status === 'success' ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                <Send size={48} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Transmission Received</h3>
              <p className="text-gray-400">Our team of specialists will reach out within 24 hours.</p>
              <button onClick={() => setStatus('idle')} className="mt-10 text-accent font-bold uppercase tracking-widest text-xs hover:underline">Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-white/10 py-4 focus:border-primary outline-none transition-all text-white placeholder-transparent"
                  />
                  <label className="absolute left-0 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary uppercase font-bold tracking-widest">Full Name</label>
                </div>
                <div className="relative group">
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-white/10 py-4 focus:border-primary outline-none transition-all text-white placeholder-transparent"
                  />
                  <label className="absolute left-0 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary uppercase font-bold tracking-widest">Email</label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-white/10 py-4 focus:border-primary outline-none transition-all text-white placeholder-transparent"
                  />
                  <label className="absolute left-0 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary uppercase font-bold tracking-widest">Phone</label>
                </div>
                <div className="relative group">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-white/10 py-4 focus:border-primary outline-none transition-all text-white appearance-none uppercase font-bold tracking-widest text-sm"
                  >
                    <option value="" className="bg-background">Service Selection</option>
                    <option value="Startup PR" className="bg-background">Startup PR</option>
                    <option value="Founder Branding" className="bg-background">Founder Branding</option>
                  </select>
                  <div className="absolute right-0 top-5 pointer-events-none text-gray-500 group-focus:text-primary">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b-2 border-white/10 py-4 focus:border-primary outline-none transition-all text-white placeholder-transparent resize-none"
                />
                <label className="absolute left-0 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary uppercase font-bold tracking-widest">Your Vision</label>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary py-6 text-sm uppercase tracking-[0.2em]"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>Send Transmission <Send size={18} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
