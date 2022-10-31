import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Home, Projects, About, Contact } from "../components";
import { motion } from "framer-motion";

// import { motion, useScroll } from "framer-motion";

export default function Main() {
  // const { scrollYProgress } = useScroll();
  return (
    <div>
      <Head>
        <title>Ertan Mutlu</title>
      </Head>

      <div className="snap-y snap-mandatory overflow-scroll h-screen w-screen">
        <motion.section
          id="home"
          className="flex justify-center items-center h-screen w-screen bg-gray-100 dark:bg-gray-900 text-white snap-start">
          <Home />
        </motion.section>
        <motion.section
          id="projects"
          className="flex justify-center items-center h-screen w-screen bg-gray-100 dark:bg-gray-800 text-white  snap-start">
          <Projects />
        </motion.section>
        <motion.section
          id="about"
          className="flex justify-center items-center h-screen w-screen bg-gray-100 dark:bg-gray-700 text-white  snap-start">
          <About />
        </motion.section>
        <motion.section
          id="contact"
          className="flex justify-center items-center h-screen w-screen bg-gray-100 dark:bg-gray-600 text-white snap-start">
          <Contact />
        </motion.section>
      </div>
    </div>
  );
}
