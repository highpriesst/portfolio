import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const dark = false;

//Todo: Use link components from nextjs instead the li component down below.

//Make sure all the links are working fine.

//Todo: Implement the theme button and double check, add test if necessery.

//Todo: Research test for nextjs, add if you think its necessery.

//Todo: Check the devslife page for inspiration

//Make sure navbar is complete before moving to footer.

export const Navbar = () => {
  return (
    <div className="flex list-none gap-5 justify-center text-white items-center pt-2 font-thin">
      <li className=" font-normal">Ertan Mutlu</li>
      <li>Works</li>
      <li>Posts</li>
      <li>About</li>
      {dark ? (
        <MoonIcon className="text-white h-4 w-4 hover:text-orange-200" />
      ) : (
        <SunIcon className="text-white h-6 w-6 hover:text-blue-200" />
      )}
    </div>
  );
};
