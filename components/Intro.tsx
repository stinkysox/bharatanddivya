import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import VinylPlayer from './VinylPlayer';
import IntroContent from './IntroContent';
import IntroPhotoStack from './IntroPhotoStack';
import IntroDecorations from './IntroDecorations';
import { WEDDING_CONTENT } from '../src/data/weddingContent';

interface IntroProps {
  onStart: () => void;
  isPlaying: boolean;
}

const Intro: React.FC<IntroProps> = ({ onStart, isPlaying }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { dates, location, intro, couple } = WEDDING_CONTENT;

  const handleSwipe = () => {
    setCurrentIndex((prev) => (prev + 1) % intro.stackImages.length);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-20 overflow-hidden">
      
      <IntroDecorations 
        monogram={couple.commonMonogram}
        topLeftImage={intro.decorations?.topLeft}
        scrollLabel={intro.scrollLabel}
      />

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        <IntroContent 
          tagline={intro.tagline}
          groomName={couple.groom.name}
          brideName={couple.bride.name}
          mainDate={dates.mainDate}
          city={location.city}
          description={intro.description}
        />

        <IntroPhotoStack 
          stackImages={intro.stackImages}
          currentIndex={currentIndex}
          onSwipe={handleSwipe}
          swipeLabel={intro.swipeLabel}
        />

        {/* Right Side: Vinyl Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          className="flex-1 w-full max-w-md order-1 lg:order-3"
        >
          <div className="transform lg:scale-105">
            <VinylPlayer isPlaying={isPlaying} onToggle={onStart} />
          </div>
        </motion.div>
      </div>

      {/* Responsive & Animated Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mt-12 w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg px-4"
      >
        <img 
          src={typeof intro.decorations?.bottomPortrait === 'string' ? intro.decorations.bottomPortrait : intro.decorations?.bottomPortrait?.src} 
          alt="Elephant Decoration" 
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default Intro;