import Head from "next/head";
import Link from "next/link";
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
        <div className="flex justify-center items-center h-[100vh] bg-gray-100 dark:bg-gray-900 text-white">
          <h1>Home Page</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
}
