
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Sun, MapPin } from 'lucide-react';

const events = [
  {
    title: "Mehendi",
    date: "Dec 10, 2025 • 4:00 PM",
    venue: "Vatika Lawns",
    icon: <Sparkles className="text-[#c5a059]" />,
    color: "from-[#1e2d24]/30",
    description: "A relaxed evening of music, henna, and getting together."
  },
  {
    title: "Sangeet",
    date: "Dec 11, 2025 • 7:00 PM",
    venue: "Ballroom",
    icon: <Sun className="text-[#c5a059]" />,
    color: "from-[#2d1e1e]/30",
    description: "A night of dinner and dancing with our family and friends."
  },
  {
    title: "The Wedding",
    date: "Dec 12, 2025 • 10:30 AM",
    venue: "Royal Palace",
    icon: <Heart className="text-[#c5a059]" />,
    color: "from-[#2d281e]/30",
    description: "Join us as we exchange our vows and start our new journey."
  }
];

const Events: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <span className="text-[#c5a059] uppercase tracking-[0.4em] text-sm block mb-4">The Celebration</span>
        <h2 className="font-royal text-5xl md:text-6xl italic">Wedding Events</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`relative group rounded-3xl overflow-hidden bg-white/5 border border-white/5 backdrop-blur-xl p-8 min-h-[380px] flex flex-col justify-between`}
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-[#c5a059]/20 flex items-center justify-center mb-6">
                {event.icon}
              </div>
              <h3 className="font-royal text-3xl italic mb-2">{event.title}</h3>
              <p className="text-[#c5a059] text-sm tracking-widest font-medium mb-6">{event.date}</p>
              <p className="text-[#f8f8f8]/60 leading-relaxed font-light text-base">{event.description}</p>
            </div>

            <div className="flex items-center gap-2 pt-6 border-t border-white/5 mt-6 text-[#f8f8f8]/40">
              <MapPin size={16} />
              <span className="text-sm tracking-wide">{event.venue}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
