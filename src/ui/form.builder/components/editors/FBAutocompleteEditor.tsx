import { Box } from "@material-ui/core";
import React from "react";
// import { CHANGE_REQUEST_ROOT_URL } from "../../../../state/ducks/changeRequest/constants";
// import { DOCUMENT_REVISION_ROOT_URL } from "../../../../state/ducks/documentRevisions/constants";
import { FBAutocompleteConfig } from "../../types/autocomplete";
import FBCheckbox from "../inputs/FBCheckbox";
import FBSelect from "../inputs/FBSelect";
import FBLabelEditor from "./FBLabelEditor";
import FBPlaceholderEditor from "./FBPlaceholderEditor";

// *NOTE: for demo only. Will be removed
const DOCUMENT_REVISION_ROOT_URL = "";
const CHANGE_REQUEST_ROOT_URL = ""

export const tempOtions: FBAutocompleteConfig[] = [
  {
    id: "1",
    url: DOCUMENT_REVISION_ROOT_URL,
    label: "Document revisions",
    renderKey: "name",
  },
  {
    id: "2",
    url: CHANGE_REQUEST_ROOT_URL,
    label: "Change requests",
    renderKey: "title",
  },
  {
    id: "3",
    url: `${CHANGE_REQUEST_ROOT_URL}/available_approvers`,
    label: "Approvers",
    renderKey: "email",
  },
  {
    id: "4",
    url: ``,
    label: "Suppliers",
    renderKey: "email",
  },
  {
    id: "5",
    url: ``,
    label: "Parts",
    renderKey: "email",
  },
  {
    id: "6",
    url: ``,
    label: "Lots",
    renderKey: "email",
  },
  {
    id: "7",
    url: ``,
    label: "Standards",
    renderKey: "email",
  },
  {
    id: "8",
    url: ``,
    label: "Finished Goods",
    renderKey: "email",
  },
  {
    id: "9",
    url: ``,
    label: "MPIs",
    renderKey: "email",
  },
  {
    id: "10",
    url: ``,
    label: "SOPs",
    renderKey: "email",
  },
];

const options = tempOtions.map((config) => ({
  value: config.id,
  text: config.label,
}));

const FBAutocompleteEditor: React.FunctionComponent<{}> = () => (
  <Box>
    <FBLabelEditor />
    <FBPlaceholderEditor />
    <FBSelect label="form.builder.select.options" options={options} name="autocompleteList" />
    <FBCheckbox label="form.builder.multi.select" name="isMulti" />
  </Box>

);

export default FBAutocompleteEditor;
