import { recipe } from "@/data-model";
import { useQuery } from "@tanstack/react-query";
import { Pantry } from "./usePantry";

export class Cookbook {
  constructor(private _recipes: recipe[], private _pantry: Pantry) {}

  // get recipes() {
  //   return this._recipes.map((recipe) => ({
  //     ...recipe,
  //     cost: this.recipeCost(recipe),
  //   }));
  // }

  // recipeCost(recipe: recipe) {
  //   return recipe.ingredients
  //     .reduce((acc, ingredientPortion) => {
  //       const ingredient = this._pantry.ingredients.find(
  //         (i) => i.id === ingredientPortion.ingredientId
  //       );

  //       const portionSize = ingredientPortion.amount;
  //       const portionCost =
  //         ingredient!.price * (portionSize / ingredient!.size);

  //       return acc + portionCost;
  //     }, 0)
  //     .toFixed(2);
  // }

  // addRecipe(recipe: recipe) {}

  // removeRecipe(recipe: recipe) {}

  // updateRecipe(recipe: recipe) {}

  // get recipeById() {}

  // get recipeByName() {}

  // get recipesByIngredient() {}

  // get recipesByCategory() {}

  // get recipesByServings() {}

  // get recipesByCost() {}

  // get recipesByPrepTime() {}

  // get recipesByCookTime() {}
}

const recipesData: recipe[] = [
  {
    id: "1",
    name: "Banana pancakes",
    servings: 4,
    ingredients: [
      {
        ingredientId: "1",
        amount: 2,
      },
      {
        ingredientId: "2",
        amount: 1,
      },
    ],
  },
];

const recipesPromise = new Promise<recipe[]>((resolve) => {
  const recipes = recipesData;
  setTimeout(() => {
    resolve(recipes);
  }, 1000);
});

export const useCookbook = (pantry: Pantry | null) => {
  const cookbook = useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      console.log("pantry", pantry);

      const recipes = await recipesPromise;
      const cookbook = new Cookbook(recipes, pantry!);
      return cookbook;
    },
    enabled: !!pantry,
  });

  return cookbook;
};
