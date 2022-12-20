import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export function ExternalLink(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return <a rel="noopener noreferrer" target="_blank" {...props} />;
}
