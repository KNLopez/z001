import React, {useState} from "react";
import {StateProvider} from "../../contexts/formContext";
import SampleProps from "../../contexts/SampleProps";
import FormBuilderPresenter from "./FormBuilder.presenter";

const FormBuilderContainer = () => {
  const [formProps] = useState(SampleProps);

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "ADD_FIELD":
        const elements = [...state.elements];
        const index = state.currentIndex + 1;
        elements.splice(index, 0, action.field);

        return {
          ...state,
          elements,
        };
      case "SHOW_MODAL":
          return {
            ...state,
            modalState: { ...state.modalState, show: true },
            currentIndex: action.currentIndex,
          };
      case "HIDE_MODAL":
          return {
            ...state,
            modalState: { ...state.modalState, show: false },
          };

      default:
        return state;
    }
  };

  const headerProps = {
    title: formProps.title,
    formNumber: formProps.formNumber,
    status: formProps.status,
  };

  return (
    <StateProvider initialState={formProps} reducer={reducer}>
      <FormBuilderPresenter
        HeaderProps={headerProps}
        EditorProps={formProps.elements}
      />
    </StateProvider>
  );
};

export default FormBuilderContainer;
