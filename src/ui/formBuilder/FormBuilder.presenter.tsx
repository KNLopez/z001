import React, { Fragment, useEffect, useState } from "react";
import { useStateValue } from "../../state/formContext";
import Modal from "../components/modal/Modal";
import styles from "./FormBuilder.module.css";
import FormViewerContainer from "./FormViewer.container";
import FormEditorContainer from "./FormEditor.container";
import FormHeaderContainer from "./FormHeader.container";
import FormImportExport from "./FormImportExport";

interface FormBuilderPresenterProps {
  formNumber: string;
  status: string;
  title: string;
}

const FormBuilderPresenter: React.FunctionComponent<
  FormBuilderPresenterProps
> = ({ formNumber, status, title }) => {
  const [headerProps] = useState({ formNumber, status, title });
  const [{ modalState }, dispatch]: any = useStateValue();
  const [viewFormMode, setViewFormMode] = useState(false);

  useEffect(() => {
    dispatch({ type: "SET_FORM_INFO", formNumber, status, title });
  }, [headerProps, formNumber, dispatch, status, title]);

  const builderContainer = (
    <Fragment>
      <FormEditorContainer />
      <FormImportExport />
    </Fragment>
  );

  const toggleView = () => {
    setViewFormMode(!viewFormMode);
  };

  return (
    <div className="FormBuilder">
      <FormHeaderContainer />
      {modalState.show ? <Modal /> : null}
      {viewFormMode ? <FormViewerContainer /> : builderContainer}

      <button onClick={toggleView} className={styles.viewForm}>
        VIEW {viewFormMode ? "BUILDER" : "FORM"}
      </button>
    </div>
  );
};

export default FormBuilderPresenter;
