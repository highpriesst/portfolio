import Image from "next/image";

import logo_white from "../public/assests/logos/logo_white.png";
import logo_dark from "../public/assests/logos/logo_dark.png";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center w-full p-5 m-5 justify-around sm:max-w-full ml-46">
      <div className="flex items-center">
        {theme === "light" ? (
          <Image src={logo_dark} className="w-20 h-15 ml-4 mr-2" alt="logo" />
        ) : (
          <Image src={logo_white} className="w-20 h-15 ml-4 mr-2" alt="logo" />
        )}
      </div>
      <div className="flex items-center ">
        <a
          className="email-link text-sm text-[#4c566a] flex items-center"
          href={`mailto:ertansofia@gmail.com`}>
          <EnvelopeIcon className="w-8 h-8 bg-transparent text-[#d8dee9] pb-1 mr-2" />
          <span>Say Hello</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
