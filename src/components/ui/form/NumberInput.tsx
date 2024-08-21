import { Input } from "../input";
import { BaseInput, IBaseInputProps } from "./BaseInput";

interface INumberInputProps extends IBaseInputProps {}

export const NumberInput = (props: INumberInputProps) => {
  const { control, name, label, placeholder } = props;
  return (
    <BaseInput
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      InputControl={NumberInputControl}
    />
  );
};

const NumberInputControl = () => {
  return <Input type="number" />;
};
