import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';

import components from '../../components/MDXComponents';

const BlogPostPage = ({ post }: { post: Blog }) => {
    const Component = useMemo(
        () => getMDXComponent(post.body.code),
        [post.body.code]
    );

    return (
        <article className="prose">
            <h1>{post.title}</h1>
            <Component components={components} />
        </article>
    );
};

export const getStaticPaths = () => ({
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
});

export const getStaticProps = ({ params }) => {
    const post = allBlogs.find((post) => post.slug === params.slug);

    return { props: { post } };
};

export default BlogPostPage;
