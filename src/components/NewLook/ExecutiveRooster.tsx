import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const executives = [
  { name: "Taylor Swift", position: "President", img: "https://via.placeholder.com/150" },
  { name: "Joe Alwyn", position: "Vice President", img: "https://via.placeholder.com/150" },
  { name: "Jack Antonoff", position: "Treasurer", img: "https://via.placeholder.com/150" },
  { name: "Phoebe Bridgers", position: "Secretary", img: "https://via.placeholder.com/150" },
];

const getTimeLeft = () => {
  const electionDate = new Date("2025-10-01T00:00:00"); // Set your next election date
  const now = new Date();
  const difference = electionDate.getTime() - now.getTime();

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const ExecutiveRoster = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full p-10 bg-[#2EB67D] text-white">
      <h2 className="text-3xl font-bold uppercase tracking-wide mb-6">Executive Roster</h2>
      
      {/* Executive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        {executives.map((exec, index) => (
          <motion.div
            key={index}
            className="bg-white text-gray-900 p-4 rounded-lg shadow-lg flex flex-col items-center border border-gray-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={exec.img} alt={exec.name} className="w-24 h-24 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">{exec.name}</h3>
            <p className="text-sm text-gray-600">{exec.position}</p>
          </motion.div>
        ))}
      </div>

      {/* Countdown Timer
      <div className="mt-10 flex flex-col items-center">
        <h3 className="text-xl font-bold uppercase tracking-wide">Next Election Countdown</h3>
        <div className="flex space-x-4 mt-3 text-lg font-semibold">
          <div className="bg-white text-gray-900 px-4 py-2 rounded-md shadow-md">{timeLeft.days}d</div>
          <div className="bg-white text-gray-900 px-4 py-2 rounded-md shadow-md">{timeLeft.hours}h</div>
          <div className="bg-white text-gray-900 px-4 py-2 rounded-md shadow-md">{timeLeft.minutes}m</div>
          <div className="bg-white text-gray-900 px-4 py-2 rounded-md shadow-md">{timeLeft.seconds}s</div>
        </div>
      </div> */}

    </div>
  );
};

export default ExecutiveRoster;
