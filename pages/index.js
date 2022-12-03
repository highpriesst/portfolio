import Head from "next/head";

export default function Home() {
  return (
    <div className="main-page">
      <Head>
        <title>Ertan Mutlu</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <footer className="footer">
        <p target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span>
            <a href="http://github.com/highpriesst">Highpriesst</a>
          </span>
        </p>
      </footer>
    </div>
  );
}
