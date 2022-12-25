import { motion as m } from "framer-motion";

function ScrollDownButton() {
  const buttonVariants = {
    hover: { scale: 1.1 },
    press: { scale: 0.95 },
  };
  return <m.button>Scroll Down</m.button>;
}

export default ScrollDownButton;
