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
      {/* this goes to mail via gmail */}
      <p className="box">Want to chat?</p>
    </div>
  );
}

export default Navbar;
