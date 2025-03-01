"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Sample event images - in a real app, these would come from your data source
const topRowImages = [
  "new-look/mem.jpeg",
  "new-look/mem1.jpeg",
  "new-look/mem2.jpeg",
  "new-look/mem3.jpeg",
  "new-look/mem4.jpeg",
  "new-look/mem5.jpeg",
];

const bottomRowImages = [
  "new-look/mem6.jpeg",
  "new-look/mem7.jpeg",
  "new-look/mem8.jpeg",
  "new-look/mem9.jpeg",
  "new-look/mem10.jpeg",
  "new-look/mem11.jpeg",
];

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile for responsive adjustments
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
//   text-[#ECB22E] text-[#c52f2f]
  return (
    <div className="overflow-hidden py-10 bg-gradient-to-r from-[#4bacc9] to-[#2d8ca2]">
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-center text-white uppercase mb-6 font-futura"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Swiftie Memories
      </motion.h2>

      {/* Top Row - Left to Right */}
      <div className="relative w-full overflow-hidden mb-4">
        <motion.div
          className="flex space-x-4 w-max"
          initial={{ x: isMobile ? 0 : "-20%" }}
          animate={{ x: isMobile ? "-100%" : "0%" }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {/* Duplicate images to create seamless loop */}
          {[...topRowImages, ...topRowImages].map((img, index) => (
            <motion.div
              key={`top-${index}`}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt={`Event ${index + 1}`}
                className="w-64 h-40 sm:w-72 sm:h-48 object-cover rounded-lg shadow-lg border-2 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                {/* <p className="text-white p-2 text-sm font-sans">Event {(index % topRowImages.length) + 1}</p> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Row - Right to Left */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-4 w-max"
          initial={{ x: isMobile ? "-100%" : "0%" }}
          animate={{ x: isMobile ? "0%" : "-100%" }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {/* Duplicate images to create seamless loop */}
          {[...bottomRowImages, ...bottomRowImages].map((img, index) => (
            <motion.div
              key={`bottom-${index}`}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt={`Memory ${index + 1}`}
                className="w-64 h-40 sm:w-72 sm:h-48 object-cover rounded-lg shadow-lg border-2 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                {/* x <p className="text-white p-2 text-sm font-sans">Memory {(index % bottomRowImages.length) + 1}</p> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
