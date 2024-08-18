import React, { useEffect } from "react";
import { Pantry, useIngredients } from "./useIngredients";
import { ingredientRaw } from "@/data-model";

export const usePantry = () => {
  const { data, isSuccess, isLoading, isError } = useIngredients();
  const [ingredients, setIngredients] = React.useState<ingredientRaw[] | null>(
    null
  );
  const [pantry, setPantry] = React.useState<Pantry | null>(null);

  useEffect(() => {
    if (isSuccess) {
      setIngredients(data!);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (ingredients) {
      setPantry(new Pantry(ingredients));
    }
  }, [ingredients]);

  function addIngredient(ingredient: ingredientRaw) {
    setIngredients([...ingredients!, ingredient]);
  }

  function removeIngredient(ingredient: ingredientRaw) {
    setIngredients(ingredients!.filter((i) => i.id !== ingredient.id));
  }

  return {
    pantry,
    ingredients,
    addIngredient,
    removeIngredient,
    isLoading: isLoading || !pantry,
    isError,
  };
};
