import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "../../components/helper";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <div className="">
        <Navbar />
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-col items-center h-screen bg-gray-100 dark:bg-gray-900 p-3 text-gray-300 ">
            <p>dawdawd</p>
            <p>dawdawd</p>
            <p>dawdawd</p>
            <p>dawdawd</p>
            <h2>contact</h2>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Contact;
