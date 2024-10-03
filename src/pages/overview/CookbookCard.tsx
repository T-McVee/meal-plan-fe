import { CardCustom } from "../../components/ui/card/CardCustom";
import { Button } from "../../components/ui/button";
import { useRecipes } from "@/hooks/useRecipies";
import { ModalStatus, useOverviewContext } from "./overviewContext";
import { AddRecipeModal } from "./AddRecipieModal";
import { IRecipe } from "../cookbook/cookbook-types";

export const CookbookCard = () => {
  const {
    recipes: { data: recipes },
  } = useRecipes();
  const { openAddRecipeModal, modalStatus } = useOverviewContext();

  const colDefs = [{ field: "name" }, { field: "servings" }];
  const rowData = recipes;

  return (
    <>
      <CardCustom
        colDefs={colDefs}
        rowData={rowData!}
        title="Cookbook"
        description="Recipes"
      >
        <Button onClick={openAddRecipeModal}>Add recipe</Button>
      </CardCustom>
      {modalStatus === ModalStatus.AddRecipe && (
        <AddRecipeModal
          onSubmit={(data: IRecipe) => {
            console.log("submit Recipe", data);
          }}
        />
      )}
    </>
  );
};
