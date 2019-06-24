import React from "react";
import { useStateValue } from "../../../state/formContext";
import styles from "./Modal.module.css";
import NewFieldModal from "./NewFieldModal";
import EditFieldModal from "./EditFieldModal";

const Modal: React.FunctionComponent = () => {
  // eslint-disable-next-line
  const [{ currentField }, dispatch]: any = useStateValue();

  let modalContent;

  if (!currentField) {
    modalContent = <NewFieldModal />;
  } else {
    modalContent = <EditFieldModal />;
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
        {modalContent ? modalContent : null}
      </div>
    </div>
  );
};

export default Modal;
