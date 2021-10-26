import type { ResumeItem as Item } from '.contentlayer/types';
import { formatDistanceStrict, format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';

import components from './MDXComponents';

const ResumeItem = ({
    body,
    endDate,
    organisation,
    slug,
    startDate,
    title,
}: Item) => {
    const Component = getMDXComponent(body.code);
    const start = Date.parse(startDate);
    const end = endDate ? Date.parse(endDate) : Date.now();

    return (
        <>
            <header>
                <h3 className="!mb-0" id={slug}>
                    {title} at {organisation}
                </h3>
                <p>
                    <i className="!mt-0">
                        {format(start, 'MMMM yyyy')}
                        {' – '}
                        {!!endDate ? format(end, 'MMMM yyyy') : 'present'}
                        {' ('}
                        {formatDistanceStrict(end, start)}
                        {')'}
                    </i>
                </p>
            </header>
            <Component components={components} />
        </>
    );
};

export default ResumeItem;
