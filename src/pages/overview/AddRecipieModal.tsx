import { useMeasures } from "@/hooks/useMeasures";
import { ModalStatus, useOverviewContext } from "./overviewContext";
import { useMemo, useState } from "react";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { TextInput } from "@/components/ui/form/TextInput";
import { NumberInput } from "@/components/ui/form/NumberInput";
import { Button } from "@/components/ui/button";
import { useIngredients } from "@/hooks/useIngredients";
import PortionInput from "../components/PortionInput";
import { useRecipes } from "@/hooks/useRecipies";

interface IProps {
  onSubmit: (data: any) => void;
}

const _AddRecipeModal = (props: IProps) => {
  const { onSubmit } = props;
  const { modalStatus, closeAddRecipeModal } = useOverviewContext();
  const { data: measures, isLoading: isLoadingMeasures } = useMeasures();
  const {
    ingredients: { data: ingredients, isLoading: isLoadingIngredients },
  } = useIngredients();

  // const { newRecipeForm } = useRecipes();
  const { control, handleSubmit, watch } = useFormContext();

  const ingredientOptions = useMemo(
    () =>
      ingredients?.map((ingredient) => ({
        label: ingredient.name,
        value: ingredient.id,
      })),
    [ingredients]
  );

  const watchIngredientId = watch("ingredients.0.ingredientId");
  const selectedIngredient = useMemo(() => {
    return ingredients?.find(
      (ingredient) => ingredient.id === watchIngredientId
    );
  }, [ingredients, watchIngredientId]);

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "ingredients",
  });

  function submitFormData(data: any) {
    console.log("Add recipe submit:", data);
    onSubmit(data);
    closeAddRecipeModal();
  }

  if (isLoadingMeasures || isLoadingIngredients) {
    return <div>Loading...</div>;
  }

  return (
    <Dialog
      open={modalStatus === ModalStatus.AddRecipe}
      onOpenChange={closeAddRecipeModal}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add recipe</DialogTitle>
          <DialogDescription>
            Add a new recipe to your cookbook. Recipes are used to calculate
            meal details such as cost and nutritional information.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(submitFormData)}
          className="flex flex-col gap-4"
        >
          <TextInput control={control} name="name" label="Name" />
          <NumberInput control={control} name="servings" label="Servings" />

          <div className="flex flex-col gap-2 border p-2">
            <div className="flex justify-start items-center gap-1">
              <div className="font-semibold">Ingredients</div>
              <Button
                size="sm"
                onClick={() => {
                  append({ ingredientId: "", amount: "" });
                  console.log("control", control);
                }}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {fields
              .map((field, index) =>
                index > 0 ? (
                  <PortionInput
                    key={field.id}
                    control={control}
                    ingredientOptions={ingredientOptions!}
                    remove={remove}
                    index={index}
                  />
                ) : null
              )
              .reverse()}
            <PortionInput
              key={fields[0].id}
              control={control}
              ingredientOptions={ingredientOptions!}
              remove={remove}
              index={0}
              // measureAbbreviation={selectedIngredient?.measureAbbreviation}
            />
          </div>
          <Button type="submit">Add recipe</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const AddRecipeModal = (props: IProps) => {
  const { newRecipeForm } = useRecipes();

  return (
    <Form {...newRecipeForm}>
      <_AddRecipeModal {...props} />
    </Form>
  );
};
