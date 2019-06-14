import React from "react";
import FormHeaderPresenter from "./FormHeader.presenter";

interface FormHeaderContainerProps {
  HeaderProps: {
    formNumber: string;
    status: string;
    title: string;
  };
}

const FormHeaderContainer: React.FunctionComponent<FormHeaderContainerProps> = ({
  HeaderProps,
}) => {
  const { formNumber, status, title} = HeaderProps
  return (
    <FormHeaderPresenter
      formNumber={formNumber}
      status={status}
      title={title}
    />
  );
};

export default FormHeaderContainer;
