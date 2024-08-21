import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BaseInput, IBaseInputProps } from "./BaseInput";

interface ISelectInputProps extends IBaseInputProps {}

export interface IOption {
  value: string;
  label: string;
}

export const SelectInput = (props: ISelectInputProps) => {
  const { control, name, label, options } = props;
  return (
    <BaseInput
      control={control}
      name={name}
      label={label}
      options={options}
      InputControl={SelectInputControl}
    />
  );
};

interface ISelectInputControlProps {
  options: IOption[];
}

const SelectInputControl = (props: ISelectInputControlProps) => {
  const { options } = props;
  return (
    <Select>
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
  );
};
