import { Icon } from "@/components/Icon";
import Image from "next/image";
import { ListensStat } from "@/components/ListensStat";
import { NowPlayingStat } from "@/components/NowPlayingStat";
import { RecordsStat } from "@/components/RecordsStat";
import avatar from "./niels.jpg";
import { getCollectionSize } from "@/lib/discogs";
import { getNowPlaying } from "@/lib/spotify";
import { getScrobbleCount } from "@/lib/lastfm";
import Balancer from "react-wrap-balancer";

export const revalidate = 60;

export default async function HomePage() {
  const nowPlaying = await getNowPlaying();
  const scrobbleCount = await getScrobbleCount();
  const collectionSize = await getCollectionSize();

  return (
    <section className="prose prose-neutral text-neutral-800 dark:prose-invert prose-headings:font-serif dark:text-neutral-200">
      <h1>Niels Bik</h1>
      <Balancer as="p">
        Hey, I&apos;m Niels. I&apos;m a{" "}
        <strong>Product Manager at Stuvia</strong> where I work to make buying
        and selling study materials easy and fast.
      </Balancer>
      <div className="grid grid-flow-row gap-8 md:grid-cols-[100px_auto]">
        <Image
          alt="Niels Bik"
          className="aspect-square rounded-full object-cover object-top grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="not-prose grid grid-flow-row gap-y-2 text-neutral-500 dark:text-neutral-400">
          <NowPlayingStat fallbackData={nowPlaying} />
          <ListensStat fallbackData={scrobbleCount} />
          <RecordsStat fallbackData={collectionSize} />
        </div>
      </div>
      <Balancer as="p">
        I am incredibly passionate about music. Other than that I enjoy coffee,
        reading, working out (I do CrossFit), and building web-apps in my spare
        time.
      </Balancer>
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
