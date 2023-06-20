import AboutMe from "../sections/AboutMe";
import Work from "../sections/Work";
import Links from "../sections/Links";
import { motion as m } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.2 }}
      className="flex flex-col items-center h-screen">
      <Head>
        <title>Highpriesst</title>
      </Head>
      <AboutMe />
      <Work />
      <Links />
    </m.div>
  );
}
