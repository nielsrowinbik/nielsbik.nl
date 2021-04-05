import Document, { Html, Head, Main, NextScript } from 'next/document';

// TODO: Add icons, fonts, etc here.

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head></Head>
                <body className="min-h-screen">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
