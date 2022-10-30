import React from "react";
import Head from "next/head";
import { Footer } from "../../components/helper";

import { Input, Textarea, Grid } from "@nextui-org/react";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <div>
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-col items-center h-screen m-2 bg-gray-100 dark:bg-gray-900 p-3 text-gray-300 "></div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Contact;
