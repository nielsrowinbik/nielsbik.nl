import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Head>
    <body className="min-h-screen bg-white dark:bg-zinc-900">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
