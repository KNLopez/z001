import React from "react";
import {useStateValue} from "../../state/formContext";
import FormHeaderPresenter from "./FormHeader.presenter";


const FormHeaderContainer = () => {
  const [{title, formNumber, status}]: any = useStateValue();
  return (
    <FormHeaderPresenter
      formNumber={formNumber}
      status={status}
      title={title}
    />
  );
};

export default FormHeaderContainer;
