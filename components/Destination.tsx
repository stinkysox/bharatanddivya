
import * as React from 'react';
import { motion } from 'framer-motion';
import { Map as MapIcon, Plane, Hotel } from 'lucide-react';
import Image from 'next/image';
import { WEDDING_CONTENT } from '../src/data/weddingContent';

const Destination: React.FC = () => {
  const { location, destination } = WEDDING_CONTENT;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-[#c5a059] uppercase tracking-[0.4em] text-xs font-semibold block mb-4">The Venue</span>
            <h2 className="font-royal text-5xl md:text-6xl italic leading-tight mb-8">{location.venue}</h2>
            <p className="text-[#f8f8f8]/60 leading-relaxed font-light text-lg">
              {location.description}
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl">
                <Hotel size={20} className="text-[#c5a059]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#f8f8f8]">{destination.accommodation.title}</h4>
                <p className="text-sm text-[#f8f8f8]/40">{destination.accommodation.description}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-xl">
                <Plane size={20} className="text-[#c5a059]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#f8f8f8]">{destination.travel.title}</h4>
                <p className="text-sm text-[#f8f8f8]/40">{destination.travel.description}</p>
              </div>
            </div>
          </div>

          <motion.a
            href={location.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c5a059] text-black rounded-full font-bold uppercase tracking-widest text-xs cursor-pointer"
          >
            <MapIcon size={16} />
            Map & Directions
          </motion.a>
        </div>

        <div className="flex-1 relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-[40px] overflow-hidden aspect-[4/5] relative shadow-2xl"
          >
            <Image 
              src={destination.image} 
              fill
              className="object-cover opacity-80"
              alt="The Venue"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <p className="font-royal text-xl italic text-white/90">"{destination.quote}"</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
