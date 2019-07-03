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
  const getText = (key: string) => {
    switch (key) {
      case "title":
        return "field title";
      case "placeholder":
        return "placeholder text";
      case "options":
        return "select options";
      case "tolerance":
        return "tolerance";
      case "toleranceType":
        return "tolerance type";
      case "max":
        return "maximum tolerance value placeholder text";
      case "min":
        return "minimum tolerance value placeholder text";
      case "notes":
        return "checkbox input placeholder";
      case "url":
        return "hyperlink";
      case "text":
        return "text";
      case "textType":
        return "type of text";
      default:
        return "field";
    }
  };

  let diffList = [];
  if (diff) {
    diffList = diff.map((diffItem: any, i: string) => {
      const list = Object.keys(diffItem.changes[1]).map((diffItemKey) => {
        if (
          diffItem.changes[1][diffItemKey] !== diffItem.changes[0][diffItemKey]
        ) {
          return (
            <li key={i}>
              Changed the {getText(diffItemKey)} from{" "}
              <del>{diffItem.changes[0][diffItemKey]}</del> to{" "}
              <span className={styles.newText}>
                {diffItem.changes[1][diffItemKey]}
              </span>
            </li>
          );
        }
      });

      return (
        <div key={i} className={styles.diffContainer}>
          {diffItem.date}, {diffItem.time}, <strong>John</strong>:<ul>{list}</ul>
        </div>
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
