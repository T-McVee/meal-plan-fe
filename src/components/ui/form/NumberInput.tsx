import { ChangeEventHandler } from "react";
import { Input } from "../input";
import { BaseInput, IBaseInputProps } from "./BaseInput";

interface INumberInputProps extends IBaseInputProps {}

export const NumberInput = (props: INumberInputProps) => {
  return <BaseInput {...props} InputControl={NumberInputControl} />;
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
