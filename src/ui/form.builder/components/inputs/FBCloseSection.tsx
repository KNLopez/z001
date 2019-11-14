import { Box } from "@material-ui/core";
import React from "react";
import { withLabelRenderer } from "../../hocs/withLabelRenderer";
import { FBInlineApproverProps } from "../../types/inlineApprover";
import FBButton from "./FBButton";

const FBCloseSection: React.FunctionComponent<FBInlineApproverProps> = ({
  labelRenderer,
  approvalType, disabled,
  ...props
}) => (
    <Box mb={4} width="100%">
      {labelRenderer}
      <FBButton label={"Close Section"} disabled={disabled} />
    </Box>
  );

export default withLabelRenderer(FBCloseSection);
