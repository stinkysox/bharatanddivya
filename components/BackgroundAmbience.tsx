import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const BackgroundAmbience: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Animated Mesh Gradients */}
      <motion.div
        animate={isMobile ? {} : {
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-[#2d1e1e] blur-[100px] md:blur-[150px] opacity-10 md:opacity-20 rounded-full"
      />
      <motion.div
        animate={isMobile ? {} : {
          x: [0, -50, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-[#1e2d24] blur-[100px] md:blur-[150px] opacity-10 md:opacity-20 rounded-full"
      />

      {/* Subtle Grain / Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Floating Bokeh Particles - Only on Desktop */}
      {isMounted && !isMobile && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000) 
          }}
          animate={{
            y: [null, -100 - Math.random() * 200],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10
          }}
          className="absolute w-1 h-1 bg-[#c5a059] rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export default BackgroundAmbience;
