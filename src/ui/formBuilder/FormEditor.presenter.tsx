import React, {useContext} from "react";
import {useStateValue} from "../../contexts/formContext";
import FormFieldEditor from "./FormFieldEditor";
import styles from "./FormBuilder.module.css";

interface FormEditorPresenter {
  EditorProps: any[];
}

const FormEditorPresenter: React.FunctionComponent<FormEditorPresenter> = ({ EditorProps }) => {

  const [{elements}]: any = useStateValue();

  const Forms  = elements.map((elements:any, i:any) => {
    return <FormFieldEditor key={i} type={elements.type} config={elements.config} />
  });

  return (
    <div className={styles.formEditorContainer}>
      { Forms }
    </div>
  );
};

export default FormEditorPresenter;
