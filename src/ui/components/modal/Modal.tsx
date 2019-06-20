import React, { useCallback, useEffect, useState } from "react";
import { ADD_FIELD } from "../../../state/formActions";
import { useStateValue } from "../../../state/formContext";
import CheckBoxModal from "./CheckBoxModal";
import DatePickerModal from "./DatePickerModal";
import { FieldConstants } from "./FieldConstants";
import HyperLinkModal from "./HyperLinkModal";
import FileUploadModal from "./FileUploadModal";
import LineFieldModal from "./LineFieldModal";
import MultipleCheckboxModal from "./MultipleCheckboxModal";
import ParagraphModal from "./ParagraphModal";
import styles from "./Modal.module.css";
import NumericModal from "./NumericModal";
import RadioModal from "./RadioModal";
import SectionModal from "./SectionModal";

interface BigObject<T> {
  [index: string]: T;
}

const Modal = () => {
  // eslint-disable-next-line
  const [{}, dispatch]: any = useStateValue();
  const [chosenField, setChosenField] = useState();
  const [modalStateContent, setModalContent] = useState();

  const addField = (e: any, config: any) => {
    e.preventDefault();
    if (!config.colWidth) {
      config.colWidth = "col-12";
    }
    dispatch(
      ADD_FIELD({
        type: chosenField,
        config,
      }),
    );
    dispatch({ type: "HIDE_MODAL" });
  };

  const handleClick = (field: string) => {
    setChosenField(field);
  };

  const removeModal = (e: any) => {
    e.stopPropagation();
    dispatch({ type: "HIDE_MODAL" });
  };

  const sections: BigObject<string> = FieldConstants.sections;
  const sectionButtons = Object.keys(sections).map((value) => {
    return (
      <button
        className={styles[value]}
        onClick={() => handleClick(value)}
        key={value}
      >
        {sections[value]}
      </button>
    );
  });

  const basicFields: BigObject<string> = FieldConstants.basicFields;
  const basicFieldButtons = Object.keys(basicFields).map((value) => {
    return (
      <button
        className={styles[value]}
        onClick={() => handleClick(value)}
        key={value}
      >
        {basicFields[value]}
      </button>
    );
  });

  const approvals: BigObject<string> = FieldConstants.approvals;
  const approvalButtons = Object.keys(approvals).map((value) => {
    return (
      <button onClick={() => handleClick(value)} key={value}>
        {approvals[value]}
      </button>
    );
  });

  const lists: BigObject<string> = FieldConstants.lists;
  const listButtons = Object.keys(lists).map((value) => {
    return (
      <button onClick={() => handleClick(value)} key={value}>
        {lists[value]}
      </button>
    );
  });

  const buttonGroup = (title: string, buttons: JSX.Element[]) => (
    <div className={styles.buttonGroup}>
      <h2>{title}</h2>
      {buttons}
    </div>
  );

  const modalContent = (
    <div>
      {buttonGroup("Section", sectionButtons)}
      {buttonGroup("Basic fields", basicFieldButtons)}
      {buttonGroup("Approvals", approvalButtons)}
      {buttonGroup("Lists", listButtons)}
    </div>
  );

  useEffect(() => {
    setModalContent(modalContent);
    switch (chosenField) {
      case "singleLine":
        setModalContent(
          <LineFieldModal
            title="Single Line Textfield"
            handleSubmit={addField}
          />,
        );
        break;
      case "section":
        setModalContent(
          <SectionModal title="Section" handleSubmit={addField} />,
        );
        break;
      case "subSection":
        setModalContent(
          <SectionModal title="Sub Section" handleSubmit={addField} />,
        );
        break;
      case "multiLine":
        setModalContent(
          <LineFieldModal
            title="Multi-Line Textfield"
            handleSubmit={addField}
          />,
        );
        break;
      case "checkbox":
        setModalContent(<CheckBoxModal handleSubmit={addField} />);
        break;
      case "radio":
        setModalContent(<RadioModal handleSubmit={addField} />);
        break;
      case "numeric":
        setModalContent(
          <NumericModal title="Numeric Field" handleSubmit={addField} />,
        );
        break;
      case "datepicker":
        setModalContent(
          <DatePickerModal title="Date Picker Field" handleSubmit={addField} />,
        );
        break;
      case "hyperlink":
        setModalContent(<HyperLinkModal handleSubmit={addField} />);
        break;
      case "paragraph":
        setModalContent(<ParagraphModal handleSubmit={addField} />);
        break;
      case "fileUpload":
        setModalContent(<FileUploadModal handleSubmit={addField} />);
        break;
      case "multipleCheckbox":
        setModalContent(<MultipleCheckboxModal handleSubmit={addField} />);
        break;
    }
  }, [chosenField, modalContent, addField]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBody}>
        <div className={styles.close} onClick={removeModal}>
          X
        </div>
        {modalStateContent}
      </div>
    </div>
  );
};

export default Modal;
