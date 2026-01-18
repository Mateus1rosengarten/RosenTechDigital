import React from "react";
import StarsBackground from "../components/ui/StarsBackground";
import { Typewriter } from "react-simple-typewriter";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col text-center text-foreground overflow-hidden px-6 pb-40 py-20 sm:mb-40 sm:py-40"
    >
      <StarsBackground />
      <motion.h1
        className="text-5xl md:text-8xl font-varela font-bold text-brand underline drop-shadow-lg pt-36 mb-4"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", stiffness: 80, damping: 15, duration: 1 }}
      >
        <div className="h-20 overflow-hidden">
          <Typewriter
            words={["(EVOLUA)²", "(LUCRE)²", "(EXPANDA)²"]}
            loop={0}
            cursor={false}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={4000}
          />
        </div>
      </motion.h1>

      <motion.h2
        className="font-varela text-foreground z-10 text-lg sm:text-lg md:text-2xl font-semibold mb-2"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 20,
          duration: 1,
          delay: 0.5,
        }}
      >
        EM TUDO QUE SEU NEGÓCIO MERECE!
      </motion.h2>

      <motion.h3
        className="font-varela text-foreground z-10 text-sm sm:text-lg md:text-body mb-12 font-semibold"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 20,
          duration: 1,
          delay: 0.7,
        }}
      >
        SOLUÇÕES DIGITAIS PARA NEGÓCIOS E EMPRESAS
      </motion.h3>

      <Button>
        <span>COMECE SUA REVOLUÇÃO DIGITAL</span>
      </Button>
    </section>
  );
};

export default Hero;
