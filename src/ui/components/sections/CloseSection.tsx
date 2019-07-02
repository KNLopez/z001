import React, { Fragment, useEffect, useState } from "react";
import { CLOSE_SECTION } from "../../../state/formActions";
import { useStateValue } from "../../../state/formContext";
import styles from "../basic/BasicFields.module.css";

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
      return Object.keys(diffItem.changes[1]).map((diffItemKey) => {
        console.log(
          diffItem.changes[1][diffItemKey] !== diffItem.changes[0][diffItemKey],
        );

        if (
          diffItem.changes[1][diffItemKey] !== diffItem.changes[0][diffItemKey]
        ) {
          return (
            <li key={i}>
              {diffItem.date}, <strong>John</strong>: changed:{" "}
              {diffItem.changes[0][diffItemKey]} to{" "}
              {diffItem.changes[1][diffItemKey]}
            </li>
          );
        }
      });
    });
  }

  console.log(diffList);

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
