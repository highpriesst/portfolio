import { motion as m } from "framer-motion";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

const AboutSection = () => {
  return (
    <m.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      className="flex justify-center items-center h-auto w-screen bg-navy-900 snap-start text-paleGray-100">
      <div>
        <h1>Bio</h1>
        <div className="w-[500px] h-[500px]">
          <p>
            Hello!My name is Ertan.{" "}
            <span className=" text-shinyRed-500">Web developer</span> based in
            Sofia with a passion for building digital stuff I want. When not
            online, I play with my Olympus M10 II and my brush. Here are a few
            technologies Ive been working with recently:
          </p>
          <ul className="md:grid md:grid-cols-2 text-inherit lg:items-center lg:justify-center content-['=>']">
            <li>Javascript (ES6+)</li>
            <li>React</li>
            <li>Typescript</li>
            <li>Nextjs</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
      </div>
    </m.div>
  );
};

export default AboutSection;
