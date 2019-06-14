import React, {useState, useEffect} from "react";
import FormBuilderPresenter from "./FormBuilder.presenter";
import {StateProvider} from "../../contexts/formContext";
import SampleProps from "../../contexts/SampleProps";

const FormBuilderContainer = () => {
  const [formProps, setFormHeaderProps] = useState(SampleProps);

  const reducer = (state:any, action:any) => {
    switch (action.type) {
      case 'ADD_FIELD':
        return {
          ...state,
          elements: [...state.elements, action.field]
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={formProps} reducer={reducer}>
      <FormBuilderPresenter
        HeaderProps={{
          title: formProps.title,
          formNumber: formProps.formNumber,
          status: formProps.status
        }}
        EditorProps={formProps.elements}
      />
    </StateProvider>
  );
};

export default FormBuilderContainer;
