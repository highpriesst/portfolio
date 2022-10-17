import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

//Todo: Use link components from nextjs instead the li component down below.

//Make sure all the links are working fine.

//Todo: Implement the theme button and double check, add test if necessery.

//Todo: Research test for nextjs, add if you think its necessery.

//Todo: Check the devslife page for inspiration

//Make sure navbar is complete before moving to footer.

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap dark:bg-gray-900 p-1 ">
        <Link href="/">
          <a className="flex items-center justify-center p-2 align-middle">
            <Image src="/3e.png" width={30} height={30} alt="logo" />
          </a>
        </Link>
        <button
          className=" inline-flex p-3 text-black dark:hover:bg-gray-800 rounded lg:hidden dark:text-white ml-auto hover:bg-gray-100 outline-none"
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
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col ` lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-cyan-800 hover:underline dark:text-white font-bold items-center justify-center dark:hover:bg-gray-800 dark:hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-cyan-800 hover:underline dark:text-white font-bold items-center justify-center dark:hover:bg-gray-800 dark:hover:text-white">
                Services
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-cyan-800 hover:underline dark:text-white font-bold items-center justify-center dark:hover:bg-gray-800 dark:hover:text-white">
                About us
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-cyan-800 hover:underline dark:text-white font-bold items-center justify-center dark:hover:bg-gray-800 dark:hover:text-white">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
