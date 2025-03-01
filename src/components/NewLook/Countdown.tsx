"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Countdown = ({ targetDate}: { targetDate: string}) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flipVariant = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center mb-12">
   
      <div className="flex space-x-4 text-center justify-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <motion.div
              key={value}
              variants={flipVariant}
              initial="initial"
              animate="animate"
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-bold bg-gradient-to-br from-[#2EB67D] to-[#1a8c5e] text-white rounded-lg shadow-md"
            >
              {value}
            </motion.div>
            <p className="text-gray-600 mt-2 uppercase text-xs md:text-sm font-slack tracking-wider">{unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
