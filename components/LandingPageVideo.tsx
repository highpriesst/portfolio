import Head from "next/head";
import ScrollDownButton from "./ScrollDownButton";
import { motion as m } from "framer-motion";

const LandingPageWithVideo = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Ertan</title>
      </Head>

      <div className="relative w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover h-screen xl:h-auto">
          <source src="assests/background-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* button scroll down icon and transparent blur animation is looped up and down */}
      <div className="relative z-9 flex flex-col items-center justify-center h-screen px-4 py-12 text-center text-white">
        <h1 className="text-3xl">Welcome!</h1>
        <button className="px-6 py-3 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue active:bg-gray-800">
          Scrool down
        </button>
      </div>

      <style jsx>{`
        video {
          min-height: 100%;
          min-width: 100%;
        }
      `}</style>
    </div>
  );
};

export default LandingPageWithVideo;
