import Link from 'next/link';
import Image from 'next/image';

import type { ImageProps } from 'next/image';
import type { HTMLProps } from 'react';

const CustomLink = ({ href, ...props }: HTMLProps<HTMLAnchorElement>) => {
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink)
        return (
            <Link href={href}>
                <a {...props} />
            </Link>
        );

    return <a rel="noopener noreferrer" target="_blank" {...props} />;
};

const RoundedImage = (props: ImageProps) => (
    <Image className="rounded-lg" {...props} />
);

const MDXComponents = {
    Image: RoundedImage,
    a: CustomLink,
};

export default MDXComponents;
