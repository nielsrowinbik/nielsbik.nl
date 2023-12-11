import type { MDXComponents } from "mdx/types";
import { ImageProps } from "next/image";
import Link from "next/link";
import { ReactNode, createElement } from "react";
import { highlight } from "sugar-high";
import Image from "next/image";

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage({ alt, ...props }: ImageProps) {
  return <Image alt={alt} className="rounded-lg" {...props} />;
}

type CalloutProps = {
  children: ReactNode;
  emoji: ReactNode;
};

function Callout({ emoji, children }: CalloutProps) {
  return (
    <div className="my-8 flex rounded-lg border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mr-4 flex w-4 items-center">{emoji}</div>
      <div className="callout w-full">{children}</div>
    </div>
  );
}

function Code({
  children,
  ...props
}: {
  children?: ReactNode;
  [key: string]: any;
}) {
  if (typeof children !== "string") return null;

  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/-+$/, ""); // Remove any - at the end of the string
}

function createHeading(level: number) {
  return function Heading({ children }: { children?: ReactNode }) {
    if (typeof children !== "string" || level === 1) {
      return createElement(`h${level}`, {}, children);
    }

    const slug = slugify(children);

    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    a: CustomLink,
    Callout,
    code: Code,
  };
}
