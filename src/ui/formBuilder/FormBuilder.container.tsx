import React, {useState} from "react";
import {StateProvider} from "../../state/formContext";
import data from "../../state/SampleProps";
import styles from "../components/modal/Modal.module.css";
import FormBuilderPresenter from "./FormBuilder.presenter";

const FormBuilderContainer: React.FunctionComponent = () => {

  const initialState = {
    formNumber: "",
    status: "",
    title: "",
  };

  const [formProps, setFormProps] = useState(data);
  const [headerProps, setHeaderProps] = useState(initialState)
  const [withHeader, setwithHeader] = useState(false)

  const reducer = (state: any, action: any) => {
    const elements = [...state.elements];
    const index = state.currentIndex;
    switch (action.type) {
      case "ADD_FIELD":
        elements.splice(index + 1, 0, action.field);
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

      case "EDIT_FIELD":
        elements.splice(index + 1, 1, action.field);
        return {
          ...state,
          elements,
        };
      case "DELETE_FIELD":
        elements.splice(action.currentIndex, action.currentIndex + 1);
        return {
          ...state,
          elements,
        };
      case "SET_FORM_INFO":
        return {
          ...state,
          title: action.title,
          formNumber: action.formNumber,
          status: action.status,
        };
      default:
        return state;
    }
  };

  const handleInputChange = (e: any) => {
    const {name, value} = e.target;
    setHeaderProps({...headerProps, [name]: value});
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    setFormProps({...formProps, title: headerProps.title, formNumber: headerProps.formNumber, status: "Draft" })
    setwithHeader(true);
  };

  const createForm = (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBody}>
      <form onSubmit={submitForm}>
      <div className={styles.modalFormContainer}>
        <h2> Create a form</h2>
      <label>Form Title</label>
      <input type="text" onChange={handleInputChange} name="title" placeholder="Enter here" required={true}/>
      <label>Form Number</label>
      <input type="text" onChange={handleInputChange} name="formNumber" placeholder="Enter here" required={true}/>
      <button>CREATE</button>
      </div>
    </form>
      </div>
    </div>
  );

  const formBuilderPresenter = (
    <FormBuilderPresenter {...formProps}/>
  );

  return (
    <StateProvider initialState={formProps} reducer={reducer}>
      {withHeader ? formBuilderPresenter : createForm}
    </StateProvider>
  );
};

export default FormBuilderContainer;
