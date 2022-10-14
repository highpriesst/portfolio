import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="">
      <div>
        <Navbar />
        <h1 className="font-bold">Hello world</h1>
      </div>
    </div>
  );
}
