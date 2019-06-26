import React, { Fragment } from "react";
import { RECORD_UPDATES, UPDATE_FIELD } from "../../../state/formActions";
import { useStateValue } from "../../../state/formContext";
import ModalFieldPresenter from "./helper/ModalFieldPresenter";

const EditFieldModal: React.FunctionComponent = () => {
  // eslint-disable-next-line
  const [{ currentField }, dispatch]: any = useStateValue();

  const updateField = (e: any, config: any) => {
    e.preventDefault();
    if (!config.colWidth) {
      config.colWidth = "col-12";
    }
    if (currentField.closed) {
      dispatch(
        RECORD_UPDATES(currentField.config, config, currentField.currentIndex),
      );
    }
    dispatch(
      UPDATE_FIELD(
        currentField.type,
        config,
        currentField.currentIndex,
        currentField.closed,
      ),
    );
  };

  const modalStateContent = (
    <ModalFieldPresenter
      chosenField={currentField.type}
      currentConfig={currentField.config}
      clickHandler={updateField}
    />
  );

  return <Fragment>{modalStateContent}</Fragment>;
};

export default EditFieldModal;
