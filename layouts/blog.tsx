import Image from 'next/image';
import { parseISO, format } from 'date-fns';

const editUrl = (slug) =>
    `https://github.com/nielsrowinbik/nielsbik.nl/edit/main/data/blog/${slug}.mdx`;

export default function BlogLayout({ children, frontMatter }) {
    return (
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full min-h-full">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                {frontMatter.title}
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
                <div className="flex items-center">
                    <Image
                        alt="Niels Bik"
                        height={24}
                        width={24}
                        src="/assets/images/niels.jpg"
                        className="rounded-full"
                    />
                    <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
                        {frontMatter.by}
                        {'Niels Bik / '}
                        {format(
                            parseISO(frontMatter.publishedAt),
                            'dd MMMM, yyyy'
                        )}
                    </p>
                </div>
                <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
                    {frontMatter.readingTime.text}
                </p>
            </div>
            <div className="prose dark:prose-dark max-w-none w-full">
                {children}
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
                <a
                    href={editUrl(frontMatter.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'Edit on GitHub'}
                </a>
            </div>
        </article>
    );
}
