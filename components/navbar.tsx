import React from "react";

import Image from "next/image";

//Todo: Use link components from nextjs instead the li component down below.

//Make sure all the links are working fine.

//Todo: Implement the theme button and double check, add test if necessery.

//Todo: Research test for nextjs, add if you think its necessery.

//Todo: Check the devslife page for inspiration

//Make sure navbar is complete before moving to footer.

//DO only dark theme

export const Navbar = () => {
  return (
    <div className="flex list-none gap-5 justify-between sm:justify-center text-white items-center p-3 md:pt-2 font-thin">
      <li className=" font-normal">
        <span className="pl-2">Ertan Mutlu</span>
      </li>
      <li className=" hidden sm:block">Works</li>
      <li className=" hidden sm:block">Posts</li>
      <li className=" hidden sm:block">About</li>

      <svg
        className="w-6 h-6 sm:hidden"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </div>
  );
};
