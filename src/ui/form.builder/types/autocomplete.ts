import { BaseTextFieldProps } from "@material-ui/core/TextField";
import { HTMLAttributes } from "react";
import { SelectComponents } from "react-select/src/components";
import { PlaceholderProps } from "react-select/src/components/Placeholder";
import { ValueType } from "react-select/src/types";

import { FBFormDefaultProps, FBOnChangeProps } from "./common";
import { SelectOption } from "./select";

export type InputComponentProps =
  & Pick<BaseTextFieldProps, "inputRef">
  & HTMLAttributes<HTMLDivElement>;

export type MuiPlaceholderProps =
  & Omit<PlaceholderProps<SelectOption>, "innerProps">
  & Partial<Pick<PlaceholderProps<SelectOption>, "innerProps">>;

export interface FBAutocompleteInjectedProps {
  isMulti: boolean;
  components: Partial<SelectComponents<SelectOption>>;
  multi?: ValueType<SelectOption>;
}

export interface FBAutocompleteConfig {
  id: string;
  url: string;
  label: string;
  renderKey: string;
}

export type FBAutocompleteProps =
  & FBAutocompleteInjectedProps
  & FBFormDefaultProps
  & FBOnChangeProps;
