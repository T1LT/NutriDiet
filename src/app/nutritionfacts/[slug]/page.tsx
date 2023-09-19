import NutritionRow from "./NutritionRow";

const NutritionFacts = ({ params }: { params: { slug: string } }) => {
  // TODO: USE PARAMS.SLUG TO GET ID
  // TODO: USE ID TO QUERY THE SERVER
  return (
    <div className="h-full flex flex-col gap-4 items-center justify-center">
      <h1 className="font-black text-4xl">Chick-fil-A Chicken Sandwich</h1>
      <div className="border-4 border-black p-2 divide-y-8 divide-black max-w-sm mx-2">
        {/* HEADING */}
        <div>
          <h1 className="font-black text-4xl">Nutrition Facts</h1>
          <div className="flex justify-between">
            <h2 className="font-bold">Serving Size</h2>
            {/* TODO: MAKE THIS DYNAMIC */}
            <h2 className="font-bold">{`100g`}</h2>
          </div>
        </div>

        {/* SECTION 1 */}
        <div className="flex justify-between">
          <div>
            <h2 className="font-extrabold">Amount Per Serving</h2>
            <h2 className="font-extrabold">Calories</h2>
          </div>
          {/* TODO: MAKE THIS DYNAMIC */}
          <h2 className="flex flex-col-reverse font-black text-4xl">{`200`}</h2>
        </div>

        {/* SECTION 2 */}
        <div className="divide-y-2 divide-black/30">
          <div className="flex w-full justify-end">
            <h2 className="font-extrabold">% Daily Value*</h2>
          </div>
          {/* TODO: MAKE ALL OF THESE DYNAMIC */}
          <NutritionRow nutrient="Total Fat" amount="15g" dailyValue="20" />
          <NutritionRow
            nutrient="Saturated Fat"
            amount="1g"
            dailyValue="5"
            subrow
            indented
          />
          <NutritionRow nutrient="Trans Fat" amount="0g" subrow indented />
          <NutritionRow nutrient="Cholestrol" amount="30mg" dailyValue="10" />
          <NutritionRow nutrient="Sodium" amount="650mg" dailyValue="28" />
          <NutritionRow
            nutrient="Total Carbohydrate"
            amount="30g"
            dailyValue="10"
          />
          <NutritionRow
            nutrient="Dietary Fiber"
            amount="4g"
            dailyValue="14"
            subrow
            indented
          />
          <NutritionRow
            nutrient="Total Sugars"
            amount="12g"
            dailyValue="10"
            subrow
            indented
          />
          <NutritionRow nutrient="Protein" amount="15g" />
        </div>

        {/* SECTION 3 */}
        <div className="divide-y-2 divide-black/30">
          <NutritionRow
            nutrient="Vitamin D"
            amount="2mcg"
            dailyValue="10"
            subrow
          />
          <NutritionRow
            nutrient="Calcium"
            amount="260mg"
            dailyValue="20"
            subrow
          />
          <NutritionRow nutrient="Iron" amount="6mg" dailyValue="35" subrow />
          <NutritionRow
            nutrient="Potassium"
            amount="240mg"
            dailyValue="6"
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
};

export default NutritionFacts;
