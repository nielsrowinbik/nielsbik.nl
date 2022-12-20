import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkSectionize from 'remark-sectionize';
import remarkUnwrapImages from 'remark-unwrap-images';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkSectionize, remarkUnwrapImages],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX(nextConfig);
