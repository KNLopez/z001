import React, {} from "react";
import {useStateValue} from "../../contexts/formContext";
import Modal from "../components/modal/Modal";
import FormEditorContainer from "./FormEditor.container";
import FormHeaderContainer from "./FormHeader.container";

interface FormBuilderPresenterProps {
  HeaderProps: {
    formNumber: string;
    status: string;
    title: string;
  };
  EditorProps: any[];
}

const FormBuilderPresenter: React.FunctionComponent<FormBuilderPresenterProps> = ({
  HeaderProps, EditorProps,
}) => {

  const [{modalState}]: any = useStateValue();

  return (
    <div className="FormBuilder">
      {modalState.show ? <Modal /> : null}
      <FormHeaderContainer HeaderProps={HeaderProps}/>
      <FormEditorContainer EditorProps={EditorProps}/>
    </div>
  );
};

export default FormBuilderPresenter;
