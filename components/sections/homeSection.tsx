import React from "react";

import { motion } from "framer-motion";

function homeSection() {
  return (
    <motion.section
      className="flex justify-center items-center h-screen w-screen bg-paleGray-900 text-white ml-10 snap-start"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}>
      <div className="container">
        <span className="text-paleGray-100">Hi, my name is</span>
        <h1 className="text-shinyRed-500">ERTAN</h1>
        <h1 className="text-paleRed-700">WEB DEVELOPER</h1>
        <span className="text-paleGray-100">
          I&apos;m also Computer Scientist and part-time artist.
        </span>
      </div>
    </motion.section>
  );
}

export default homeSection;
