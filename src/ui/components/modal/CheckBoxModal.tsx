import React, { useState } from "react";
import styles from "./Modal.module.css";

interface CheckBoxModalProps {
  handleSubmit: (e: any, config: any) => void;
}

const CheckBoxModal: React.FunctionComponent<CheckBoxModalProps> = ({
  handleSubmit,
}) => {
  const [config, setConfig] = useState();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    handleSubmit(e, config);
  };

  return (
    <form onSubmit={submitForm}>
      <div className={styles.modalFormContainer}>
        <h2>Add Checkbox</h2>
        <label>Label</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="title"
          placeholder="Enter here"
          required={true}
        />
        <label>Notes</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="notes"
          placeholder="Enter here"
        />
        <button>ADD</button>
      </div>
    </form>
  );
};

export default CheckBoxModal;
