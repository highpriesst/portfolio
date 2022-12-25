import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Footer from "../sections/Footer";
import Navbar_v2 from "../sections/Navbar_v2";
// import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar_v2 />
      <m.div className="overflow-hidden">
        <Component {...pageProps} />
      </m.div>
      <Footer />
    </ThemeProvider>
  );
}
