import React, { useState, useEffect } from "react";
import { useStateValue } from "../../../state/formContext";
import styles from "./Modal.module.css";
import NewFieldModal from "./NewFieldModal";
import EditFieldModal from "./EditFieldModal";

const Modal: React.FunctionComponent = () => {
  // eslint-disable-next-line
  const [{ currentField }, dispatch]: any = useStateValue();
  const [modalContent, setModalContent] = useState();

  useEffect(() => {
    if (!currentField) {
      setModalContent(<NewFieldModal />);
    } else {
      setModalContent(<EditFieldModal />);
    }
  }, [modalContent, currentField]);

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
