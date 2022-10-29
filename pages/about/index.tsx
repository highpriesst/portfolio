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
        <div className="flex flex-col items-center h-screen bg-gray-100 dark:bg-gray-900 p-3 text-gray-300 ">
          <p>dawdawd</p>
          <p>dawdawd</p>
          <p>dawdawd</p>
          <p>dawdawd</p>
          <h2>about</h2>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default About;
