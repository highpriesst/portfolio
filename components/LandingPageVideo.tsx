import React from "react";

function LandingPageVideo() {
  return (
    <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover h-screen xl:h-auto">
        <source src="assests/background-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default LandingPageVideo;
