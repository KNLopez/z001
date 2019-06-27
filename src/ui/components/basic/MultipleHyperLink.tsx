import React, { Fragment, useState } from "react";
import styles from "./BasicFields.module.css";

interface MultipleHyperLinkProps {
  title: string;
  links: any[];
  closed: boolean;
  editMode: boolean;
}

const MultipleHyperLink: React.FunctionComponent<MultipleHyperLinkProps> = ({
  title,
  editMode,
  links,
  closed,
}) => {
  const hyperLinksContainer = links.map((link, i) => {
    return (
      <a key={i} href={link} target="_blank">
        {link}
      </a>
    );
  });

  return (
    <div className={styles.MultipleHyperLinkContainer}>
      <h3>{title}</h3>
      <div className={styles.hyperLinksContainer}>{hyperLinksContainer}</div>
    </div>
  );
};

export default MultipleHyperLink;
