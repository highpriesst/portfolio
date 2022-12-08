import { motion as m } from "framer-motion";
import { useState } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

function ThemeSwither() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <m.div
      onClick={toggleDarkMode}
      className={`flex-start flex h-[50px] w-[100px] rounded-[50px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
        darkMode && "place-content-end"
      }`}>
      <m.div
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/90"
        layout
        transition={spring}>
        <m.div whileTap={{ rotate: 360 }}>
          {darkMode ? (
            <RiSunFill className="h-6 w-6 text-yellow-300" />
          ) : (
            <RiMoonClearFill className="h-6 w-6 text-slate-200" />
          )}
        </m.div>
      </m.div>
    </m.div>
  );
}

export default ThemeSwither;
