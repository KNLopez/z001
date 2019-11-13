import { ButtonProps } from "@material-ui/core/Button";
import { FBFormDefaultProps } from "./common";

export interface InlineApproverProps {
  approvalType: string | undefined;
}

export type FBInlineApproverProps = ButtonProps &
  FBFormDefaultProps & {
    component?: (props: any) => JSX.Element;
  } & InlineApproverProps;
