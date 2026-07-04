import { motion } from 'motion/react';
import { Scissors, Sparkles, Droplets, Eye } from 'lucide-react';

const services = [
  {
    title: "Threading",
    description: "Precise, gentle hair removal using ancient techniques for perfectly sculpted brows and a smooth face.",
    icon: Scissors,
    price: "From $15"
  },
  {
    title: "Waxing",
    description: "Premium hard and soft waxes formulated for sensitive skin, leaving you silky smooth.",
    icon: Droplets,
    price: "From $20"
  },
  {
    title: "Facials",
    description: "Rejuvenating treatments tailored to your skin type for a radiant, youthful glow.",
    icon: Sparkles,
    price: "From $65"
  },
  {
    title: "Tinting & Lashes",
    description: "Enhance your natural beauty with custom brow tinting and lash lifts.",
    icon: Eye,
    price: "From $25"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-shape border-t border-brand-bg/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-text/10 -z-10"></div>
          <span className="bg-brand-shape px-6 text-[10px] uppercase tracking-[0.2em] font-sans opacity-60">
            Curated Offerings
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-normal mt-6 text-brand-text bg-brand-shape inline-block px-8"
          >
            Our <span className="italic">Services</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-brand-text/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-brand-bg p-10 hover:bg-brand-text hover:text-white transition-all duration-500 group cursor-pointer border-b md:border-b-0 md:border-r border-brand-text/10 last:border-0 relative overflow-hidden"
            >
              <div className="w-10 h-10 border border-brand-text/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white/30 group-hover:scale-110 transition-all">
                <span className="font-serif text-xs opacity-60">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-normal font-serif mb-4">{service.title}</h3>
              <p className="opacity-60 text-xs font-sans leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="text-[10px] uppercase tracking-widest font-sans border-t border-brand-text/10 pt-4 group-hover:border-white/20">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
