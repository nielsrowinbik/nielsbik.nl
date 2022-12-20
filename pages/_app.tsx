import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { MDXComponents } from '@/components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};

export default App;
