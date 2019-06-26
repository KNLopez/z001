import React, { Fragment } from "react";
import styles from "./BasicFields.module.css";

interface FileUploadProps {
  title: string;
  closed: boolean;
}

const FileUpload: React.FunctionComponent<FileUploadProps> = ({
  title,
  closed,
}) => {
  const hyperLinkField = (
    <div className={styles.singleLine}>
      <label>{title}</label>
      <input type="file" />
    </div>
  );

  return <Fragment>{hyperLinkField}</Fragment>;
};

export default FileUpload;
