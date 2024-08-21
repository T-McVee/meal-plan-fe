import { ChangeEventHandler } from "react";
import { Input } from "../input";
import { BaseInput, IBaseInputProps } from "./BaseInput";

interface INumberInputProps extends IBaseInputProps {}

export const NumberInput = (props: INumberInputProps) => {
  const { control, name, label, placeholder, disabled } = props;
  return (
    <BaseInput
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      InputControl={NumberInputControl}
      disabled={disabled}
    />
  );
};

interface INumberInputControlProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  disabled?: boolean;
}

const NumberInputControl = (props: INumberInputControlProps) => {
  const { onChange, value, disabled } = props;

  return (
    <Input
      type="number"
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  );
};
