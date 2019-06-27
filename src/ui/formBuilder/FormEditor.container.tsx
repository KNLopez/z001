import React, { Fragment } from "react";
import { SHOW_MODAL } from "../../state/formActions";
import { useStateValue } from "../../state/formContext";
import styles from "./FormBuilder.module.css";
import FormEditorPresenter from "./FormEditor.presenter";

const FormEditorContainer: React.FunctionComponent = () => {
  const [{ elements }, dispatch]: any = useStateValue();

  const showModal = () => {
    dispatch(SHOW_MODAL(0));
  };

  const placeholder = (
    <div className={styles.formEditorContainer} onClick={showModal}>
      <span>ADD FIELD</span>
    </div>
  );

  const Presenter = elements.length > 0 ? <FormEditorPresenter /> : placeholder;
  return <Fragment>{Presenter}</Fragment>;
};

export default FormEditorContainer;
