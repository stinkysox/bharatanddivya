
import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FireworkCelebrationProps {
  isActive: boolean;
}

const Particle = ({ color, angle, distance, delay }: { color: string, angle: number, distance: number, delay: number }) => {
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
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        backgroundColor: color,
        boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
      }}
    />
  );
};

const Explosion = ({ x, y, delay }: { x: string; y: string; delay: number }) => {
  const particles = useMemo(() => {
    const colors = ['#c5a059', '#f8f8f8', '#ffd700', '#ffffff'];
    return Array.from({ length: 24 }).map((_, i) => ({
      angle: (360 / 24) * i + Math.random() * 15,
      distance: 80 + Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      style={{ position: 'absolute', left: x, top: y }}
    >
      {particles.map((p, i) => (
        <Particle key={i} {...p} delay={delay} />
      ))}
      <motion.div
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{ scale: 4, opacity: 0 }}
        transition={{ duration: 0.8, delay }}
        style={{
          position: 'absolute',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #c5a059 0%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
    </motion.div>
  );
};

const FireworkCelebration: React.FC<FireworkCelebrationProps> = ({ isActive }) => {
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
        {isActive && bursts.map((burst, i) => (
          <Explosion key={`${i}-${isActive}`} {...burst} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FireworkCelebration;
