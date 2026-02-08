import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface RoseConfettiProps {
  isActive: boolean;
}

// Added interface for Petal props
interface PetalProps {
  delay: number;
}

// Fix: Using React.FC to handle React-intrinsic props like 'key' correctly during mapping
const Petal: React.FC<PetalProps> = ({ delay }) => {
  const size = useMemo(() => Math.random() * 15 + 10, []);
  const left = useMemo(() => Math.random() * 100, []);
  const duration = useMemo(() => Math.random() * 5 + 5, []);
  const sway = useMemo(() => Math.random() * 100 - 50, []);
  const color = useMemo(() => {
    const colors = ['#8b0000', '#b22222', '#dc143c', '#ff69b4', '#db7093'];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  return (
    <motion.div
      initial={{ y: -20, x: `${left}vw`, opacity: 0, rotate: 0 }}
      animate={{
        y: '110vh',
        x: `${left + sway / 10}vw`,
        opacity: [0, 0.8, 0.8, 0],
        rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: 'linear',
      }}
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 50,
        width: size,
        height: size * 0.8,
        backgroundColor: color,
        borderRadius: '50% 0 50% 50%',
        boxShadow: 'inset -2px -2px 5px rgba(0,0,0,0.2)',
        pointerEvents: 'none',
      }}
    />
  );
};

const RoseConfetti: React.FC<RoseConfettiProps> = ({ isActive }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isActive || !isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <Petal key={i} delay={i * 0.2} />
      ))}
    </div>
  );
};

export default RoseConfetti;
