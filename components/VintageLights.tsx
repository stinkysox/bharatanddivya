import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface VintageLightsProps {
  isOn: boolean;
  onToggle: () => void;
}

const VintageLights: React.FC<VintageLightsProps> = ({ isOn, onToggle }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const bulbCount = isMobile ? 10 : 20;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Retro Christmas/Party colors
  const colors = [
    { off: '#4a1a1a', on: '#ff595e', glow: '#ff595e' }, // Red
    { off: '#4a3b1a', on: '#ffca3a', glow: '#ffca3a' }, // Yellow
    { off: '#1a3b1a', on: '#8ac926', glow: '#8ac926' }, // Green
    { off: '#1a2a3b', on: '#1982c4', glow: '#1982c4' }, // Blue
    { off: '#301a3b', on: '#6a4c93', glow: '#ce9aff' }, // Purple
  ];

  return (
    <div className="relative w-full h-28 flex items-start justify-center overflow-visible select-none z-40">
      {/* The wire */}
      <svg className="absolute top-0 w-full h-16 pointer-events-none" preserveAspectRatio="none">
        <path
          d="M 0 0 Q 50 20 100 0 T 200 0 Q 250 20 300 0 T 400 0 Q 450 20 500 0 T 600 0 Q 650 20 700 0 T 800 0 Q 850 20 900 0 T 1000 0 Q 1050 20 1100 0 T 1200 0"
          stroke="#262626"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* The Bulbs */}
      <div className="absolute top-0 w-full flex justify-between px-[2%] pointer-events-none">
        {[...Array(bulbCount)].map((_, i) => {
          const colorSet = colors[i % colors.length];
          return (
            <div 
              key={i} 
              className="relative flex flex-col items-center" 
              style={{ marginTop: i % 2 === 0 ? '4px' : '16px' }}
            >
              {/* Socket */}
              <div className="w-2 h-2.5 bg-[#1a1a1a] rounded-sm shadow-sm z-10" />
              
              {/* Bulb */}
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isOn ? colorSet.on : colorSet.off,
                  boxShadow: isOn && !isMobile
                    ? `0 0 10px ${colorSet.glow}, 0 0 20px ${colorSet.glow}` 
                    : 'none',
                  opacity: isOn ? 1 : 0.6,
                }}
                transition={{
                  duration: 0.5,
                  delay: isMounted ? Math.random() * 0.2 : 0, // Solid guard for random delay
                }}
                className="w-4 h-5 relative"
                style={{
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  marginTop: '-2px',
                }}
              >
                {/* Filament Reflection (subtle) */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-white opacity-30 rounded-full" />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* The Pull Switch Mechanism */}
      {/* Positioned safely on the right for mobile, slightly inwards for desktop */}
      <div className="absolute right-8 md:right-[15%] top-0 flex flex-col items-center">
        {/* Connection point on wire */}
        <div className="w-3 h-3 bg-[#111] rounded-full -mt-1.5 relative z-20" />
        
        <motion.div
          className="cursor-pointer relative z-50 flex flex-col items-center group"
          // Bouncy jolt animation when lights are off
          animate={!isOn ? { y: [0, 15, 0, 8, 0] } : { y: 0 }}
          transition={!isOn ? {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.8,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 1] 
          } : {}}
          whileTap={{ y: 60, transition: { type: "spring", stiffness: 500, damping: 15 } }}
          whileHover={{ scale: 1.1 }}
          onClick={onToggle}
        >
          {/* The String */}
          <div className="w-0.5 h-16 md:h-20 bg-gradient-to-b from-[#333] to-[#777] group-hover:bg-[#999] transition-colors" />
          
          {/* The Handle */}
          <div className="w-6 h-8 md:w-5 md:h-10 rounded-full bg-[#c5a059] shadow-[0_4px_10px_rgba(0,0,0,0.5)] border border-[#8a6e36] flex items-center justify-center relative -mt-1 group-hover:brightness-110 transition-all">
             <div className="w-4 h-0.5 bg-[#8a6e36]/50 absolute top-2" />
             <div className="w-4 h-0.5 bg-[#8a6e36]/50 absolute top-4" />
             <div className="w-4 h-0.5 bg-[#8a6e36]/50 absolute top-6" />
          </div>
        </motion.div>
        
        {/* "Pull / Press" Hint */}
        {isMounted && <AnimatePresence>
          {!isOn && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: -75 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute top-20 right-0 whitespace-nowrap pointer-events-none flex items-center justify-end"
            >
              <span className="text-white/80 text-xs md:text-sm tracking-widest font-sans uppercase font-bold drop-shadow-lg mr-2">
                Tap Me
              </span>
              {/* Arrow pointing to the switch (Right) */}
              <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>}
      </div>
    </div>
  );
};

export default VintageLights;