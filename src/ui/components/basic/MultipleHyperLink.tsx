import React, { Fragment, useState } from "react";
import styles from "./BasicFields.module.css";

interface MultipleHyperLinkProps {
  title: string;
  closed: boolean;
  editMode: boolean;
}

const MultipleHyperLink: React.FunctionComponent<MultipleHyperLinkProps> = ({
  title,
  editMode,
  closed,
}) => {
  return (
    <div className={styles.MultipleHyperLinkContainer}>
      <h3>{title}</h3>
    </div>
  );
};

export default MultipleHyperLink;
