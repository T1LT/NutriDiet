"use client";

import { useEffect, useState } from "react";
import NutritionRow from "./NutritionRow";
import type { NutritionFacts } from "@prisma/client";
import processNutritionData from "@/lib/utils/processNutritionData";
import Loader from "@/components/Loader";

export default function NutritionFacts({
  params,
}: {
  params: { slug: string };
}) {
  const [nutritionData, setNutritionData] = useState<
    NutritionFacts | undefined
  >();
  const [loading, setLoading] = useState(true);
  const id = params.slug;

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/nutritionfacts?id=${id}`);
      const data = await res.json();
      setNutritionData(processNutritionData(data));
      setLoading(false);
    })();
  }, [id]);

  if (!nutritionData || loading) return <Loader />;

  return (
    <div className="h-full flex flex-col gap-5 items-center justify-center">
      <h1 className="font-black text-4xl uppercase text-center px-4">
        {nutritionData?.name}
      </h1>
      <div className="border-4 border-black p-2 divide-y-8 divide-black max-w-sm mx-2">
        {/* HEADING */}
        <div>
          <h1 className="font-black text-4xl">Nutrition Facts</h1>
          <div className="flex justify-between">
            <h2 className="font-bold">Serving Size</h2>
            <h2 className="font-bold">{nutritionData?.serving_size}g</h2>
          </div>
        </div>

        {/* SECTION 1 */}
        <div className="flex justify-between">
          <div>
            <h2 className="font-extrabold">Amount Per Serving</h2>
            <h2 className="font-extrabold">Calories</h2>
          </div>
          <h2 className="flex flex-col-reverse font-black text-4xl">
            {nutritionData?.calories}
          </h2>
        </div>

        {/* SECTION 2 */}
        <div className="divide-y-2 divide-black/30">
          <div className="flex w-full justify-end">
            <h2 className="font-extrabold">% Daily Value*</h2>
          </div>
          <NutritionRow
            nutrient="Total Fat"
            amount={`${nutritionData?.total_fat}g`}
            dailyValue={Math.round((nutritionData.total_fat / 65) * 100)}
          />
          <NutritionRow
            nutrient="Saturated Fat"
            amount={`${nutritionData?.saturated_fat}g`}
            dailyValue={Math.round((nutritionData.saturated_fat / 20) * 100)}
            subrow
            indented
          />
          <NutritionRow
            nutrient="Trans Fat"
            amount={`${nutritionData?.trans_fat}g`}
            subrow
            indented
          />
          <NutritionRow
            nutrient="Cholestrol"
            amount={`${nutritionData?.cholesterol}mg`}
            dailyValue={Math.round((nutritionData.cholesterol / 300) * 100)}
          />
          <NutritionRow
            nutrient="Sodium"
            amount={`${nutritionData?.sodium}mg`}
            dailyValue={Math.round((nutritionData.sodium / 2300) * 100)}
          />
          <NutritionRow
            nutrient="Total Carbohydrate"
            amount={`${nutritionData?.carbohydrates}g`}
            dailyValue={Math.round((nutritionData.carbohydrates / 300) * 100)}
          />
          <NutritionRow
            nutrient="Dietary Fiber"
            amount={`${nutritionData?.fiber}g`}
            dailyValue={Math.round((nutritionData.fiber / 28) * 100)}
            subrow
            indented
          />
          <NutritionRow
            nutrient="Total Sugars"
            amount={`${nutritionData?.sugars}g`}
            dailyValue={Math.round((nutritionData.sugars / 50) * 100)}
            subrow
            indented
          />
          <NutritionRow
            nutrient="Protein"
            amount={`${nutritionData?.protein}g`}
          />
        </div>

        {/* SECTION 3 */}
        <div className="divide-y-2 divide-black/30">
          {nutritionData.vitamin_d !== null && (
            <NutritionRow
              nutrient="Vitamin D"
              amount={`${nutritionData?.vitamin_d}mcg`}
              dailyValue={Math.round((+nutritionData.vitamin_d / 15) * 100)}
              subrow
            />
          )}
          <NutritionRow
            nutrient="Calcium"
            amount={`${nutritionData?.calcium}mg`}
            dailyValue={Math.round((nutritionData.calcium / 1300) * 100)}
            subrow
          />
          {nutritionData.iron !== null && (
            <NutritionRow
              nutrient="Iron"
              amount={`${nutritionData?.iron}mg`}
              dailyValue={Math.round((+nutritionData.iron / 18) * 100)}
              subrow
            />
          )}
          <NutritionRow
            nutrient="Potassium"
            amount={`${nutritionData?.potassium}mg`}
            dailyValue={Math.round((nutritionData.potassium / 4700) * 100)}
            subrow
          />
          <p className="text-sm text-center pt-2 pb-5">
            * The % Daily Value (DV) tells you how much a nutrient in a serving
            of food contributes to a daily diet. 2,000 calories a day is used
            for general nutrition advice.
          </p>
        </div>
      </div>
    </div>
  );
}
