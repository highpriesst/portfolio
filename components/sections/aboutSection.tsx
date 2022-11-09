import { motion as m } from "framer-motion";

const AboutSection = () => {
  return (
    <m.section
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      className="flex justify-center items-center h-screen w-screen bg-navy-900  text-white snap-start">
      <h1>about Page</h1>
    </m.section>
  );
};

export default AboutSection;
