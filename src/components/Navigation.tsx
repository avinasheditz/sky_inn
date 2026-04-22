import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, User, Calendar, MapPin, Star, Wifi, Coffee, Wind, Utensils, Droplets, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Shared Components ---

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16">
    {subtitle && <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-gold-500 uppercase tracking-widest text-sm font-medium mb-3 block"
    >
      {subtitle}
    </motion.span>}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-serif text-slate-800 dark:text-white"
    >
      {title}
    </motion.h2>
  </div>
);

// --- Navbar ---

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDarkMode]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sky-200 dark:bg-sky-900 rounded-full flex items-center justify-center animate-float">
            <Wind className="text-sky-600 dark:text-sky-300 w-6 h-6" />
          </div>
          <span className={`text-2xl font-serif tracking-tighter ${isScrolled ? 'text-slate-800 dark:text-white' : 'text-slate-100 md:text-slate-800 md:dark:text-white'}`}>SKY INN</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Rooms', 'Amenities', 'Experience', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold-500 ${isScrolled ? 'text-slate-600 dark:text-slate-300' : 'text-slate-100 md:text-slate-600 md:dark:text-slate-300'}`}
            >
              {item}
            </a>
          ))}
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-slate-600 dark:text-slate-300' : 'text-slate-100 md:text-slate-600 md:dark:text-slate-300'}`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="bg-gold-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 active:scale-95">
            BOOK NOW
          </button>
        </div>

        <button className="md:hidden text-slate-800" onClick={() => setMobileMenuOpen(true)}>
          <Menu className={isScrolled ? 'text-slate-800' : 'text-slate-100'} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-8 right-8" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-8 h-8 text-slate-400" />
            </button>
            {['Rooms', 'Amenities', 'Experience', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-serif text-slate-800"
              >
                {item}
              </a>
            ))}
            <button className="mt-4 bg-gold-500 text-white px-10 py-4 rounded-full text-lg font-bold">
              BOOK YOUR STAY
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
