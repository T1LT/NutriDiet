export default function parseNutrient(value: number, nutrient: string): string {
  switch (nutrient) {
    case "calories":
      return `${value}cal`

    case "total_fat":
      return `${(+value / 1000).toFixed(2)}g`

    case "monounsaturated_fat":
      return `${(+value / 1000).toFixed(2)}g`

    case "polyunsaturated_fat":
      return `${(+value / 1000).toFixed(2)}g`

    case "caffeine":
      return `${value}mg`

    case "water":
      return `${(+value / 1000).toFixed(2)}g`
    
    case "saturated_fat":
      return `${(+value / 1000).toFixed(2)}g`

    case "trans_fat":
      return `${value}mg`

    case "cholestrol":
      return `${value}mg`

    case "carbohydrates":
      return `${(+value / 1000).toFixed(2)}g`

    case "fiber":
      return `${(+value / 1000).toFixed(2)}g`

    case "sugars":
      return `${(+value / 1000).toFixed(2)}g`

    case "protein":
      return `${(+value / 1000).toFixed(2)}g`

    case "vitamin_a":
      return `${(+value * 1000).toFixed(2)}mcg`

    case "vitamin_b12":
      return `${(+value * 1000).toFixed(2)}mcg`

    case "vitamin_b6":
      return `${value.toFixed(2)}mg`

    case "vitamin_c":
      return `${value.toFixed(2)}mg`

    case "vitamin_d":
      return `${(+value * 1000).toFixed(2)}mcg`

    case "vitamin_e":
      return `${value.toFixed(2)}mg`

    case "vitamin_k":
      return `${(+value * 1000).toFixed(2)}mcg`

    case "sodium":
      return `${value}mg`

    case "folate":
      return `${(+value * 1000).toFixed(2)}mcg`

    case "folic_acid":
      return `${(+value * 1000).toFixed(2)}mcg`

    case "niacin":
      return `${value.toFixed(2)}mg`

    case "pantothenic_acid":
      return `${value.toFixed(2)}mg`

    case "riboflavin":
      return `${value.toFixed(2)}mg`

    case "thiamin":
      return `${value.toFixed(2)}mg`

    case "calcium":
      return `${value}mg`

    case "iron":
      return `${value}mg`

    case "magnesium":
      return `${value}mg`

    case "potassium":
      return `${value}mg`

    case "zinc":
      return `${value}mg`

    default:
      return `${value}mg`;
  }
}