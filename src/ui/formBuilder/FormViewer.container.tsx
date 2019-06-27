import React, { Fragment } from "react";
import { useStateValue } from "../../state/formContext";
import styles from "./FormBuilder.module.css";
import FormViewerPresenter from "./FormViewer.presenter";

const FormViewerContainer = () => {
  const [{ elements }, dispatch]: any = useStateValue();

  const placeholder = (
    <div className={styles.formEditorContainer}>
      <span>NO FIELD</span>
    </div>
  );

  const Presenter = elements.length > 0 ? <FormViewerPresenter /> : placeholder;

  return <Fragment>{Presenter}</Fragment>;
};

export default FormViewerContainer;
