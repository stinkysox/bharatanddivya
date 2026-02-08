import * as React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundAmbience: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Animated Mesh Gradients */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-[#2d1e1e] blur-[150px] opacity-20 rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-[#1e2d24] blur-[150px] opacity-20 rounded-full"
      />

      {/* Subtle Grain / Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Floating Bokeh Particles */}
      {isMounted && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
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
