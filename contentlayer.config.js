import { defineDocumentType, makeSource } from 'contentlayer/source-files';

import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

const computedFields = {
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
        type: 'number',
        resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
};

const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: 'blog/*.mdx',
    bodyType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'date', required: true },
        summary: { type: 'string', required: true },
        image: { type: 'string', required: true },
    },
    computedFields,
}));

const OtherPage = defineDocumentType(() => ({
    name: 'OtherPage',
    filePathPattern: '*.mdx',
    bodyType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
    },
    computedFields,
}));

const ResumeItem = defineDocumentType(() => ({
    name: 'ResumeItem',
    filePathPattern: 'resume/*.mdx',
    bodyType: 'mdx',
    fields: {
        category: {
            type: 'enum',
            options: ['education', 'internships', 'work experience'],
            required: true,
        },
        endDate: { type: 'date' },
        logo: { type: 'string', required: true },
        organisation: { type: 'string', required: true },
        startDate: { type: 'date', required: true },
        title: { type: 'string', required: true },
    },
    computedFields,
}));

const contentLayerConfig = makeSource({
    contentDirPath: 'data',
    documentTypes: [Blog, OtherPage, ResumeItem],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            rehypePrism,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['anchor'],
                    },
                },
            ],
        ],
    },
});

export default contentLayerConfig;
