import { z } from "zod";

export const IngredientSchema = z.object({
  id: z.string().nullable(),
  name: z.string({ message: "required" }),
  cost: z.string({ message: "required" }).transform((v) => parseFloat(v)),
  size: z.string({ message: "required" }).transform((v) => parseInt(v)),
  measure: z.string({ message: "required" }),
  // category: z.string().optional(),
  // supplier: z.string().optional(),
  sku: z.string().optional(),
});

export interface IIngredient extends z.infer<typeof IngredientSchema> {}

export enum Category {
  Produce = "Produce",
  Dairy = "Dairy",
  Meat = "Meat",
  Seafood = "Seafood",
  DryGoods = "Dry Goods",
}
