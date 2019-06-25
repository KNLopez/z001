import React, { Fragment, useState } from "react";
import styles from "../basic/BasicFields.module.css";

interface ActionButtonProps {
  title: string;
}

const ActionButton: React.FunctionComponent<ActionButtonProps> = ({
  title,
}) => {
  const Button = <button className={styles.actionButton}>{title}</button>;

  return <Fragment>{Button}</Fragment>;
};

export default ActionButton;
