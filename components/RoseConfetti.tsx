"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface RoseConfettiProps {
  isActive: boolean;
}

interface PetalProps {
  delay: number;
}

const Petal: React.FC<PetalProps> = ({ delay }) => {
  const size = useMemo(() => Math.random() * 15 + 10, []);
  const left = useMemo(() => Math.random() * 100, []);
  const duration = useMemo(() => Math.random() * 5 + 5, []);
  const sway = useMemo(() => Math.random() * 100 - 50, []);
  
  // Updated color palette to White and Rose shades
  const color = useMemo(() => {
    const colors = [
      '#FFFFFF', // Pure White
      '#FFF0F3', // Soft Shell White
      '#FFB7C5', // Cherry Blossom Pink
      '#FF4D6D', // Rose Pink
      '#C9184A', // Deep Rose Red
    ]; 
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
        // Added a softer shadow for the white/rose petals
        boxShadow: 'inset -1px -1px 3px rgba(0,0,0,0.1)',
        pointerEvents: 'none',
      }}
    />
  );
};

const RoseConfetti: React.FC<RoseConfettiProps> = ({ isActive }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isActive || !isMounted) return null;

  const count = isMobile ? 12 : 40;

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <Petal key={i} delay={i * (isMobile ? 0.6 : 0.2)} />
      ))}
    </div>
  );
};

export default RoseConfetti;