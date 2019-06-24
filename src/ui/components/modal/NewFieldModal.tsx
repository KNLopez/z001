import React, { Fragment, useEffect, useState } from "react";
import { ADD_FIELD } from "../../../state/formActions";
import { useStateValue } from "../../../state/formContext";

import { FieldConstants } from "./fields/FieldConstants";

import styles from "./Modal.module.css";
import FieldPresenter from "./helper/FieldPresenter";

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
      {buttonGroup("Basic Fields", basicFieldButtons)}
      {buttonGroup("Approvals", approvalButtons)}
      {buttonGroup("Lists", listButtons)}
    </div>
  );

  useEffect(() => {
    if (chosenField) {
      setModalContent(
        <FieldPresenter chosenField={chosenField} clickHandler={addField} />,
      );
    } else {
      setModalContent(modalContent);
    }
  }, [chosenField, modalContent, addField]);
  return <Fragment>{modalStateContent}</Fragment>;
};

export default Modal;
