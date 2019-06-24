import React, { useState } from "react";
import { useStateValue } from "../../../state/formContext";
import styles from "./Modal.module.css";
import NewFieldModal from "./NewFieldModal";

const Modal: React.FunctionComponent = () => {
  // eslint-disable-next-line
  const [{ currentField }, dispatch]: any = useStateValue();
  const [chosenField, setChosenField] = useState();

  let modalContent;

  if (!currentField) {
    modalContent = <NewFieldModal />;
  }

  const hideModal = (e: any) => {
    e.stopPropagation();
    dispatch({ type: "HIDE_MODAL" });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBody}>
        <div className={styles.close} onClick={hideModal}>
          X
        </div>
        {modalContent}
      </div>
    </div>
  );
};

export default Modal;
