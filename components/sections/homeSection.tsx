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
    <div className="flex justify-between">
      <motion.section
        className="flex justify-center items-center h-screen w-auto mr-64 bg-navy text-white ml-10 snap-start "
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}>
        <div className="container">
          <span className="text-paleGray-100">Hi, my name is</span>
          <h1 className="text-shinyRed-500">ERTAN</h1>
          <h1 className="text-paleRed-700">WEB DEVELOPER</h1>
          <span className="text-paleGray-100">
            I&apos;m also Computer Scientist and part-time artist.
          </span>
        </div>
      </motion.section>
      <div className="outher-container flex mr-36 p-10">
        <div className="inner-container ">
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
