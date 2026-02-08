import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CurtainRevealProps {
  children: React.ReactNode;
  className?: string;
}

const CurtainReveal: React.FC<CurtainRevealProps> = ({ children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`relative cursor-pointer group ${className}`}
      onClick={() => setIsOpen(true)}
    >
      {/* Content behind curtains */}
      <div className={isOpen ? "opacity-100 transition-opacity duration-1000 delay-300" : "opacity-0"}>
        {children}
      </div>

      {/* Curtain Panels */}
      <AnimatePresence>
        {!isOpen && (
          <>
            {/* Sliding Panels Container - Overflow Hidden */}
            <div className="absolute inset-0 z-20 flex overflow-hidden pointer-events-none">
              {/* Left Curtain - Custom Deep Red */}
              <motion.div
                initial={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
                className="flex-1 bg-[#72383D] border-r border-[#c5a059]/30 relative shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
              </motion.div>

              {/* Right Curtain - Custom Deep Red */}
              <motion.div
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
                className="flex-1 bg-[#72383D] border-l border-[#c5a059]/30 relative shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
              </motion.div>
            </div>

            {/* Premium Thread & Wax Seal Container - Outside Overflow Hidden to show Cue */}
            <motion.div
              exit={{ scale: 0, opacity: 0, rotate: -20, y: 50 }}
              transition={{ duration: 0.8, ease: "backIn" }}
              className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
            >
              <div className="relative flex items-center justify-center w-full h-full">
                
                {/* Wax Seal (Stamp) - Solid & Premium */}
                <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                   {/* Seal Base */}
                   <div className="absolute inset-0 bg-[#c5a059] rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.6)] border border-[#b38f4d]/50">
                      <div className="absolute inset-0 bg-black/5" />
                   </div>
                   
                   {/* Monogram in Seal */}
                   <div className="relative z-20 w-10 h-10 rounded-full border border-[#b38f4d]/60 flex items-center justify-center shadow-inner bg-[#b38f4d]/10">
                      <span className="font-royal text-[#72383D] text-2xl italic font-bold select-none drop-shadow-sm">AS</span>
                   </div>

                   {/* Drips / Organic Edge */}
                   <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#c5a059] rounded-full" />
                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#c5a059] rounded-full" />
                </div>

                {/* Simple "Tap to Reveal" Cue */}
                <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[#c5a059]/80 text-sm tracking-[0.3em] uppercase whitespace-nowrap">
                  Tap to Reveal
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurtainReveal;
