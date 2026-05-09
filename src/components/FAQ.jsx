import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "How long does it take to see results from PR?",
    answer: "While some media mentions can happen quickly, a comprehensive PR strategy typically takes 3-6 months to build significant momentum and consistent authority."
  },
  {
    question: "Do you guarantee media placements?",
    answer: "While we cannot guarantee specific placements due to editorial control, we have a 95% success rate in securing high-quality coverage for our clients through strategic storytelling."
  },
  {
    question: "Can I choose which websites I'm featured on?",
    answer: "We work with you to identify target publications that align with your audience. We pitch to these specifically, but final inclusion depends on the editors."
  },
  {
    question: "What makes VaidPR different?",
    answer: "We blend traditional PR with modern digital branding and AI-driven insights to ensure your brand isn't just seen, but remembered and trusted."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about our PR process.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between transition-colors"
              >
                <span className="font-bold text-white">{faq.question}</span>
                {openIndex === index ? <Minus className="text-primary" /> : <Plus className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
