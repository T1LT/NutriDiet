import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
  const formData = await req.formData();
  const input = formData.get("input") as string;
  const inputType = formData.get("inputType") as string;

  if (!input) {
    return NextResponse.json(
      { error: "Missing input" },
      { status: 400 },
    );
  }

  if (inputType === "Food Item") {
    // prisma call to search by input text
    const result = await prisma.nutritionFacts.findMany({
      where: {
        name: {
          contains: input,
          mode: 'insensitive',
        },
      },
    });

    // build response using result
  } else {
    // prisma call to get column names
    // const cols = Prisma.dmmf.datamodel.models.map(model => [model.name, model.fields.map(a => a.name)]);
    
    // build response using cols
  }
}