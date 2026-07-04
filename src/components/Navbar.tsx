import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-bg/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-3xl font-normal tracking-tight">
          Fort Worth <span className="italic text-brand-text">Threading</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-sans">
          <a href="#services" className="opacity-50 hover:opacity-100 transition-opacity">Services</a>
          <a href="#experience" className="opacity-50 hover:opacity-100 transition-opacity">Experience</a>
          <a href="#contact" className="opacity-50 hover:opacity-100 transition-opacity">Contact</a>
          <a 
            href="#book" 
            className="bg-brand-dark text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] hover:opacity-90 transition-all"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-brand-bg shadow-lg border-t border-brand-shape p-6 flex flex-col gap-4"
        >
          <a href="#services" onClick={() => setIsOpen(false)} className="text-[11px] uppercase tracking-widest opacity-80">Services</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="text-[11px] uppercase tracking-widest opacity-80">Experience</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-[11px] uppercase tracking-widest opacity-80">Contact</a>
          <a 
            href="#book" 
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-brand-dark text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] transition-all"
          >
            Book Appointment
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
