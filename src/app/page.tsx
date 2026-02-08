"use client";

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

import Intro from '../../components/Intro';
import PolaroidGallery from '../../components/PolaroidGallery';
import Events from '../../components/Events';
import Countdown from '../../components/Countdown';
import Destination from '../../components/Destination';
import RSVP from '../../components/RSVP';
import InvitedBy from '../../components/InvitedBy';
import BackgroundAmbience from '../../components/BackgroundAmbience';
import FestiveCenterpiece from '../../components/FestiveCenterPiece';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    <div className="relative min-h-screen bg-[#0c0c0c] text-[#f8f8f8] selection:bg-[#c5a059] selection:text-black">

      {/* ✅ SINGLE global audio source */}
      <audio ref={audioRef} src="/Kabira.mp3" loop preload="auto" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent z-[100] origin-left"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#0c0c0c] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[#c5a059] text-6xl font-royal italic tracking-widest mb-4"
            >
              A & S
            </motion.div>

            <div className="w-32 h-[1px] bg-[#3d3428] relative overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute inset-0 bg-[#c5a059]"
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
            <BackgroundAmbience />

            {/* INTRO */}
            <section id="intro" className="snap-start min-h-screen flex items-center justify-center">
              <Intro onStart={toggleMusic} isPlaying={isPlaying} />
            </section>

            {/* GALLERY */}
            <section id="gallery" className="py-24 overflow-hidden">
              <PolaroidGallery />
            </section>

            {/* EVENTS */}
            <section id="events" className="py-24 bg-[#0a0a0a]">
              <Events />
            </section>

            {/* COUNTDOWN */}
            <section id="countdown" className="py-24 bg-gradient-to-b from-transparent to-[#0a0a0a]">
              <Countdown targetDate="2025-12-12T10:30:00" />
            </section>

            {/* 🎉 FESTIVE CENTERPIECE */}
            <section id="festive-centerpiece" className="py-24 bg-[#0c0c0c]">
              <FestiveCenterpiece />
            </section>

            {/* DESTINATION */}
            <section id="destination" className="py-24 px-6">
              <Destination />
            </section>

            {/* RSVP */}
            <section id="rsvp" className="py-24 px-6 flex items-center justify-center">
              <RSVP />
            </section>

            {/* INVITED BY */}
            <section id="invited-by" className="py-24 px-6">
              <InvitedBy />
            </section>

            {/* FOOTER */}
            <footer className="py-12 border-t border-[#3d3428]/30 text-center text-[#3d3428] font-royal italic text-xl">
              Handcrafted with love for Arjun & Sia
            </footer>

          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
