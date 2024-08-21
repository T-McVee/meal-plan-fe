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
  placeholder?: string;
  className?: string;
  options?: IOption[];
  disabled?: boolean;
}

interface IBaseInputControlProps extends IBaseInputProps {
  InputControl: any;
}

export const BaseInput = (props: IBaseInputControlProps) => {
  const { control, name, label, InputControl, placeholder, options, disabled } =
    props;
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
              onChange={field.onChange}
              disabled={!!disabled}
            />
          </FormControl>
          {/* <FormDescription>This is your public display name.</FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
