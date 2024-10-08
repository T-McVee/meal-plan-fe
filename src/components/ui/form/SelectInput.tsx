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
  return <BaseInput {...props} InputControl={SelectInputControl} />;
};

interface ISelectInputControlProps {
  options: IOption[];
  onChange: (value: string) => void;
  value: string;
}

const SelectInputControl = (props: ISelectInputControlProps) => {
  const { options, onChange, value } = props;

  return (
    <Select onValueChange={onChange} defaultValue={value}>
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
