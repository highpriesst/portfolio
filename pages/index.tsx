import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ertan Mutlu</title>
      </Head>
      <div className="">
        <div className="bg-gray-700">
          <Navbar />
          <h1 className="font-bold">Hello world</h1>
        </div>
      </div>
    </div>
  );
}
