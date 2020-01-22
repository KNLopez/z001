import { Dictionary } from "lodash";
import FBAutocompleteEditor from "../components/editors/FBAutocompleteEditor";
import FBControlEditor from "../components/editors/FBControlEditor";
import FBControlGroupEditor from "../components/editors/FBControlGroupEditor";
import FBHyperlinkEditor from "../components/editors/FBHyperlinkEditor";
import FBInlineApprovalEditor from "../components/editors/FBInlineApprovalEditor";
import FBLabelEditor from "../components/editors/FBLabelEditor";
import FBSelectEditor from "../components/editors/FBSelectEditor";
import FBTextFieldEditor from "../components/editors/FBTextFieldEditor";
import FBAutocomplete from "../components/inputs/FBAutocomplete";
import FBCheckbox from "../components/inputs/FBCheckbox";
import FBCheckboxGroup from "../components/inputs/FBCheckboxGroup";
import FBDatePicker from "../components/inputs/FBDatePicker";
import FBInlineApprover from "../components/inputs/FBInlineApprover";
import FBRadio from "../components/inputs/FBRadio";
import FBRadioGroup from "../components/inputs/FBRadioGroup";
import FBSelect from "../components/inputs/FBSelect";
import FBTextEditorField from "../components/inputs/FBTextEditorField";
import FBTextField from "../components/inputs/FBTextField";
import FBSectionBox from "../components/layout/FBSectionBox";
import FBSubSectionBox from "../components/layout/FBSubSectionBox";
import FBFileUpload from "../components/navigation/FBFileUpload";
import FBLink from "../components/navigation/FBLink";
import { FBEditorElementType } from "../types/editor";
import FBTaskList from "../components/inputs/FBTaskList";
import FBCloseSection from "../components/inputs/FBCloseSection";
import FBHelloSign from "../components/inputs/FBHelloSign";

export const FBFieldEditorComponent: {
  [key: string]: React.FunctionComponent<{}>;
} = {
  section: FBLabelEditor,
  subsection: FBLabelEditor,
  textfield: FBTextFieldEditor,
  checkbox: FBControlEditor,
  checkboxgroup: FBControlGroupEditor,
  datepicker: FBLabelEditor,
  texteditor: FBLabelEditor,
  select: FBSelectEditor,
  radio: FBControlEditor,
  radiogroup: FBControlGroupEditor,
  autocomplete: FBAutocompleteEditor,
  hyperlink: FBHyperlinkEditor,
  fileupload: FBLabelEditor,
  inlineApprover: FBInlineApprovalEditor,
  taskList: FBLabelEditor,
  closeSection: FBLabelEditor,
  helloSign: FBLabelEditor,
};

export const FBFieldComponent: Dictionary<any> = {
  section: FBSectionBox,
  subsection: FBSubSectionBox,
  textfield: FBTextField,
  checkbox: FBCheckbox,
  checkboxgroup: FBCheckboxGroup,
  datepicker: FBDatePicker,
  texteditor: FBTextEditorField,
  select: FBSelect,
  radio: FBRadio,
  radiogroup: FBRadioGroup,
  autocomplete: FBAutocomplete,
  hyperlink: FBLink,
  fileupload: FBFileUpload,
  inlineApprover: FBInlineApprover,
  taskList: FBTaskList,
  closeSection: FBCloseSection,
  helloSign: FBHelloSign,
};

export const FBGroupField: Dictionary<any> = {
  checkboxgroup: FBCheckbox,
  radiogroup: FBRadio,
};

export const FBEditorSectionConfig: { [key: string]: FBEditorElementType[] } = {
  section: ["section", "subsection", "closeSection"],
  basics: [
    "textfield",
    "checkbox",
    "checkboxgroup",
    "texteditor",
    "datepicker",
    "hyperlink",
    "select",
    "radio",
    "radiogroup",
    "fileupload",
    "taskList",
  ],
  approvals: ["inlineApprover", "helloSign"],
  lists: ["autocomplete"],
};
