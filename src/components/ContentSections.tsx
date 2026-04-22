import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionTitle } from './Navigation';
import { useState } from 'react';

export const AboutSection = () => {
  return (
    <section id="experience" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-50" />
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1000" 
              alt="Sky Inn Experience" 
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-xl border border-sky-50 hidden md:block"
          >
            <div className="text-4xl font-serif text-sky-500 mb-1">15+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">AWARDS WON</div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-4 block">Since 2012</span>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-800 dark:text-white mb-8 leading-tight">
            Elevating Your Living Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light text-lg">
            Sky Inn was born from a vision to create a space that transcends the ordinary. 
            Nestled at the highest point of the city, we offer more than just a stay; 
            we offer a journey above the clouds.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light text-lg">
            Every detail, from the minimalist glass architecture to the bespoke scents in each room, 
            is curated to provide a sense of calm and luxury that is truly unforgettable.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-xl text-slate-800 dark:text-white mb-2">Immersive Design</h4>
              <p className="text-sm text-slate-400 dark:text-slate-500">Glassmorphism meets modern serenity.</p>
            </div>
            <div>
              <h4 className="font-serif text-xl text-slate-800 dark:text-white mb-2">Curated Luxury</h4>
              <p className="text-sm text-slate-400 dark:text-slate-500">Personalized services for every guest.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const images = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1469796466635-455ede028ec2?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551882547-ff43c63faf76?auto=format&fit=crop&q=80&w=800",
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-950">
      <SectionTitle subtitle="Visual Journey" title="Captured Moments" />
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 px-6 max-w-7xl mx-auto space-y-6">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
          >
            <img 
              src={img} 
              alt={`Gallery ${idx}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Eleanor Sterling",
    role: "Global Traveler",
    text: "The experience at Sky Inn is truly ethereal. Waking up to the sunrise above the clouds was a moment I will never forget.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Marcus Vane",
    role: "Architect",
    text: "As an architect, I was blown away by the subtle integration of light and space. A masterclass in luxury design.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Sophia Chen",
    role: "Digital Nomad",
    text: "Perfect blend of serenity for work and luxury for relaxation. The rooftop dining is easily the best in the city.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

export const TestimonialSection = () => {
  return (
    <section className="py-24 bg-sky-50/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Guest Voices" title="What They Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-sky-100 dark:border-slate-800 relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-sky-50 dark:text-slate-800" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 italic font-light italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-md" />
                <div>
                  <h4 className="font-serif text-slate-800 dark:text-white">{t.name}</h4>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
