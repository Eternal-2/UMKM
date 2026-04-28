import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("New order:", body);
  await new Promise((r) => setTimeout(r, 300));
  return NextResponse.json({ success: true, message: "Pesanan diterima!", orderId: `BS-${Date.now()}` });
}
