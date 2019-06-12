import React from "react";
import FormHeaderContainer from "./FormHeader.container";
import FormEditorContainer from "./FormEditor.container";

const FormBuilderContainer = () => {
  return (
    <div className="FormBuilder">
      <FormHeaderContainer />
      <FormEditorContainer />
    </div>
  );
};

export default FormBuilderContainer;
