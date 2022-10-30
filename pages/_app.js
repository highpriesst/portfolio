import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
import { Navbar } from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <AnimatePresence>
        <Navbar />
        <Component {...pageProps} />
      </AnimatePresence>
    </NextUIProvider>
  );
}

export default MyApp;
