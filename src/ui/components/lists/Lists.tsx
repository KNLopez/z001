import React, { Fragment, useEffect, useState } from "react";
import styles from "../basic/BasicFields.module.css";
import { FieldConstants } from "../modal/FieldConstants";

interface ListsProps {
  title: string;
  options?: any;
  closed: boolean;
}

interface BigObject<T> {
  [index: string]: T;
}

const Lists: React.FunctionComponent<ListsProps> = ({ title, options }) => {
  const [choices, setChoices] = useState([]);
  const [stringTitle, setStringTitle] = useState();
  const [other, setOther] = useState(false);
  useEffect(() => {
    if (options) {
      setChoices(options);
    }
  }, [options]);

  const lists: BigObject<string> = FieldConstants.lists;
  useEffect(() => {
    if (Object.keys(lists).includes(title)) {
      setStringTitle(lists[title]);
    } else {
      setStringTitle(title);
    }
  }, [stringTitle]);

  const selectOptions = choices.map((choice: string, i) => (
    <option key={i} value={choice}>
      {choice}
    </option>
  ));

  const handeSelectChange = (e: any) => {
    console.log(e.target.value);
    if (e.target.value === "[other]") {
      setOther(true);
    } else {
      setOther(false);
    }
  };

  const listField = (
    <div className={styles.select}>
      <label htmlFor={stringTitle}>{stringTitle}</label>
      <select onChange={handeSelectChange}>
        <option>Please select from {stringTitle}</option>
        {selectOptions}
      </select>
      {other ? (
        <input type="text" placeholder="Please fill in your other option" />
      ) : null}
    </div>
  );

  return <Fragment>{listField}</Fragment>;
};

export default Lists;
