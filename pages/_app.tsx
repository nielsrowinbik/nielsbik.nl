import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { MDXComponents } from "@/components/MDXComponents";
import { MDXProvider } from "@mdx-js/react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </MDXProvider>
  );
};

export default App;
