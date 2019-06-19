import React, { Fragment } from "react";
import styles from "./BasicFields.module.css";

interface CheckBoxProps {
  title: string;
  notes?: string;
}

const CheckBox: React.FunctionComponent<CheckBoxProps> = ({ title, notes }) => {
  const checkBoxField = (
    <div className={styles.checkBox}>
      <label htmlFor={title}>{title}</label>
      <input name={title} type="checkbox" />
      {notes ? <span className={styles.checkBoxNotes}> {notes} </span> : null}
    </div>
  );

  return <Fragment>{checkBoxField}</Fragment>;
};

export default CheckBox;
