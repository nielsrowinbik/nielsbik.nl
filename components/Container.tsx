import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

// import Footer from '@/components/Footer';

export default function Container(props) {
    const { theme, setTheme } = useTheme();

    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
        title: 'Niels Bik - Product Manager from Utrecht',
        description:
            'Product Manager from Utrecht currently working for ProRail',
        image: 'https://leerob.io/static/images/banner.png',
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
            <nav className="sticky-nav flex justify-end items-center w-full my-0">
                {/* <a href="#skip" className="sr-only focus:not-sr-only">
                    Skip to content
                </a> */}
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="bg-transparent rounded h-14 w-14 flex justify-center items-center"
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        className="h-6 w-6 text-gray-800 dark:text-gray-200"
                    >
                        <path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7 13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z" />
                    </svg>
                </button>
            </nav>
            <main
                id="skip"
                className="flex flex-col justify-center px-8 flex-1 "
            >
                {children}
                {/* <Footer /> */}
            </main>
        </div>
    );
}
