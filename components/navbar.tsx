import React, { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import { motion as m } from "framer-motion";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="sticky top-0 z-10">
      <div className="flex justify-center item-center bg-navy-900 overflow-hidden font-vogaBold">
        <nav
          className={`flex items-center ${
            active ? "flex-wrap" : "justify-between w-full"
          } p-2 justify-between rounded-b-2xl lg:rounded-b-2xl w-full text-shinyRed-500`}>
          <Link href="/">
            <p
              className={`flex lg:flex lg:w-auto items-center justify-center cursor-pointer border border-shinyRed-500 hover:bg-paleGray-800 h-10 w-10 px-3 py-1 ml-3 mt-1  rounded-full font-bold text-xl `}>
              E
            </p>
          </Link>

          <m.div>
            <button
              className="inline-flex p-3 rounded lg:hidden  ml-auto outline-none cursor-pointer"
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
          </m.div>
          <m.div
            className={`${
              active ? "" : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div
              className={`lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto`}>
              <Link href="/about">
                <p
                  className={`flex font-bold lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-fire items-center justify-center cursor-pointer
                    ${
                      active
                        ? "hover:underline w-max mx-auto rounded-2xl"
                        : "hover:underline"
                    }
                  `}>
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
                <p
                  className={`flex lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-fire font-bold items-center justify-center cursor-pointer
                  ${
                    active
                      ? "hover:underline w-max mx-auto rounded-2xl"
                      : "hover:underline"
                  }
                `}>
                  <span>
                    <PaperAirplaneIcon
                      className={`font-bold h-6 w-6 p-1 ${
                        active ? "float-left mr-1" : "visible"
                      }`}
                    />
                  </span>
                  Contact
                </p>
              </Link>
            </div>
          </m.div>
        </nav>
      </div>
    </div>
  );
};
