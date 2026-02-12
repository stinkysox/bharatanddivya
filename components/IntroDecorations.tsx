import * as React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface IntroDecorationsProps {
  monogram: string;
  topLeftImage?: any;
  scrollLabel: string;
}

const IntroDecorations: React.FC<IntroDecorationsProps> = ({
  monogram,
  topLeftImage,
  scrollLabel
}) => {
  return (
    <>
      {/* Background Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[40vw] font-royal italic text-wedding-accent select-none">
          {monogram}
        </span>
      </motion.div>

      {/* Top Left Decoration */}
      {topLeftImage && (
        <motion.div
          initial={{ opacity: 0, x: -20, y: -20 }}
          animate={{ opacity: 0.8, x: 0, y: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute -top-10 -left-10 md:-top-20 md:-left-20 lg:-top-32 lg:-left-32 w-40 md:w-64 lg:w-80 pointer-events-none z-0 opacity-60 rotate-[-6deg]"
        >
          <img 
            src={typeof topLeftImage === 'string' ? topLeftImage : topLeftImage?.src} 
            alt="" 
            className="w-full h-auto"
          />
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-wedding-accent/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{scrollLabel}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default IntroDecorations;
