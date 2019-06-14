import React, {} from "react";
import {useStateValue} from "../../contexts/formContext";
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

  const [{elements}, dispatch]: any = useStateValue();

  const addField = () => {
    dispatch({type: "ADD_FIELD", field: {
      type: "datepicker",
      config: {
      colWidth: "col-12",
      title: "This is a calendar",
      },
    }});
  };

  return (
    <div className="FormBuilder">
      <button onClick={addField}> Hello </button>
      <FormHeaderContainer HeaderProps={HeaderProps}/>
      <FormEditorContainer EditorProps={EditorProps}/>
    </div>
  );
};

export default FormBuilderPresenter;
