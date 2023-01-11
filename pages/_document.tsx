import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html className="bg-white dark:bg-zinc-900" lang="en">
    <Head>
      <meta charSet="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <body className="min-h-screen">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
