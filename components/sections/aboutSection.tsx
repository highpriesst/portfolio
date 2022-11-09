import { motion as m } from "framer-motion";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

const AboutSection = () => {
  return (
    <m.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      className="flex justify-center items-center h-screen w-screen bg-navy-900 snap-start text-paleGray-100">
      <div className="m-10">
        <h1>Bio</h1>
        <div>
          <p>
            Hello!My name is Ertan. Web developer based in Sofia with a passion
            <br />
            for building digital stuff I want. My interest in web development
            <br />
            started back in Tumblr days. When not online, I play with my olympus
            <br />
            om m10 II and my brush. Here are a few technologies Ive been working
            <br />
            with recently:
            <br />
          </p>
          <ul className="grid grid-cols-2 text-inherit items-center justify-center">
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
