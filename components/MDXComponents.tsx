import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import { ExternalLink } from "./ExternalLink";
import Link from "next/link";

function CustomLink(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  const isInternalLink =
    props.href && (props.href.startsWith("/") || props.href.startsWith("#"));

  if (isInternalLink) {
    return <Link href={props.href!}>{props.children}</Link>;
  }

  return <ExternalLink {...props} />;
}

export const MDXComponents = {
  a: CustomLink,
};
