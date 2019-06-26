import React, { Fragment } from "react";
import styles from "./BasicFields.module.css";

interface SingleLineProps {
  title: string;
  placeholder: string;
  closed: boolean;
}

const SingleLine: React.FunctionComponent<SingleLineProps> = ({
  title,
  placeholder,
  closed,
}) => {
  const singLineField = (
    <div className={styles.singleLine}>
      <label htmlFor={title}>{title}</label>
      <input name={title} type="text" placeholder={placeholder} />
    </div>
  );

  return <Fragment>{singLineField}</Fragment>;
};

export default SingleLine;
