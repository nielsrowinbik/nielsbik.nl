import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

import Container from '../components/Container';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <Head>
                <title>Niels Bik - Product Manager from Utrecht</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Container>
                <Component {...pageProps} />
            </Container>
        </ThemeProvider>
    );
}
