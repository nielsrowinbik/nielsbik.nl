import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

export default function Container(props) {
    const { theme, setTheme } = useTheme();

    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
        title: 'Niels Bik - Product Manager from Utrecht',
        description:
            'Product Manager from Utrecht currently working for ProRail',
        image: 'https://nielsbik.nl/assets/images/niels.jpg',
        type: 'website',
        ...customMeta,
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://nielsbik.nl${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://nielsbik.nl${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Niels Bik" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@nielsrowinbik" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                    <meta
                        property="article:published_time"
                        content={meta.date}
                    />
                )}
            </Head>
            <nav className="sticky-nav flex justify-end items-center max-w-4xl w-full my-0 mx-auto">
                {/* <a href="#skip" className="sr-only focus:not-sr-only">
                    Skip to content
                </a> */}
                {/* <div>
                    <NextLink href="/">Home</NextLink>
                </div> */}
            </nav>
            <main
                id="skip"
                className="flex flex-col justify-center px-8 flex-1 "
            >
                {children}
            </main>
        </div>
    );
}
