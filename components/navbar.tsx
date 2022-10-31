import React, { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import { motion } from "framer-motion";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="sticky top-0 border-b-2 border-gray-800">
      <div className="flex justify-center item-center bg-gray-900 overflow-hidden">
        <nav
          className={`flex items-center ${
            active ? "flex-wrap" : "justify-between"
          } p-2 justify-between rounded-b-2xl lg:rounded-b-2xl w-full`}>
          <Link href="/">
            <p
              className={`flex lg:flex lg:w-auto items-center justify-center h-10 w-10 px-3 py-1 ml-3 mt-3 dark:hover:bg-gray-800 border-green-300 border rounded-full font-extrabold text-xl dark:text-green-300  `}>
              E
            </p>
          </Link>

          <motion.div>
            <button
              className="inline-flex p-3 text-black dark:hover:bg-gray-800 rounded lg:hidden dark:text-green-300 ml-auto outline-none"
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
          </motion.div>
          <div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div
              className={`lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto`}>
              <Link href="/about">
                <p
                  className={`flex lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-cyan-800  dark:text-green-300 font-extralight items-center justify-center lg:dark:hover:bg-gray-800 lg:dark:hover:rounded-2xl`}>
                  <span>
                    <UserIcon
                      className={`h-6 w-6 text-white-300 p-1 ${
                        active ? "float-left mr-1" : "visible"
                      }`}
                    />
                  </span>
                  About me
                </p>
              </Link>
              <Link href="/contact">
                <p className="flex lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-cyan-800  dark:text-green-300 font-extralight items-center justify-center lg:dark:hover:bg-gray-800 lg:dark:hover:rounded-2xl">
                  <span>
                    <PaperAirplaneIcon
                      className={`h-6 w-6 text-white-300 p-1 ${
                        active ? "float-left mr-1" : "visible"
                      }`}
                    />
                  </span>
                  Contact
                </p>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
