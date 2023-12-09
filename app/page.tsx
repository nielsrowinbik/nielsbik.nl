import { Icon } from "@/components/Icon";
import Image from "next/image";
import { ListensStat } from "@/components/ListensStat";
import { NowPlayingStat, NotPlaying } from "@/components/NowPlayingStat";
import { RecordsStat } from "@/components/RecordsStat";
import avatar from "./niels.jpg";
import Link from "next/link";
import { Suspense } from "react";

export const revalidate = 60;

export default function HomePage() {
  return (
    <section className="prose prose-neutral text-neutral-800 dark:prose-invert prose-headings:font-serif dark:text-neutral-200">
      <h1 className="text-2xl">Hey, I&apos;m Niels 👋</h1>
      <p>
        I&apos;m a Product Manager at Stuvia where I{" "}
        <Link href="/work">work</Link> (mostly remotely from Utrecht, The
        Netherlands) to make buying and selling study materials easy and fast.
      </p>
      <div className="grid grid-flow-row items-center gap-5 md:grid-cols-[125px_auto]">
        <Image
          alt="Niels Bik"
          className="aspect-square rounded-full object-cover object-top grayscale"
          src={avatar}
          placeholder="blur"
          width={125}
          priority
        />
        <div className="not-prose grid h-[100px] grid-flow-row gap-y-2 text-neutral-500 dark:text-neutral-400">
          <Suspense fallback={<NowPlayingStat.Skeleton />}>
            {/* @ts-expect-error */}
            <NowPlayingStat />
          </Suspense>
          <Suspense fallback={<ListensStat.Skeleton />}>
            {/* @ts-expect-error */}
            <ListensStat />
          </Suspense>
          <Suspense fallback={<RecordsStat.Skeleton />}>
            {/* @ts-expect-error */}
            <RecordsStat />
          </Suspense>
        </div>
      </div>
      <p>
        I&apos;m a very curious and result-driven person. I like learning about
        how things work and more importantly: why. Whether it&apos;s at work or
        in private, I hold myself and others to a high standard and am capable
        of rallying others around a common goal.
      </p>
      <p>
        Outside of work, I&apos;m constantly searching for new music to listen
        to (even though I do own some of my favourite albums on vinyl). I also
        love working out (I do CrossFit), reading, and building things using the
        latest (web) technologies.
      </p>
      <ul className="not-prose flex list-none flex-col space-x-0 space-y-2 p-0 text-neutral-500 dark:text-neutral-400 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center gap-2 transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/nielsbik"
          >
            <Icon.ArrowUpRight className="h-5 w-5" />
            <p className="h-7">connect on linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:hey@nielsbik.nl"
          >
            <Icon.ArrowUpRight className="h-5 w-5" />
            <p className="h-7">send me an email</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
