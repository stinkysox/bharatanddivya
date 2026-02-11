import * as React from 'react';
import { motion } from 'framer-motion';
import CurtainReveal from './CurtainReveal';

interface IntroContentProps {
  tagline: string;
  groomName: string;
  brideName: string;
  mainDate: string;
  city: string;
  description: string;
}

const IntroContent: React.FC<IntroContentProps> = ({
  tagline,
  groomName,
  brideName,
  mainDate,
  city,
  description
}) => {
  return (
    <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <p className="text-wedding-accent uppercase tracking-[0.4em] text-xs font-semibold mb-6">
          {tagline}
        </p>

        <h1 className="font-royal text-6xl md:text-8xl italic text-wedding-text mb-8 leading-none">
          {groomName.split(' ')[0]} 
          <span className="text-3xl md:text-5xl align-middle font-light text-wedding-accent/40 block md:inline lg:mx-4">
            &
          </span> 
          {brideName.split(' ')[0]}
        </h1>

        <CurtainReveal>
          <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-8 mb-12">
            <div className="text-left">
              <p className="text-wedding-text/80 font-light tracking-[0.2em] text-lg uppercase">
                {mainDate}
              </p>
              <div className="w-12 h-[1px] bg-wedding-accent mt-2" />
            </div>

            <div className="text-left">
              <p className="text-wedding-text/80 font-light tracking-[0.2em] text-lg uppercase">
                {city}
              </p>
              <div className="w-12 h-[1px] bg-wedding-accent mt-2" />
            </div>
          </div>
        </CurtainReveal>

        <p className="max-w-md text-wedding-text/50 font-light text-lg leading-relaxed mb-8 hidden md:block">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default IntroContent;
