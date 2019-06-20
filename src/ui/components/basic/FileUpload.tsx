import React, { Fragment } from "react";
import styles from "./BasicFields.module.css";

interface FileUploadProps {
  title: string;
}

const FileUpload: React.FunctionComponent<FileUploadProps> = ({ title }) => {
  const hyperLinkField = (
    <div className={styles.singleLine}>
      <label>{title}</label>
      <input type="file" />
    </div>
  );

  return <Fragment>{hyperLinkField}</Fragment>;
};

export default FileUpload;
