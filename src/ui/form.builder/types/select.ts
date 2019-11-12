import { SelectProps } from "@material-ui/core/Select";

export interface SelectOption {
  value: string | number;
  text: string;
}

import {
  FBFormDefaultProps,
  FBLabelRendererProps,
  FBOnChangeProps,
} from "./common";

export interface FBSelectInjectedProps extends FBLabelRendererProps {
  emptyItem?: JSX.Element;
  items: JSX.Element[];
}

export type FBSelectProps =
  SelectProps &
  FBFormDefaultProps &
  FBSelectInjectedProps &
  FBOnChangeProps & {
    includeEmpty?: boolean;
    showNote?: boolean;
    variant?: "outlined";
  };
