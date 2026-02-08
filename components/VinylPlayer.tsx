import { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from '../hooks/useMediaQuery';

interface VinylPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const VinylPlayer: React.FC<VinylPlayerProps> = ({ isPlaying, onToggle }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="relative w-full aspect-square bg-[#1a1a1a] rounded-[30px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] p-6 md:p-10 flex items-center justify-center border-t border-[#ffffff]/10 group transition-all duration-700 hover:shadow-[0_60px_100px_-20px_rgba(197,160,89,0.15)]">

      {/* Wooden Case Detail */}
      <div className="absolute inset-0 rounded-[30px] border-[10px] border-[#222] pointer-events-none" />

      {/* Turntable Platter */}
      <div className="relative w-full h-full rounded-full bg-[#111] shadow-inner flex items-center justify-center overflow-visible">

        {/* Vinyl Record */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="relative w-[92%] h-[92%] rounded-full bg-gradient-to-br from-[#0c0c0c] via-[#1a1a1a] to-[#0c0c0c] cursor-pointer"
          onClick={onToggle}
        >
          {/* Groove Rings */}
          {[...Array(isMobile ? 6 : 12)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-black/40 pointer-events-none"
              style={{ margin: `${i * (isMobile ? 24 : 12)}px` }}
            />
          ))}

          {/* Record Label */}
          <div className="absolute inset-0 m-[36%] rounded-full bg-[#c5a059] flex flex-col items-center justify-center text-black text-center border-4 border-black/20 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
            <span className="relative font-royal italic text-[10px] font-bold tracking-widest">
              A & S
            </span>
            <div className="relative w-3 h-3 rounded-full bg-black/90 mt-1" />
          </div>
        </motion.div>

        {/* Tonearm */}
        <div className="absolute top-0 right-[-10%] h-[80%] flex flex-col items-center pointer-events-none">
          <motion.div
            initial={false}
            animate={{ rotate: isPlaying ? 24 : 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            style={{ transformOrigin: "top center" }}
            className="relative"
          >
            <div className="w-10 h-10 rounded-full bg-[#333] border-4 border-[#111] shadow-lg" />
            <div className="w-1.5 h-48 md:h-64 bg-gradient-to-b from-[#777] via-[#444] to-[#222] rounded-full mx-auto -mt-2 shadow-2xl" />
            <div className="w-3 md:w-4 h-6 md:h-8 bg-[#111] absolute bottom-0 left-1/2 -translate-x-1/2 rounded-sm transform translate-y-1/2 shadow-lg">
              <div className="w-[1px] h-3 bg-[#c5a059] mx-auto mt-4 opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button
          onClick={onToggle}
          className="w-10 h-10 rounded-full bg-[#111] border border-[#3d3428]/50 flex items-center justify-center hover:bg-[#c5a059] group transition-all duration-500 shadow-lg"
        >
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              isPlaying ? "bg-[#c5a059]" : "bg-red-500"
            } group-hover:bg-white transition-colors duration-500`}
          />
        </button>

        <div className="text-[#c5a059] font-royal italic text-[11px] uppercase tracking-[0.4em] whitespace-nowrap opacity-60">
          {isPlaying ? "Now Playing: Kabira" : "Click to Play"}
        </div>
      </div>
    </div>
  );
};

export default VinylPlayer;