import { handle } from "@astrojs/cloudflare/handler";

interface Env {
  // Cloudflare Workers Builds "Deploy Hook" URL, stored as a Worker secret.
  DEPLOY_HOOK_URL: string;
}

// Custom Worker entrypoint: Astro's fetch handler plus a scheduled handler.
// The nightly cron (see `triggers.crons` in wrangler.jsonc) POSTs the deploy
// hook, which rebuilds the site so the static /music page picks up fresh
// Last.fm rankings and re-fetched Deezer artwork.
export default {
  fetch: handle,
  async scheduled(_controller: unknown, env: Env): Promise<void> {
    await fetch(env.DEPLOY_HOOK_URL, { method: "POST" });
  },
};
