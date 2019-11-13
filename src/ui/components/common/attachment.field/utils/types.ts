import { FormikHybridFieldProps } from "../../../hoc/utils/types";

export type AttachmentComponent = "field" | "button";

export interface AttachmentFieldProps extends FormikHybridFieldProps {
  multiple?: boolean;
  component?: AttachmentComponent;
  disabled?: boolean;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => any;
}

export interface AttachmentStyleProps {
  isField: boolean;
}

export type AttachmentContainerProps = AttachmentFieldProps;
