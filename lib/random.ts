export async function getRandomSeed() {
  return (
    await fetch("https://generate-secret.vercel.app/32", {
      next: { revalidate: 30 },
    })
  ).text();
}
