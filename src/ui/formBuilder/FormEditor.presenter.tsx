import React from "react";
import {useStateValue} from "../../contexts/formContext";
import styles from "./FormBuilder.module.css";
import FormFieldEditor from "./FormFieldEditor";

interface FormEditorPresenter {
  EditorProps: any[];
}

const FormEditorPresenter: React.FunctionComponent<FormEditorPresenter> = ({ EditorProps }) => {

  const [{elements}]: any = useStateValue();

  const Forms  = elements.map((elem: any, i: any) => {
    return <FormFieldEditor key={i} order={i} type={elem.type} config={elem.config} />;
  });

  return (
    <div className={styles.formEditorContainer}>
      {Forms}
    </div>
  );
};

export default FormEditorPresenter;
