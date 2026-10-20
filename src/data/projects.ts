import type { ImageMetadata } from "astro";

// Add a screenshot or video by importing it from `src/assets/projects/` and
// assigning it to `image` (an `ImageMetadata` import) or `video` (a URL string).
// import qoffeetime from "@/assets/projects/qoffeetime.png";

export interface Project {
  title: string;
  subtitle: string;
  href: string;
  image?: ImageMetadata;
  video?: string;
}

export const projects: Project[] = [
  {
    title: "Qoffeetime",
    subtitle: "Placeholder subtitle — describe the project here.",
    href: "https://qoffeetime.app",
  },
  {
    title: "Saezuri",
    subtitle: "Placeholder subtitle — describe the project here.",
    href: "https://saezuri.app",
  },
];
