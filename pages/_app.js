import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
import { Navbar } from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <AnimatePresence>
        <Navbar />
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </NextUIProvider>
  );
}

export default MyApp;
