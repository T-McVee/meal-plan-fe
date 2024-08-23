import { Input } from "../input";
import { BaseInput, IBaseInputProps } from "./BaseInput";

interface ITextInputProps extends IBaseInputProps {}

export const TextInput = (props: ITextInputProps) => {
  return <BaseInput {...props} InputControl={Input} />;
};
