import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Input } from "../input";
import { BaseInput, IBaseInputProps } from "./BaseInput";

interface ISearchInputProps extends IBaseInputProps {
  searchValue?: string;
  searchURL?: string;
}

export const SearchInput = (props: ISearchInputProps) => {
  const { searchValue, searchURL } = props;

  console.log("searchValue", searchValue);
  console.log("searchURL", searchURL);

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  return (
    <BaseInput {...props} options={options} InputControl={SearchInputControl} />
  );
};

interface ISelectInputControlProps {
  options: any[];
  onChange: (value: string) => void;
  value: string;
}

const SearchInputControl = (props: ISelectInputControlProps) => {
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
