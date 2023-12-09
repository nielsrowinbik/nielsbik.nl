import "@/styles/global.css";

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { getBlogPosts } from "@/lib/blog";

const kaisei = localFont({
  src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Niels Bik",
    template: "%s | Niels Bik",
  },
  description: "Product Manager based in Utrecht, the Netherlands",
  alternates: {
    canonical: "https://nielsbik.nl",
  },
  openGraph: {
    title: "Niels Bik",
    description: "Product Manager based in Utrecht, the Netherlands",
    url: "https://nielsbik.nl",
    siteName: "Niels Bik",
    images: [
      {
        url: "https://nielsbik.nl/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Niels Bik",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allBlogs = getBlogPosts();

  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-black dark:bg-[#111010] dark:text-white",
        kaisei.variable,
      )}
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased lg:mx-auto">
        <Navbar blogPosts={allBlogs.length} />
        <main className="flex min-w-0 flex-auto flex-col px-2">{children}</main>
      </body>
    </html>
  );
}
