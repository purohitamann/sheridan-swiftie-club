'use client';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef(null);


  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  const y = useTransform(smoothScroll, [0, 1], ["0%", "-1%"]);
  return (
    <div
      ref={scrollRef}
      className="h-screen overflow-y-scroll overflow-x-hidden relative bg-white"
    >
   
      <motion.div style={{ y }} className="flex flex-col space-y-10 p-10">
        {children}
      </motion.div>
    </div>
  );
};

export default SmoothScroll;
