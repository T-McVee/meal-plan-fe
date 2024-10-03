import { z } from "zod";

export const PortionSchema = z.object({
  ingredientId: z.string(),
  amount: z.number().int().positive().or(z.string()),
});

export interface IPortion extends z.infer<typeof PortionSchema> {}

export const RecipeSchema = z.object({
  id: z.string().nullable(),
  name: z.string({ message: "required" }),
  ingredients: z.array(PortionSchema),
  servings: z.number().int().positive(),
});

export interface IRecipe extends z.infer<typeof RecipeSchema> {}
