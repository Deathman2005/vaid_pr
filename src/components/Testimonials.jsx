import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Aryan Sharma",
    role: "CEO, TechFlow",
    text: "VaidPR transformed our startup's visibility. Within 2 months, we were featured in top tech journals and secured our first major funding round.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloomly",
    text: "The personal branding strategy they created for me was life-changing. I've gone from being unknown to a frequent speaker at industry conferences.",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "Director, InnovateX",
    text: "Professional, creative, and data-driven. They don't just send press releases; they build relationships that matter.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Loved by Founders & Visionaries</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our partners have to say about working with VaidPR.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[32px] relative"
            >
              <div className="absolute top-8 right-10 text-primary/20">
                <Quote size={60} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#aa3bff" className="text-primary" />
                ))}
              </div>

              <p className="text-white/80 italic mb-8 leading-relaxed relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
