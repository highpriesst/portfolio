import LandingPageWithVideo from "../components/LandingPageVideo";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Works from "./Works";

function Landing() {
  return (
    <div className="bg-white dark:bg-gray-900 snap-y snap-mandatory h-screen overflow-y-auto [&>*]:h-screen [&>*]:snap-start ">
      <LandingPageWithVideo />
      <AboutMe />
      <Works />
      <ContactMe />
    </div>
  );
}

export default Landing;
