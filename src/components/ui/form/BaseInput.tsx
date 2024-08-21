import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { IOption } from "./SelectInput";

export interface IBaseInputProps {
  control: any;
  name: string;
  label: string;
  InputControl: any;
  placeholder?: string;
  className?: string;
  options?: IOption[];
}

export const BaseInput = (props: IBaseInputProps) => {
  const { control, name, label, InputControl, placeholder, options } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: any) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <InputControl
              placeholder={placeholder ? placeholder : undefined}
              options={options ? options : undefined}
              {...field}
            />
          </FormControl>
          {/* <FormDescription>This is your public display name.</FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
