import { allBlogs } from '.contentlayer/data';
import type { Blog } from '.contentlayer/types';
import Link from 'next/link';

const BlogLandingPage = ({ posts }: { posts: Blog[] }) => (
    <article className="prose">
        <h1>Blog</h1>
        <ul>
            {posts.map(({ slug, summary, title }) => (
                <li key={slug}>
                    <Link href={`/blog/${slug}`}>
                        <a>
                            <h3>{title}</h3>
                            <p>{summary}</p>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    </article>
);

export const getStaticProps = () => ({ props: { posts: allBlogs } });

export default BlogLandingPage;
