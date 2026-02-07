
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RoseConfetti from './RoseConfetti';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const Item = ({ val, label }: { val: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <motion.div
          key={val}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-royal text-[#f8f8f8] mb-2"
        >
          {val.toString().padStart(2, '0')}
        </motion.div>
        <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-30" />
      </div>
      <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] mt-4 font-semibold">{label}</span>
    </div>
  );

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto px-6 flex flex-col items-center relative">
      <RoseConfetti isActive={isInView} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-16 text-center"
      >
        <h3 className="font-royal text-3xl italic text-[#f8f8f8]/70">Until the big day</h3>
      </motion.div>
      
      <div className="flex flex-wrap justify-center gap-10 md:gap-20">
        <Item val={timeLeft.days} label="Days" />
        <Item val={timeLeft.hours} label="Hours" />
        <Item val={timeLeft.minutes} label="Minutes" />
        <Item val={timeLeft.seconds} label="Seconds" />
      </div>

      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: isInView ? [1, 1.05, 1] : 1
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="mt-20 w-32 h-32 rounded-full border border-[#c5a059]/20 flex items-center justify-center p-4 text-center text-[#c5a059] text-[9px] uppercase tracking-[0.2em]"
      >
        Save The Date<br/>12 . 12 . 25
      </motion.div>
    </div>
  );
};

export default Countdown;
