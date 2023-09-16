import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
  const formData = await req.formData();
  const input = formData.get("input") as string;
  const inputType = formData.get("inputType") as string;

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
    return NextResponse.json(
      result,
      { status: 200 }
    );
  } else {
    // prisma call to get column names
    const fields = Prisma.dmmf.datamodel.models.map(model => model.fields.map(a => a.name))[2].slice(3);
    
    // filtering based on search query
    const rawResult = fields.filter(el => el.includes(input.toLowerCase()));

    // parse the result
    const result = rawResult.map(el => el.split("_").map(el => el[0].toUpperCase() + el.substring(1)).join(" "));

    // build response using result
    return NextResponse.json(
      result,
      { status: 200 }
    );
  }
}