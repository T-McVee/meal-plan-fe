import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IProps {
  control: any;
  name: string;
  label: string;
  options: IOption[];
  placeholder?: string;
  className?: string;
}

interface IOption {
  value: string;
  label: string;
}

export const SelectInput = (props: IProps) => {
  const { control, name, label, options, placeholder } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: any) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {options.map((option, i) => (
                  <SelectItem key={`${option.label}-${i}`} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
