import React from 'react';
import { Sparkle } from 'lucide-react';

const Ticker = () => {
  const items = [
    "Content Marketing",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Branding",
    "Web Development",
    "UI/UX Design"
  ];

  return (
    <div className="ticker-wrap mt-10">
      <div className="ticker-content">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="ticker-item group">
            <span>{item}</span>
            <Sparkle className="mx-12 text-brand-lime group-hover:rotate-180 transition-transform duration-700" size={32} fill="currentColor" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
