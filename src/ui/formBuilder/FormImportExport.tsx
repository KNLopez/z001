import React, { useRef, useState } from "react";
import { UPLOAD_TEMPLATE } from "../../state/formActions";
import { useStateValue } from "../../state/formContext";
import modalStyles from "../components/modal/Modal.module.css";
import styles from "./FormBuilder.module.css";
import { ReactComponent as ExportIcon } from "./icons/icon_export.svg";
import { ReactComponent as ImportIcon } from "./icons/icon_import.svg";

const FormImportExport: React.FunctionComponent = () => {
  const [formData, dispatch]: any = useStateValue();
  const [fileName, setFileName] = useState("");
  const [modalVisible, setShowModal] = useState(false);
  const inputFile: any = useRef();

  const exportTemplate = (e: any) => {
    e.preventDefault();
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(formData.elements));
    const anchor = document.createElement("a");
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.download = `${fileName}.json`;
    anchor.href = dataStr;
    anchor.click();
    setShowModal(false);
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

  const showModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);

  const handleChange = (e: any) => {
    setFileName(e.target.value);
  };

  const exportModal = (
    <div className={modalStyles.modalOverlay}>
      <div className={modalStyles.modalBody}>
        <div className={modalStyles.close} onClick={hideModal}>
          X
        </div>
        <form onSubmit={exportTemplate}>
          <div className={modalStyles.modalFormContainer}>
            <h2>Export Template</h2>
            <input type="text" value={fileName} onChange={handleChange} />
            <button>Download</button>
          </div>
        </form>
      </div>
    </div>
  );

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
      <a onClick={showModal}>
        <ExportIcon className={styles.svgClass} />
        Export Template
      </a>

      {modalVisible ? exportModal : null}
    </div>
  );
};

export default FormImportExport;
