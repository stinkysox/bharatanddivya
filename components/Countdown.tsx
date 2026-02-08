import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import RoseConfetti from './RoseConfetti';
import CurtainReveal from './CurtainReveal';
import { WEDDING_CONTENT } from '../src/data/weddingContent';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  
  return (
    <div ref={containerRef} className="max-w-4xl mx-auto px-6 flex flex-col items-center relative">
      <RoseConfetti isActive={isInView} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-12 text-center"
      >
        <span className="text-[#c5a059] uppercase tracking-[0.5em] text-xs font-semibold mb-4 block">Our Celebration</span>
        <h3 className="font-royal text-6xl md:text-8xl italic text-[#f8f8f8]">Save the Date</h3>
      </motion.div>
      
      <CurtainReveal className="w-full">
        <div className="flex flex-col items-center gap-8 py-12 px-8 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-xl">
          <div className="flex flex-col items-center">
            <p className="text-[#c5a059] text-sm tracking-[0.6em] uppercase font-bold mb-4">August</p>
            <div className="font-royal text-9xl text-[#f8f8f8] leading-none">20</div>
            <p className="text-[#c5a059] text-sm tracking-[0.6em] uppercase font-bold mt-4">2026</p>
          </div>
          
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-40" />
          
          <div className="text-center">
            <p className="text-[#f8f8f8]/70 font-light tracking-[0.3em] text-xl uppercase italic">
              Jaipur, Rajasthan
            </p>
          </div>
        </div>
      </CurtainReveal>

      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: isInView ? [1, 1.05, 1] : 1
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="mt-16 w-38 h-38 rounded-full border border-[#c5a059]/20 flex items-center justify-center p-8 text-center text-[#c5a059] text-[10px] uppercase tracking-[0.3em] italic"
      >
        Join us as we<br/>begin our journey
      </motion.div>
    </div>
  );
};

export default Countdown;
