import '../styles/globals.css';

import type { AppProps } from 'next/app';

import SiteLayout from '../components/SiteLayout';

const App = ({ Component, pageProps }: AppProps) => {
    const getLayout =
        // @ts-ignore
        Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>);

    return getLayout(<Component {...pageProps} />);
};

export default App;
