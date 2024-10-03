import { IPortion } from "@/pages/cookbook/cookbook-types";
import { BaseApi } from "./base-api";

class PortionsApi extends BaseApi<IPortion> {
  constructor() {
    super("Portions");
  }

  // async create(portion: IIngredient): Promise<void> {
  //   console.log("Portions IN:", ingredient);

  //   const { id, ...ingredientData } = toIngredientData(ingredient);
  //   await super.create(ingredientData);
  // }
}

export const portionsApi = new PortionsApi();

// function toPortionData(portion: IInPoredient): IngredientData {
//   return {
//     id: ingredient.id ?? "",
//     name: ingredient.name,
//     cost: ingredient.cost,
//     size: ingredient.size,
//     measure_id: ingredient.measure,
//     sku: ingredient.sku ?? null,
//   };
// }
