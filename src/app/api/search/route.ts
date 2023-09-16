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
    const fields = [
      "Calcium",
      "Calories",
      "Carbohydrates",
      "Cholesterol",
      "Fiber",
      "Folate",
      "Folic Acid",
      "Iron",
      "Magnesium",
      "Monounsaturated Fat",
      "Niacin",
      "Pantothenic Acid",
      "Polyunsaturated Fat",
      "Potassium",
      "Protein",
      "Riboflavin",
      "Saturated Fat",
      "Serving Size",
      "Sodium",
      "Sugars",
      "Thiamin",
      "Total Fat",
      "Trans Fat",
      "Vitamin A",
      "Vitamin B12",
      "Vitamin B6",
      "Vitamin C",
      "Vitamin D",
      "Vitamin E",
      "Vitamin K",
      "Water",
      "Zinc"
    ];
    
    // filtering based on search query
    const result = fields.filter(el => el.toLowerCase().includes(input.toLowerCase()));

    // build response using result
    return NextResponse.json(
      result,
      { status: 200 }
    );
  }
}