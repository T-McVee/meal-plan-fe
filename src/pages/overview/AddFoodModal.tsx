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
import { IIngredient } from "@/data-model";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/form/TextInput";
import { NumberInput } from "@/components/ui/form/NumberInput";
import { SelectInput } from "@/components/ui/form/SelectInput";
import { useSuppliers } from "@/hooks/useSuppliers";
import { useMeasures } from "@/hooks/useMeasures";
import { useEffect, useMemo, useState } from "react";
import { SearchInput } from "@/components/ui/form/SearchInput";

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
    // resolver: zodResolver(IngredientRawSchema),
    defaultValues: {
      supplier: "0",
      name: "",
      cost: 0,
      measure: "",
      // size: 0,
    },
  });

  const measureWatch = form.watch("measure");

  const measureIsEach = useMemo(() => {
    const measureData = measures?.find((m) => m.id === measureWatch);
    return measureData?.name === "Each";
  }, [measureWatch, measures]);

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
            {/* <SelectInput
              control={form.control}
              name="supplier"
              label="Supplier"
              options={suppliers!.map((supplier) => ({
                label: supplier.name,
                value: supplier.id,
              }))}
              description="Select a supplier to enable auto search for food items."
            /> */}
            <TextInput control={form.control} name="name" label={nameLabel} />
            {/* <SearchInput control={form.control} name="name" label={nameLabel} /> */}
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
            {!measureIsEach && (
              <NumberInput control={form.control} name="size" label="Size" />
            )}
            <Button type="submit">Add food</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

// useEffect(() => {
//   if (supplierWatch) {
//     const supplierData = suppliers?.find((s) => s.id === supplierWatch);

//     if (supplierData?.id !== "0") {
//       setNameLabel(`Food - auto search enabled`);
//     } else {
//       setNameLabel("Food");
//     }
//     const url = supplierData?.apiBaseURL;
//     if (url) {
//       console.log(
//         "fetching data from",
//         `${supplierData.productSearchApiURL}${watchName}`
//       );
//     }
//   }
// }, [supplierWatch, watchName, suppliers]);
