import { motion } from 'motion/react';
import { Calendar, Users, MapPin, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/50 to-white/20 dark:from-slate-900/80 dark:to-slate-950/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2670" 
          alt="Luxury Hotel" 
          className="w-full h-full object-cover scale-110 animate-[pulse_10s_ease-in-out_infinite]"
        />
        
        {/* Floating Clouds Overlay */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-40 bg-white/30 dark:bg-sky-500/10 blur-3xl rounded-full z-20"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-80 h-32 bg-white/20 dark:bg-gold-500/10 blur-3xl rounded-full z-20"
        />
      </div>

      <div className="relative z-30 text-center px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-gold-500 font-medium tracking-[0.3em] uppercase mb-6 block"
        >
          Unrivaled Elegance
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-slate-800 dark:text-white leading-[1.1] mb-8"
        >
          Stay Above the <br /> 
          <span className="italic text-sky-400">Ordinary</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Experience a sanctuary in the clouds where luxury meets the horizon. 
          Your escape to serenity begins here.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-slate-800 dark:bg-slate-700 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-900 dark:hover:bg-slate-600 transition-all shadow-xl shadow-slate-200 dark:shadow-none active:scale-95 group">
            DISCOVER ROOMS
          </button>
          <button className="bg-white/80 dark:bg-white/10 backdrop-blur text-slate-800 dark:text-white border border-slate-200 dark:border-white/20 px-10 py-5 rounded-full text-lg font-medium hover:bg-white dark:hover:bg-white/20 transition-all active:scale-95">
            WATCH FILM
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export const BookingForm = () => {
  return (
    <div className="relative z-40 -mt-20 max-w-6xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center border border-sky-50 dark:border-slate-800"
      >
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <Calendar className="w-3 h-3" /> Check-in
            </label>
            <div className="p-3 bg-sky-50/50 dark:bg-slate-800/50 rounded-xl border border-sky-100 dark:border-slate-700 flex items-center justify-between cursor-pointer hover:border-sky-300 dark:hover:border-sky-700 transition-colors">
              <span className="text-slate-700 dark:text-slate-300 font-medium font-serif">April 24, 2026</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <Calendar className="w-3 h-3" /> Check-out
            </label>
            <div className="p-3 bg-sky-50/50 dark:bg-slate-800/50 rounded-xl border border-sky-100 dark:border-slate-700 flex items-center justify-between cursor-pointer hover:border-sky-300 dark:hover:border-sky-700 transition-colors">
              <span className="text-slate-700 dark:text-slate-300 font-medium font-serif">April 28, 2026</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <Users className="w-3 h-3" /> Guests
            </label>
            <div className="p-3 bg-sky-50/50 dark:bg-slate-800/50 rounded-xl border border-sky-100 dark:border-slate-700 flex items-center justify-between cursor-pointer hover:border-sky-300 dark:hover:border-sky-700 transition-colors">
              <span className="text-slate-700 dark:text-slate-300 font-medium font-serif">2 Adults, 1 Child</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
        
        <button className="w-full lg:w-fit bg-gold-500 text-white px-12 py-5 rounded-2xl font-bold hover:bg-gold-400 transition-all shadow-xl shadow-gold-500/20 active:scale-95">
          CHECK AVAILABILITY
        </button>
      </motion.div>
    </div>
  );
};
