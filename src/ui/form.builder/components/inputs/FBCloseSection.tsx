import { Box, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { withLabelRenderer } from "../../hocs/withLabelRenderer";
import { FBInlineApproverProps } from "../../types/inlineApprover";
import FBButton from "./FBButton";
import FBDialog from "../feedback/FBDialog";
import FBTextField from "./FBTextField";

const FBCloseSection: React.FunctionComponent<FBInlineApproverProps> = ({
  labelRenderer,
  approvalType, disabled,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")

  const openDialog = () => {
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
  }

  const changeHandler = (e: any) => {
    setName(e.currentTarget.value)
  }

  const content = () => (
    <Box mb={3}>
      <FBTextField
        label="Enter name"
        name="Enter name"
        onChange={changeHandler} />
      <Box display="flex" flexDirection="row-reverse" mx={-1} my={-1}>
        <FBButton
          onClick={closeDialog}
          label="Submit " />
      </Box>
    </Box>)

  return (
    <Box mb={4} width="100%">
      {labelRenderer}

      <FBButton label={"Close Section"} disabled={disabled} onClick={openDialog} />
      <FBDialog
        open={open}
        content={content}
        title={"Close Section"}
        setDialogClose={closeDialog}
      />
      {name.length > 0 && !open ? <div>{name} closed this section</div> : null}
    </Box>
  );
};


export default withLabelRenderer(FBCloseSection);
