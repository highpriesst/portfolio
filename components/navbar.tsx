import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//Todo: Use link components from nextjs instead the li component down below.

//Make sure all the links are working fine.

//Todo: Implement the theme button and double check, add test if necessery.

//Todo: Research test for nextjs, add if you think its necessery.

//Todo: Check the devslife page for inspiration

//Make sure navbar is complete before moving to footer.

//className="fill-current text-white h-8 w-8 mr-2"> LOGO

//DO only dark theme

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-gray-700 p-2 ">
        <Link href="/">
          <a className="items-center p-1 mr-4 inline-block align-middle">
            <Image
              src="/undraw_male_avatar_re_tqsc.svg"
              height="30"
              width="30"
              alt="Avatar"
              className="fill-current mr-1 inline-block align-middle"
            />
            <span className="text-xl text-white font-bold uppercase tracking-wide pl-2">
              Ertan Mutlu
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-gray-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col  lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                Services
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                About us
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-600 hover:text-white">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
