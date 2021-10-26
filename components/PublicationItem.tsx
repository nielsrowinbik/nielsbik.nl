import type { PublicationItem as Publication } from '.contentlayer/types';
import { getMDXComponent } from 'mdx-bundler/client';

import components from './MDXComponents';

const PublicationItem = ({
    authors,
    body,
    conference,
    doi,
    location,
    pageStart,
    pageEnd,
    title,
    year,
}: Publication) => {
    const Component = getMDXComponent(body.code);

    return (
        <li>
            <span>{`${authors}, `}</span>
            <span>{`"${title}," `}</span>
            <i>{`${conference}, `}</i>
            <span>{`${year}, `}</span>
            <span>{`${location}, `}</span>
            <span>{`pp. ${pageStart}-${pageEnd}, `}</span>
            <span>{`doi: `}</span>
            <a href={`https://doi.org/${doi}`}>{doi}</a>
            <span>.</span>
        </li>
    );
};

export default PublicationItem;
