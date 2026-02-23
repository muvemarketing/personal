import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.text();
  console.log("Contact form submission:", body);
  return NextResponse.json({ ok: true });
}
