import React, { Fragment } from "react";
import styles from "./BasicFields.module.css";

interface ParagraphProps {
  title: string;
  text: string;
}

const HyperLink: React.FunctionComponent<ParagraphProps> = ({
  title,
  text,
}) => {
  const hyperLinkField = (
    <div className={styles.singleLine}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );

  return <Fragment>{hyperLinkField}</Fragment>;
};

export default HyperLink;
