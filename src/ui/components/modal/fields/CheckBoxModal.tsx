import React, { useEffect, useState } from "react";
import styles from "../Modal.module.css";

interface CheckBoxModalProps {
  currentConfig?: {};
  handleSubmit: (e: any, config: any) => void;
}

const CheckBoxModal: React.FunctionComponent<CheckBoxModalProps> = ({
  currentConfig,
  handleSubmit,
}) => {
  const [config, setConfig] = useState();

  useEffect(() => {
    if (currentConfig) {
      setConfig(currentConfig);
    }
  }, [currentConfig]);

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
        <h2>{currentConfig ? "Edit" : "Add"} Checkbox</h2>
        <label>Label</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="title"
          placeholder="Enter here"
          required={true}
          defaultValue={config ? config.title : null}
        />
        <label>Notes</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="notes"
          placeholder="Enter here"
          defaultValue={config ? config.notes : null}
        />
        <button>{currentConfig ? "Save" : "Add"}</button>
      </div>
    </form>
  );
};

export default CheckBoxModal;
