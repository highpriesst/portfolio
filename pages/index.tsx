import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/navbar";

// Ana sayfaya girerken bi logo animasyonu yap? Icinde 3 yazsin.

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ertan Mutlu</title>
      </Head>

      {/* TODO: Anasayfa animasyonu */}
      <div className="">
        <Navbar />
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-600">
          <h1 className="font-bold">Hello world</h1>
        </div>
      </div>
    </div>
  );
}
