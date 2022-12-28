import Navbar from "../components/Navbar";
import AboutMe from "../sections/AboutMe";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar />
      <AboutMe />
    </div>
  );
}
