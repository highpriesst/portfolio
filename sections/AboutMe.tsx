import Image from "next/image";
import { motion as m } from "framer-motion";
import profile_picture from "../public/assests/profile_pic.png";

function AboutMe() {
  return (
    <m.div className="flex flex-col w-full justify-center lg:items-center h-auto p-5 md:pl-16">
      <div className="flex flex-row mb-8 p-2 ">
        <m.div exit={{ opacity: 0 }}>
          <Image
            src={profile_picture}
            alt="profile_picture"
            className="object-cover w-16 h-16 rounded-full mr-4"
          />
        </m.div>
        <m.div className="[&>*]:mb-2">
          <b>
            <h1>Ertan Mutlu</h1>
          </b>
          <span className="text-gray-500">Web developer, Artist</span>
        </m.div>
      </div>

      <div className="[&>*]:mb-3 lg:flex lg:items-center lg:justify-center lg:flex-col lg:w-1/2">
        <b>
          <h1>About</h1>
        </b>
        <p className="text-gray-500 lg:p-8 lg:flex lg:text-left ">
          Hello, I&#39;m Ertan. I enjoy building dynamic, minimalist, creative
          websites from start to finish.Focused on developing constantly growing
          and improving based on user metrics.
        </p>
      </div>
    </m.div>
  );
}

export default AboutMe;
