import React, { Fragment, useState } from "react";
import styles from "./BasicFields.module.css";

interface RadioProps {
  title: string;
  options: any[];
}

const RadioField: React.FunctionComponent<RadioProps> = ({
  title,
  options,
}) => {
  const [otherChosen, chooseOther] = useState(false);

  const chosenHandler = (e: any) => {
    chooseOther(true);
  };

  const radio = options.map((option, i) => {
    if (option === "[other]") {
      return (
        <Fragment>
          <label key={i}>
            {" "}
            Other
            <input
              onChange={chosenHandler}
              type="radio"
              name={title}
              value={option}
            />
            <span className={styles.customRadio} />
          </label>
          {otherChosen ? (
            <input type="text" placeholder="Enter choice" />
          ) : null}
        </Fragment>
      );
    }
    return (
      <label key={i}>
        {" "}
        {option}
        <input type="radio" name={title} value={option} />
        <span className={styles.customRadio} />
      </label>
    );
  });

  return (
    <div className={styles.radioContainer}>
      <h3 className={styles.radioTitle}>{title}</h3>
      <div className={styles.radioGroup}>{radio}</div>
    </div>
  );
};

export default RadioField;
