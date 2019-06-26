import React, { Fragment, useEffect, useState } from "react";
import { useStateValue } from "../../../state/formContext";
import styles from "./Section.module.css";
import { CLOSE_SECTION } from "../../../state/formActions";

interface CloseSectionProps {
  closed: boolean;
  diff: any;
  currentIndex: any;
}

const CloseSection: React.FunctionComponent<CloseSectionProps> = ({
  closed,
  diff,
  currentIndex,
}) => {
  const [{}, dispatch]: any = useStateValue();
  const [isClosed, setClosed] = useState(closed);

  useEffect(() => {
    setClosed(closed);
  }, [isClosed]);

  const closeSection = () => {
    dispatch(CLOSE_SECTION(currentIndex));
  };

  const button = (
    <button onClick={closeSection} className={styles.actionButton}>
      Close Section
    </button>
  );

  let diffList = [];
  if (diff) {
    diffList = diff.map((diffItem: any, i: string) => {
      return (
        <li key={i}>
          {diffItem.date}, changes:{diffItem.changes[0].title},{" "}
          {diffItem.changes[1].title}
        </li>
      );
    });
  }

  const diffContainer = (
    <div>
      <h3> Section Closed </h3>
      <ul> {diffList} </ul>
    </div>
  );

  return <Fragment>{closed ? diffContainer : button}</Fragment>;
};

export default CloseSection;