import React, { Fragment } from "react";
import styles from "./BasicFields.module.css";

interface HyperLinkProps {
  title: string;
  url: string;
}

const HyperLink: React.FunctionComponent<HyperLinkProps> = ({ title, url }) => {
  const hyperLinkField = (
    <div className={styles.hyperlink}>
      <h3>
        <a href={url}>{title}</a>
      </h3>
    </div>
  );

  return <Fragment>{hyperLinkField}</Fragment>;
};

export default HyperLink;
