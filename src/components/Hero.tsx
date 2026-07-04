import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?q=80&w=2070&auto=format&fit=crop" 
          alt="Elegant salon interior" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-brand-bg/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-brand-accent text-xs uppercase tracking-[0.3em] font-sans mb-4 block">
              Est. 2014
            </span>
            <h1 className="font-serif text-[60px] md:text-[90px] leading-[0.9] mb-8 text-brand-text">
              The <br />
              <span className="italic">Art</span> of <br />
              Precision.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-sm font-light max-w-sm leading-relaxed opacity-70 mb-10"
          >
            Experience the finest threading, waxing, and esthetic services in Fort Worth. Crafted for those who appreciate the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#book"
              className="bg-brand-dark text-white px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-sans hover:opacity-90 transition-all flex items-center gap-2 group"
            >
              Book Your Visit
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="border border-brand-text text-brand-text px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-sans hover:bg-brand-text hover:text-white transition-all"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Right Image/Graphic Column */}
        <div className="md:col-span-6 relative flex items-center justify-center py-12 md:py-0 hidden md:flex">
          {/* Abstract Salon Shape 1 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[480px] h-[580px] bg-brand-shape rounded-t-full border border-gray-100 z-0"></div>
          
          {/* Abstract Salon Shape 2 (Representing a mirror or portrait) */}
          <div className="relative w-[300px] md:w-[400px] h-[400px] md:h-[500px] overflow-hidden rounded-t-full shadow-2xl z-10">
             <div className="absolute inset-0 bg-gradient-to-br from-[#EAE7E2] to-[#D8D2C9]"></div>
             <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" alt="Spa treatment" className="w-full h-full object-cover mix-blend-overlay opacity-50" />
             
             {/* Service Highlight */}
             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full px-8">
                <div className="font-serif italic text-2xl text-[#5A5A40] mb-2">Eyebrow Threading</div>
                <div className="h-[1px] w-12 bg-[#5A5A40] mx-auto opacity-30"></div>
             </div>
          </div>

          {/* Floating Interactive Badge */}
          <div className="absolute bottom-20 left-0 bg-white/40 backdrop-blur-md border border-white/60 p-6 w-56 z-20 shadow-lg border-l-4 border-l-brand-accent">
             <div className="text-[9px] uppercase tracking-widest font-sans mb-2 opacity-60">Top Rated Service</div>
             <div className="font-serif text-lg mb-1">Signature Brow Sculpt</div>
             <div className="text-xs font-sans opacity-80">$18 — 20 Minutes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
