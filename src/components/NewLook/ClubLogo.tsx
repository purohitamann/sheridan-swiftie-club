
import { motion } from 'framer-motion';

const ClubLogo = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Top box - Street sign style for Est date with animation */}
      <motion.div
        className="font-sans bg-[#218a5e] text-white px-3 py-1 rounded-t-md border-2 border-white shadow-md z-10 text-xs sm:text-sm font-bold uppercase tracking-wider"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Est. Oct 2023
      </motion.div>

      {/* Main club name with animation */}
      <motion.div
        className="relative flex items-center justify-center p-2 sm:w-auto w-80 h-16 bg-[#279c6b] rounded-b-lg shadow-lg border-4 border-white -mt-1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-white font-bold font-sans sm:text-3xl text-lg uppercase tracking-widest">
          Sheridan Swiftie Club <span className="align-super sm:text-lg text-xs">ST</span>
        </span>
      </motion.div>

      {/* Bottom box for Sheridan College with animation */}
      <motion.div
        className="bg-[#22865c] font-sans font-bold text-white px-1 py-1 rounded-b-md border-2 border-white shadow-md -mt-1 text-xs sm:text-sm uppercase tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Sheridan College, Trafalgar
      </motion.div>
    </div>
  );
};

export default ClubLogo;
