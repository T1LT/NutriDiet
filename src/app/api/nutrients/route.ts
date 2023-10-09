import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const nutrient = searchParams.get("nutrient");

  if (!nutrient) {
    return NextResponse.json(
      { error: "Invalid nutrient" },
      { status: 400 }  
    );
  }

  const nutrientData = await prisma.nutritionFacts.findMany({
    select: {
      id: true,
      name: true,
      [nutrient]: true
    },
    orderBy: {
      [nutrient]: "desc"
    }
  });

  if (!nutrientData) {
    return NextResponse.json(
      { error: "Invalid nutrient" },
      { status: 400 }  
    );
  }

  return NextResponse.json(nutrientData, { status: 200 });
}