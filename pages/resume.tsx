import { allResumeItems } from '.contentlayer/data';
import type { ResumeItem } from '.contentlayer/types';
import { format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { Fragment } from 'react';

const byStart = (a: ResumeItem, b: ResumeItem) =>
    Date.parse(b.startDate) - Date.parse(a.startDate);

const workFirst = (a: string, b: string): number => {
    if (a === 'work experience') return -1;
    if (b === 'work experience') return 1;

    return a.localeCompare(b);
};

const Item = ({
    body,
    endDate,
    organisation,
    startDate,
    title,
}: ResumeItem) => {
    const Component = getMDXComponent(body.code);
    return (
        <>
            <header>
                <h3>
                    {title} at {organisation}
                </h3>
                <p>
                    <i>
                        {format(Date.parse(startDate), 'MMMM yyyy')}
                        {' – '}
                        {!!endDate
                            ? format(Date.parse(endDate), 'MMMM yyyy')
                            : 'present'}
                    </i>
                </p>
            </header>
            <Component />
        </>
    );
};

const ResumePage = ({ items }: { [category: string]: ResumeItem[] }) => (
    <article className="prose print:prose-sm">
        <h1 className="print:hidden">Resume</h1>
        <h1 className="hidden print:inline-block">Niels Rowin Bik</h1>
        <p>Passionate Product Manager from Utrecht, The Netherlands.</p>
        {Object.keys(items)
            .sort(workFirst)
            .map((category) => (
                <Fragment key={category}>
                    <h2 className="capitalize-first">{category}</h2>
                    {items[category].sort(byStart).map((item: ResumeItem) => (
                        <Item key={item.slug} {...item} />
                    ))}
                </Fragment>
            ))}
    </article>
);

const groupBy = (xs: any[], key: string) =>
    xs.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});

export const getStaticProps = () => ({
    props: { items: groupBy(allResumeItems, 'category') },
});

export default ResumePage;
