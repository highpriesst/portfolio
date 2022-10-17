import Head from "next/head";
import { Navbar, Footer } from "../components/helper";

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
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
          <h1 className="font-bold">Hello world</h1>
        </div>

        <Footer />
      </div>
    </div>
  );
}
