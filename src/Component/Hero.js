import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    // Hero Section -- Heading and paragraph
    <motion.div
      className=" flex flex-col items-center my-[5rem] m-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
    >
      <h3 className="text-[1.4rem] sm:text-[1.7rem] md:[1.7rem] [px-2] text-center mb-3">
        Welcome te Tab<span className="text-blue-900">Switch</span> App
      </h3>
      <p className="text-center  text-[1rem] sm:text-[1rem] md:text-[1.1rem] max-w-md sm:max-w-lg md:max-w-xl ">
        Seamlessly switch between content sections using our interactive tab
        component with custom slide-in animations.
      </p>
    </motion.div>
  );
}

export default Hero;
