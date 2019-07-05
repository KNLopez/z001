import React, { useState } from "react";
import { StateProvider } from "../../state/formContext";
import { formReducer } from "../../state/formReducer";
import styles from "../components/modal/Modal.module.css";
import FormBuilderPresenter from "./FormBuilder.presenter";

interface FormBuilderProps {
  data: any;
}

const FormBuilderContainer: React.FunctionComponent<FormBuilderProps> = ({
  data,
}) => {
  const initialState = {
    formNumber: "",
    status: "",
    title: "",
  };

  const [formProps, setFormProps] = useState(data);
  const [headerProps, setHeaderProps] = useState(initialState);
  const [withHeader, setwithHeader] = useState(false);

  const reducer = formReducer;

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setHeaderProps({ ...headerProps, [name]: value });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    setFormProps({
      ...formProps,
      title: headerProps.title,
      formNumber: headerProps.formNumber,
      status: "Draft",
    });
    setwithHeader(true);
  };

  const createForm = (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBody}>
        <form onSubmit={submitForm}>
          <div className={styles.modalFormContainer}>
            <h2> Create a form</h2>
            <label>Form Title</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="title"
              placeholder="Enter here"
              required={true}
            />
            <label>Form Number</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="formNumber"
              placeholder="Enter here"
              required={true}
            />
            <button>CREATE</button>
          </div>
        </form>
      </div>
    </div>
  );

  const formBuilderPresenter = <FormBuilderPresenter {...formProps} />;

  return (
    <StateProvider initialState={formProps} reducer={reducer}>
      {withHeader ? formBuilderPresenter : createForm}
    </StateProvider>
  );
};

export default FormBuilderContainer;
