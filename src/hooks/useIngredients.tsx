import { ingredientsApi } from "@/api/supabase/ingredients-api";
import { IngredientData } from "@/data-model";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CacheKeys } from "./cache-keys";
import { Measure, useMeasures } from "./useMeasures";
import { useMemo } from "react";
import { Pantry } from "./usePantry";
import { IIngredient } from "@/pages/pantry/ingredient-types";

export class Ingredient implements IIngredient {
  constructor(
    private _ingredient: IngredientData,
    private _measures: Measure[]
  ) {}

  get id() {
    return this._ingredient.id;
  }

  get name() {
    return this._ingredient.name;
  }

  get cost() {
    return this._ingredient.cost;
  }

  get size() {
    return this._ingredient.size;
  }

  get measure() {
    return (
      this._measures.find((m) => m.id === this._ingredient.measure_id)?.name ??
      ""
    );
  }

  get measureAbbreviation() {
    return (
      this._measures.find((m) => m.id === this._ingredient.measure_id)
        ?.shortName ?? ""
    );
  }

  get sku() {
    return this._ingredient.sku ?? undefined;
  }
}

export const useIngredients = () => {
  const queryClient = useQueryClient();

  const { data: measures, isSuccess: isMeasuresSuccess } = useMeasures();

  const ingredients = useQuery({
    queryKey: [CacheKeys.INGREDIENTS],
    queryFn: async () => {
      const data = await ingredientsApi.getAll();
      const ingredients = data.map(
        (ingredient) => new Ingredient(ingredient, measures!)
      );

      return ingredients;
    },
    enabled: isMeasuresSuccess,
  });

  const pantry = useMemo(() => {
    if (!ingredients.isSuccess) return null;
    return new Pantry(ingredients.data);
  }, [ingredients.data]);

  const addIngredient = useMutation({
    mutationFn: async (ingredient: IIngredient) => {
      console.log("ingredient IN:", ingredient);
      await ingredientsApi.create(ingredient);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CacheKeys.INGREDIENTS] });
    },
  });

  return { ingredients, addIngredient };
};
