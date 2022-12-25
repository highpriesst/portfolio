import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { motion as m } from "framer-motion";

function ScrollDownButton() {
  return (
    <m.button
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-300 w-12 h-12 rounded-full p-1 animate-bounce bg-transparent bottom-0 fixed">
      <ArrowDownCircleIcon />
    </m.button>
  );
}

export default ScrollDownButton;
