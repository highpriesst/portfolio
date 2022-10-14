import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const dark = true;

export const Navbar = () => {
  return (
    <div className="flex list-none gap-5 justify-center text-white items-center pt-2 font-thin">
      <li className=" font-normal">Ertan Mutlu</li>
      <li>Works</li>
      <li>Posts</li>
      <li>About</li>
      {dark ? (
        <MoonIcon className="text-white h-4 w-4" />
      ) : (
        <SunIcon className="text-white h-6 w-6" />
      )}
    </div>
  );
};
