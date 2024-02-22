import { Icon } from "./Icon";

export function ConnectWidget() {
  return (
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
  );
}
