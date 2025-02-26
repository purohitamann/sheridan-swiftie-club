import { motion } from "framer-motion";
import Image from "next/image";

const Mirrorball = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6 text-center">
      {/* Text */}
      <motion.p 
        className="text-sm w-72 sm:w-full sm:text-xl  font-semibold font-sans text-gray-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Trying everything to keep you looking at us, cause we're a{" "}
        <span className="text-[#2f8ca0] font-bold">mirrorball!</span>
      </motion.p>

      {/* Delicate GIF Animation */}
      <motion.div 
        className="relative flex items-center justify-center w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Glowing Effect */}
        <div className="absolute w-full h-full max-w-md bg-[#2f8ca0] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        
        {/* Delicate GIF */}
        <div className="relative z-10 w-full max-w-md overflow-hidden rounded-lg shadow-xl border-2 border-white">
          <Image 
            src="/new-look/delicate.gif" 
            alt="Taylor Swift Delicate" 
            width={500} 
            height={500}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
      
      {/* Decorative element */}
      <motion.div 
        className="w-32 h-1 bg-gradient-to-r from-transparent via-[#2f8ca0]to-transparent mt-2"
        initial={{ width: 0 }}
        animate={{ width: 128 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      
      {/* Subtle caption
      <motion.p
        className="text-xs text-gray-500 italic font-futura uppercase mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1 }}
      >
        ✨ Shine on, Swifties ✨
      </motion.p> */}
    </div>
  );
};

export default Mirrorball;
