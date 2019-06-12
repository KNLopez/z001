import React, { Fragment } from "react";
import styles from "./Section.module.css";

interface SecTionProps {
  title: string;
  subType: string;
}

const SectionPresenter: React.FunctionComponent<SecTionProps> = ({
  title, subType,
}) => {
  let section;
  if (subType === "mainSection") {
    section = (<div className={styles.section}> <h2>{title}</h2> </div>);
  } else {
    section = (<div className={styles.subSection}> <h3>{title}</h3> </div>);
  }

  return (
    <Fragment>
      {section}
    </Fragment>
  );
};

export default SectionPresenter;
