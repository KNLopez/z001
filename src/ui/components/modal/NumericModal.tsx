import React, {useState} from "react";
import styles from "./Modal.module.css";

interface NumericModalProps {
  title: string;
  handleSubmit: ( e: any , config: any) => void;
}

const NumericModal: React.FunctionComponent<NumericModalProps> = ({
  title, handleSubmit,
}) => {
  const [config, setConfig] = useState();
  const [withTolerance, setTolerance] = useState(false)

  const handleInputChange = (e: any) => {
    const {name, value} = e.target;
    setConfig({...config, [name]: value});
  };

  const toleranceCheck = (e:any) => {
    const {name, checked} = e.target;
    setConfig({...config, [name]: checked});
    setTolerance(true)
  }

  const submitForm = (e: any) => {
    e.preventDefault();
    handleSubmit(e, config);
  };

  console.log(withTolerance, config)

  const tolerance = () => (
      <div className="toleranceContainer">
        <div className="radioContainer">
            <input onChange={handleInputChange} type="radio" name="toleranceType" value="percent" />%
            <input onChange={handleInputChange} type="radio" name="toleranceType" value="number" />number
        </div>
        <input onChange={handleInputChange} type="text" name="min" placeholder="Enter minimum value"/>
        <input onChange={handleInputChange} type="text" name="max" placeholder="Enter maximum value"/>
      </div>
  )

  return (
    <form onSubmit={submitForm}>
      <div className={styles.modalFormContainer}>
        <h2>Add {title}</h2>
      <label>Label</label>
      <input type="text" onChange={handleInputChange} name="title" placeholder="Enter here" required={true}/>
      <label>Placeholder</label>
      <input type="text" onChange={handleInputChange} name="placeholder" placeholder="Enter here" required={true}/>
      <input type="checkbox" onChange={toleranceCheck} name="tolerance"  value="true" /> with tolerance?
      { withTolerance ? tolerance() : null }
      <button>ADD</button>
      </div>
    </form>
  );
};

export default NumericModal;
