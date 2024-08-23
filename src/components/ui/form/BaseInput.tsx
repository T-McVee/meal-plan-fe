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
  description?: string;
  className?: string;
  options?: IOption[];
  disabled?: boolean;
}

interface IBaseInputControlProps extends IBaseInputProps {
  InputControl: any;
}

export const BaseInput = (props: IBaseInputControlProps) => {
  const {
    control,
    name,
    label,
    InputControl,
    placeholder,
    description,
    options,
    disabled,
  } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: any) => (
        <FormItem>
          <div className="flex gap-2 justify-start align-top">
            <FormLabel>{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          <FormControl>
            <InputControl
              placeholder={placeholder ? placeholder : undefined}
              options={options ? options : undefined}
              {...field}
              onChange={field.onChange}
              disabled={!!disabled}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
