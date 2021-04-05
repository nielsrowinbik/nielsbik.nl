import Image from 'next/image';

export const BusinessCard = () => (
    <div className="prose prose-lg max-w-md mb-28">
        <Image
            alt="Picture of the Niels Bik"
            className="rounded-full"
            height={80}
            priority
            src="/assets/images/niels.jpg"
            width={80}
        />
        <h1>Niels Bik</h1>
        <p>
            <a
                href="//www.linkedin.com/in/nielsrowinbik"
                rel="noopener noreferrer"
                target="_blank"
            >
                linkedin
            </a>
            <span className="mx-2">·</span>
            <a
                href="//github.com/nielsrowinbik"
                rel="noopener noreferrer"
                target="_blank"
            >
                github
            </a>
            <span className="mx-2">·</span>
            <a href="mailto:hey@nielsbik.nl" rel="noopener noreferrer">
                mail
            </a>
        </p>
        <p>
            Niels is a passionate Product Manager from Utrecht, currently
            working for{' '}
            <a
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
