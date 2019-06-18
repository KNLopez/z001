import React from "react";
import FormHeaderPresenter from "./FormHeader.presenter";
import {useStateValue} from "../../contexts/formContext";


const FormHeaderContainer: React.FunctionComponent = ({
  
}) => {
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
