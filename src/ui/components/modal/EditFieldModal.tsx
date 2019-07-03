import React, { Fragment, useState } from "react";
import { RECORD_UPDATES, UPDATE_FIELD } from "../../../state/formActions";
import { useStateValue } from "../../../state/formContext";
import ModalFieldPresenter from "./helper/ModalFieldPresenter";
import styles from "./Modal.module.css";

const EditFieldModal: React.FunctionComponent = () => {
  // eslint-disable-next-line
  const [{ currentField }, dispatch]: any = useStateValue();
  const [reason, setReason] = useState();
  const [withReason, setWithReason] = useState(false);

  const updateField = (e: any, config: any) => {
    e.preventDefault();
    if (!config.colWidth) {
      config.colWidth = "col-12";
    }
    if (currentField.closed) {
      dispatch(
        RECORD_UPDATES(
          currentField.config,
          config,
          currentField.currentIndex,
          reason,
        ),
      );
    }
    dispatch(
      UPDATE_FIELD(
        currentField.type,
        config,
        currentField.currentIndex,
        currentField.closed,
      ),
    );
  };

  const hideModal = (e: any) => {
    e.stopPropagation();
    dispatch({ type: "HIDE_MODAL" });
  };

  const submitReason = () => {
    setWithReason(true);
  };

  const handleReasonChange = (e: any) => {
    setReason(e.target.value);
  };

  const reasonModal = (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBody}>
        <div className={styles.close} onClick={hideModal}>
          X
        </div>
        <form onSubmit={submitReason}>
          <h3 style={{ marginBottom: "10px" }}>
            This section is closed, please provide a reason for editing this
            field.
          </h3>
          <textarea
            value={reason}
            onChange={handleReasonChange}
            placeholder="Please include a reason"
            required={true}
          />
          <button> Save Reason </button>
        </form>
      </div>
    </div>
  );

  const modalStateContent = (
    <ModalFieldPresenter
      chosenField={currentField.type}
      currentConfig={currentField.config}
      clickHandler={updateField}
    />
  );

  const showReasonModal = currentField.closed && !withReason;

  return (
    <Fragment>{showReasonModal ? reasonModal : modalStateContent}</Fragment>
  );
};

export default EditFieldModal;
