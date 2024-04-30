import { NextResponse } from "next/server";
import { getLatestArticles } from "../fetchBasicNews";

export async function POST(req: Request) {
  const { skip }: any = await req.json();
  const data = await getLatestArticles(skip);
  return NextResponse.json(data);
}
