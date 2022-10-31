import React from "react";

import { motion } from "framer-motion";

function homeSection() {
  return (
    <motion.section
      className="flex justify-center items-center h-screen w-screen bg-gray-100 dark:bg-gray-900 text-white  snap-start"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}>
      <h1>home Page</h1>
    </motion.section>
  );
}

export default homeSection;
