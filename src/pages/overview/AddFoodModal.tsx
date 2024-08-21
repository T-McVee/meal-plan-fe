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
import { ingredientRaw, IngredientRawSchema } from "@/data-model";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/form/TextInput";
import { NumberInput } from "@/components/ui/form/NumberInput";
import { SelectInput } from "@/components/ui/form/SelectInput";
import { useSuppliers } from "@/hooks/useSuppliers";
import { useMeasures } from "@/hooks/useMeasures";
import { useEffect, useMemo } from "react";

interface IProps {
  onSubmit: (data: ingredientRaw) => void;
}

export const AddFoodModal = (props: IProps) => {
  const { onSubmit } = props;
  const { modalStatus, closeAddFoodModal } = useOverviewContext();
  const { data: suppliers, isLoading: isLoadingSuppliers } = useSuppliers();
  const { data: measures, isLoading: isLoadingMeasures } = useMeasures();

  const form = useForm<ingredientRaw>({
    resolver: zodResolver(IngredientRawSchema),
    defaultValues: {
      supplier: "0",
    },
  });

  const supplier = form.watch("supplier");
  const name = form.watch("name");
  const selectedMeasure = form.watch("measure");

  const measureIsEach = useMemo(() => {
    const measureData = measures?.find((m) => m.id === selectedMeasure);

    return measureData?.name === "Each";
  }, [selectedMeasure, measures]);

  useEffect(() => {
    if (supplier) {
      const supplierData = suppliers?.find((s) => s.id === supplier);
      const url = supplierData?.apiBaseURL;
      if (url) {
        console.log("fetching data from", url);
      }
    }
  }, [supplier, name]);

  function handleSubmit(data: ingredientRaw) {
    onSubmit({ ...data, id: "123" });
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
            <SelectInput
              control={form.control}
              name="supplier"
              label="Supplier"
              options={suppliers!.map((supplier) => ({
                label: supplier.name,
                value: supplier.id,
              }))}
            />
            <TextInput control={form.control} name="name" label="Food name" />
            <NumberInput control={form.control} name="price" label="Price" />
            <SelectInput
              control={form.control}
              name="measure"
              label="Measure"
              options={measures!.map((measure) => ({
                label: measure.extendedName,
                value: measure.id,
              }))}
            />
            <NumberInput
              control={form.control}
              name="size"
              label="Size"
              disabled={measureIsEach}
            />

            <Button type="submit">Add food</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
