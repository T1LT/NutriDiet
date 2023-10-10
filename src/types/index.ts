import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string | undefined;
  updatedAt: string | undefined;
}

export type nutrientType =
  | "id"
  | "name"
  | "caffeine"
  | "calcium"
  | "calories"
  | "carbohydrates"
  | "cholesterol"
  | "fiber"
  | "folate"
  | "folic_acid"
  | "iron"
  | "magnesium"
  | "monounsaturated_fat"
  | "niacin"
  | "pantothenic_acid"
  | "polyunsaturated_fat"
  | "potassium"
  | "protein"
  | "riboflavin"
  | "saturated_fat"
  | "serving_size"
  | "sodium"
  | "thiamin"
  | "total_fat"
  | "trans_fat"
  | "vitamin_a"
  | "vitamin_b12"
  | "vitamin_b6"
  | "vitamin_c"
  | "vitamin_d"
  | "vitamin_e"
  | "vitamin_k"
  | "water"
  | "zinc";