import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navigation';
import { Hero, BookingForm } from './components/Hero';
import { RoomsSection, AmenitiesSection } from './components/Rooms';
import { AboutSection, GallerySection, TestimonialSection } from './components/ContentSections';
import { SpecialOffers, ContactSection, Footer } from './components/FooterAndOffers';
import { Wind } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-sky-50 flex flex-col items-center justify-center"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl mb-6"
            >
              <Wind className="text-sky-400 w-10 h-10" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-serif text-slate-800 tracking-widest"
            >
              SKY INN
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              className="h-0.5 bg-gold-400 mt-4 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <BookingForm />
          
          <main>
            <RoomsSection />
            <AmenitiesSection />
            <AboutSection />
            <GallerySection />
            <SpecialOffers />
            <TestimonialSection />
            <ContactSection />
          </main>
          
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
