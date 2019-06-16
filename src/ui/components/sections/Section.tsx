import React from "react";
import styles from "./Section.module.css";

interface SecTionProps {
  title: string;
}

const Section: React.FunctionComponent<SecTionProps> = ({
  title,
}) => {
  return (
    <div className={styles.section}> <h2>{title}</h2> </div>
  );
};

export default Section;
