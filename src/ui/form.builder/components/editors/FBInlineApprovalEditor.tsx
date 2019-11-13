import { Box } from "@material-ui/core";
import React from "react";
// import { CHANGE_REQUEST_ROOT_URL } from "../../../../state/ducks/changeRequest/constants";
// import { DOCUMENT_REVISION_ROOT_URL } from "../../../../state/ducks/documentRevisions/constants";
import { FBAutocompleteConfig } from "../../types/autocomplete";
import FBSelect from "../inputs/FBSelect";
import FBLabelEditor from "./FBLabelEditor";

// *NOTE: for demo only. Will be removed

export const tempOtions: FBAutocompleteConfig[] = [
  {
    id: "1",
    url: "",
    label: "Quality Assurance",
    renderKey: "name",
  },
  {
    id: "2",
    url: "",
    label: "Opertations",
    renderKey: "title",
  },
];

const options = tempOtions.map((config) => ({
  value: config.label,
  text: config.label,
}));

const FBInlineApprovalEditor: React.FunctionComponent<{}> = () => (
  <Box>
    <FBLabelEditor />
    <FBSelect label="form.builder.select.options" options={options} name="approvalType" />
  </Box>

);

export default FBInlineApprovalEditor;
