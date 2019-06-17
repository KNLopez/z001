import React from "react";
import FormEditorPresenter from "./FormEditor.presenter";

interface FormEditorContainerProps {
  EditorProps: any[];
}

const FormEditorContainer: React.FunctionComponent<FormEditorContainerProps> = ({EditorProps}) => {
  return (
    <FormEditorPresenter EditorProps={EditorProps}/>
  );
};

export default FormEditorContainer;
