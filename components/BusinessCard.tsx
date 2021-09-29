import Image from 'next/image';

import { NowPlaying } from './NowPlaying';
import { ProRail } from './Logo';

export const BusinessCard = () => (
    <div className="max-w-md mb-36">
        <Image
            alt="Picture of Niels Bik"
            className="rounded-full"
            height={80}
            priority
            src="/assets/images/niels.jpg"
            width={80}
        />
        <h1 className="text-3xl font-bold my-3">Hey, I'm Niels Bik</h1>
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
        <p className="leading-normal my-4">
            As passionate as I am about being a Product Manager, there is
            nothing I love more than{' '}
            <a
                className="text-blue-600 dark:text-blue-400 hover:underline"
                href="https://www.last.fm/user/nielsrowinbik"
                rel="noopener noreferrer"
                target="_blank"
            >
                music
            </a>
            . I also enjoy doing CrossFit, reading, and{' '}
            <a
                className="text-blue-600 dark:text-blue-400 hover:underline"
                href="https://www.github.com/nielsrowinbik"
                rel="noopener noreferrer"
                target="_blank"
            >
                coding
            </a>{' '}
            for the web.
        </p>
        <p className="leading-normal my-4">
            If you'd like to get in touch with me, the best ways to reach me are
            through{' '}
            <a
                className="text-blue-600 dark:text-blue-400 hover:underline"
                href="https://www.linkedin.com/in/nielsrowinbik"
                rel="noopener noreferrer"
                target="_blank"
            >
                LinkedIn
            </a>{' '}
            or{' '}
            <a
                className="text-blue-600 dark:text-blue-400 hover:underline"
                href="mailto:hey@nielsbik.nl"
                rel="noopener noreferrer"
            >
                e-mail
            </a>
            .
        </p>
        <p className="leading-normal mt-6 empty:mt-0 pt-4 empty:pt-0 border-t empty:border-0">
            <NowPlaying />
        </p>
    </div>
);
