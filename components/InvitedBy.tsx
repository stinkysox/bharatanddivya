import * as React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FireworkCelebration from './FireworkCelebration';
import { WEDDING_CONTENT } from '../src/data/weddingContent';

const InvitedBy: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });
  const { couple } = WEDDING_CONTENT;

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto text-center space-y-16 relative">
      <FireworkCelebration isActive={isInView} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <span className="text-[#c5a059] uppercase tracking-[0.4em] text-xs font-semibold block mb-4">Together with</span>
        <h2 className="font-royal text-5xl md:text-6xl italic text-[#f8f8f8]">Our Families</h2>
        <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-6 opacity-30" />
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
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059]/60">Groom's Parents</span>
            <h3 className="font-royal text-3xl italic text-[#f8f8f8]">{couple.groom.name}</h3>
          </div>
          <div className="py-6 px-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <p className="font-royal text-2xl text-[#f8f8f8]/90">{couple.groom.parents}</p>
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
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059]/60">Bride's Parents</span>
            <h3 className="font-royal text-3xl italic text-[#f8f8f8]">{couple.bride.name}</h3>
          </div>
          <div className="py-6 px-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <p className="font-royal text-2xl text-[#f8f8f8]/90">{couple.bride.parents}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pt-12 relative z-10"
      >
        <p className="font-royal text-xl italic text-[#f8f8f8]/50 max-w-lg mx-auto leading-relaxed">
          "Your presence is the greatest gift we could ask for. We look forward to seeing you there."
        </p>
      </motion.div>
    </div>
  );
};

export default InvitedBy;
