import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-brand-bg overflow-hidden relative border-t border-brand-text/10">
      <div className="absolute -bottom-24 -right-24 font-serif text-[240px] opacity-[0.02] select-none pointer-events-none">
        Luxury
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[3/4] rounded-t-full overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EAE7E2]/50 to-[#D8D2C9]/50 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2069&auto=format&fit=crop" 
                alt="Spa treatment" 
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] border border-brand-text/10 rounded-full -z-10"></div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-accent font-sans text-xs uppercase tracking-[0.3em] mb-6 block">
                The Experience
              </span>
              <h2 className="font-serif text-5xl md:text-6xl font-normal mb-8 text-brand-text leading-tight">
                Sanctuary for <br/><span className="italic">the Senses</span>.
              </h2>
              <p className="font-sans text-sm font-light opacity-70 mb-10 leading-relaxed max-w-md">
                Step into a serene environment designed to melt away stress. Our expert estheticians 
                bring years of artistry and precision to every appointment, ensuring you leave feeling 
                confident, refreshed, and beautifully yourself.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  "Expert Threading Artists", 
                  "Premium Hypoallergenic Products", 
                  "Impeccable Hygiene Standards", 
                  "Relaxing, Minimalist Atmosphere"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-4 text-brand-text font-sans text-sm tracking-wide uppercase"
                  >
                    <span className="font-serif italic text-brand-accent">0{i + 1}</span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <a 
                href="#about"
                className="inline-block border border-brand-text px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-sans hover:bg-brand-text hover:text-white transition-all"
              >
                Read Our Story
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
