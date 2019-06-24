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
  config?: any;
}

const FieldPresenter: React.FunctionComponent<FieldPresenter> = ({
  chosenField,
  config,
  clickHandler,
}) => {
  let modalStateContent;
  switch (chosenField) {
    case "singleLine":
      modalStateContent = (
        <LineFieldModal
          title="Single Line Textfield"
          handleSubmit={clickHandler}
        />
      );
      break;
    case "section":
      modalStateContent = (
        <SectionModal title="Section" handleSubmit={clickHandler} />
      );
      break;
    case "subSection":
      modalStateContent = (
        <SectionModal title="Sub Section" handleSubmit={clickHandler} />
      );
      break;
    case "multiLine":
      modalStateContent = (
        <LineFieldModal
          title="Multi-Line Textfield"
          handleSubmit={clickHandler}
        />
      );
      break;
    case "checkbox":
      modalStateContent = <CheckBoxModal handleSubmit={clickHandler} />;
      break;
    case "radio":
      modalStateContent = <RadioModal handleSubmit={clickHandler} />;
      break;
    case "numeric":
      modalStateContent = (
        <NumericModal title="Numeric Field" handleSubmit={clickHandler} />
      );
      break;
    case "datepicker":
      modalStateContent = (
        <DatePickerModal
          title="Date Picker Field"
          handleSubmit={clickHandler}
        />
      );
      break;
    case "hyperlink":
      modalStateContent = <HyperLinkModal handleSubmit={clickHandler} />;
      break;
    case "paragraph":
      modalStateContent = <ParagraphModal handleSubmit={clickHandler} />;
      break;
    case "fileUpload":
      modalStateContent = <FileUploadModal handleSubmit={clickHandler} />;
      break;
    case "multipleCheckbox":
      modalStateContent = <MultipleCheckboxModal handleSubmit={clickHandler} />;
      break;
  }
  return <div>{modalStateContent}</div>;
};

export default FieldPresenter;
