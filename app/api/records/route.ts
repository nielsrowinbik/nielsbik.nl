import { NextResponse } from "next/server";
import { getCollectionSize } from "@/lib/discogs";

export const revalidate = 60 * 60 * 24;

export async function GET() {
  const collectionSize = await getCollectionSize();

  return NextResponse.json(collectionSize, {
    status: 200,
  });
}
