import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const fontData = await font;

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-start justify-center">
        <div tw="mx-[190px] flex whitespace-pre-wrap font-serif text-9xl leading-[120px] tracking-tighter text-black">
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Kaisei Tokumin",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
