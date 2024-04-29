import { NextResponse } from "next/server";
import { getCountriesInfo } from "../fetchBasicNews";

export async function POST(req: Request) {
  const { first, skip }: any = await   req.json();
  const data = await getCountriesInfo({ first, skip});
  return NextResponse.json(data);
}
