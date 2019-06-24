import React, { useState } from "react";
import styles from "../Modal.module.css";

interface ParagraphModalProps {
  currentConfig?: {};
  handleSubmit: (e: any, config: any) => void;
}

const ParagraphModal: React.FunctionComponent<ParagraphModalProps> = ({
  handleSubmit,
  currentConfig,
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
        <h2>Paragraph</h2>
        <label>Title</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="title"
          placeholder="Enter here"
          required={true}
        />
        <label>text</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="text"
          placeholder="Enter text here"
          required={true}
        />
        <div className={styles.radioContainer}>
          <label>
            {" "}
            Short
            <input
              type="radio"
              onChange={handleInputChange}
              name="colWidth"
              value="col-6"
              required={true}
            />
            <span className={styles.customRadio} />
          </label>
          <label>
            {" "}
            Long
            <input
              type="radio"
              onChange={handleInputChange}
              name="colWidth"
              value="col-12"
              required={true}
            />
            <span className={styles.customRadio} />
          </label>
        </div>
        <button>ADD</button>
      </div>
    </form>
  );
};

export default ParagraphModal;
