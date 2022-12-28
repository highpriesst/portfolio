import Image from "next/image";
import { motion as m } from "framer-motion";
import profile_picture from "../public/assests/profile_pic.png";

function AboutMe() {
  return (
    <m.div className="flex flex-col w-full justify-center h-auto p-10">
      <div className="flex flex-row mb-8 p-2">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
          exit={{ opacity: 0 }}>
          <Image
            src={profile_picture}
            alt="profile_picture"
            className="object-cover w-16 h-16 rounded-full mr-4"
          />
        </m.div>
        <m.div
          className="[&>*]:mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
          exit={{ opacity: 0 }}>
          <h1>Ertan Mutlu</h1>
          <span className="text-gray-500">Web developer, Artist</span>
        </m.div>
      </div>

      <div className="[&>*]:mb-3">
        <h1>About</h1>
        <p className="text-gray-500">Text</p>
      </div>
    </m.div>
  );
}

export default AboutMe;
