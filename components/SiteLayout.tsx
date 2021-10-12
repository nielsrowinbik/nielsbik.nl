import cn from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

import type { PropsWithChildren } from 'react';
import type { LinkProps } from 'next/link';

import NowPlaying from '../components/NowPlaying';

interface NavItemProps extends LinkProps {
    text: string;
}

const NavItem = ({ text, ...props }: NavItemProps) => {
    const router = useRouter();
    const isActive = router.asPath === props.href;

    return (
        <Link {...props}>
            <a
                className={cn(
                    isActive ? 'font-semibold' : 'font-normal',
                    'inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
                )}
            >
                <span className="capsize">{text}</span>
            </a>
        </Link>
    );
};

type ContainerProps = PropsWithChildren<{
    [metaTag: string]: string;
}>;
const Container = ({ children, ...customMeta }: ContainerProps) => {
    const router = useRouter();
    const meta = {
        title: 'Niels Bik', // TODO: Update this
        description: `Something about me`, // TODO: Update this
        image: 'https://nielsbik.nl/static/images/banner.png', // TODO: Update this
        type: 'website',
        ...customMeta,
    };

    return (
        <>
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
                <meta name="twitter:site" content="@leeerob" />
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
            <nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto p-8 sm:pb-16 print:hidden">
                <a href="#skip" className="skip-nav sr-only">
                    Skip to content
                </a>
                <div className="ml-[-0.60rem]">
                    <NavItem href="/" text="Home" />
                    <NavItem href="/about" text="About" />
                    <NavItem href="/blog" text="Blog" />
                    {/* <NavItem href="/dashboard" text="Dashboard" />
                        <NavItem href="/blog" text="Blog" />
                        <NavItem href="/snippets" text="Snippets" /> */}
                </div>
            </nav>
            <main
                id="skip"
                className="flex flex-col justify-center px-8 w-full max-w-2xl mx-auto mb-16"
            >
                {children}
            </main>
            <footer className="px-8 w-full max-w-2xl mx-auto mb-16 print:hidden">
                <div className="leading-normal mt-6 empty:mt-0 pt-4 empty:pt-0 border-t empty:border-0">
                    <NowPlaying />
                </div>
            </footer>
        </>
    );
};

export default Container;

// import Head from 'next/head';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// export default function Container(props) {
//     const { children, ...customMeta } = props;
//     const router = useRouter();
//     const meta = {
//         title: 'Niels Bik - Product Manager from Utrecht',
//         description:
//             'Product Manager from Utrecht currently working for ProRail',
//         image: 'https://nielsbik.nl/assets/images/niels.jpg',
//         type: 'website',
//         ...customMeta,
//     };

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Head>
//                 <title>{meta.title}</title>
//                 <meta name="robots" content="follow, index" />
//                 <meta content={meta.description} name="description" />
//                 <meta
//                     property="og:url"
//                     content={`https://nielsbik.nl${router.asPath}`}
//                 />
//                 <link
//                     rel="canonical"
//                     href={`https://nielsbik.nl${router.asPath}`}
//                 />
//                 <meta property="og:type" content={meta.type} />
//                 <meta property="og:site_name" content="Niels Bik" />
//                 <meta property="og:description" content={meta.description} />
//                 <meta property="og:title" content={meta.title} />
//                 <meta property="og:image" content={meta.image} />
//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta name="twitter:site" content="@nielsrowinbik" />
//                 <meta name="twitter:title" content={meta.title} />
//                 <meta name="twitter:description" content={meta.description} />
//                 <meta name="twitter:image" content={meta.image} />
//                 {meta.date && (
//                     <meta
//                         property="article:published_time"
//                         content={meta.date}
//                     />
//                 )}
//             </Head>
//             <nav className="sticky-nav flex items-center max-w-4xl w-full my-0 mx-auto">
//                 <a href="#skip" className="sr-only focus:not-sr-only">
//                     Skip to content
//                 </a>
//                 <div>
//                     <Link href="/">Home</Link>
//                 </div>
//             </nav>
//             <main
//                 id="skip"
//                 className="flex flex-col justify-center px-8 flex-1 "
//             >
//                 {children}
//             </main>
//         </div>
//     );
// }
