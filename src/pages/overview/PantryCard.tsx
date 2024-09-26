import { Button } from "../../components/ui/button";
import { usePantry } from "@/hooks/usePantry";
import { CardCustom } from "../../components/ui/card/CardCustom";
import { useOverviewContext } from "@/pages/overview/overviewContext";
import { AddFoodModal } from "./AddFoodModal";
import { useEffect } from "react";
import { useIngredients } from "@/hooks/useIngredients";
import { IIngredient } from "@/data-model";

export const PantryCard = () => {
  // const { pantry } = usePantry();
  const { pantry, addIngredient } = useIngredients();
  const { openAddFoodModal } = useOverviewContext();

  const colDefs = [
    { field: "name" },
    { field: "cost" },
    { field: "size" },
    { field: "measure" },
  ];
  const rowData = pantry?.ingredients;

  useEffect(() => {
    console.log("ingredients:", rowData);
  }, [rowData]);

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
