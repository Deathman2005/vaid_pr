import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ServiceBenefits = ({ benefits }) => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose This Service?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive solutions designed to scale with your brand and deliver measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Strategic approach tailored to maximize your presence and authority in the competitive market.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
