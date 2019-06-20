import React from "react";
import styles from "./Section.module.css";

interface SubSectionProps {
  title: string;
}

const SubSection: React.FunctionComponent<SubSectionProps> = ({ title }) => {
  return (
    <div className={styles.subSection}>
      {" "}
      <h3>{title}</h3>{" "}
    </div>
  );
};

export default SubSection;
