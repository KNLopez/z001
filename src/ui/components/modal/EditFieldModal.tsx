import React, { Fragment } from "react";
import { useStateValue } from "../../../state/formContext";
import { UPDATE_FIELD } from "../../../state/formActions";
import FieldPresenter from "./helper/FieldPresenter";

const EditFieldModal: React.FunctionComponent = () => {
  // eslint-disable-next-line
  const [{ currentField }, dispatch]: any = useStateValue();

  const updateField = (e: any, config: any) => {
    e.preventDefault();
    if (!config.colWidth) {
      config.colWidth = "col-12";
    }
    dispatch(
      UPDATE_FIELD(currentField.type, config, currentField.currentIndex),
    );
  };

  const modalStateContent = (
    <FieldPresenter
      chosenField={currentField.type}
      currentConfig={currentField.config}
      clickHandler={updateField}
    />
  );

  return <Fragment>{modalStateContent}</Fragment>;
};

export default EditFieldModal;
