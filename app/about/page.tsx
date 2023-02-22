import { Icon } from "@/components/Icon";
import type { Metadata } from "next";
import { getCollectionSize } from "@/lib/discogs";

export const revalidate = 60 * 24;
export const metadata: Metadata = {
  title: "About",
  description: "Product Manager at Stuvia",
  alternates: {
    canonical: "https://nielsbik.nl/about",
  },
};

export default async function AboutPage() {
  const recordCount = await getCollectionSize();

  return (
    <section className="prose prose-neutral text-neutral-800 prose-headings:font-serif dark:prose-invert dark:text-neutral-200">
      <h1>About Me</h1>
      <p>
        Hey, I'm Niels, a Product Manager working remotely from Utrecht, the
        Netherlands.
      </p>
      <p>
        I currently work for <strong>Stuvia</strong>. Having joined recently, my
        current focus is on establishing solid product practices while
        continuing to grow the product itself.
      </p>
      <p>
        Before Stuvia, I was responsible for Donna (used for capacity allocation
        and the creation of the Dutch railroad system's timetable) at{" "}
        <strong>ProRail</strong>.
      </p>
      <hr />
      <p>
        I'm a very curious and result-driven person. I like learning about how
        things work and more importantly: why. Whether it's at work or in
        private, I hold myself and others to a high standard and am capable of
        rallying others around a common goal.
      </p>
      <p>
        Outside of work, I'm constantly searching for new music to listen to
        (even though I do own my {recordCount} favourite albums on vinyl). I
        also love working out (I do CrossFit), reading, and building things
        using the latest (web) technologies.
      </p>
      <div className="mt-8 grid grid-cols-3 gap-2 md:flex-row">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/nielsrowinbik/resume/releases/latest/download/en.pdf"
          className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900"
        >
          <div className="flex items-center">
            <Icon.Doc className="h-5 w-5" />
            <div className="ml-3">Resume</div>
          </div>
          <Icon.Download className="h-4 w-4" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/nielsbik"
          className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900"
        >
          <div className="flex items-center">
            <Icon.LinkedIn className="h-5 w-5" />
            <div className="ml-3">LinkedIn</div>
          </div>
          <Icon.ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/nielsrowinbik"
          className="flex w-full items-center justify-between rounded-lg border border-neutral-200 p-4 text-neutral-800 no-underline transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900"
        >
          <div className="flex items-center">
            <Icon.GitHub className="h-5 w-5" />
            <div className="ml-3">GitHub</div>
          </div>
          <Icon.ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
