import React from "react";
import FormHeaderPresenter from "./FormHeader.presenter";

const FormHeaderContainer = () => {
  return (
    <FormHeaderPresenter
      formNumber={"FORM0001"}
      status={"DRAFT"}
      title={"Form Builder"}
    />
  );
};

export default FormHeaderContainer;
