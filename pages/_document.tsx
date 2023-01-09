import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        <link
          className="bg-white"
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
