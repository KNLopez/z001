import React, {useState} from "react";
import styles from "./Modal.module.css";

interface SectionModalProps {
  title: string;
  handleSubmit: ( e: any , config: any) => void;
}

const SectionModal: React.FunctionComponent<SectionModalProps> = ({
  title, handleSubmit,
}) => {
  const [config, setConfig] = useState();

  const handleInputChange = (e: any) => {
    const {name, value} = e.target;
    setConfig({...config, [name]: value});
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    handleSubmit(e, config);
  };

  return (
    <form onSubmit={submitForm}>
      <div className={styles.modalFormContainer}>
        <h2>Add {title}</h2>
      <label>Label</label>
      <input type="text" onChange={handleInputChange} name="title" placeholder="Enter here" required={true}/>
      <button>ADD</button>
      </div>
    </form>
  );
};

export default SectionModal;
