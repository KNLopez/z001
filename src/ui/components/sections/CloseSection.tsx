import React, { Fragment, useEffect, useState } from "react";
import { useStateValue } from "../../../state/formContext";
import styles from "../basic/BasicFields.module.css";
import { CLOSE_SECTION } from "../../../state/formActions";

interface CloseSectionProps {
  closed: boolean;
  editMode: boolean;
  diff: any;
  currentIndex: any;
}

const CloseSection: React.FunctionComponent<CloseSectionProps> = ({
  closed,
  editMode,
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
    <button
      onClick={editMode ? undefined : closeSection}
      className={styles.actionButton}
    >
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
      <h4>
        <strong> Section Closed</strong>{" "}
      </h4>
      <ul> {diffList} </ul>
    </div>
  );

  return <Fragment>{closed ? diffContainer : button}</Fragment>;
};

export default CloseSection;
