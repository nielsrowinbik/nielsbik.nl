import Document, { Html, Head, Main, NextScript } from 'next/document';

// TODO: Add icons, fonts, etc here.

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head></Head>
                <body className="bg-white dark:bg-black text-white dark:text-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
