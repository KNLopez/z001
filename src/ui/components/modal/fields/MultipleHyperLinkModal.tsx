import React, { useEffect, useState } from "react";
import styles from "../Modal.module.css";

interface MultipleHyperLinkModalProps {
  handleSubmit: (e: any, config: any) => void;
  currentConfig?: { links: any };
}

const MultipleHyperLinkModal: React.FunctionComponent<
  MultipleHyperLinkModalProps
> = ({ handleSubmit, currentConfig }) => {
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
        <h2>Add Hyperlinks</h2>
        <label>Label</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="title"
          placeholder="Enter here"
          required={true}
          defaultValue={config ? config.title : null}
        />
        <label>Options</label>
        <textarea
          onChange={handleTextAreaChange}
          name="links"
          placeholder={"link 1\nlink 2\nlink 3\n"}
          required={true}
          defaultValue={currentConfig ? currentConfig.links.join("\n") : null}
        />
        <span> One hyperlink per line.</span>
        <button>{currentConfig ? "Save" : "Add"}</button>
      </div>
    </form>
  );
};

export default MultipleHyperLinkModal;
