import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface FireworkCelebrationProps {
  isActive: boolean;
}

const Particle = ({ color, angle, distance, delay, isMobile }: { color: string, angle: number, distance: number, delay: number, isMobile: boolean }) => {
  const radian = (angle * Math.PI) / 180;
  const targetX = Math.cos(radian) * distance;
  const targetY = Math.sin(radian) * distance;

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{
        x: targetX,
        y: targetY,
        opacity: 0,
        scale: 0.5,
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
        delay: delay,
      }}
      style={{
        position: 'absolute',
        width: isMobile ? '3px' : '4px',
        height: isMobile ? '3px' : '4px',
        borderRadius: '50%',
        backgroundColor: color,
        boxShadow: isMobile ? 'none' : `0 0 10px ${color}, 0 0 20px ${color}`,
      }}
    />
  );
};

const Explosion = ({ x, y, delay, isMobile }: { x: string; y: string; delay: number, isMobile: boolean }) => {
  const particles = useMemo(() => {
    const colors = ['#c5a059', '#f8f8f8', '#ffd700', '#ffffff'];
    const count = isMobile ? 8 : 24;
    return Array.from({ length: count }).map((_, i) => ({
      angle: (360 / count) * i + Math.random() * 15,
      distance: 80 + Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [isMobile]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      style={{ position: 'absolute', left: x, top: y }}
    >
      {particles.map((p, i) => (
        <Particle key={i} {...p} delay={delay} isMobile={isMobile} />
      ))}
      <motion.div
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{ scale: isMobile ? 2 : 4, opacity: 0 }}
        transition={{ duration: 0.8, delay }}
        style={{
          position: 'absolute',
          left: isMobile ? -10 : -20,
          top: isMobile ? -10 : -20,
          width: isMobile ? 20 : 40,
          height: isMobile ? 20 : 40,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #c5a059 0%, transparent 70%)',
          filter: isMobile ? 'blur(5px)' : 'blur(10px)',
        }}
      />
    </motion.div>
  );
};

const FireworkCelebration: React.FC<FireworkCelebrationProps> = ({ isActive }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const bursts = useMemo(() => [
    { x: '15%', y: '20%', delay: 0 },
    { x: '85%', y: '15%', delay: 0.5 },
    { x: '50%', y: '40%', delay: 1.2 },
    { x: '25%', y: '70%', delay: 1.8 },
    { x: '75%', y: '65%', delay: 2.3 },
  ], []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence>
        {isMounted && isActive && bursts.map((burst, i) => (
          <Explosion key={`${i}-${isActive}`} {...burst} isMobile={isMobile} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FireworkCelebration;
