import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Home, Projects, About, Contact } from "../components";
import { motion as m } from "framer-motion";

// import { motion, useScroll } from "framer-motion";

export default function Main() {
  // const { scrollYProgress } = useScroll();
  return (
    <div>
      <Head>
        <title>Ertan Mutlu</title>
      </Head>

      <m.div className="snap-y snap-mandatory overflow-scroll h-screen w-screen bg-paleGray-900">
        <m.section
          id="home"
          className="flex justify-center items-center h-screen w-screen dark:bg-navy-900 text-fire-800 snap-start">
          <Home />
        </m.section>
        <m.section
          id="projects"
          className="flex justify-center items-center h-screen w-screen  dark:bg-navy-900 text-fire-800  snap-start">
          <Projects />
        </m.section>
        <m.section
          id="about"
          className="flex justify-center items-center h-screen w-screen  dark:bg-navy-900 text-fire-800  snap-start">
          <About />
        </m.section>
        <m.section
          id="contact"
          className="flex justify-center items-center h-screen w-screen  dark:bg-navy-900 text-fire-800 snap-start">
          <Contact />
        </m.section>
      </m.div>
    </div>
  );
}
