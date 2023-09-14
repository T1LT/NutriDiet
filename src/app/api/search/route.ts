import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const input = formData.get("input");
  const inputType = formData.get("inputType");

  if (!input) {
    return NextResponse.json(
      { error: "Missing input" },
      { status: 400 },
    );
  }

  // TODO: CALL TO PRISMA
  // if (inputType === "Food Item") {
  //    // make prisma call to match input
  // } else {
  //    // make prisma call to get column names
  // }
}