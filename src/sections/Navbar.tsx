import React from "react";

//I guess figure out the React-Router part?

function Navbar() {
  return (
    <div className="outher_div border-2 border-black flex justify-between items-center p-3 md:p-5 [&>*]:cursor-pointer bg-[#00203FFF] [&>*]:text-[#ADEFD1FF]">
      <div>
        <span>Ertan</span>
      </div>
      <div className="hamburger_menu md:hidden">
        <p className="border-2 border-black w-10"></p>
      </div>
      <div className="hidden md:visible [&>*]:list-none md:flex md:justify-center md:gap-10 md:items-center [&>*]:p-1 [&>*]:rounded-lg">
        <li>
          <a className="group transition-all duration-300 ease-in-out" href="#">
            <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About me
            </span>
          </a>
        </li>
        <li>
          <a className="group transition-all duration-300 ease-in-out" href="#">
            <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Projects
            </span>
          </a>
        </li>
        <li>
          <a className="group transition-all duration-300 ease-in-out" href="#">
            <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-purple-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact me
            </span>
          </a>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
