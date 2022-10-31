import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "../../components";

function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <section className="flex justify-center items-center h-screen w-screen bg-gray-100 dark:bg-gray-800 text-white  snap-start">
          <h1>about text </h1>
        </section>
      </div>
    </div>
  );
}

export default About;
