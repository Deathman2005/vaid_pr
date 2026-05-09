import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    title: "SaaS Launch X",
    category: "Startup PR",
    growth: "+240%",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Helped a Series A fintech startup secure features in TechCrunch and Forbes, leading to a massive user growth."
  },
  {
    title: "Brand Visionary",
    category: "Founder Branding",
    growth: "+180%",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    description: "Positioned a Web3 founder as a top industry thought leader through strategic podcast tours and op-eds."
  },
  {
    title: "Scale Media",
    category: "Press Distribution",
    growth: "+400%",
    image: "https://images.unsplash.com/photo-1504868584819-f8eec5c63a86?auto=format&fit=crop&q=80&w=800",
    description: "Distributed a series of high-impact press releases that reached over 500+ news outlets globally."
  }
];

const CaseStudies = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.case-card');
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollRef.current.offsetWidth
        }
      });
    }, scrollRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={scrollRef} className="bg-background-secondary overflow-hidden">
      <div className="flex h-screen items-center">
        <div className="px-6 md:px-20 min-w-[40vw]">
          <h2 className="text-4xl md:text-7xl font-bold mb-6">Proven<br />Success.</h2>
          <p className="text-gray-400 max-w-sm mb-8">We deliver measurable impact for founders who want to lead their industries.</p>
          <div className="flex items-center gap-4 text-accent font-bold">
            Scroll to explore <TrendingUp size={20} />
          </div>
        </div>

        <div className="flex gap-10 pr-20">
          {cases.map((item, index) => (
            <div key={index} className="case-card min-w-[600px] md:min-w-[800px] h-[500px] glass rounded-[40px] overflow-hidden group relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">{item.category}</span>
                    <h3 className="text-4xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 max-w-md line-clamp-2">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-bold text-accent mb-2">{item.growth}</div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Growth</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 w-14 h-14 glass rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                <ArrowUpRight size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
