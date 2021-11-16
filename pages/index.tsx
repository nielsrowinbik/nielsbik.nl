import Image from 'next/image';

import { ProRail } from '../components/Logo';
import NowPlaying, { useNowPlaying } from '../components/NowPlaying';

const IndexPage = () => {
    const data = useNowPlaying();

    return (
        <article className="prose max-w-md mx-auto mt-8 md:mt-[25%]">
            <Image
                alt="Picture of Niels Bik"
                className="rounded-full"
                height={80}
                priority
                src="/assets/images/niels.jpg"
                width={80}
            />
            {/* We decrease the size of the h1 by overriding the tailwind typography settings here.
                We also add 2rem of margin-top because tailwind typography would normally margin-bottom
                to the img tag, but since we're using Next.js Image, that doesn't work. */}
            <h1 className="!text-4xl !mt-8">Hey, I'm Niels Bik</h1>
            <p>
                I currently work as a Product Manager at{' '}
                <a
                    href="https://www.prorail.nl"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <ProRail />
                </a>{' '}
                where I'm responsible for Donna, the Dutch railroad sector's
                primary application for capacity allocation, its primary output
                being the timetable. More information about this and previous
                positions as well as education history, publications, and so
                forth is available in my{' '}
                <a
                    href="https://github.com/nielsrowinbik/resume/releases/latest/download/en.pdf"
                    rel="noopener noreferrer"
                >
                    resume
                </a>
                .
            </p>
            <p>
                Outside of work chances are I'm listening to music.
                {!!data && !!data?.isPlaying && (
                    <span>
                        {' '}
                        In fact, I'm listening to some right now - see below!
                    </span>
                )}{' '}
                Other than that I love to read, work out (I do CrossFit), and{' '}
                <a
                    href="https://github.com/nielsrowinbik"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    code for the web
                </a>
                .
            </p>
            <p>
                If you'd like to get in touch,{' '}
                <a
                    href="mailto:hey@nielsbik.nl"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    send me an e-mail
                </a>{' '}
                or message me on{' '}
                <a
                    href="https://www.linkedin.com/in/nielsrowinbik"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    LinkedIn
                </a>
                .
            </p>
            <p className="leading-normal mt-6 empty:mt-0 pt-4 empty:pt-0 border-t empty:border-0">
                <NowPlaying />
            </p>
        </article>
    );
};

export default IndexPage;
