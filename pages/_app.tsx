import '../styles/globals.css';

import Container from '../components/Container';

import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <Container>
                <Component {...pageProps} />
            </Container>
        </ThemeProvider>
    );
}
