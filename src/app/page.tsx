"use client";

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

import Intro from '../../components/Intro';
import CoupleProfile from '../../components/CoupleProfile';
import PolaroidGallery from '../../components/PolaroidGallery';
import Events from '../../components/Events';
import Countdown from '../../components/Countdown';
import Destination from '../../components/Destination';
import RSVP from '../../components/RSVP';
import InvitedBy from '../../components/InvitedBy';
import FloatingMiniPlayer from '../../components/FloatingMiniPlayer';
import { WEDDING_CONTENT } from '../../src/data/weddingContent';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { dates, couple, footer, intro } = WEDDING_CONTENT;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-wedding-primary via-wedding-contrast to-black text-wedding-text selection:bg-wedding-accent selection:text-black">

      {/* Global audio */}
      <audio ref={audioRef} src="/Kabira.mp3" loop preload="auto" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-wedding-accent to-transparent z-[100] origin-left"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-wedding-primary flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-wedding-accent text-6xl font-royal italic tracking-widest mb-4"
            >
              {couple.groom.monogram} & {couple.bride.monogram}
            </motion.div>

            <div className="w-32 h-[1px] bg-[#d6c2a8]/40 relative overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute inset-0 bg-wedding-accent"
              />
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            <FloatingMiniPlayer isPlaying={isPlaying} onToggle={toggleMusic} />

            {/* INTRO */}
            <section id="intro" className="snap-start min-h-screen flex items-center justify-center bg-wedding-primary">
              <Intro onStart={toggleMusic} isPlaying={isPlaying} />
            </section>

            {/* COUPLE PROFILE */}
            <section id="couple" className="bg-wedding-primary/95">
              <CoupleProfile />
            </section>

            {/* GALLERY */}
            <section id="gallery" className="py-24 overflow-hidden bg-wedding-primary">
              <PolaroidGallery />
            </section>

            {/* EVENTS */}
            <section id="events" className="py-24 bg-wedding-contrast/30 border-y border-wedding-accent/10">
              <Events />
            </section>

            {/* COUNTDOWN */}
            <section id="countdown" className="py-24 bg-gradient-to-b from-wedding-primary to-black/50">
              <Countdown targetDate={dates.countdownTarget} />
            </section>

            {/* DESTINATION */}
            <section id="destination" className="py-24 px-6 bg-wedding-contrast/20">
              <Destination />
            </section>

            {/* RSVP */}
            <section id="rsvp" className="py-24 px-6 flex items-center justify-center bg-wedding-primary/95">
              <RSVP />
            </section>

            {/* INVITED BY */}
            <section id="invited-by" className="py-24 px-6 bg-wedding-primary">
              <InvitedBy />
            </section>

            {/* FOOTER */}
            <footer className="py-12 border-t border-wedding-accent/20 text-center text-wedding-accent font-royal italic text-xl">
              {footer.text}
            </footer>

          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
