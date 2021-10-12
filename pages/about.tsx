import Link from 'next/link';

import { ProRail } from '../components/Logo';

const AboutPage = ({ events }) => (
    <article className="prose">
        <h1>About</h1>
        <p className="leading-normal my-4">
            I currently work as a Product Manager at{' '}
            <a
                href="https://www.prorail.nl"
                rel="noopener noreferrer"
                target="_blank"
            >
                <ProRail />
            </a>{' '}
            where I'm responsible for translating and prioritising business
            needs for Donna, the Dutch railroad sector's primary application for
            capacity planning and allocation.
        </p>
        <p>
            I've outlined more information about my current and previous
            positions, education history, internships, and publications in a
            timeline below. My resume can be found{' '}
            <Link href="/resume">here</Link>.
        </p>
        <h2>Timeline</h2>
    </article>
);

export async function getStaticProps() {
    return { props: { events: [] } };
}

export default AboutPage;
