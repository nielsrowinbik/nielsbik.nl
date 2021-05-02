import BlogPost from '../components/BlogPost';
import { getAllFilesFrontMatter } from '../lib/mdx';

export default function Blog({ posts }) {
    return (
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            {posts.map((frontMatter) => (
                <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog');

    return { props: { posts } };
}
