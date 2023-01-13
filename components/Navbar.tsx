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

  //When this clicked, this shall take you to the email part of the computer whatever.
  return (
    <div className="flex w-full p-5 m-5 justify-around items-center">
      {theme === "light" ? (
        <Image src={logo_dark} className="w-20 h-15 ml-4" alt="logo" />
      ) : (
        <Image src={logo_white} className="w-20 h-15 ml-4" alt="logo" />
      )}
      <div className="flex flex-col">
        <a
          className="email-link text-sm text-[#4c566a] flex flex-col items-center"
          href={`mailto:ertansofia@gmail.com`}>
          <EnvelopeIcon className="w-8 h-8 bg-transparent text-[#d8dee9] pb-1" />
          Say Hello
        </a>
      </div>
    </div>
  );
}

export default Navbar;
