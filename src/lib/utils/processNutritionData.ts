import { NutritionFacts } from "@prisma/client";

export default function processNutritionData(data: NutritionFacts) {
  let { 
    id,
    name,
    serving_size,
    calories,
    total_fat,
    saturated_fat,
    trans_fat,
    cholesterol,
    sodium,
    carbohydrates,
    fiber,
    sugars,
    protein,
    vitamin_d,
    calcium,
    iron,
    potassium,
    ...rest
  } = data;

  total_fat = (total_fat / 1000 > 0.01) ? +((total_fat / 1000).toFixed(2)) : 0;
  saturated_fat = saturated_fat / 1000 > 0.01 ? +((saturated_fat / 1000).toFixed(2)) : 0;
  trans_fat = trans_fat / 1000 > 0.01 ? +((trans_fat / 1000).toFixed(2)) : 0;
  carbohydrates = carbohydrates / 1000 > 0.01 ? +((carbohydrates / 1000).toFixed(2)) : 0;
  fiber = fiber / 1000 > 0.01 ? +((fiber / 1000).toFixed(2)) : 0;
  sugars = sugars / 1000 > 0.01 ? +((sugars / 1000).toFixed(2)) : 0;
  protein = protein / 1000 > 0.01 ? +((protein / 1000).toFixed(2)) : 0;
  if (vitamin_d) {
    vitamin_d = +vitamin_d / 1000 > 0.01 ? +((+vitamin_d / 1000).toFixed(2)) : 0;
  }

  return { 
    id,
    name,
    serving_size,
    calories,
    total_fat,
    saturated_fat,
    trans_fat,
    cholesterol,
    sodium,
    carbohydrates,
    fiber,
    sugars,
    protein,
    vitamin_d,
    calcium,
    iron,
    potassium,
    ...rest
  }
};