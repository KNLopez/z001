import React, { useEffect, useState } from "react";
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
  const [modalStateContent, setModalContent] = useState();
  useEffect(() => {
    switch (chosenField) {
      case "singleLine":
        setModalContent(
          <LineFieldModal
            title="Single Line Textfield"
            currentConfig={currentConfig}
            handleSubmit={clickHandler}
          />,
        );
        break;
      case "section":
        setModalContent(
          <SectionModal
            title="Section"
            handleSubmit={clickHandler}
            currentConfig={currentConfig}
          />,
        );
        break;
      case "subSection":
        setModalContent(
          <SectionModal
            title="Sub Section"
            handleSubmit={clickHandler}
            currentConfig={currentConfig}
          />,
        );
        break;
      case "multiLine":
        setModalContent(
          <LineFieldModal
            title="Multi-Line Textfield"
            handleSubmit={clickHandler}
            currentConfig={currentConfig}
          />,
        );
        break;
      case "checkbox":
        setModalContent(
          <CheckBoxModal
            handleSubmit={clickHandler}
            currentConfig={currentConfig}
          />,
        );
        break;
      case "radio":
        setModalContent(
          <RadioModal
            handleSubmit={clickHandler}
            currentConfig={currentConfig}
          />,
        );
        break;
      case "numeric":
        setModalContent(
          <NumericModal
            title="Numeric Field"
            handleSubmit={clickHandler}
            currentConfig={currentConfig}
          />,
        );
        break;
      case "datepicker":
        setModalContent(
          <DatePickerModal
            title="Date Picker Field"
            currentConfig={currentConfig}
            handleSubmit={clickHandler}
          />,
        );
        break;
      case "hyperlink":
        setModalContent(
          <HyperLinkModal
            handleSubmit={clickHandler}
            currentConfig={currentConfig}
          />,
        );
        break;
      case "paragraph":
        setModalContent(
          <ParagraphModal
            handleSubmit={clickHandler}
            currentConfig={currentConfig}
          />,
        );
        break;
      case "fileUpload":
        setModalContent(
          <FileUploadModal
            handleSubmit={clickHandler}
            currentConfig={currentConfig}
          />,
        );
        break;
      case "multipleCheckbox":
        setModalContent(
          <MultipleCheckboxModal
            handleSubmit={clickHandler}
            currentConfig={currentConfig}
          />,
        );
        break;
    }
  }, [chosenField, modalStateContent, clickHandler, currentConfig]);

  return <div>{modalStateContent}</div>;
};

export default FieldPresenter;
