import { Box, Button } from "@material-ui/core";
import React from "react";
import FBStore from "../../stores/FBStore";

const FBEditorSwitcher: React.FunctionComponent = ({ }) => {
  const { mode, setMode } = FBStore;

  console.log(mode)

  return (
    <Box>
      {mode === "design" && <Button variant="contained" onClick={() => setMode("form")}>View Mode</Button>}
      {mode === "form" && <Button variant="contained" onClick={() => setMode("design")}>Edit Mode</Button>}
    </Box>
  )
}


export default FBEditorSwitcher;
