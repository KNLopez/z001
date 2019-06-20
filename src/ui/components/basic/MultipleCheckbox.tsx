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
              type="checkbox"
              name={title}
              value={option}
            />
            <span className={styles.customCheck} />
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
        <input type="checkbox" name={title} value={option} />
        <span className={styles.customCheck} />
      </label>
    );
  });

  return (
    <div className={styles.checkboxContainer}>
      <h3 className={styles.checkBoxTitle}>{title}</h3>
      <div className={styles.checkBoxGroup}>{radio}</div>
    </div>
  );
};

export default MultipleCheckbox;
