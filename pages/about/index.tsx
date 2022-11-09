import Head from "next/head";
import { motion as m } from "framer-motion";
import AboutSection from "../../components/sections/aboutSection";

function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <m.div>
        <section className="flex justify-center items-center h-screen w-screen bg-navy-900 dark:bg-gray-800 text-white  snap-start">
          <AboutSection />
        </section>
      </m.div>
    </div>
  );
}

export default About;
