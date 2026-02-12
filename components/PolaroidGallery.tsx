"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import for clean arrows
import FairyLights from "./FairyLights";
import { WEDDING_CONTENT } from "../src/data/weddingContent";

interface PolaroidProps {
  img: any;
  caption: string;
  rotation: number;
  isLit: boolean;
}

/* ================= POLAROID ================= */

const Polaroid: React.FC<PolaroidProps> = ({ img, caption, rotation, isLit }) => {
  return (
    <motion.div
      whileHover={{ rotate: rotation + 2, scale: 1.03, y: -5 }}
      animate={{ y: isLit ? [0, -4, 0] : 0 }}
      transition={{ duration: 6, repeat: Infinity }}
      className="relative flex-shrink-0 bg-[#fbf7f0] p-3 pb-8 shadow-2xl border border-[#e6d5b8]/50 w-64 md:w-72 rounded-sm select-none"
      style={{
        transform: `rotate(${rotation}deg)`,
        filter: isLit
          ? "brightness(1) drop-shadow(0 0 15px rgba(255,255,255,0.05))"
          : "brightness(0.12) grayscale(0.6)",
      }}
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#fff7e8]/60 rotate-1 border border-[#e6d5b8]/30 z-20 backdrop-blur-[2px]" />
      <div className="relative aspect-square overflow-hidden bg-[#ddd] mb-4 pointer-events-none">
        <Image src={img} alt={caption} fill className="object-cover" sizes="288px" />
      </div>
      <p className={`font-royal italic text-center text-xl transition-colors duration-500 ${isLit ? "text-[#5a4a2f]" : "text-[#6d5c3d]/40"}`}>
        {caption}
      </p>
    </motion.div>
  );
};

/* ================= GALLERY SECTION ================= */

const PolaroidGallery: React.FC = () => {
  const [lightsOn, setLightsOn] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { gallery } = WEDDING_CONTENT;

  // Scroll function for the arrow buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust for scroll speed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="relative w-full py-24 transition-colors duration-1000 overflow-hidden"
      style={{ backgroundColor: lightsOn ? "var(--wedding-primary, #061427)" : "#000000" }} // Using primary color for lit state
    >
      {/* Fairy Lights */}
      <div className="absolute top-0 left-0 w-full z-50">
        <FairyLights isOn={lightsOn} onToggle={() => setLightsOn(!lightsOn)} />
      </div>

      {/* Header */}
      <div className="text-center mb-12 mt-28 relative z-10 px-6">
        <motion.span animate={{ opacity: lightsOn ? 1 : 0.3 }} className="text-wedding-accent uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold block mb-4">
          {gallery.tagline}
        </motion.span>
        <motion.h2 animate={{ opacity: lightsOn ? 1 : 0.2, textShadow: lightsOn ? "0 0 25px rgba(197,160,89,0.2)" : "none" }} className="font-royal text-4xl md:text-7xl italic text-wedding-text">
          {gallery.title}
        </motion.h2>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="relative z-10 w-full group px-4 md:px-12">
        
        {/* Desktop Navigation Arrows */}
        <div className="hidden md:block">
          <button 
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/5 border border-wedding-accent/30 text-wedding-accent hover:bg-wedding-accent/10 transition-all active:scale-95"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/5 border border-wedding-accent/30 text-wedding-accent hover:bg-wedding-accent/10 transition-all active:scale-95"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-12 md:gap-20 overflow-x-auto overflow-y-hidden px-8 md:px-[15vw] py-16 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {gallery.images.map((img, idx) => (
            <div key={idx} className="snap-center">
              <Polaroid img={img.url} caption={img.caption} rotation={img.rotation} isLit={lightsOn} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center px-6 transition-opacity duration-700">
        <p className={`text-sm tracking-[0.2em] uppercase font-light ${lightsOn ? 'text-wedding-accent/40' : 'text-wedding-accent/10'}`}>
          {lightsOn ? gallery.footerTextOn : gallery.footerTextOff}
        </p>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default PolaroidGallery;