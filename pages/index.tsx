import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

import { ProRail } from '../components/Logo';
import NowPlaying, { useNowPlaying } from '../components/NowPlaying';

const ProRailLink = () => (
    <a href="https://www.prorail.nl" rel="noopener noreferrer" target="_blank">
        <ProRail />
    </a>
);

const IndexPage = () => {
    const data = useNowPlaying();
    const {
        i18n: { language },
        t,
    } = useTranslation('home');

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
            <h1 className="!text-4xl !mt-8">{t('greeting')}</h1>
            <p>
                <Trans i18nKey="jobAndResume" t={t}>
                    I currently work as a Product Manager at
                    <ProRailLink />, where I'm responsible for Donna (the Dutch
                    railroad sector's primary application for capacity
                    allocation, its primary output being the timetable). More
                    information about this and previous positions as well as
                    education history, publications, and so forth is available
                    in my{' '}
                    <a
                        href={`https://github.com/nielsrowinbik/resume/releases/latest/download/${language}.pdf`}
                        rel="noopener noreferrer"
                    >
                        resume
                    </a>
                    .
                </Trans>
            </p>
            <p>
                {t('musicIntro')}{' '}
                {!!data && !!data?.isPlaying && (
                    <>
                        <span>{t('musicPlaying')}</span>{' '}
                    </>
                )}
                <Trans i18nKey="otherHobbies" t={t}>
                    Other than that I love to read, work out (I do CrossFit),
                    and{' '}
                    <a
                        href="https://github.com/nielsrowinbik"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        code for the web
                    </a>
                    .
                </Trans>
            </p>
            <p>
                <Trans i18nKey="contact" t={t}>
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
                </Trans>
            </p>
            <p className="leading-normal mt-6 empty:mt-0 pt-4 empty:pt-0 border-t empty:border-0">
                <NowPlaying />
            </p>
        </article>
    );
};

const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['home'])),
    },
});

export default IndexPage;
export { getStaticProps };
