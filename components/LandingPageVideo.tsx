import React from "react";

function LandingPageVideo() {
  return (
    <div className="h-screen">
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
        </div>
        <video autoPlay loop muted className="w-full h-screen z-10">
          <source src="/background-video" type="video/mp4" />
        </video>
      </header>
    </div>
  );
}

export default LandingPageVideo;
