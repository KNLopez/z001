import React from "react";
import FormFieldViewer from "./FormFieldViewer";
import styles from "./FormBuilder.module.css";

interface FormViewerProps {
  elements: any;
}

const FormViewer: React.FunctionComponent<FormViewerProps> = ({ elements }) => {
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
