import { Button } from "../../components/ui/button";
import { usePantry } from "@/hooks/usePantry";
import { CardCustom } from "../../components/ui/card/CardCustom";
import {
  ModalStatus,
  useOverviewContext,
} from "@/pages/overview/overviewContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddFoodModal } from "./AddFoodModal";
import { useEffect } from "react";

export const PantryCard = () => {
  const { pantry, addIngredient } = usePantry();
  const { modalStatus, openAddFoodModal, closeAddFoodModal } =
    useOverviewContext();

  const colDefs = [
    { field: "name" },
    { field: "price" },
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
      <AddFoodModal onSubmit={addIngredient} />
    </>
  );
};
