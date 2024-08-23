import { Input } from "../input";
import { BaseInput, IBaseInputProps } from "./BaseInput";

interface ISearchInputProps extends IBaseInputProps {
  searchValue: string;
  searchURL: string;
}

export const SearchInput = (props: ISearchInputProps) => {
  const { searchValue, searchURL } = props;

  console.log("searchValue", searchValue);
  console.log("searchURL", searchURL);

  return <BaseInput {...props} InputControl={Input} />;
};
