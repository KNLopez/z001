import React, { Fragment, useEffect, useState } from "react";
import styles from "../basic/BasicFields.module.css";
import { FieldConstants } from "../modal/FieldConstants";

interface ListsProps {
  title: string;
  options?: any;
}

interface BigObject<T> {
  [index: string]: T;
}

const Lists: React.FunctionComponent<ListsProps> = ({ title, options }) => {
  const [choices, setChoices] = useState([]);
  const [stringTitle, setStringTitle] = useState();
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
    <option key={i}>{choice}</option>
  ));

  const listField = (
    <div className={styles.select}>
      <label htmlFor={stringTitle}>{stringTitle}</label>
      <select>
        <option>Please select from {stringTitle}</option>
        {selectOptions}
      </select>
    </div>
  );

  return <Fragment>{listField}</Fragment>;
};

export default Lists;
