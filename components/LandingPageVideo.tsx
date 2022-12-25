import Head from "next/head";
import ScrollDownButton from "./ScrollDownButton";
import { motion as m } from "framer-motion";

const LandingPageWithVideo = () => {
  return (
    <m.div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Ertan</title>
      </Head>

      <div className="relative w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover h-screen xl:h-auto">
          <source src="assests/cyberpunk-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* button scroll down icon and transparent blur animation is looped up and down */}
      <m.div className="snap-start relative z-9 flex flex-col items-center justify-center h-screen px-4 py-12 text-center text-white">
        <m.h1 className="text-3xl">Welcome!</m.h1>
        <ScrollDownButton />
      </m.div>

      <style jsx>{`
        video {
          min-height: 100%;
          min-width: 100%;
        }
      `}</style>
    </m.div>
  );
};

export default LandingPageWithVideo;
