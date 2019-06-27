import React, { useEffect, useState } from "react";
import { useStateValue } from "../../../../state/formContext";
import CheckBoxModal from "../fields/CheckBoxModal";
import DatePickerModal from "../fields/DatePickerModal";
import FileUploadModal from "../fields/FileUploadModal";
import HyperLinkModal from "../fields/HyperLinkModal";
import LineFieldModal from "../fields/LineFieldModal";
import ListsModal from "../fields/ListsModal";
import MultipleCheckboxModal from "../fields/MultipleCheckboxModal";
import MultipleHyperLinkModal from "../fields/MultipleHyperLinkModal";
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
  const [{}, dispatch]: any = useStateValue();
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
      case "multipleHyperlink":
        setModalContent(
          <MultipleHyperLinkModal
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
      case "qa":
        dispatch({
          type: "ADD_FIELD",
          field: {
            type: chosenField,
            closed: false,
            config: { colWidth: "col-12", title: "Quality Assurance" },
          },
        });
        break;
      case "operations":
        dispatch({
          type: "ADD_FIELD",
          field: {
            type: chosenField,
            closed: false,
            config: { colWidth: "col-12", title: "Operations" },
          },
        });
        break;
      case "standards":
      case "finishedGoods":
      case "lots":
      case "mpis":
      case "parts":
      case "sops":
      case "suppliers":
        dispatch({ type: "ADD_LIST", fieldType: chosenField });
        break;
      case "custom":
        setModalContent(
          <ListsModal
            handleSubmit={clickHandler}
            currentConfig={currentConfig}
          />,
        );
        break;
      case "closeSection":
        dispatch({
          type: "ADD_FIELD",
          field: {
            type: chosenField,
            closed: false,
            diff: [],
            config: { colWidth: "col-12" },
          },
        });
        break;
    }
  }, [chosenField]);

  return <div>{modalStateContent}</div>;
};

export default FieldPresenter;
