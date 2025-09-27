"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  {
    title: "Clubs Fair, Fall 2025",
    description: "Join us at the annual Clubs Fair to discover all the exciting clubs and activities Sheridan has to offer!",
    date: "Oct 03, 2025",
    image: "/showgirl/loasg.webp",
  },
  // {
  //   title: "More Events Coming Soon!",
  //   description: "Stay tuned for more exciting events and activities!",
  //   date: "tentative",
  //   image: "new-look/error.png",
  // },
  // {
  //   title: "🎶 Album Listening Session – Join Us!",
  //   description: "Experience Taylor's iconic albums with fellow fans.",
  //   date: "March 20, 2024",
  //   image: "https://via.placeholder.com/600x300?text=Listening+Session",
  // },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? posts.length - 1 : prev - 1));

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative sm:w-full w-96 max-w-2xl mx-auto p-6">
      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, rotate: -2 }}
            animate={{ opacity: 1, rotate: getRandomRotation() }}
            exit={{ opacity: 0, rotate: 2 }}
            transition={{ duration: 0.5 }}
            className="p-4 text-center"
          >
            {/* Polaroid Frame */}
            <div className="bg-black border-2 border-orange-500 p-3 pt-3 pb-14 shadow-xl shadow-orange-500/20 rounded-sm transform rotate-0 mx-auto max-w-sm relative">
              {/* Image */}
              <div className="mb-12 bg-gray-100">
                <img 
                  src={posts[current].image} 
                  alt="Event" 
                  className="w-full h-48 sm:h-56 object-cover" 
                />
              </div>
              
              {/* Content - Styled like a handwritten note */}
              <div className="px-4 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-orange-500 font-sans" 
                    >
                  {posts[current].title}
                </h3>
                <p className="text-xs sm:text-sm mt-1 text-orange-300 font-mono" 
                  >
                  {posts[current].description}
                </p>
                <p className="text-xs mt-2 text-orange-400 italic">
                  {posts[current].date}
                </p>
              </div>
              
              {/* Tape effect at top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-gray-200 bg-opacity-70 rounded-sm"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500/70 p-2 rounded-full shadow-md hover:bg-orange-500 transition">
        <ChevronLeft className="text-black" size={24} />
      </button>

      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500/70 p-2 rounded-full shadow-md hover:bg-orange-500 transition">
        <ChevronRight className="text-black" size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {posts.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === current ? "bg-orange-500" : "bg-orange-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Helper function to get a slight random rotation for the Polaroid effect
function getRandomRotation() {
  // Return a value between -3 and 3 degrees
  return Math.random() * 6 - 3;
}

export default Carousel;
