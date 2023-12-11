import { Icon } from "./Icon";

export function WorkWidget() {
  return (
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
  );
}
