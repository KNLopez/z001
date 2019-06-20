import React, { Fragment, useState } from "react";
import styles from "./BasicFields.module.css";

interface MultipleCheckboxProps {
  title: string;
  options: any[];
}

const MultipleCheckbox: React.FunctionComponent<MultipleCheckboxProps> = ({
  title,
  options,
}) => {
  const [otherChosen, chooseOther] = useState(false);

  const chosenHandler = (e: any) => {
    chooseOther(e.target.checked);
  };

  const checkBoxes = options.map((option, i) => {
    if (option === "[other]") {
      return (
        <Fragment>
          <label key={i} htmlFor={option} className={styles.checkBoxContainer}>
            {" "}
            Other
            <input
              id={option}
              onChange={chosenHandler}
              type="checkbox"
              name={title}
              value={option}
            />
            <span className={styles.innerCheck} />
          </label>
          {otherChosen ? (
            <input type="text" placeholder="Enter choice" />
          ) : null}
        </Fragment>
      );
    } else {
      return (
        <label key={i} htmlFor={option} className={styles.checkBoxContainer}>
          {" "}
          {option}
          <input id={option} name={option} type="checkbox" value={option} />
          <span className={styles.innerCheck} />
        </label>
      );
    }
  });

  return (
    <div className={styles.multipleCheckBoxContainer}>
      <h3 className={styles.checkBoxTitle}>{title}</h3>
      <div className={styles.checkBoxGroup}>{checkBoxes}</div>
    </div>
  );
};

export default MultipleCheckbox;
