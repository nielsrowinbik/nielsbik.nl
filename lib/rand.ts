export async function getRandomSeed() {
  return await (
    await fetch("https://generate-secret.vercel.app/16", { cache: "no-store" })
  ).text();
}
