
import * as React from 'react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  const storyPoints = [
    {
      year: "2018",
      title: "The First Glance",
      desc: "An unexpected meeting in the rain-kissed streets of London that changed everything.",
      img: "https://picsum.photos/seed/wedding1/800/1000"
    },
    {
      year: "2021",
      title: "Shared Dreams",
      desc: "Through laughter and challenges, we built a world made of mutual dreams and stardust.",
      img: "https://picsum.photos/seed/wedding2/800/1000"
    },
    {
      year: "2024",
      title: "The Question",
      desc: "Under the Jaipur sky, amidst 1,000 glowing lanterns, the answer was a whispered 'Yes'.",
      img: "https://picsum.photos/seed/wedding3/800/1000"
    }
  ];

  return (
    <div className="space-y-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-[#c5a059] font-royal text-5xl md:text-6xl mb-4 italic">Our Chapter One</h2>
        <div className="w-24 h-[1px] bg-[#c5a059] mx-auto opacity-40" />
      </motion.div>

      {storyPoints.map((point, index) => (
        <div 
          key={index} 
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
        >
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 w-full"
          >
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/5] shadow-2xl">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 10 }}
                src={point.img}
                alt={point.title}
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60" />
              <div className="absolute top-8 right-8 text-[#c5a059] font-royal text-4xl italic opacity-50">
                {point.year}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <span className="text-[#c5a059] uppercase tracking-[0.4em] text-xs font-semibold mb-2 block">
              The Journey
            </span>
            <h3 className="font-royal text-4xl md:text-5xl text-[#f8f8f8] mb-6 italic">
              {point.title}
            </h3>
            <p className="text-[#f8f8f8]/60 text-lg leading-relaxed max-w-md font-light">
              {point.desc}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Story;
