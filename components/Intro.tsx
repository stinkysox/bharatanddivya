import * as React from 'react';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import VinylPlayer from './VinylPlayer';

interface IntroProps {
  onStart: () => void;
  isPlaying: boolean;
}

const STACK_IMAGES = [
  "https://i.pinimg.com/736x/c9/e9/7d/c9e97d9fcf62d460f5331573ecaac715.jpg",
  "https://i.pinimg.com/736x/5e/5c/7e/5e5c7e1f1a5a5a5a5a5a5a5a5a5a5a5a.jpg",
  "https://i.pinimg.com/736x/a1/b2/c3/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6.jpg",
  "https://i.pinimg.com/736x/f1/e2/d3/f1e2d3c4b5a697887766554433221100.jpg",
  "https://i.pinimg.com/736x/01/02/03/01020304050607080910111213141516.jpg"
];

// Fallback images if Pinterest links are broken/rate-limited
const FALLBACK_IMAGES = [
   "https://i.pinimg.com/736x/75/48/ef/7548efc7f37868a665b2855cf290688d.jpg",
      "https://i.pinimg.com/736x/1d/16/1b/1d161bf166f6ecc070404b0c715d6294.jpg",
      "https://i.pinimg.com/736x/44/fd/05/44fd0505b0960bbca7e1bac93eb110ff.jpg",
      "https://i.pinimg.com/1200x/01/6a/ce/016acee3a979c9efe029f5b1c96d90e9.jpg",
];

const SwipableCard = ({ src, index, onSwipe }: { src: string, index: number, onSwipe: () => void }) => {
  const x = useMotionValue(0);
  const rotateValue = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (_: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      onSwipe();
    }
  };

  const isTop = index === 0;
  
  // Create a fanned effect for underlying cards
  const fannedRotate = (index % 2 === 0 ? 4 : -4) * index;
  const fannedScale = 1 - index * 0.08;
  const fannedY = index * 20;

  return (
    <motion.div
      style={{ 
        x, 
        rotate: isTop ? rotateValue : fannedRotate, 
        opacity, 
        zIndex: 10 - index,
        scale: isTop ? 1 : fannedScale,
        y: isTop ? 0 : fannedY
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileTap={isTop ? { scale: 1.02, rotate: 0 } : {}}
      animate={isTop ? {
        rotate: [0, 1.5, 0, -1.5, 0],
      } : {
        rotate: fannedRotate,
        scale: fannedScale,
        y: fannedY
      }}
      transition={{
        rotate: isTop ? {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        } : { duration: 0.5 },
        scale: { duration: 0.5 },
        y: { duration: 0.5 }
      }}
      className={`absolute inset-0 ${isTop ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}`}
    >
      <div className="relative w-full h-full rounded-[22px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_20px_rgba(197,160,89,0.1)] border border-[#c5a059]/40 bg-zinc-900">
        <Image
          src={src}
          alt={`Wedding Moment`}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 260px, (max-width: 1024px) 320px, 380px"
          priority={isTop}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
      </div>
    </motion.div>
  );
};

const Intro: React.FC<IntroProps> = ({ onStart, isPlaying }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = useMemo(() => {
    const images = [];
    for (let i = 0; i < 3; i++) {
        images.push({
            src: FALLBACK_IMAGES[(currentIndex + i) % FALLBACK_IMAGES.length],
            id: (currentIndex + i) % FALLBACK_IMAGES.length
        });
    }
    return images;
  }, [currentIndex]);

  const handleSwipe = () => {
    setCurrentIndex((prev) => (prev + 1) % FALLBACK_IMAGES.length);
  };

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
                        onSwipe={handleSwipe}
                    />
                ))}
            </AnimatePresence>
          </div>

          {/* Mobile Swipe Cue */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex lg:hidden items-center gap-2 text-[#c5a059]"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-center">Swipe to explore</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={14} />
            </motion.div>
          </motion.div>
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

