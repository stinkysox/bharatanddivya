import * as React from "react";
import { motion } from "framer-motion";
import { Map as MapIcon, Plane, Hotel } from "lucide-react";
import Image from "next/image";
import { WEDDING_CONTENT } from "../src/data/weddingContent";

const Destination: React.FC = () => {
  const { location, destination } = WEDDING_CONTENT;

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-wedding-accent uppercase tracking-[0.4em] text-xs font-semibold block mb-4">
              {destination.tagline}
            </span>

            <h2 className="font-royal text-5xl md:text-6xl italic leading-tight mb-8 text-wedding-text">
              {location.venue}
            </h2>

            <p className="text-wedding-text/60 leading-relaxed font-light text-lg">
              {location.description}
            </p>
          </motion.div>

          {/* DETAILS */}
          <div className="space-y-6">
            {/* Hotel */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-wedding-secondary/20 border border-wedding-accent/20 rounded-xl">
                <Hotel size={20} className="text-wedding-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-wedding-text">
                  {destination.accommodation.title}
                </h4>
                <p className="text-sm text-wedding-text/40">
                  {destination.accommodation.description}
                </p>
              </div>
            </div>

            {/* Travel */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-wedding-secondary/20 border border-wedding-accent/20 rounded-xl">
                <Plane size={20} className="text-wedding-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-wedding-text">
                  {destination.travel.title}
                </h4>
                <p className="text-sm text-wedding-text/40">
                  {destination.travel.description}
                </p>
              </div>
            </div>
          </div>

          {/* MAP BUTTON */}
          <motion.a
            href={location.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="
              inline-flex items-center gap-2 px-8 py-4 
              bg-wedding-secondary text-wedding-text
              rounded-full font-semibold uppercase tracking-widest text-xs
              shadow-lg hover:bg-wedding-secondary/90 transition-colors
              border border-wedding-accent/30
            "
          >
            <MapIcon size={16} />
            {location.buttonLabel}
          </motion.a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-[40px] overflow-hidden aspect-[4/5] relative shadow-2xl border border-wedding-accent/10"
          >
            <Image
              src={destination.image}
              fill
              className="object-cover"
              alt="The Venue"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Subtle overlay for luxury look */}
            <div className="absolute inset-0 bg-wedding-secondary/25" />

            {/* Quote Card */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-wedding-secondary/70 backdrop-blur-md rounded-2xl border border-wedding-accent/20">
              <p className="font-royal text-xl italic text-wedding-text/90">
                “{destination.quote}”
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Destination;
