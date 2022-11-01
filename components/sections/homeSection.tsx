import React from "react";

import { motion } from "framer-motion";

function homeSection() {
  return (
    <motion.section
      className="flex justify-center items-center h-screen w-screen dark:bg-navy-900 text-white ml-10 snap-start"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}>
      <div className="container">
        <span className="text-gray-300">Hi, my name is</span>
        <h1 className="text-fire-800">ERTAN</h1>
        <h1 className="text-fire-800">WEB DEVELOPER</h1>
        <span className="text-gray-300">
          I&apos;m also Computer Scientist and part-time artist.
        </span>
      </div>
    </motion.section>
  );
}

export default homeSection;
