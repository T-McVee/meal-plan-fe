import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ModalStatus, useOverviewContext } from "./overviewContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/form/TextInput";
import { NumberInput } from "@/components/ui/form/NumberInput";
import { SelectInput } from "@/components/ui/form/SelectInput";
import { useSuppliers } from "@/hooks/useSuppliers";
import { useMeasures } from "@/hooks/useMeasures";
import { IIngredient, IngredientSchema } from "../pantry/ingredient-types";
import { useMemo, useState } from "react";

interface IProps {
  onSubmit: (data: IIngredient) => void;
}

export const AddFoodModal = (props: IProps) => {
  const { onSubmit } = props;
  const { modalStatus, closeAddFoodModal } = useOverviewContext();
  const { data: suppliers, isLoading: isLoadingSuppliers } = useSuppliers();
  const { data: measures, isLoading: isLoadingMeasures } = useMeasures();

  const [nameLabel, setNameLabel] = useState<string>("Food");

  const form = useForm<IIngredient>({
    resolver: zodResolver(IngredientSchema),
    defaultValues: {
      name: "",
      cost: undefined,
      measure: "",
      size: undefined,
    },
  });

  function handleSubmit(data: IIngredient) {
    console.log("Add food submit:", data);
    onSubmit(data);
    closeAddFoodModal();
  }

  if (isLoadingSuppliers || isLoadingMeasures) {
    return <div>Loading...</div>;
  }

  return (
    <Dialog
      open={modalStatus === ModalStatus.AddFood}
      onOpenChange={closeAddFoodModal}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add food</DialogTitle>
          <DialogDescription>
            Add a new food to your pantry. Food items in your pantry can be used
            when creating recipes.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            <TextInput control={form.control} name="name" label={nameLabel} />
            <NumberInput control={form.control} name="cost" label="cost" />
            <SelectInput
              control={form.control}
              name="measure"
              label="Measure"
              options={measures!.map((measure) => ({
                label: measure.extendedName,
                value: measure.id,
              }))}
            />
            <NumberInput control={form.control} name="size" label="Size" />
            <Button type="submit">Add food</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
