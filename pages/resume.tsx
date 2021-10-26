import { allPublicationItems, allResumeItems } from '.contentlayer/data';
import type {
    PublicationItem as Publication,
    ResumeItem as Item,
} from '.contentlayer/types';
import { Fragment } from 'react';

import ResumeItem from '../components/ResumeItem';
import PublicationItem from '../components/PublicationItem';
import { byStart, byYear, groupBy, workFirst } from '../lib/helpers';

const ResumePage = ({
    items,
    publications,
}: {
    items: Record<string, Item[]>;
    publications: Publication[];
}) => (
    <article className="prose">
        {/* TODO: Add export button that downloads a PDF */}
        <h1>
            <span className="hidden print:inline">Niels Rowin Bik</span>
            <span className="print:hidden">Resume</span>
        </h1>
        {/* <p>TODO: Add short summary</p> */}
        {Object.keys(items)
            .sort(workFirst)
            .map((category) => (
                <Fragment key={category}>
                    <h2
                        className="capitalize-first"
                        id={category.toLowerCase().replace(' ', '-')}
                    >
                        {category}
                    </h2>
                    {items[category].sort(byStart).map((item) => (
                        <ResumeItem key={item.slug} {...item} />
                    ))}
                </Fragment>
            ))}
        <h2 className="capitalize-first" id="publications">
            Publications
        </h2>
        <ul>
            {publications.sort(byYear).map((item) => (
                <PublicationItem key={item.slug} {...item} />
            ))}
        </ul>
    </article>
);

const getStaticProps = () => ({
    props: {
        items: groupBy(allResumeItems, 'category'),
        publications: allPublicationItems,
    },
});

export { getStaticProps };
export default ResumePage;
