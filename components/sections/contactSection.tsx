import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      className="flex justify-center items-center h-screen w-screen bg-gray-100 dark:bg-gray-600 text-white  snap-start">
      <h1>contact</h1>
    </motion.section>
  );
}

export default Contact;
