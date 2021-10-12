import Image from 'next/image';
import Link from 'next/link';

import { ProRail } from '../components/Logo';
import { useNowPlaying } from '../components/NowPlaying';

const IndexPage = () => {
    const data = useNowPlaying();

    return (
        <article className="prose">
            <header className="flex flex-row items-center justify-between">
                <h1 className="!mb-0">Hey, I'm Niels Bik</h1>
                <Image
                    alt="Picture of Niels Bik"
                    className="rounded-full"
                    height={80}
                    priority
                    src="/assets/images/niels.jpg"
                    width={80}
                />
            </header>
            <p>
                I currently work as a Product Manager at{' '}
                <a
                    href="https://www.prorail.nl"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <ProRail />
                </a>{' '}
                where I'm responsible for translating and prioritising business
                needs for Donna, the Dutch railroad sector's primary application
                for capacity planning and allocation.
            </p>
            <p>
                Learn more about my current and previous positions as well as
                education history, publications, and so forth in my{' '}
                <Link href="/resume">
                    <a>resume</a>
                </Link>
                .
            </p>
            <p>
                Now, I'm passionate about the work I do, but there's nothing I
                love more than music.{' '}
                {!!data && (
                    <span>
                        You can check out what{' '}
                        {data?.isPlaying
                            ? "I'm currently listening to"
                            : 'I listened to last'}{' '}
                        below.
                    </span>
                )}
            </p>
            <p>
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
                If you'd like to get in touch with me, the best ways to reach me
                are through{' '}
                <a
                    href="https://www.linkedin.com/in/nielsrowinbik"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    LinkedIn
                </a>{' '}
                or{' '}
                <a href="mailto:hey@nielsbik.nl" rel="noopener noreferrer">
                    e-mail
                </a>
                .
            </p>
        </article>
    );
};

export default IndexPage;
