import React, { useState, useEffect } from "react";
import {useStateValue} from "../../contexts/formContext";
import Modal from "../components/modal/Modal";
import FormEditorContainer from "./FormEditor.container";
import FormHeaderContainer from "./FormHeader.container";


interface FormBuilderPresenterProps {
  formNumber: string;
  status: string;
  title: string;
}

const FormBuilderPresenter: React.FunctionComponent<FormBuilderPresenterProps> = ({
  formNumber, status, title
}) => {
  const [headerProps] = useState({formNumber, status, title})
  const [{modalState}, dispatch]: any = useStateValue();

  useEffect(()=>{
    dispatch({type: "SET_FORM_INFO", formNumber, status, title})
  }, [headerProps])

  return (
    <div className="FormBuilder">
      {modalState.show ? <Modal /> : null}
      <FormHeaderContainer />
      <FormEditorContainer />
    </div>
  );
};

export default FormBuilderPresenter;
