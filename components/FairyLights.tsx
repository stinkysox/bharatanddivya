"use client";

import { motion } from "framer-motion";
import { WEDDING_CONTENT } from "../src/data/weddingContent";

interface FairyLightsProps {
  isOn: boolean;
  onToggle: () => void;
}

export default function FairyLights({ isOn, onToggle }: FairyLightsProps) {
  const bulbs = Array.from({ length: 12 });
  const { gallery } = WEDDING_CONTENT;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Lights String */}
      <div className="relative flex items-center gap-8">
        {bulbs.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: isOn ? [0.6, 1, 0.6] : 0.2,
              scale: isOn ? [1, 1.15, 1] : 1,
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
            className={`w-3 h-3 rounded-full ${
              isOn ? "bg-wedding-accent" : "bg-zinc-800"
            }`}
            style={{
              boxShadow: isOn
                ? "0 0 10px rgba(197,160,89,0.6)" // Using accent color for glow
                : "none",
            }}
          />
        ))}

        {/* Wire */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-900" />
      </div>

      {/* Classic Switch */}
      <button
        onClick={onToggle}
        className="px-6 py-2 bg-black text-wedding-text font-royal border border-wedding-accent/30 rounded-full hover:bg-zinc-900 transition"
      >
        {isOn ? gallery.lightsOffLabel : gallery.lightsOnLabel}
      </button>
    </div>
  );
}
