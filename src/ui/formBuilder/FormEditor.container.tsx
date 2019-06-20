import React, { Fragment } from "react";
import { useStateValue } from "../../state/formContext";
import styles from "./FormBuilder.module.css";
import FormEditorPresenter from "./FormEditor.presenter";
import { SHOW_MODAL } from "../../state/formActions";

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

  const Presenter =
    elements.length > 0 ? (
      <FormEditorPresenter EditorProps={elements} />
    ) : (
      placeholder
    );
  return <Fragment>{Presenter}</Fragment>;
};

export default FormEditorContainer;
