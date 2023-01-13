import Image from "next/image";
import { motion as m } from "framer-motion";
import profile_picture from "../public/assests/profile_pic.png";

function AboutMe() {
  return (
    <m.div className="flex flex-col w-full justify-center lg:items-center h-auto p-5 md:pl-10 ">
      <div className="flex flex-row mb-8 p-1 lg:w-[540px] lg:justify-center">
        <m.div exit={{ opacity: 0 }} className="lg:flex pr-2">
          <Image
            src={profile_picture}
            alt="profile_picture"
            className="object-cover w-16 h-16 rounded-full mr-4"
          />
        </m.div>
        <m.div className="[&>*]:mb-2 lg:text-justify">
          <b>
            <h1 className="lg:mb-2 lg:pl-2">Ertan Mutlu</h1>
          </b>
          <span className="">Web developer|Artist</span>
        </m.div>
      </div>

      <div className="[&>*]:mb-3 lg:flex lg:items-center lg:justify-center lg:flex-col lg:w-1/2">
        <b>
          <h1>About</h1>
        </b>
        <p className=" lg:m-2 lg:flex lg:text-justify ">
          Hello, I&#39;m Ertan. I enjoy building dynamic, minimalist, creative
          websites from start to finish.Focused on developing constantly growing
          and improving based on user metrics.
        </p>
      </div>
    </m.div>
  );
}

export default AboutMe;
