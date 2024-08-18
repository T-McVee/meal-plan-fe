import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ModalStatus, useOverviewContext } from "./overviewContext";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ingredientRaw, Measure } from "@/data-model";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/form/TextInput";
import { NumberInput } from "@/components/ui/form/NumberInput";
import { SelectInput } from "@/components/ui/form/SelectInput";
import { usePantry } from "@/hooks/usePantry";
import { Pantry } from "@/hooks/useIngredients";

const AddFoodModalSchema = z.object({
  name: z.string(),
  price: z.number(),
  size: z.number(),
  measure: z.string(),
  supplier: z.string().optional(),
});

interface IProps {
  onSubmit: (data: ingredientRaw) => void;
}

export const AddFoodModal = (props: IProps) => {
  const { onSubmit } = props;
  const { modalStatus, closeAddFoodModal } = useOverviewContext();

  const form = useForm<z.infer<typeof AddFoodModalSchema>>({
    resolver: zodResolver(AddFoodModalSchema),
    defaultValues: {
      name: "Flour",
      price: 2,
      size: 10,
      measure: Measure.Grams,
      supplier: "",
    },
  });

  function handleSubmit(data: z.infer<typeof AddFoodModalSchema>) {
    console.log("data:", data);
    const newIngredient = { id: "0", ...data, measure: Measure.Grams };
    onSubmit(newIngredient);
    closeAddFoodModal();
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
            <TextInput control={form.control} name="name" label="Food name" />
            <NumberInput control={form.control} name="price" label="Price" />
            <NumberInput control={form.control} name="size" label="Size" />
            <SelectInput
              control={form.control}
              name="measure"
              label="Measure"
              options={[]}
            />
            <SelectInput
              control={form.control}
              name="supplier"
              label="Supplier"
              options={[]}
            />
            <Button type="submit">Add food</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
