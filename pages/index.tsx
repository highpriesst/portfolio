import Head from "next/head";
import { Home } from "../components";
import { motion as m } from "framer-motion";

// import { motion, useScroll } from "framer-motion";

export default function Main() {
  // const { scrollYProgress } = useScroll();
  return (
    <div>
      <Head>
        <title>Ertan Mutlu</title>
      </Head>

      <m.div className="sm:overflow-scroll bg-navy-900 font-vogaMedium scroll-smooth">
        <m.section
          id="home"
          className="sm:flex sm:justify-center sm:items-center sm:h-screen sm:w-screen dark:bg-navy-900 text-fire-800 snap-start">
          <Home />
        </m.section>
      </m.div>
    </div>
  );
}
