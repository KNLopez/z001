import { Box } from "@material-ui/core";
import React from "react";
import { withLabelRenderer } from "../../hocs/withLabelRenderer";
import { withOnChange } from "../../hocs/withOnChange";
import { FBFormDefaultProps, FBOnChangeProps } from "../../types/common";
import TaskList from "../../../components/implementationPlan/Container"

export type Props = FBFormDefaultProps & FBOnChangeProps;

const FBTaskList: React.FunctionComponent<Props> = ({
  labelRenderer,
  form,
  disabled,
  readOnly,
  ...props
}) => (
    <Box mb={4}>
      {labelRenderer}
      <TaskList />
    </Box>
  );

export default withLabelRenderer(withOnChange(FBTaskList));
