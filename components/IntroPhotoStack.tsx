import * as React from 'react';
import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SwipableCard from './SwipableCard';

interface IntroPhotoStackProps {
  stackImages: string[];
  currentIndex: number;
  onSwipe: () => void;
  swipeLabel: string;
}

const IntroPhotoStack: React.FC<IntroPhotoStackProps> = ({ 
  stackImages, 
  currentIndex, 
  onSwipe,
  swipeLabel
}) => {
  const visibleImages = useMemo(() => {
    const images = [];
    for (let i = 0; i < 3; i++) {
        images.push({
            src: stackImages[(currentIndex + i) % stackImages.length],
            id: (currentIndex + i) % stackImages.length
        });
    }
    return images;
  }, [currentIndex, stackImages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.8 }}
      className="flex-1 flex flex-col items-center justify-center order-3 lg:order-2"
    >
      <div className="relative w-[260px] md:w-[320px] lg:w-[380px] aspect-[3/4] flex items-center justify-center mb-8">
        <AnimatePresence mode="popLayout" initial={false}>
            {visibleImages.map((img, i) => (
                <SwipableCard 
                    key={img.id} 
                    src={img.src} 
                    index={i} 
                    onSwipe={onSwipe}
                />
            ))}
        </AnimatePresence>
      </div>

      {/* Mobile Swipe Cue */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex lg:hidden items-center gap-2 text-wedding-accent"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-center">{swipeLabel}</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight size={14} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default IntroPhotoStack;
