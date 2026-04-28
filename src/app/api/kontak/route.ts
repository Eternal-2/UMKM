import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("New contact:", body);
  return NextResponse.json({ success: true, message: "Pesan terkirim!" });
}
