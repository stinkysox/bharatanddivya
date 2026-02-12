"use client";

import * as React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Heart, Sun, MapPin } from 'lucide-react';
import { WEDDING_CONTENT } from '../src/data/weddingContent';
import RoseConfetti from './RoseConfetti'; // Assuming the file is in the same directory

const IconRenderer = ({ type }: { type: string }) => {
  switch (type) {
    case 'sparkles': return <Sparkles className="text-wedding-accent" />;
    case 'sun': return <Sun className="text-wedding-accent" />;
    case 'heart': return <Heart className="text-wedding-accent" />;
    default: return <Sparkles className="text-wedding-accent" />;
  }
};

const Events: React.FC = () => {
  const { events, intro } = WEDDING_CONTENT;
  
  // Ref and View tracking to trigger confetti
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Set to true if you only want it to happen the first time
    amount: 0.2  // Triggers when 20% of the component is visible
  });

  return (
    <section ref={sectionRef} className="relative py-12">
      {/* Confetti triggered by scroll position */}
      <RoseConfetti isActive={isInView} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-wedding-accent uppercase tracking-[0.4em] text-sm block mb-4">
            {events.tagline}
          </span>
          <h2 className="font-royal text-5xl md:text-6xl italic text-wedding-text">
            {events.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {events.items.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden bg-white/5 border border-white/5 backdrop-blur-xl p-8 min-h-[380px] flex flex-col justify-between transform-gpu"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-white/5 border border-wedding-accent/20 flex items-center justify-center mb-6">
                  <IconRenderer type={event.iconType} />
                </div>
                <h3 className="font-royal text-3xl italic mb-2 text-wedding-text">{event.title}</h3>
                <p className="text-wedding-accent text-sm tracking-widest font-medium mb-6">{event.date}</p>
                <p className="text-wedding-text/60 leading-relaxed font-light text-base">{event.description}</p>
              </div>

              <div className="flex items-center gap-2 pt-6 border-t border-white/5 mt-6 text-wedding-text/40">
                <MapPin size={16} />
                <span className="text-sm tracking-wide">{event.venue}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Temple Image Illustration */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center items-center mt-12 overflow-hidden"
        >
          <motion.img 
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            src={typeof intro.sections.temple === 'string' ? intro.sections.temple : intro.sections.temple.src} 
            alt="Temple Illustration" 
            className="w-full h-auto max-w-[200px] md:max-w-[220px] object-contain opacity-90 drop-shadow-[0_20px_50px_rgba(var(--wedding-accent-rgb),0.15)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Events;