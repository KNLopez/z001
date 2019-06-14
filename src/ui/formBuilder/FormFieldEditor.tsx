import React from "react";
import CheckBox from "../components/basic/Checkbox";
import DatePicker from "../components/basic/DatePicker";
import Numeric from "../components/basic/Numeric";
import RadioField from "../components/basic/Radio";
import SingleLine from "../components/basic/SingleLine";
import TextArea from "../components/basic/TextArea";
import SectionContainer from "../components/sections/Section.container";
import styles from "./FormBuilder.module.css";
import { ReactComponent as MoveHandle } from "./icons/icon_move.svg";

interface FormFieldProps {
  type: string;
  config: {
    colWidth: string,
    title: string;
    subType?: string;
    placeholder?: string;
    options?: any[];
    tolerance?: boolean;
    toleranceType?: string;
    max?: number;
    min?: number;
    notes?: string;
  };
}

const FormFieldEditor: React.FunctionComponent<FormFieldProps> = ({
  type, config,
}) => {
  let formField;
  switch (type) {
    case "section":
      formField = (
        <SectionContainer
          title={config.title}
          subType={config.subType || ""}
        />);
      break;
    case "singleLine":
      formField = (
        <SingleLine
          title={config.title}
          placeholder={config.placeholder || ""}
        />);
      break;
    case "textarea":
      formField = (
        <TextArea
          title={config.title}
          placeholder={config.placeholder || ""}
        />);
      break;
    case "radio":
      formField = (
        <RadioField
          title={config.title}
          options={config.options || []}
        />);
      break;
    case "numeric":
      formField = (
        <Numeric
          title={config.title}
          placeholder={config.placeholder || ""}
          tolerance={config.tolerance || false}
          toleranceType={config.toleranceType || ""}
          min={config.min}
          max={config.max}
        />);
      break;
    case "checkbox":
      formField = (
        <CheckBox
          title={config.title}
          notes={config.notes}
        />);
      break;
    case "datepicker":
      formField = (
        <DatePicker title={config.title}/>);
      break;
  }
  const width = ` ${styles[config.colWidth]}`;
  const sectionStyle = type === "section" ? ` ${styles[type]}` : "";
  return (
    <div
      draggable={true}
      className={styles.fieldContainer +  width + sectionStyle}
    >
      <div className={styles.topControls} >
        <div className={styles.edit}>Edit</div>
        <div className={styles.delete}>Delete</div>
      </div>
      {formField}
      <div className={styles.moveHandle}><MoveHandle /></div>
      <div className={styles.addField}>Add Field</div>
    </div>
  );
};

export default FormFieldEditor;
