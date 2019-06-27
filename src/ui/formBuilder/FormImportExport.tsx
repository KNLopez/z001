import React, { useRef } from "react";
import { UPLOAD_TEMPLATE } from "../../state/formActions";
import { useStateValue } from "../../state/formContext";
import styles from "./FormBuilder.module.css";
import { ReactComponent as ExportIcon } from "./icons/icon_export.svg";
import { ReactComponent as ImportIcon } from "./icons/icon_import.svg";

const FormImportExport: React.FunctionComponent = () => {
  const [formData, dispatch]: any = useStateValue();
  const inputFile: any = useRef();

  const exportTempalte = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(formData.elements));
    const anchor = document.createElement("a");
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.download = `${formData.title}.json`;
    anchor.href = dataStr;
    anchor.click();
  };

  const uploadFile = () => {
    inputFile.current.click();
  };

  const importTemplate = (e: any) => {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const elements = JSON.parse(event.target.result);
      dispatch(UPLOAD_TEMPLATE(elements));
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className={styles.formImportExportContainer}>
      <a onClick={uploadFile}>
        <ImportIcon className={styles.svgClass} />
        Import Template
        <input
          type="file"
          id="file"
          ref={inputFile}
          onChange={importTemplate}
          style={{ display: "none" }}
        />
      </a>
      <a onClick={exportTempalte}>
        <ExportIcon className={styles.svgClass} />
        Export Template
      </a>
    </div>
  );
};

export default FormImportExport;
