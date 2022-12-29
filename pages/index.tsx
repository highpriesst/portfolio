import Navbar from "../components/Navbar";
import AboutMe from "../sections/AboutMe";
import Work from "../sections/Work";
import Links from "../sections/Links";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen border border-gray-700 ">
      <Navbar />
      <AboutMe />
      <Work />
      <Links />
    </div>
  );
}
