import React, { useState } from "react";
import styles from "./Modal.module.css";

interface HyperLinkModalProps {
  handleSubmit: (e: any, config: any) => void;
}

const HyperLinkModal: React.FunctionComponent<HyperLinkModalProps> = ({
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
        <h2>Hyperlink</h2>
        <label>Label</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="title"
          placeholder="Enter here"
          required={true}
        />
        <label>URL</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="url"
          placeholder="Enter link here"
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

export default HyperLinkModal;
