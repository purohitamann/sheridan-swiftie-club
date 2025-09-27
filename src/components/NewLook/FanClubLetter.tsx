import { motion } from "framer-motion";

const FanClubLetter = () => {
  return (
    <motion.div
      className="flex flex-col items-center p-14 sm:p-6 md:p-8 w-full sm:max-w-3xl max-w-lg bg-black border-2 border-orange-500 shadow-lg shadow-orange-500/20 rounded-lg text-center mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Letter Header */}
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-orange-500 mb-4 font-heading uppercase">
        Why a Fan Club?
      </h1>

      {/* Letter Body */}
      <div className="text-orange-200 text-xs sm:text-sm md:text-base font-light font-sans text-justify px-4 sm:px-6">
        <p className="mb-4">
          "Being a fan of something is such a blessing, because being a fan of anything gives your life a lot more purpose than you'll ever know. In a world of so much disagreeing, being a fan lets you be a part of something like-minded. You get to feel, together—what a rare thing to feel these days.
        </p>

        <p className="mb-4">
          To be a fan of something is so special because even if it's silly, it's not—because it means something to you. You love something so much that you learn things about it because you want to, not because you have to. To feel that way about anything is to strike gold.
        </p>

        <p className="mb-4">
          If you can be anything in this life, be a fan of something, unapologetically. Write the lyrics on your arms, decorate the walls of your home, wear their name on your jersey, stand in crowds, and scream at the top of your lungs like a little kid. Let it keep you that way forever; let it keep you young. You don't have to understand why; there doesn't need to be any rhyme or reason outside of joy.
        </p>

        <p className="mb-4">
          <span className="font-extrabold">Just be a fan and let others be fans.</span> Find something that you lose yourself in, because there's no point to life other than to immerse yourself in all the parts of it that make it worth living. So if you can be anything, be a fan of something."
        </p>

        {/* Author Signature */}
        <p className="mt-4 text-right font-medium text-orange-400 italic">
          - Josie Balka, Writer
        </p>
      </div>
    </motion.div>
  );
};

export default FanClubLetter;
