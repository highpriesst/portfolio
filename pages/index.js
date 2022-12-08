import Head from "next/head";
import Navbar from "../sections/Navbar";

export default function Home() {
  return (
    <div className="main-page">
      <Head>
        <title>Ertan Mutlu</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen justify-between">
        <Navbar />

        <div className="main-content bg-red-300 mb-auto">content</div>

        <footer className="footer flex w-full static bottom-0 justify-center ">
          <p target="_blank" rel="noopener noreferrer">
            Made by &nbsp;
            <span>
              <a href="http://github.com/highpriesst">Highpriesst</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}
