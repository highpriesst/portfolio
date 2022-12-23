import "../styles/globals.css";
import Navbar from "../sections/Navbar";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Footer from "../sections/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
