import Head from "next/head";
import { motion as m } from "framer-motion";
import AboutSection from "../../components/sections/about/aboutSection";

function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <m.div className="flex justify-center items-center h-screen w-screen bg-navy-900 text-white  snap-start">
        <AboutSection />
      </m.div>
    </div>
  );
}

export default About;
