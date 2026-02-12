import * as React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FireworkCelebration from './FireworkCelebration';
import { WEDDING_CONTENT } from '../src/data/weddingContent';

const InvitedBy: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });
  const { couple, families, intro } = WEDDING_CONTENT;

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto text-center space-y-16 relative">
      <FireworkCelebration isActive={isInView} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <span className="text-wedding-accent uppercase tracking-[0.4em] text-xs font-semibold block mb-4">{families.tagline}</span>
        <h2 className="font-royal text-5xl md:text-6xl italic text-wedding-text">{families.title}</h2>
        <div className="w-16 h-[1px] bg-wedding-accent mx-auto mt-6 opacity-30" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 transform -translate-x-1/2" />

        {/* Groom's Family */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-wedding-accent/60">{families.groomParentsLabel}</span>
            <h3 className="font-royal text-3xl italic text-wedding-text">{couple.groom.fullName}</h3>
          </div>
          <div className="py-6 px-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <p className="font-royal text-2xl text-wedding-text/90">{couple.groom.parents}</p>
          </div>
        </motion.div>

        {/* Bride's Family */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-wedding-accent/60">{families.brideParentsLabel}</span>
            <h3 className="font-royal text-3xl italic text-wedding-text">{couple.bride.fullName}</h3>
          </div>
          <div className="py-6 px-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <p className="font-royal text-2xl text-wedding-text/90">{couple.bride.parents}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pt-4 relative z-10"
      >
        <p className="font-royal text-xl italic text-wedding-text/50 max-w-lg mx-auto leading-relaxed">
          "{families.quote}"
        </p>
      </motion.div>

      {/* Silhouette Image at the bottom */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center pt-8 pb-4 relative z-10"
      >
        <motion.img 
          /* Gentle floating animation */
          animate={{ y: [0, -5, 0] }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          src={typeof intro.sections.god === 'string' ? intro.sections.god : intro.sections.god.src} 
          alt="Couple Silhouette" 
          className="w-full h-auto max-w-[180px] md:max-w-[220px] object-contain opacity-80 drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default InvitedBy;