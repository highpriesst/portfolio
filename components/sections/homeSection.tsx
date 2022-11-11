import React, { Fragment } from "react";
import Card from "../project-component/index";

import { motion } from "framer-motion";

const spotify = {
  id: "1",
  image: "/thumbnails/spotify-thumbnail-v2.jpg",
  title: "Spotify Profiler",
  description: "Spotify profiler done with nextjs typescript and tailwindcss",
};

function homeSection() {
  return (
    <div className="flex flex-col items-center md:flex-row h-auto w-auto md:flex md:justify-between justify-evenly pb-10 pr-5 pl-5 sm:p-0">
      <motion.section
        className="flex md:flex-row md:flex md:justify-center md:items-center md:h-screen w-auto lg:mr-48 bg-navy text-white lg:ml-10 sm:snap-start "
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}>
        <div className="p-10">
          <span className="text-paleGray-100">Hi, my name is</span>
          <h1 className="text-shinyRed-500">ERTAN</h1>
          <h1 className="text-paleRed-700">WEB DEVELOPER</h1>
          <span className="text-paleGray-100">
            I&apos;m also Computer Scientist and part-time artist.
          </span>
        </div>
      </motion.section>
      <div className="md:flex md:justify-center md:items-center sm:flex">
        <div>
          <Card
            id={spotify.id}
            image={spotify.image}
            title={spotify.title}
            description={spotify.description}
          />
        </div>
      </div>
    </div>
  );
}

export default homeSection;
