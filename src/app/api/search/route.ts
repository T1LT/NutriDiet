import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(req: Request) {
  const formData = await req.formData();
  const input = formData.get("input") as string;
  const inputType = formData.get("inputType") as string;

  if (inputType === "Food Item") {
    // prisma call to search by input text
    const rawResult = await prisma.nutritionFacts.findMany({
      select: { id: true, name: true },
      where: {
        name: {
          contains: input,
          mode: 'insensitive',
        },
      },
    });

    const result = rawResult.map(el => [el.id, el.name]);

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