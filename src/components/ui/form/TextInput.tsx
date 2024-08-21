import { Input } from "../input";
import { BaseInput, IBaseInputProps } from "./BaseInput";

interface ITextInputProps extends IBaseInputProps {}

export const TextInput = (props: ITextInputProps) => {
  const { control, name, label, placeholder } = props;
  return (
    <BaseInput
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      InputControl={Input}
    />
  );
};
