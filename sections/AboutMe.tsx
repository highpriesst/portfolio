import Image from "next/image";
import { motion as m } from "framer-motion";
import profile_picture from "../public/assests/profile_pic.png";
import { skills } from "../utils/config";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function AboutMe() {
  return (
    <m.div className="flex flex-col w-full justify-center items-center p-5 md:pl-10">
      <div className="flex flex-row mb-8 p-1 w-full justify-center lg:w-[540px]">
        <m.div exit={{ opacity: 0 }} className="lg:flex pr-2">
          <Image
            src={profile_picture}
            alt="profile_picture"
            className="object-cover w-16 h-16 rounded-full mr-4"
          />
        </m.div>
        <m.div className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 text-center [&>*]:pb-2 md:pb-0 lg:pb-0 justify-center items-center">
          <div className="flex items-center justify-center">
            <b>
              <h1 className="lg:pl-2">Ertan Mutlu</h1>
            </b>
          </div>
          <div>
            <span className="ml-2">Web Developer</span>
          </div>
          <div className="flex items-center pl-5 justify-center text-center">
            <EnvelopeIcon className="w-8 h-8 bg-transparent dark:text-[#d8dee9] text-gray-500 pb-1 mr-2" />
            <span className="hidden lg:inline-block">Say Hello</span>
          </div>
        </m.div>
      </div>

      <div className="lg:flex lg:items-center lg:justify-center lg:flex-col lg:w-1/2">
        <b>
          <h1 className="mb-2">About</h1>
        </b>
        <p className="lg:m-2 mb-2">
          Hello, I am Ertan. I enjoy building dynamic, minimalist, creative
          websites from start to finish. Focused on constantly growing and
          improving based on user metrics.
        </p>
        <p className="lg:flex lg:gap-3 grid grid-cols-2 gap-5 md:grid md:grid-cols-3 md:gap-5 lg:text-sm lg:max-w-sm lg:mr-40 [&>*]:text-[#8fbcbb]">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </p>
      </div>
    </m.div>
  );
}

export default AboutMe;
