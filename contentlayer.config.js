import { defineDocumentType, makeSource } from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const computedFields = {
    wordCount: {
        type: 'number',
        resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
};

const ResumeItem = defineDocumentType(() => ({
    name: 'ResumeItem',
    filePathPattern: 'resume/items/*.mdx',
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

const PublicationItem = defineDocumentType(() => ({
    name: 'PublicationItem',
    filePathPattern: 'resume/publications/*.mdx',
    bodyType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        authors: { type: 'string', required: true },
        conference: { type: 'string' },
        year: { type: 'number' },
        location: { type: 'string' },
        pageStart: { type: 'number' },
        pageEnd: { type: 'number' },
        doi: { type: 'string', required: true },
    },
    computedFields,
}));

const contentLayerConfig = makeSource({
    contentDirPath: 'data',
    documentTypes: [PublicationItem, ResumeItem],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
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
