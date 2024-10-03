import { Button } from "@/components/ui/button";
import { NumberInput } from "@/components/ui/form/NumberInput";
import { SelectInput } from "@/components/ui/form/SelectInput";
import { Minus } from "lucide-react";
import { Control, useFormContext } from "react-hook-form";
import { IPortion } from "../cookbook/cookbook-types";
import { useMemo } from "react";
import { useIngredients } from "@/hooks/useIngredients";

interface PortionInputProps {
  control: Control<any>;
  ingredientOptions: { label: string; value: string }[];
  remove: (index: number) => void;
  index?: number;
  key?: string;
}

export default function PortionInput(props: PortionInputProps) {
  const { control, ingredientOptions, remove, index, key } = props;
  const {
    ingredients: { data: ingredients },
  } = useIngredients();
  const { watch } = useFormContext();

  const watchIngredientId = watch(`ingredients.${index}.ingredientId`);
  const measureAbbreviation = useMemo(() => {
    return ingredients?.find(
      (ingredient) => ingredient.id === watchIngredientId
    )?.measureAbbreviation;
  }, [ingredients, watchIngredientId]);

  return (
    <div key={key} className="flex gap-2 items-end">
      <div className="flex flex-col gap-2 w-80">
        <SelectInput
          control={control}
          name={`ingredients.${index}.ingredientId`}
          label=""
          options={ingredientOptions}
        />
      </div>
      <div className="flex flex-col gap-2 w-20">
        <NumberInput
          control={control}
          name={`ingredients.${index}.amount`}
          label={`Amount ${
            measureAbbreviation ? `(${measureAbbreviation})` : ""
          }`}
        />
      </div>
      {index ? (
        <Button size="sm" variant="ghost" onClick={() => remove(index)}>
          <Minus className="h-4 w-4" />
        </Button>
      ) : null}
    </div>
  );
}
