import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkUnwrapImages],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX(nextConfig);
