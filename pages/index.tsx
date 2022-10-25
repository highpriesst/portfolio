import Head from "next/head";
import { useState } from "react";
import { Navbar, Footer } from "../components/helper";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ertan Mutlu</title>
      </Head>

      {/* TODO: Anasayfa animasyonu */}
      <div className="">
        <Navbar />
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
          <h1 className="font-bold">Home Page</h1>
        </div>

        <Footer />
      </div>
    </div>
  );
}
