import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";

interface IProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}

export const TextInput = (props: IProps) => {
  const { control, name, label, placeholder } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: any) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder ? placeholder : undefined}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
