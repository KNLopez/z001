import React, {Fragment} from "react";
import styles from "./BasicFields.module.css";

interface RadioProps {
  title: string;
  options: any[];
}

const RadioField: React.FunctionComponent<RadioProps> = ({
  title, options,
}) => {

  const radio = options.map((option) => (
    <label> {option}
      <input type="radio" name={title} value={option} />
      <span className={styles.customRadio}/>
    </label>
  ));

  return (
    <div className={styles.radioContainer}>
      <h3 className={styles.radioTitle}>{title}</h3>
      {radio}
    </div>
  );
};

export default RadioField;
