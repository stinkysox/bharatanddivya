import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import VinylPlayer from './VinylPlayer';

interface IntroProps {
  onStart: () => void;
  isPlaying: boolean;
}

const Intro: React.FC<IntroProps> = ({ onStart, isPlaying }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-20 overflow-hidden">
      
      {/* Background Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[40vw] font-royal italic text-[#c5a059] select-none">AS</span>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <p className="text-[#c5a059] uppercase tracking-[0.4em] text-xs font-semibold mb-6">
              You are invited to
            </p>

            <h1 className="font-royal text-6xl md:text-8xl italic text-[#f8f8f8] mb-8 leading-none">
              Arjun 
              <span className="text-3xl md:text-5xl align-middle font-light text-[#c5a059]/40 block md:inline lg:mx-4">
                &
              </span> 
              Sia
            </h1>

            <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-8 mb-12">
              <div className="text-left">
                <p className="text-[#f8f8f8]/80 font-light tracking-[0.2em] text-lg uppercase">
                  12 Dec 2025
                </p>
                <div className="w-12 h-[1px] bg-[#c5a059] mt-2" />
              </div>

              <div className="text-left">
                <p className="text-[#f8f8f8]/80 font-light tracking-[0.2em] text-lg uppercase">
                  Jaipur, India
                </p>
                <div className="w-12 h-[1px] bg-[#c5a059] mt-2" />
              </div>
            </div>

            <p className="max-w-md text-[#f8f8f8]/50 font-light text-lg leading-relaxed mb-8 hidden md:block">
              We are so happy to celebrate our wedding with you. Join us for a weekend of love, laughter, and new beginnings.
            </p>
          </motion.div>
        </div>

        {/* CENTER IMAGE (Luxury Wedding Photo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="flex-1 flex justify-center order-3 lg:order-2"
        >
          <div className="relative w-[260px] md:w-[320px] lg:w-[380px] aspect-[3/4] rounded-[22px] overflow-hidden shadow-[0_40px_90px_-20px_rgba(0,0,0,0.85)] border border-[#c5a059]/30">
            
            {/* Dummy Pinterest Luxury Couple Image */}
            <img
              src="https://i.pinimg.com/736x/c9/e9/7d/c9e97d9fcf62d460f5331573ecaac715.jpg"
              alt="Arjun & Sia"
              className="w-full h-full object-cover"
            />

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          </div>
        </motion.div>

        {/* Right Side: Vinyl Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          className="flex-1 w-full max-w-md order-1 lg:order-3"
        >
          <div className="transform lg:scale-105">
            <VinylPlayer isPlaying={isPlaying} onToggle={onStart} />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-[#3d3428]"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Intro;
