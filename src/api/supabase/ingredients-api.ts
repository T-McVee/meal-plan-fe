import { IIngredient, IngredientData } from "@/data-model";
import { BaseApi } from "./base-api";

class IngredientsApi extends BaseApi<any> {
  constructor() {
    super("Ingredients");
  }

  async create(ingredient: IIngredient): Promise<void> {
    console.log("ingredient IN:", ingredient);

    const { id, ...ingredientData } = toIngredientData(ingredient);
    await super.create(ingredientData);
  }
}

export const ingredientsApi = new IngredientsApi();

function toIngredientData(ingredient: IIngredient): IngredientData {
  return {
    id: ingredient.id ?? "",
    name: ingredient.name,
    cost: ingredient.cost,
    size: ingredient.size,
    measure_id: ingredient.measure,
    sku: ingredient.sku ?? null,
  };
}
