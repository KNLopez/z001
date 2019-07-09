import React, { Fragment } from "react";
import styles from "./BasicFields.module.css";

interface SingleLineProps {
  title: string;
  placeholder: string;
  closed: boolean;
  values?: any;
  updateValue?: any;
  currentIndex?: any;
}

const SingleLine: React.FunctionComponent<SingleLineProps> = ({
  title,
  placeholder,
  closed,
  values,
  updateValue,
  currentIndex,
}) => {
  const setValue = (e: any) => {
    updateValue(currentIndex, e.target.name, e.target.value);
  };

  const singLineField = (
    <div className={styles.singleLine}>
      <label htmlFor={title}>{title}</label>
      <input
        name={title}
        type="text"
        placeholder={placeholder}
        onChange={setValue}
        defaultValue={values ? values[title] : null}
      />
    </div>
  );

  return <Fragment>{singLineField}</Fragment>;
};

export default SingleLine;
