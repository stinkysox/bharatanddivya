"use client";

import { motion } from "framer-motion";
import { WEDDING_CONTENT } from "../src/data/weddingContent";

interface FloatingMiniPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const FloatingMiniPlayer: React.FC<FloatingMiniPlayerProps> = ({ isPlaying, onToggle }) => {
  const { couple } = WEDDING_CONTENT;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-6 right-6 z-[100] group"
    >
      {/* Container with dimming logic */}
      <motion.div
        className="relative bg-zinc-900/40 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-2xl transition-all duration-500 hover:bg-zinc-900/80 cursor-pointer opacity-40 group-hover:opacity-100"
        onClick={onToggle}
      >
        {/* Main Disc */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
          <motion.div
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative"
          >
             {/* Grooves */}
             {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-black/30 pointer-events-none"
                  style={{ margin: `${(i + 1) * 4}px` }}
                />
              ))}

              {/* Center Label */}
              <div className="absolute inset-0 m-[30%] rounded-full bg-wedding-accent flex items-center justify-center text-black border-[1px] border-black/20 shadow-sm">
                <span className="font-royal italic text-[6px] md:text-[7px] font-black">{couple.commonMonogram}</span>
              </div>
          </motion.div>
        </div>

        {/* Play/Pause indicator overlay */}
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-wedding-accent flex items-center justify-center border border-black shadow-lg">
           {isPlaying ? (
             <div className="flex gap-0.5">
               <div className="w-0.5 h-1.5 bg-black" />
               <div className="w-0.5 h-1.5 bg-black" />
             </div>
           ) : (
             <div className="ml-0.5 w-0 h-0 border-y-[3px] border-y-transparent border-l-[5px] border-l-black" />
           )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingMiniPlayer;
