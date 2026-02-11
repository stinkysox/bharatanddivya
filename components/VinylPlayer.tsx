"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { WEDDING_CONTENT } from "../src/data/weddingContent";

interface VinylPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const VinylPlayer: React.FC<VinylPlayerProps> = ({ isPlaying, onToggle }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { couple, intro } = WEDDING_CONTENT;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Main Player Unit */}
      <div className="relative w-64 md:w-72 aspect-square bg-zinc-900 rounded-[24px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-4 md:p-5 flex items-center justify-center border-t border-white/5 group transition-all duration-700">
        
        {/* Case Detail */}
        <div className="absolute inset-0 rounded-[24px] border-[6px] border-zinc-800 pointer-events-none" />

        {/* Platter */}
        <div className="relative w-full h-full rounded-full bg-black flex items-center justify-center overflow-visible shadow-inner">
          
          {/* Vinyl Record */}
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="relative w-[94%] h-[94%] rounded-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 cursor-pointer"
            onClick={onToggle}
          >
            {/* Groove Rings */}
            {[...Array(isMobile ? 6 : 8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-black/40 pointer-events-none"
                style={{ margin: `${i * (isMobile ? 12 : 10)}px` }}
              />
            ))}

            {/* Label */}
            <div className="absolute inset-0 m-[32%] rounded-full bg-wedding-accent flex flex-col items-center justify-center text-black border-2 border-black/20 shadow-lg">
              <span className="font-royal italic text-[8px] md:text-[9px] font-bold tracking-widest">{couple.commonMonogram}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-black/90 mt-1" />
            </div>
          </motion.div>

          {/* Tonearm */}
          <div className="absolute top-0 right-[-3%] h-[75%] pointer-events-none">
            <motion.div
              animate={{ rotate: isPlaying ? 22 : 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              style={{ transformOrigin: "top center" }}
            >
              <div className="w-7 h-7 rounded-full bg-zinc-800 border-4 border-black" />
              <div className="w-1 h-32 md:h-40 bg-gradient-to-b from-zinc-500 to-zinc-800 rounded-full mx-auto -mt-2 shadow-2xl" />
              <div className="w-2.5 h-4 bg-black absolute bottom-0 left-1/2 -translate-x-1/2 rounded-sm translate-y-1/2 shadow-lg" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Visual Hue / Tap to Play (Below Player) */}
      <div className="flex flex-col items-center gap-3">
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.button
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              onClick={onToggle}
              className="flex items-center gap-3 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
            >
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"
              />
              <span className="text-[10px] text-wedding-accent font-bold tracking-[0.3em] uppercase">{intro.playLabel}</span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center"
            >
               <span className="text-[10px] text-white/40 tracking-[0.5em] uppercase font-light">{intro.nowPlayingLabel}</span>
               <span className="text-wedding-accent italic font-royal text-sm mt-1">{intro.songTitle}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VinylPlayer;