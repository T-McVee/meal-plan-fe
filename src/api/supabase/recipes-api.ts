import { BaseApi } from "./base-api";

class RecipesApi extends BaseApi<any> {
  constructor() {
    super("Recipes");
  }

  // async create(recipe: IRecipe): Promise<void> {
  //   console.log("Recipes IN:", recipe);

  //   const { id, ...ingredientData } = toIngredientData(ingredient);
  //   await super.create(ingredientData);
  // }
}

export const recipesApi = new RecipesApi();

// function toRecipeData(recipe: IRecipe): RecipeData {
//   return {
//     id: recipe.id ?? "",
//
//   };
// }
