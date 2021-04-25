import Image from 'next/image';

export const BusinessCard = () => (
    <div className="max-w-sm mb-36">
        <Image
            alt="Picture of Niels Bik"
            className="rounded-full"
            height={80}
            priority
            src="/assets/images/niels.jpg"
            width={80}
        />
        <h1 className="text-3xl font-bold leading-relaxed">Niels Bik</h1>
        <p className="leading-10">
            <a
                className="text-blue-600 dark:text-blue-400 hover:underline"
                href="//www.linkedin.com/in/nielsrowinbik"
                rel="noopener noreferrer"
                target="_blank"
            >
                linkedin
            </a>
            <span className="mx-2">·</span>
            <a
                className="text-blue-600 dark:text-blue-400 hover:underline"
                href="//github.com/nielsrowinbik"
                rel="noopener noreferrer"
                target="_blank"
            >
                github
            </a>
            <span className="mx-2">·</span>
            <a
                className="text-blue-600 dark:text-blue-400 hover:underline"
                href="mailto:hey@nielsbik.nl"
                rel="noopener noreferrer"
            >
                mail
            </a>
        </p>
        <p className="leading-normal my-2">
            Niels is a passionate Product Manager from Utrecht, currently
            working for{' '}
            <a
                className="text-blue-600 dark:text-blue-400 hover:underline"
                href="//www.prorail.nl"
                rel="noopener noreferrer"
                target="_blank"
            >
                ProRail
            </a>
            . He is responsible for translating and prioritising business needs
            for Donna, the Dutch railroad sector's primary application for
            capacity planning and allocation.
        </p>
    </div>
);
