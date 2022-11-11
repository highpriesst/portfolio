import { motion as m } from "framer-motion";
import { link } from "fs";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "NextJs",
  "Node.js",
  "TailwindCSS",
];

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center md:flex-row h-auto md:flex md:justify-between justify-evenly">
      <m.div
        className="flex md:flex-row md:flex md:justify-center md:items-center md:h-screen w-auto lg:mr-48 bg-navy text-paleGray-100 lg:ml-10 sm:snap-start "
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}>
        <div className="bg-navy-900">
          <div className="w-auto p-6">
            <h1>Bio</h1>
            <p>
              Hello!My name is Ertan.
              <span className=" text-shinyRed-500">Web developer</span> based in
              Sofia with a passion for building digital stuff I want. When not
              online, I play with my Olympus M10 II and my brush. Here are a few
              technologies Ive been working with recently:
            </p>
            <ul className="grid grid-cols-2 text-inherit">
              {skills.map((skill, i) => (
                <li key={i} className="grid items-center grid-flow-col">
                  <ArrowSmallRightIcon className="h-3 w-3 float-left items-start" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default AboutSection;
