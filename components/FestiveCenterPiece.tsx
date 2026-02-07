import React from 'react';
import { motion } from 'framer-motion';

const MarigoldGarland: React.FC<{ delay?: number; className?: string }> = ({ delay = 0, className }) => {
  // Create a string of flowers
  const flowers = Array.from({ length: 16 }); // Longer garlands
  return (
    <motion.div 
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, type: "spring", stiffness: 50 }}
      className={`absolute top-0 flex flex-col items-center origin-top ${className}`}
    >
      {flowers.map((_, i) => (
        <div 
          key={i}
          className={`w-7 h-7 rounded-full -mt-2.5 shadow-sm border border-orange-900/10 ${i % 2 === 0 ? 'bg-[#FF9933]' : 'bg-[#FFCC00]'}`}
          style={{ 
            zIndex: 20 - i,
            transform: `rotate(${Math.sin(i * 1.5) * 15}deg)`
          }}
        />
      ))}
      {/* Decorative Bell/Tassel at the end */}
      <div className="w-6 h-8 -mt-2 bg-gradient-to-b from-[#DAA520] to-[#8B4513] rounded-b-full shadow-md z-0 flex items-center justify-center relative">
         <div className="absolute bottom-0 w-2 h-2 bg-yellow-200 rounded-full animate-ping opacity-50" />
      </div>
    </motion.div>
  );
};

const DholakIcon = () => (
  <svg viewBox="0 0 200 140" className="w-64 h-48 drop-shadow-2xl">
    {/* Drum Body Shadow */}
    <ellipse cx="100" cy="115" rx="75" ry="15" fill="black" opacity="0.4" filter="blur(4px)" />
    
    {/* Main Barrel */}
    <path d="M40 30 Q100 5 160 30 L160 100 Q100 125 40 100 Z" fill="#5D4037" />
    <path d="M40 30 Q100 5 160 30 L160 100 Q100 125 40 100 Z" fill="url(#woodGradient)" />
    
    {/* Ropes (Lacing) - Intricate Pattern */}
    <g stroke="#FFE0B2" strokeWidth="2.5" strokeLinecap="round">
      <line x1="45" y1="35" x2="155" y2="95" opacity="0.9" />
      <line x1="55" y1="32" x2="145" y2="98" opacity="0.9" />
      <line x1="65" y1="30" x2="135" y2="100" opacity="0.9" />
      <line x1="75" y1="28" x2="125" y2="101" opacity="0.9" />
      <line x1="85" y1="27" x2="115" y2="101" opacity="0.9" />
      
      <line x1="45" y1="95" x2="155" y2="35" opacity="0.9" />
      <line x1="55" y1="98" x2="145" y2="32" opacity="0.9" />
      <line x1="65" y1="100" x2="135" y2="30" opacity="0.9" />
      <line x1="75" y1="101" x2="125" y2="28" opacity="0.9" />
      <line x1="85" y1="101" x2="115" y2="27" opacity="0.9" />
    </g>

    {/* Tuning Rings */}
    <circle cx="80" cy="65" r="5" fill="#FFD700" stroke="#B8860B" strokeWidth="1" />
    <circle cx="120" cy="65" r="5" fill="#FFD700" stroke="#B8860B" strokeWidth="1" />

    {/* Left Head (Base) - Larger */}
    <ellipse cx="40" cy="65" rx="18" ry="40" fill="#3E2723" stroke="#8D6E63" strokeWidth="3" />
    <ellipse cx="40" cy="65" rx="10" ry="25" fill="#212121" opacity="0.7" />

    {/* Right Head (Treble) - Smaller look */}
    <ellipse cx="160" cy="65" rx="18" ry="40" fill="#D7CCC8" stroke="#8D6E63" strokeWidth="3" />
    <ellipse cx="160" cy="65" rx="10" ry="25" fill="#212121" opacity="0.3" />

    <defs>
      <linearGradient id="woodGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8D6E63" />
        <stop offset="40%" stopColor="#5D4037" />
        <stop offset="100%" stopColor="#3E2723" />
      </linearGradient>
    </defs>
  </svg>
);

const RangoliPattern = () => (
  <svg viewBox="0 0 200 200" className="w-[500px] h-[500px] opacity-30 animate-spin-slow">
    <g stroke="#FF5722" strokeWidth="1.5" fill="none">
      {/* Outer Petals */}
      {[...Array(16)].map((_, i) => (
        <path 
          key={`petal-${i}`}
          d="M100 100 Q130 100 140 70 Q100 40 100 100" 
          transform={`rotate(${i * 22.5} 100 100)`} 
          fill={i % 2 === 0 ? "#FFC107" : "#FF5722"}
          opacity="0.2"
        />
      ))}
      
      {/* Geometric Circles */}
      <circle cx="100" cy="100" r="40" stroke="#FFD700" strokeWidth="2" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="60" stroke="#FF9800" strokeWidth="1" />
      <circle cx="100" cy="100" r="80" stroke="#FF5722" strokeWidth="3" opacity="0.3" />
      
      {/* Inner Star */}
      {[...Array(8)].map((_, i) => (
        <line 
          key={`line-${i}`}
          x1="100" y1="100" x2="100" y2="20"
          transform={`rotate(${i * 45} 100 100)`}
          stroke="#FFEB3B"
        />
      ))}
    </g>
  </svg>
);

const FestiveCenterpiece: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="relative w-full py-24 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-[#0f0f0f] via-[#2a1a10] to-[#0f0f0f]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-orange-500/5 blur-3xl pointer-events-none" />

      {/* Rotating Mandala Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
            <RangoliPattern />
        </motion.div>
      </div>

      {/* Hanging Garlands - Evenly Spaced */}
      <div className="absolute top-0 w-full h-full pointer-events-none z-10">
        <MarigoldGarland className="left-[10%]" delay={0.1} />
        <MarigoldGarland className="left-[25%] h-40" delay={0.3} />
        <MarigoldGarland className="right-[25%] h-40" delay={0.3} />
        <MarigoldGarland className="right-[10%]" delay={0.1} />
      </div>

      {/* Central Section Title */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-20 text-[#FFD700] text-sm uppercase tracking-[0.5em] mb-12 font-semibold drop-shadow-lg"
      >
        Celebration
      </motion.div>

      {/* Central Dholak */}
      <motion.div
        initial={{ scale: 0.8, y: 30, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring",
          stiffness: 120,
          damping: 20,
          delay: 0.2 
        }}
        whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
        className="relative z-20 cursor-pointer"
      >
        <DholakIcon />
        
        {/* Animated Music Notes */}
        <motion.div 
          className="absolute -top-10 -right-8 text-3xl text-[#FFD700]"
          animate={{ y: [-15, -30, -15], opacity: [0, 1, 0], x: [0, 10, 20] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          ♪
        </motion.div>
        <motion.div 
          className="absolute -top-6 -left-8 text-2xl text-[#FF9800]"
          animate={{ y: [-10, -25, -10], opacity: [0, 1, 0], x: [0, -10, -20] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          ♫
        </motion.div>
         <motion.div 
          className="absolute top-0 right-10 text-xl text-[#FF5722]"
          animate={{ y: [-5, -20, -5], opacity: [0, 0.8, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          ✦
        </motion.div>
      </motion.div>

      {/* Bottom Border Decorative Line */}
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-20" />
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-20" />
    </motion.div>
  );
};

export default FestiveCenterpiece;