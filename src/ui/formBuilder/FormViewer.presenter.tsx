import React, { Fragment } from "react";
import { useStateValue } from "../../state/formContext";
import FormFieldViewer from "./FormFieldViewer";
import styles from "./FormBuilder.module.css";

const FormViewer: React.FunctionComponent = ({}) => {
  const [{ elements }]: any = useStateValue();
  const Fields = elements.map((elem: any, i: any) => {
    return (
      <FormFieldViewer
        closed={elem.closed}
        diff={elem.diff}
        key={i}
        order={i}
        type={elem.type}
        config={elem.config}
        editMode={false}
      />
    );
  });
  return <div className={styles.formEditorContainer}> {Fields} </div>;
};

export default FormViewer;
