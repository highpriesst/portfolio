import Head from "next/head";
import { useState } from "react";
import { Navbar, Footer } from "../components/helper";
// import { motion, useScroll } from "framer-motion";

export default function Home() {
  // const { scrollYProgress } = useScroll();
  return (
    <div>
      <Head>
        <title>Ertan Mutlu</title>
      </Head>

      <div className="">
        <Navbar />
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
          <h1>Home Page</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
}
