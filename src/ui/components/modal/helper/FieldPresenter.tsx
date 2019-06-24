import React, { Fragment, useState } from "react";
import CheckBoxModal from "../fields/CheckBoxModal";
import DatePickerModal from "../fields/DatePickerModal";
import FileUploadModal from "../fields/FileUploadModal";
import HyperLinkModal from "../fields/HyperLinkModal";
import LineFieldModal from "../fields/LineFieldModal";
import MultipleCheckboxModal from "../fields/MultipleCheckboxModal";
import NumericModal from "../fields/NumericModal";
import ParagraphModal from "../fields/ParagraphModal";
import RadioModal from "../fields/RadioModal";
import SectionModal from "../fields/SectionModal";

interface FieldPresenter {
  chosenField: string;
  clickHandler: any;
  currentConfig?: any;
}

const FieldPresenter: React.FunctionComponent<FieldPresenter> = ({
  chosenField,
  currentConfig,
  clickHandler,
}) => {
  let modalStateContent;
  switch (chosenField) {
    case "singleLine":
      modalStateContent = (
        <LineFieldModal
          title="Single Line Textfield"
          currentConfig={currentConfig}
          handleSubmit={clickHandler}
        />
      );
      break;
    case "section":
      modalStateContent = (
        <SectionModal
          title="Section"
          handleSubmit={clickHandler}
          currentConfig={currentConfig}
        />
      );
      break;
    case "subSection":
      modalStateContent = (
        <SectionModal
          title="Sub Section"
          handleSubmit={clickHandler}
          currentConfig={currentConfig}
        />
      );
      break;
    case "multiLine":
      modalStateContent = (
        <LineFieldModal
          title="Multi-Line Textfield"
          handleSubmit={clickHandler}
          currentConfig={currentConfig}
        />
      );
      break;
    case "checkbox":
      modalStateContent = (
        <CheckBoxModal
          handleSubmit={clickHandler}
          currentConfig={currentConfig}
        />
      );
      break;
    case "radio":
      modalStateContent = (
        <RadioModal handleSubmit={clickHandler} currentConfig={currentConfig} />
      );
      break;
    case "numeric":
      modalStateContent = (
        <NumericModal
          title="Numeric Field"
          handleSubmit={clickHandler}
          currentConfig={currentConfig}
        />
      );
      break;
    case "datepicker":
      modalStateContent = (
        <DatePickerModal
          title="Date Picker Field"
          currentConfig={currentConfig}
          handleSubmit={clickHandler}
        />
      );
      break;
    case "hyperlink":
      modalStateContent = (
        <HyperLinkModal
          handleSubmit={clickHandler}
          currentConfig={currentConfig}
        />
      );
      break;
    case "paragraph":
      modalStateContent = (
        <ParagraphModal
          handleSubmit={clickHandler}
          currentConfig={currentConfig}
        />
      );
      break;
    case "fileUpload":
      modalStateContent = (
        <FileUploadModal
          handleSubmit={clickHandler}
          currentConfig={currentConfig}
        />
      );
      break;
    case "multipleCheckbox":
      modalStateContent = (
        <MultipleCheckboxModal
          handleSubmit={clickHandler}
          currentConfig={currentConfig}
        />
      );
      break;
  }
  return <div>{modalStateContent}</div>;
};

export default FieldPresenter;
