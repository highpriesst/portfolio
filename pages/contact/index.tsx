import React from "react";
import Head from "next/head";
import { Footer } from "../../components";

import { Input, Textarea, Grid } from "@nextui-org/react";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <section className="flex justify-center items-center h-screen w-screen bg-gray-100 dark:bg-gray-800 text-white  snap-start">
        <h1>contact ertansofia@gmail.com</h1>
      </section>
    </div>
  );
}

export default Contact;
