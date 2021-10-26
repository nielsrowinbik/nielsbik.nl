import Link from 'next/link';

import { useNowPlaying } from '../components/NowPlaying';

const AboutPage = () => {
    const data = useNowPlaying();

    return (
        <article className="prose max-w-lg xl:max-w-6xl mx-auto pt-28 xl:pt-52">
            <section className="xl:grid grid-cols-2 gap-10 space-y-12">
                <div className="flex items-center">
                    <img
                        alt="Picture of Niels Bik"
                        className="rounded-2xl shadow-2xl !m-0"
                        height="auto"
                        src="/assets/images/niels.jpg"
                        width="100%"
                    />
                </div>
                <div className="flex items-center">
                    <div>
                        <h1 className="mt-14 xl:mt-0">
                            I'm Niels, a Product Manager working for{' '}
                            <a
                                href="https://www.prorail.nl"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                ProRail
                            </a>
                            .
                        </h1>
                        <p>
                            I'm currently responsible for translating and
                            prioritising business needs for Donna, the Dutch
                            railroad sector's primary application for capacity
                            planning and allocation. The rest of my professional
                            history is available in my{' '}
                            <Link href="/resume">
                                <a>resume</a>
                            </Link>
                            .
                        </p>
                        <p>
                            When I'm not working chances are I'm listening to
                            music –{' '}
                            {!!data && (
                                <span>
                                    check out what{' '}
                                    {data?.isPlaying
                                        ? "I'm currently listening to"
                                        : 'I listened to last'}{' '}
                                    below.
                                </span>
                            )}{' '}
                            I also enjoy doing CrossFit, reading, and{' '}
                            <a
                                href="https://www.github.com/nielsrowinbik"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                coding
                            </a>{' '}
                            for the web.
                        </p>
                        <p>
                            The best ways to get in touch are through{' '}
                            <a
                                href="https://www.linkedin.com/in/nielsrowinbik"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                LinkedIn
                            </a>{' '}
                            or{' '}
                            <a
                                href="mailto:hey@nielsbik.nl"
                                rel="noopener noreferrer"
                            >
                                e-mail
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default AboutPage;
