import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = ({ tiers }) => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose a plan that fits your growth stage. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col ${
                index === 1 ? 'border-primary/50 bg-primary/5' : ''
              }`}
            >
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-xs font-bold uppercase rounded-bl-xl">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold text-white mb-6">
                {tier.price}
                {tier.price !== 'Custom' && <span className="text-sm text-gray-400 font-normal ml-2">/month</span>}
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-gray-400 text-sm">
                    <Check size={18} className="text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                index === 1 ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
