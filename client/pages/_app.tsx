import "../styles/globals.css";
import type { AppProps } from "next/app";
import SocketsProvider from "../context/socketContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    //Enables that you can use socket from anywhere in the app.
    <SocketsProvider>
      <Component {...pageProps} />
    </SocketsProvider>
  );
}
