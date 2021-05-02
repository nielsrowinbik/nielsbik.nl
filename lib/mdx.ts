import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';

import MDXComponents from '../components/MDXComponents';

const root = process.cwd();

export const getFiles = async (type: 'blog') =>
    fs.readdirSync(path.join(root, 'data', type));

export const getFileBySlug = async (type: 'blog', slug: string) => {
    const source = slug
        ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
        : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

    const { data: frontMatter, content } = matter(source);
    const mdxSource = await renderToString(content, {
        components: MDXComponents,
    });

    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: slug || null,
            ...frontMatter,
        },
    };
};

export const getAllFilesFrontMatter = async (type: 'blog') => {
    const files = fs.readdirSync(path.join(root, 'data', type));

    return files.reduce((allPosts, postSlug) => {
        const source = fs.readFileSync(
            path.join(root, 'data', type, postSlug),
            'utf8'
        );
        const { data } = matter(source);

        return [
            {
                ...data,
                slug: postSlug.replace('.mdx', ''),
            },
            ...allPosts,
        ];
    }, []);
};
