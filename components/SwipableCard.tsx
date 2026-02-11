import * as React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';

interface SwipableCardProps {
  src: string;
  index: number;
  onSwipe: () => void;
}

const SwipableCard: React.FC<SwipableCardProps> = ({ src, index, onSwipe }) => {
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
      <div className="relative w-full h-full rounded-[22px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_20px_rgba(197,160,89,0.1)] border border-wedding-accent/40 bg-zinc-900">
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

export default SwipableCard;
