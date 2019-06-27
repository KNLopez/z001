import React, { Fragment } from "react";
import styles from "./BasicFields.module.css";

interface ParagraphProps {
  text: string;
  textType: string;
  closed: boolean;
}

const Paragraph: React.FunctionComponent<ParagraphProps> = ({
  text,
  closed,
  textType,
}) => {
  let textContainer;

  if (textType === "heading") {
    textContainer = <h2>{text}</h2>;
  } else {
    textContainer = <p>{text}</p>;
  }

  const ParagraphField = (
    <div className={styles.singleLine}>{textContainer}</div>
  );

  return <Fragment>{ParagraphField}</Fragment>;
};

export default Paragraph;
