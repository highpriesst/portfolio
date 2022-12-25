import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode">
      {theme === "light" ? (
        <MoonIcon className="text-black w-5 h-5" />
      ) : (
        <SunIcon className="text-white w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggler;
