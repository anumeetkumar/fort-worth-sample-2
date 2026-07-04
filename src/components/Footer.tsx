import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-text text-brand-bg pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-16 border-b border-brand-bg/10 pb-16">
          {/* Brand */}
          <div>
            <a href="#" className="font-serif text-2xl font-normal tracking-tight block mb-6">
              Fort Worth <span className="italic text-brand-accent">Threading</span>
            </a>
            <p className="font-sans text-sm font-light opacity-60 leading-relaxed mb-6 max-w-sm">
              Elevating the standard of beauty services in Fort Worth. Where artistry meets everyday elegance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-bg/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-bg/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-[11px] mb-6 tracking-widest uppercase opacity-80">Contact Us</h4>
            <ul className="space-y-4 font-sans text-sm font-light opacity-70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-accent shrink-0 mt-0.5" />
                <span>1234 Beauty Lane,<br />Fort Worth, TX 76107</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-accent shrink-0" />
                <span>(817) 555-0198</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-sans font-semibold text-[11px] mb-6 tracking-widest uppercase opacity-80">Hours</h4>
            <ul className="space-y-3 font-sans text-sm font-light opacity-70">
              <li className="flex justify-between border-b border-brand-bg/10 pb-2">
                <span>Mon - Fri</span>
                <span>10:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-brand-bg/10 pb-2">
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-brand-bg/10 pb-2">
                <span>Sunday</span>
                <span>11:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-sans opacity-50 gap-4">
          <p>&copy; {new Date().getFullYear()} Fort Worth Threading. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest text-[9px]">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
