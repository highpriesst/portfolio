import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "../../components/helper";

function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <div className="">
        <Navbar />
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
          <h1 className="font-bold">About me</h1>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default About;
