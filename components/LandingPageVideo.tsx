import Head from "next/head";
import { motion as m } from "framer-motion";
import ArrowDownCircleIcon from "@heroicons/react/24/outline/ArrowDownCircleIcon";

const LandingPageWithVideo = () => {
  return (
    <m.div className="bg-gray-900 min-h-screen">
      <Head>
        <title>Ertan</title>
      </Head>

      <div className="relative w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover h-screen">
          <source src="assests/cyberpunk-video.mp4" type="video/mp4" />
        </video>

        <h1 className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pl-10">
          Welcome!
        </h1>
        <button className="bg-gray-300 w-12 h-12 rounded-full animate-bounce bg-transparent absolute left-1/2 bottom-0">
          <ArrowDownCircleIcon />
        </button>
      </div>

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
