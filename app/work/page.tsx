import { Icon } from "@/components/Icon";
import type { Metadata } from "next";

export const revalidate = 60 * 24;
export const metadata: Metadata = {
  title: "Work",
  description: "Product Manager at Stuvia",
  alternates: {
    canonical: "https://nielsbik.nl/work",
  },
};

export default async function WorkPage() {
  return (
    <section className="prose prose-neutral text-neutral-800 dark:prose-invert prose-headings:font-serif prose-hr:my-6 prose-hr:border-neutral-100 dark:text-neutral-200 prose-hr:dark:border-neutral-800">
      <h1 className="text-2xl">My work</h1>
      <p>
        Here&apos;s a brief summary of my work career so far. My full resume is
        available to download below.
      </p>
      <hr />
      <h3 className="mb-0">Stuvia</h3>
      <p className="mt-0 text-sm text-neutral-500 dark:text-neutral-400">
        Product Manager
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga
        excepturi voluptatum assumenda minima ipsam nesciunt mollitia. Dolorem
        optio aspernatur tempora eos qui. Doloribus nisi, deleniti eligendi esse
        nam aut!
      </p>
      <p></p>
      <hr />
      <h3 className="mb-0">ProRail</h3>
      <p className="mt-0 text-sm text-neutral-500 dark:text-neutral-400">
        Product Manager
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        nisi iste id nam soluta saepe ex at distinctio quis dolorem hic
        molestias itaque, accusamus repellat, minima temporibus? Vitae, illum
        ullam!
      </p>
      <div className="mt-24 grid grid-cols-1 gap-2 md:grid-cols-3">
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
        {/* <a
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
        </a> */}
      </div>
    </section>
  );
}
