import Image from "next/image";
import logo_white from "../public/assests/logos/logo_white.png";

function Navbar() {
  return (
    <div className="flex justify-around w-full p-5 m-5 items-center">
      <Image src={logo_white} className="w-20 h-15 mr-4" alt="logo" />
      <span>themebutton</span>
    </div>
  );
}

export default Navbar;
