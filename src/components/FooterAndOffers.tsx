import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import { SectionTitle } from './Navigation';

export const SpecialOffers = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Seasonal Packages" title="Unmissable Offers" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1544161515-436cefb657f8?auto=format&fit=crop&q=80&w=1000" 
              alt="Honeymoon" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <span className="bg-gold-500 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">MOMENTS FOR TWO</span>
              <h3 className="text-3xl font-serif text-white mb-4">Celestial Honeymoon</h3>
              <p className="text-slate-200 text-sm mb-6 max-w-md">Enjoy a romantic candlelit dinner, private spa session, and 20% off your suite.</p>
              <button className="text-white text-sm font-bold border-b-2 border-gold-500 pb-1 hover:text-gold-500 transition-colors">BOOK PACKAGE</button>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000" 
              alt="Business" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <span className="bg-sky-500 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">BUSINESS ELITE</span>
              <h3 className="text-3xl font-serif text-white mb-4">Cloud Executive</h3>
              <p className="text-slate-200 text-sm mb-6 max-w-md">Priority check-in, meeting room access, and airport luxury transfer included.</p>
              <button className="text-white text-sm font-bold border-b-2 border-sky-400 pb-1 hover:text-sky-400 transition-colors">BOOK PACKAGE</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
          <h2 className="text-5xl font-serif mb-8 leading-tight">Visit Us in the Sky</h2>
          
          <div className="space-y-8 mb-12">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gold-500">
                <MapPin />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1">Location</h4>
                <p className="text-slate-400 font-light text-sm">
                  Infront of, Hotel Sky Inn, NH9, Makanpur Underpass, <br />
                  Block - AM, Amrapali, Nyay Khand 2, Indirapuram, <br />
                  Ghaziabad, Uttar Pradesh 201020
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gold-500">
                <Phone />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1">Direct Line</h4>
                <p className="text-slate-400 font-light">+91 85880 95757</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gold-500">
                <Mail />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-1">Inquiries</h4>
                <p className="text-slate-400 font-light">concierge@skyinn.com</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
          <h3 className="text-2xl font-serif mb-8">Send a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Subject</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                <option className="bg-slate-900">Reservation Inquiry</option>
                <option className="bg-slate-900">Spa & Wellness</option>
                <option className="bg-slate-900">Business Events</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Tell us about your requirements..."></textarea>
            </div>
            <button className="w-full bg-gold-500 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gold-400 transition-all">
              SEND MESSAGE <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center">
            <span className="text-sky-600 font-bold">S</span>
          </div>
          <span className="text-xl font-serif">SKY INN</span>
        </div>
        
        <div className="flex gap-10 text-xs uppercase tracking-[0.2em] font-medium text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>

        <p className="text-[10px] text-slate-600 uppercase tracking-widest">
          © 2026 Sky Inn Luxury. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
