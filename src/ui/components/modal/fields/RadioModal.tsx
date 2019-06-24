import React, { useState } from "react";
import styles from "../Modal.module.css";

interface RadioModalModalProps {
  currentConfig: {};
  handleSubmit: (e: any, config: any) => void;
}

const RadioModal: React.FunctionComponent<RadioModalModalProps> = ({
  currentConfig,
  handleSubmit,
}) => {
  const [config, setConfig] = useState();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };

  const handleTextAreaChange = (e: any) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value.split("\n") });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    handleSubmit(e, config);
  };

  return (
    <form onSubmit={submitForm}>
      <div className={styles.modalFormContainer}>
        <h2>Add Radio Buttons</h2>
        <label>Label</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="title"
          placeholder="Enter here"
          required={true}
        />
        <label>Options</label>
        <textarea
          onChange={handleTextAreaChange}
          name="options"
          placeholder={"Option 1\nOption 2\nOption 3\n[other]"}
          required={true}
        />
        <span>
          {" "}
          One option per line. Type [other] with brackets to add "other" option
        </span>
        <button>ADD</button>
      </div>
    </form>
  );
};

export default RadioModal;
