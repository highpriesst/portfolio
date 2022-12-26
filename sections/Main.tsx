import LandingPageWithVideo from "../components/LandingPageVideo";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Works from "./Works";
// body {
//   h-screen overflow-hidden;
// }

// .parent {
//   overflow-scroll h-screen scroll-snap-points-y-repeat-h-screen scroll-snap-type-y-mandatory;
// }

// section {
//   h-screen scroll-snap-align-start relative;
// }
function Landing() {
  return (
    <div className="bg-white dark:bg-gray-900 snap-y snap-mandatory h-screen overflow-scroll  [&>*]:h-screen [&>*]:snap-start ">
      <LandingPageWithVideo />
      <AboutMe />
      <Works />
      <ContactMe />
    </div>
  );
}

export default Landing;
