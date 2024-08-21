import { z } from "zod";

export enum Measure {
  Grams = "g",
  Milliliters = "ml",
  Each = "Each",
}

export const IngredientRawSchema = z.object({
  id: z.string().nullable(),
  name: z.string({ message: "required" }),
  price: z.string({ message: "required" }).transform((v) => parseFloat(v)),
  size: z.string({ message: "required" }).transform((v) => parseInt(v)),
  measure: z.string({ message: "required" }),
  category: z.string().optional(),
  supplier: z.string().optional(),
  sku: z.string().optional(),
});

export type ingredientRaw = z.infer<typeof IngredientRawSchema>;

export type ingredientPortion = {
  ingredientId: string;
  amount: number;
};

export type recipe = {
  id: string;
  name: string;
  ingredients: ingredientPortion[];
  servings: number;
};

export class Meal {
  constructor(public recipe: recipe) {}

  // get name() { }

  // get numberOfServings() { }

  // get ingredients() { }

  // get totalCost() { }

  // get costPerServing() { }

  // get numberOfServings() { }
}

export enum Category {
  Produce = "Produce",
  Dairy = "Dairy",
  Meat = "Meat",
  Seafood = "Seafood",
  DryGoods = "Dry Goods",
}
