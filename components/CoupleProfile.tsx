"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import { WEDDING_CONTENT } from '../src/data/weddingContent';

const CoupleProfile: React.FC = () => {
  const { couple, intro } = WEDDING_CONTENT;

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-transparent">

      {/* Luxury Ambient Glow */}
      <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />

      {/* Decorative Background Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-accent/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-wedding-accent/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-wedding-accent uppercase tracking-[0.4em] text-xs font-semibold block mb-4">
            The Royal Union
          </span>

          <h2 className="font-royal text-6xl md:text-7xl italic text-wedding-text">
            Two Souls, One Journey
          </h2>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-12 md:w-24 h-[1px] bg-wedding-accent/20" />
            <Heart className="text-wedding-accent fill-wedding-accent/10" size={24} />
            <div className="w-12 md:w-24 h-[1px] bg-wedding-accent/20" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 px-4 md:px-0 relative mb-12">

          {/* Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[1px] bg-wedding-accent/10 transform -translate-x-1/2" />

          {/* Groom Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-end text-center lg:text-right"
          >
            <div className="space-y-6 max-w-md">
              <div className="mb-4">
                <span className="text-wedding-accent/70 uppercase tracking-[0.2em] text-[10px] font-bold">
                  The Groom
                </span>
                <h3 className="font-royal text-5xl md:text-6xl italic text-wedding-text mt-2">
                  {couple.groom.fullName}
                </h3>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex flex-col lg:items-end gap-1">
                  <div className="flex items-center gap-2 lg:flex-row-reverse text-wedding-accent">
                    <GraduationCap size={18} />
                    <span className="text-xs uppercase tracking-[0.1em] font-semibold">Education</span>
                  </div>
                  <p className="text-wedding-text/80 text-lg font-light">{couple.groom.education}</p>
                </div>

                <div className="flex flex-col lg:items-end gap-1">
                  <div className="flex items-center gap-2 lg:flex-row-reverse text-wedding-accent">
                    <Briefcase size={18} />
                    <span className="text-xs uppercase tracking-[0.1em] font-semibold">Profession</span>
                  </div>
                  <p className="text-wedding-text/80 text-lg font-light">{couple.groom.profession}</p>
                </div>

                <div className="pt-8 space-y-2">
                  <span className="text-wedding-accent/40 uppercase tracking-[0.2em] text-[10px] block">
                    Son of
                  </span>
                  <p className="font-royal text-2xl text-wedding-text/90 italic">
                    {couple.groom.parents}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bride Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="space-y-6 max-w-md">
              <div className="mb-4">
                <span className="text-wedding-accent/70 uppercase tracking-[0.2em] text-[10px] font-bold">
                  The Bride
                </span>
                <h3 className="font-royal text-5xl md:text-6xl italic text-wedding-text mt-2">
                  {couple.bride.fullName}
                </h3>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex flex-col lg:items-start gap-1">
                  <div className="flex items-center gap-2 text-wedding-accent">
                    <GraduationCap size={18} />
                    <span className="text-xs uppercase tracking-[0.1em] font-semibold">Education</span>
                  </div>
                  <p className="text-wedding-text/80 text-lg font-light">{couple.bride.education}</p>
                </div>

                <div className="flex flex-col lg:items-start gap-1">
                  <div className="flex items-center gap-2 text-wedding-accent">
                    <Briefcase size={18} />
                    <span className="text-xs uppercase tracking-[0.1em] font-semibold">Profession</span>
                  </div>
                  <p className="text-wedding-text/80 text-lg font-light">{couple.bride.profession}</p>
                </div>

                <div className="pt-8 space-y-2">
                  <span className="text-wedding-accent/40 uppercase tracking-[0.2em] text-[10px] block">
                    Daughter of
                  </span>
                  <p className="font-royal text-2xl text-wedding-text/90 italic">
                    {couple.bride.parents}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Divider */}
        <div className="mt-16 mb-12">
          <div className="h-[1px] max-w-md mx-auto bg-wedding-accent/20" />
        </div>

        {/* Animated Lotus Flower */}
        <div className="flex justify-center items-center">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
            }}
            /* Subtle floating and breathing loop */
            animate={{ 
              y: [0, -12, 0],
              scale: [1, 1.05, 1] 
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            src={typeof intro.sections.lotus === 'string' ? intro.sections.lotus : intro.sections.lotus.src} 
            alt="Lotus Flower Decoration" 
            // Updated size here:
            className="w-full h-auto max-w-[180px] md:max-w-[220px] object-contain drop-shadow-2xl opacity-80"
          />
        </div>

      </div>
    </section>
  );
};

export default CoupleProfile;