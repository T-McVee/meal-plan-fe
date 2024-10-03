import { Button } from "../../components/ui/button";
import { CardCustom } from "../../components/ui/card/CardCustom";
import { useOverviewContext } from "@/pages/overview/overviewContext";
import { AddFoodModal } from "./AddFoodModal";
import { useEffect } from "react";
import { useIngredients } from "@/hooks/useIngredients";
import { IIngredient } from "../pantry/ingredient-types";

export const PantryCard = () => {
  const {
    ingredients: { data: ingredients },
    addIngredient,
  } = useIngredients();
  const { openAddFoodModal } = useOverviewContext();

  const colDefs = [
    { field: "name" },
    { field: "cost" },
    { field: "size" },
    { field: "measure" },
  ];
  const rowData = ingredients;

  useEffect(() => {
    console.log("ingredients:", rowData);
  }, [ingredients]);

  return (
    <>
      <CardCustom
        colDefs={colDefs}
        rowData={rowData!}
        title="Your Pantry"
        description="All the makings of a tasty treat"
      >
        <Button onClick={openAddFoodModal}>Add food</Button>
      </CardCustom>
      <AddFoodModal
        onSubmit={(data: IIngredient) => {
          addIngredient.mutate(data);
        }}
      />
    </>
  );
};
