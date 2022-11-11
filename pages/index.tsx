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

      <m.div className="overflow-scroll bg-navy-900 h-screen font-vogaMedium scroll-smooth">
        <m.section
          id="home"
          className="md:flex md:justify-center md:items-center md:h-screen w-full bg-navy-900 snap-start">
          <Home />
        </m.section>
      </m.div>
    </div>
  );
}
