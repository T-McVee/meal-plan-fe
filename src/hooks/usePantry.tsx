import { useMemo } from "react";
import { Ingredient, useIngredients } from "./useIngredients";

import { Measure, useMeasures } from "./useMeasures";

export class Pantry {
  constructor(private _ingredients: Ingredient[]) {}

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

export const usePantry = () => {
  const {
    ingredients: { data, isSuccess, isLoading, isError },
    addIngredient: addIngredientToCache,
  } = useIngredients();

  const { data: measures, isSuccess: isMeasuresSuccess } = useMeasures();

  const pantry = useMemo(() => {
    if (!isSuccess || !isMeasuresSuccess) return null;
    return new Pantry(data!);
  }, [data, measures, isSuccess, isMeasuresSuccess]);

  return {
    pantry,
    isLoading: isLoading || !pantry,
    isError,
  };
};
