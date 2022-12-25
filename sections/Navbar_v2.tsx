import React from "react";
import ThemeToggler from "../components/ThemeToggler";

function Navbar_v2() {
  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3">
      <a href="#" className="text-gray-200 font-bold text-xl dark:text-white">
        Ertan
      </a>
      <div className="flex items-center space-x-4">
        <ThemeToggler />
      </div>
    </nav>
  );
}

export default Navbar_v2;
