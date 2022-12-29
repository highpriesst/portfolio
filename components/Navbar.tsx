import Image from "next/image";
import logo_white from "../public/assests/logos/logo_white.png";
import logo_dark from "../public/assests/logos/logo_dark.png";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="flex justify-around w-full p-5 m-5 items-center">
      {theme === "light" ? (
        <Image src={logo_dark} className="w-20 h-15 mr-4" alt="logo" />
      ) : (
        <Image src={logo_white} className="w-20 h-15 mr-4" alt="logo" />
      )}
      <button
        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 focus:outline-none"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle Dark Mode">
        {theme === "light" ? (
          <MoonIcon className="text-gray-800 w-5 h-5">Dark</MoonIcon>
        ) : (
          <SunIcon className="text-white w-5 h-5 ">Light</SunIcon>
        )}
      </button>
    </div>
  );
}

export default Navbar;
