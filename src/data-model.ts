import { z } from "zod";

export enum UnitOfMeasure {
  Grams = "g",
  Milliliters = "ml",
  Each = "Each",
}

export const IngredientSchema = z.object({
  id: z.string().nullable(),
  name: z.string({ message: "required" }),
  cost: z.string({ message: "required" }).transform((v) => parseFloat(v)),
  size: z.string({ message: "required" }).transform((v) => parseInt(v)),
  measure: z.string({ message: "required" }),
  category: z.string().optional(),
  supplier: z.string().optional(),
  sku: z.string().optional(),
});

export interface IIngredient extends z.infer<typeof IngredientSchema> {}

export type Portion = {
  ingredientId: string;
  amount: number;
};

export type recipe = {
  id: string;
  name: string;
  ingredients: Portion[];
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

export type MeasureData = {
  id: string;
  unit_name: string;
  abbreviation?: string;
};

export type IngredientData = {
  id: string;
  name: string;
  cost: number;
  size: number;
  measure_id: string;
  sku: string | null;
};
