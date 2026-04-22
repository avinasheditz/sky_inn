import { motion } from 'motion/react';
import { Wifi, Coffee, Car, Droplets, WashingMachine, Briefcase, BellRing, Dumbbell, CigaretteOff } from 'lucide-react';
import { SectionTitle } from './Navigation';

const rooms = [
  {
    id: 1,
    name: "Skyline Suite",
    description: "Panoramic floor-to-ceiling views of the horizon with a private terrace.",
    price: "$550",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1000",
    features: ["King Bed", "Private Balcony", "Smart Control"]
  },
  {
    id: 2,
    name: "Cloud Nine Loft",
    description: "A dual-level sanctuary designed for ultimate serenity and modern comfort.",
    price: "$780",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000",
    features: ["Loft Bedroom", "Premium Bar", "Rain Shower"]
  },
  {
    id: 3,
    name: "Celestial Penthouse",
    description: "The pinnacle of luxury with a private infinity pool and 360-degree views.",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1000",
    features: ["Infinity Pool", "Butler Service", "Gourmet Kitchen"]
  }
];

export const RoomsSection = () => {
  return (
    <section id="rooms" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle 
        subtitle="Exclusive Accommodations" 
        title="Luxury Suites & Rooms" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {rooms.map((room, idx) => (
          <motion.div 
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800"
          >
            <div className="relative h-[400px] overflow-hidden">
              <img 
                src={room.image} 
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold shadow-sm dark:text-white">
                From {room.price}<span className="text-slate-400 font-normal"> / Night</span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-serif text-slate-800 dark:text-white mb-3">{room.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-light mb-6 leading-relaxed">
                {room.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {room.features.map(f => (
                  <span key={f} className="text-[10px] uppercase tracking-wider font-bold text-slate-400 border border-slate-100 px-3 py-1 rounded-full">
                    {f}
                  </span>
                ))}
              </div>

              <button className="w-full py-4 rounded-xl border border-gold-500 text-gold-500 font-bold hover:bg-gold-500 hover:text-white transition-all">
                EXPLORE DETAILS
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const amenities = [
  { icon: <Wifi className="w-6 h-6" />, name: "Free Wi-Fi", desc: "Hi-speed connectivity throughout" },
  { icon: <Coffee className="w-6 h-6" />, name: "Free breakfast", desc: "Continental & Local delicacies" },
  { icon: <Car className="w-6 h-6" />, name: "Secure Parking", desc: "Valet and self-parking" },
  { icon: <Droplets className="w-6 h-6" />, name: "Pool", desc: "Indoor temperature-controlled" },
  { icon: <WashingMachine className="w-6 h-6" />, name: "Laundry service", desc: "Same-day express delivery" },
  { icon: <Briefcase className="w-6 h-6" />, name: "Business centre", desc: "Fully equipped workspaces" },
  { icon: <BellRing className="w-6 h-6" />, name: "Room service", desc: "24/7 in-room dining" },
  { icon: <Dumbbell className="w-6 h-6" />, name: "Fitness centre", desc: "Modern gym equipment" },
  { icon: <CigaretteOff className="w-6 h-6" />, name: "Smoke-free", desc: "Pure air environment" },
];

export const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-24 bg-sky-50/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          subtitle="The Sky Experience" 
          title="World-Class Amenities" 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {amenities.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group text-center p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-sky-100 dark:border-slate-800 cursor-pointer"
            >
              <div className="w-16 h-16 bg-sky-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 text-sky-500 dark:text-sky-400 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                {item.icon}
              </div>
              <h4 className="font-serif text-slate-800 dark:text-white mb-2">{item.name}</h4>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
