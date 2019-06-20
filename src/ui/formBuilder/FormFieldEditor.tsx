import React from "react";
import { useStateValue } from "../../state/formContext";
import CheckBox from "../components/basic/Checkbox";
import DatePicker from "../components/basic/DatePicker";
import Numeric from "../components/basic/Numeric";
import RadioField from "../components/basic/Radio";
import SingleLine from "../components/basic/SingleLine";
import TextArea from "../components/basic/TextArea";
import Section from "../components/sections/Section";
import SubSection from "../components/sections/SubSection";
import styles from "./FormBuilder.module.css";
import { ReactComponent as MoveHandle } from "./icons/icon_move.svg";
import { SHOW_MODAL, DELETE_FIELD } from "../../state/formActions";

interface FormFieldProps {
  order: string;
  type: string;
  config: {
    colWidth: string;
    title: string;
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
  type,
  config,
  order,
}) => {
  let formField;
  switch (type) {
    case "section":
      formField = <Section title={config.title} />;
      break;
    case "subSection":
      formField = <SubSection title={config.title} />;
      break;
    case "singleLine":
      formField = (
        <SingleLine
          title={config.title}
          placeholder={config.placeholder || ""}
        />
      );
      break;
    case "multiLine":
      formField = (
        <TextArea title={config.title} placeholder={config.placeholder || ""} />
      );
      break;
    case "radio":
      formField = (
        <RadioField title={config.title} options={config.options || []} />
      );
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
        />
      );
      break;
    case "checkbox":
      formField = <CheckBox title={config.title} notes={config.notes} />;
      break;
    case "datepicker":
      formField = <DatePicker title={config.title} />;
      break;
  }
  // eslint-disable-next-line
  const [{}, dispatch]: any = useStateValue();

  const showModal = () => {
    dispatch(SHOW_MODAL(order));
  };

  const removeField = () => {
    dispatch(DELETE_FIELD(order));
  };

  const width = ` ${styles[config ? config.colWidth : ""]}`;
  const sectionStyle = type === "section" ? ` ${styles[type]}` : "";
  return (
    <div
      draggable={true}
      className={styles.fieldContainer + width + sectionStyle}
    >
      <div className={styles.topControls}>
        <div className={styles.edit}>Edit</div>
        <div className={styles.delete} onClick={removeField}>
          Delete
        </div>
      </div>
      {formField}
      <div className={styles.moveHandle}>
        <MoveHandle />
      </div>
      <div className={styles.addField} onClick={showModal}>
        Add Field
      </div>
    </div>
  );
};

export default FormFieldEditor;
