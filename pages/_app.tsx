import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

import '../styles/globals.css';

import Container from '../components/Container';

const useServiceWorker = () => {
    const [isWaiting, setWaiting] = useState(false);

    let wb;
    const skipWaiting = () => wb?.messageSkipWaiting();

    if (
        typeof window !== 'undefined' &&
        'serviceWorker' in navigator &&
        window.workbox !== undefined
    ) {
        wb = window.workbox;

        wb.addEventListener('waiting', () => setWaiting(true));
        wb.addEventListener('controlling', () => window.location.reload());
    }

    return {
        isWaiting,
        skipWaiting,
    };
};

export default function App({ Component, pageProps }) {
    const { isWaiting, skipWaiting } = useServiceWorker();

    useEffect(() => {
        // TODO: Ask user if he wants to refresh the page to get the latest version
        // TODO: In the onClick handler of whatever we use to ask the question, call `skipWaiting`
    }, [isWaiting]);

    return (
        <ThemeProvider attribute="class">
            <Container>
                <Component {...pageProps} />
            </Container>
        </ThemeProvider>
    );
}
