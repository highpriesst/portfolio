import React from "react";
import ThemeSwither from "../components/ThemeSwither";

function Navbar() {
  return (
    <div className="flex justify-between p-2 m-2 items-center dark:bg-slate-600 bg-slate-50">
      {/* Add icon ? */}
      <h1 className="p-2">Ertan</h1>
      <div className="navbar-list hidden  list-none sm:flex justify-between m-2 p-2 [&>*]:p-2">
        <li>Projects</li>
        <li>About me</li>
        <li>Contact</li>
      </div>
      <ThemeSwither />
    </div>
  );
}

export default Navbar;
