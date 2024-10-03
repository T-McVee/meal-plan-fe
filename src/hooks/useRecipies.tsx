import { useQuery } from "@tanstack/react-query";
import { Pantry } from "./usePantry";
import { recipesApi } from "@/api/supabase/recipes-api";
import { CacheKeys } from "./cache-keys";
import { Measure, useMeasures } from "./useMeasures";
import { RecipeData } from "@/data-model";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IRecipe, RecipeSchema } from "@/pages/cookbook/cookbook-types";

export class Recipe {
  constructor(private _recipe: RecipeData, private _measures: Measure[]) {}

  get id() {
    return this._recipe.id;
  }

  get name() {
    return this._recipe.name;
  }

  get servings() {
    return this._recipe.servings;
  }

  get yield() {
    return this._recipe.yield;
  }

  get measure() {
    return this._measures.find((m) => m.id === this._recipe.measure_id)?.name;
  }
}

export const useRecipes = () => {
  const { data: measures, isSuccess: isMeasuresSuccess } = useMeasures();

  const recipes = useQuery({
    queryKey: [CacheKeys.RECIPES],
    queryFn: async () => {
      const recipesData = await recipesApi.getAll();
      console.log("recipesData", recipesData);

      const recipes = recipesData.map(
        (recipe) => new Recipe(recipe, measures!)
      );
      return recipes;
    },
    enabled: isMeasuresSuccess,
  });

  const newRecipeForm = useForm<IRecipe>({
    resolver: zodResolver(RecipeSchema),
    defaultValues: {
      name: "",
      ingredients: [
        {
          ingredientId: "",
          amount: "",
        },
      ],
      servings: 1,
    },
  });

  return { recipes, newRecipeForm };
};

/* 
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
}); */
