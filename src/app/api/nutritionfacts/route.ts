import { NextResponse } from "next/server";
// import { NextApiRequest } from "next";
import prisma from "@/lib/prismadb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  // const id = req.query.id;

  if (!id) {
    return NextResponse.json(
      { error: "Invalid item" },
      { status: 400 }  
    );
  }

  const nutritionData = await prisma.nutritionFacts.findUnique({
    where: { id: id }
  });

  if (!nutritionData) {
    return NextResponse.json(
      { error: "Invalid item" },
      { status: 400 }  
    );
  }

  return NextResponse.json(nutritionData, { status: 200 });
}