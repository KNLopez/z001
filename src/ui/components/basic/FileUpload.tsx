import React, { Fragment } from "react";
import styles from "./BasicFields.module.css";

interface FileUploadProps {
  title: string;
  editMode: boolean;
  closed: boolean;
}

const FileUpload: React.FunctionComponent<FileUploadProps> = ({
  title,
  editMode,
  closed,
}) => {
  const editModFileUploadField = (
    <div className={styles.singleLine}>
      <label>{title}</label>
      <p> This section is for uploading files </p>
    </div>
  );

  const fileUploadField = (
    <div className={styles.singleLine}>
      <label>{title}</label>
      <input type="file" />
    </div>
  );

  return (
    <Fragment>{editMode ? editModFileUploadField : fileUploadField}</Fragment>
  );
};

export default FileUpload;
