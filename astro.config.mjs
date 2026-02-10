import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import favicons from "astro-favicons";

export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Inter",
        weights: ["100 900"],
        cssVariable: "--font-inter",
      },
      {
        provider: fontProviders.local(),
        name: "Kaisei Tokumin",
        options: {
          variants: [
            {
              weight: 400,
              style: "normal",
              src: ["./src/assets/fonts/kaisei-tokumin-latin-400-normal.woff2"],
            },
            {
              weight: 700,
              style: "normal",
              src: ["./src/assets/fonts/kaisei-tokumin-latin-700-normal.woff2"],
            },
          ],
        },
        cssVariable: "--font-kaisei-tokumin",
      },
    ],
  },
  output: "static",
  adapter: vercel({
    output: "serverless",
  }),
  site: "https://nielsbik.nl",
  integrations: [favicons(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
