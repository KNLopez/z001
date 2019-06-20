import React, { Fragment } from "react";
import styles from "./BasicFields.module.css";

interface CheckBoxProps {
  title: string;
  notes?: string;
}

const CheckBox: React.FunctionComponent<CheckBoxProps> = ({ title, notes }) => {
  const input = (
    <input type="text" className={styles.checkBoxNotes} placeholder={notes} />
  );

  const checkBoxField = (
    <div className={styles.checkBox}>
      <label htmlFor={title}>{title}</label>
      <input name={title} type="checkbox" />
      {notes ? input : null}
    </div>
  );

  return <Fragment>{checkBoxField}</Fragment>;
};

export default CheckBox;
