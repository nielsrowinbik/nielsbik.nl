import Link from 'next/link';
import Image from 'next/image';

import type { ImageProps } from 'next/image';
import type { HTMLProps, PropsWithChildren } from 'react';

const CustomLink = ({ href, ...props }: HTMLProps<HTMLAnchorElement>) => {
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink)
        return (
            <Link href={href}>
                <a {...props} />
            </Link>
        );

    return (
        <a href={href} rel="noopener noreferrer" target="_blank" {...props} />
    );
};

// I had a much more elegant approach here but TypeScript was complaining. Probably
// a bug in MDX that I am now working around. Whatever, this works fine.
const Doi = ({ children }: PropsWithChildren<{}>) => (
    <a
        href={`https://doi.org/${children}`}
        rel="noopener noreferrer"
        target="_blank"
    >
        {children}
    </a>
);

const RoundedImage = (props: ImageProps) => (
    <Image className="rounded-lg" {...props} />
);

const MDXComponents = {
    Doi,
    Image: RoundedImage,
    a: CustomLink,
};

export default MDXComponents;
