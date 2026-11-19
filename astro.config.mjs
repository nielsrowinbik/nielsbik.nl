import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders, sessionDrivers } from "astro/config";

// import favicons from "astro-favicons";

// Astro config doesn't read .env files, so load the local one ourselves. In CI
// the variable comes from the build environment and the file doesn't exist.
try {
  process.loadEnvFile(".env.local");
} catch {}
const { KOITO_URL } = process.env;

export default defineConfig({
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
  adapter: cloudflare({ imageService: "compile" }),
  image: {
    remotePatterns: KOITO_URL ? [{ hostname: new URL(KOITO_URL).hostname }] : [],
  },
  session: { driver: sessionDrivers.null() },
  site: "https://nielsbik.nl",
  integrations: [/*favicons(),*/ sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
