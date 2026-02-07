import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VintageLights from './VintageLights';

const images = [
  { url: 'https://picsum.photos/seed/mem1/600/600', caption: 'Summer Breeze', rotation: -3, delay: 0 },
  { url: 'https://picsum.photos/seed/mem2/600/600', caption: 'Midnight City', rotation: 2, delay: 0.1 },
  { url: 'https://picsum.photos/seed/mem3/600/600', caption: 'Coffee Dates', rotation: -4, delay: 0.2 },
  { url: 'https://picsum.photos/seed/mem4/600/600', caption: 'Roadtrip 2023', rotation: 3, delay: 0.3 },
  { url: 'https://picsum.photos/seed/mem5/600/600', caption: 'Forever Us', rotation: -1, delay: 0.4 },
];

interface PolaroidProps {
  img: string;
  caption: string;
  rotation: number;
  delay: number;
  isLit: boolean;
}

const Polaroid: React.FC<PolaroidProps> = ({ img, caption, rotation, delay, isLit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: rotation * 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }}
      className={`
        bg-[#fdfdfd] p-3 pb-8 shadow-2xl border border-gray-100 
        transform-gpu w-64 md:w-72 flex-shrink-0 relative z-10
        transition-all duration-700
      `}
      style={{
        filter: isLit ? 'brightness(1)' : 'brightness(0.4) sepia(0.5)',
      }}
    >
      {/* Tape Effect */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-white/30 rotate-1 backdrop-blur-sm border border-white/20 shadow-sm z-20" />

      <div className="relative aspect-square overflow-hidden bg-gray-50 mb-4 shadow-inner">
        <img 
          src={img} 
          alt={caption} 
          className="object-cover w-full h-full transition-transform duration-700"
          loading="lazy"
        />
        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-white/20 pointer-events-none" />
      </div>
      <p className={`
        font-royal italic text-center text-xl select-none transition-colors duration-500
        ${isLit ? 'text-gray-700' : 'text-gray-500'}
      `}>
        {caption}
      </p>
    </motion.div>
  );
};

const PolaroidGallery: React.FC = () => {
  const [lightsOn, setLightsOn] = useState(false);

  const toggleLights = () => {
    // Add a satisfying click sound here if desired
    setLightsOn(prev => !prev);
  };

  return (
    <div className={`
      relative w-full min-h-screen flex flex-col overflow-x-hidden transition-colors duration-1000
      ${lightsOn ? 'bg-[#1a1a1a]' : 'bg-[#0a0a0a]'}
    `}>
      
      {/* Ambient Background Light Effect */}
      <div 
        className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${lightsOn ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: 'radial-gradient(circle at 50% 10%, rgba(100, 80, 50, 0.15), transparent 70%)'
        }}
      />

      {/* Lights Section */}
      <div className="relative w-full z-50 pt-2">
        <VintageLights isOn={lightsOn} onToggle={toggleLights} />
      </div>

      <div className="flex-grow flex flex-col justify-center pb-20 mt-8 relative z-30">
        
        {/* Header Text */}
        <div className="text-center mb-16 px-4">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: lightsOn ? 1 : 0.3 }}
            transition={{ duration: 1 }}
            className="text-[#c5a059] uppercase tracking-[0.4em] text-xs font-semibold block mb-4"
          >
            Memories in Light
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: lightsOn ? 1 : 0.2, 
              y: 0,
              textShadow: lightsOn ? '0 0 30px rgba(255,255,255,0.2)' : 'none'
            }}
            transition={{ duration: 0.8 }}
            className="font-royal text-5xl md:text-7xl italic text-[#f8f8f8]"
          >
            Our Gallery
          </motion.h2>
        </div>

        {/* Gallery Scroll Container */}
        <div className="w-full relative">
          <div className="flex overflow-x-auto pb-16 px-8 md:px-20 gap-8 md:gap-16 scrollbar-hide items-center justify-start md:justify-center">
            {images.map((img, idx) => (
              <Polaroid 
                key={idx} 
                img={img.url} 
                caption={img.caption} 
                rotation={img.rotation} 
                delay={img.delay} 
                isLit={lightsOn}
              />
            ))}
          </div>
          
          {/* Edge Gradients for scrolling */}
          <div className={`absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#121212] to-transparent pointer-events-none z-40 transition-opacity duration-500 ${lightsOn ? 'opacity-0 md:opacity-100' : 'opacity-100'}`} />
          <div className={`absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#121212] to-transparent pointer-events-none z-40 transition-opacity duration-500 ${lightsOn ? 'opacity-0 md:opacity-100' : 'opacity-100'}`} />
        </div>

      </div>

      <div className="pb-8 text-center text-white/10 text-sm font-sans z-10">
        <p>{lightsOn ? "Beautiful moments illuminated" : "Pull the cord to toggle the mood"}</p>
      </div>
    </div>
  );
};

export default PolaroidGallery;