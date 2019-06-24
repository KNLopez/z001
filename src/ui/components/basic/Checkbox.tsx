import React, { Fragment, useState } from "react";
import styles from "./BasicFields.module.css";

interface CheckBoxProps {
  title: string;
  notes?: string;
}

const CheckBox: React.FunctionComponent<CheckBoxProps> = ({ title, notes }) => {
  const [note, showNote] = useState(false);

  const handleCheck = (e: any) => {
    if (e.target.checked) {
      showNote(true);
    } else {
      showNote(false);
    }
  };

  const input = (
    <input type="text" className={styles.checkBoxNotes} placeholder={notes} />
  );

  const checkBoxField = (
    <div className={styles.checkBox}>
      <label className={styles.checkBoxContainer}>
        {title}
        <input name={title} type="checkbox" onChange={handleCheck} />
        <span className={styles.innerCheck} />
      </label>
      {note && notes ? input : null}
    </div>
  );

  return <Fragment>{checkBoxField}</Fragment>;
};

export default CheckBox;
