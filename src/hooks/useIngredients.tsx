import { Measure, ingredientRaw } from "@/data-model";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export class Pantry {
  constructor(private _ingredients: ingredientRaw[]) {}

  addIngredient(ingredient: ingredientRaw) {
    this._ingredients = [...this._ingredients, ingredient];
  }

  removeIngredient(ingredient: ingredientRaw) {
    this._ingredients = this.ingredients.filter((i) => i.id !== ingredient.id);
  }

  get ingredients() {
    return this._ingredients;
  }

  // get ingredientById() { }

  // get ingredientByName() { }

  // get ingredientByCategory() { }

  // get ingredientsBySupplier() { }

  // get ingredientBySku() { }

  // get ingredientByPriceRange() { }
}

const ingredients: ingredientRaw[] = [
  {
    id: "1",
    name: "Eggs",
    price: 8.2,
    size: 12,
    measure: Measure.Each,
  },
  {
    id: "2",
    name: "Bananas",
    price: 0.87,
    size: 1,
    measure: Measure.Each,
  },
];

const ingredientsPromise = new Promise<ingredientRaw[]>((resolve) => {
  const pantry = ingredients;
  setTimeout(() => {
    resolve(pantry);
  }, 1000);
});

export const useIngredients = () => {
  const results = useQuery({
    queryKey: ["ingredients"],
    queryFn: async () => {
      const ingredients = await ingredientsPromise;

      return ingredients;
    },
  });

  return results;
};
