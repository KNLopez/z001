import React from "react";
import { DELETE_FIELD, EDIT_FIELD, SHOW_MODAL } from "../../state/formActions";
import { useStateValue } from "../../state/formContext";
import CheckBox from "../components/basic/Checkbox";
import DatePicker from "../components/basic/DatePicker";
import FileUpload from "../components/basic/FileUpload";
import HyperLink from "../components/basic/HyperLink";
import MultipleCheckbox from "../components/basic/MultipleCheckbox";
import Numeric from "../components/basic/Numeric";
import Paragraph from "../components/basic/Paragraph";
import MultipleHyperLink from "../components/basic/MultipleHyperLink";
import RadioField from "../components/basic/Radio";
import SingleLine from "../components/basic/SingleLine";
import TextArea from "../components/basic/TextArea";
import ActionButton from "../components/buttons/ActionButton";
import Lists from "../components/lists/Lists";
import CloseSection from "../components/sections/CloseSection";
import Section from "../components/sections/Section";
import SubSection from "../components/sections/SubSection";
import styles from "./FormBuilder.module.css";

interface FormFieldProps {
  order: string;
  type: string;
  closed: boolean;
  diff?: any;
  editMode: boolean;
  config: {
    colWidth: string;
    title: string;
    placeholder?: string;
    options?: any[];
    tolerance?: boolean;
    toleranceType?: string;
    max?: string;
    min?: string;
    notes?: string;
    url?: string;
    text?: string;
    textType?: string;
    links?: any[];
  };
}

const FormFieldViewer: React.FunctionComponent<FormFieldProps> = ({
  type,
  closed,
  config,
  order,
  diff,
  editMode,
}) => {
  let formField;
  switch (type) {
    case "section":
      formField = <Section title={config.title} closed={closed} />;
      break;
    case "subSection":
      formField = <SubSection title={config.title} closed={closed} />;
      break;
    case "singleLine":
      formField = (
        <SingleLine
          title={config.title}
          placeholder={config.placeholder || ""}
          closed={closed}
        />
      );
      break;
    case "multiLine":
      formField = (
        <TextArea
          title={config.title}
          placeholder={config.placeholder || ""}
          closed={closed}
        />
      );
      break;
    case "radio":
      formField = (
        <RadioField
          title={config.title}
          options={config.options || []}
          closed={closed}
        />
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
          closed={closed}
        />
      );
      break;
    case "checkbox":
      formField = (
        <CheckBox title={config.title} notes={config.notes} closed={closed} />
      );
      break;
    case "datepicker":
      formField = <DatePicker title={config.title} closed={closed} />;
      break;
    case "hyperlink":
      formField = (
        <HyperLink
          title={config.title}
          url={config.url || ""}
          closed={closed}
        />
      );
      break;
    case "multipleHyperlink":
      formField = (
        <MultipleHyperLink
          editMode={editMode}
          title={config.title}
          links={config.links || []}
          closed={closed}
        />
      );
      break;
    case "paragraph":
      formField = (
        <Paragraph
          textType={config.textType || ""}
          text={config.text || ""}
          closed={closed}
        />
      );
      break;
    case "fileUpload":
      formField = (
        <FileUpload editMode={editMode} title={config.title} closed={closed} />
      );
      break;
    case "multipleCheckbox":
      formField = (
        <MultipleCheckbox
          title={config.title}
          options={config.options || []}
          closed={closed}
        />
      );
      break;
    case "qa":
    case "operations":
      formField = <ActionButton title={config.title} closed={closed} />;
      break;
    case "standards":
    case "finishedGoods":
    case "lots":
    case "mpis":
    case "parts":
    case "sops":
    case "suppliers":
      formField = <Lists title={config.title} closed={closed} />;
      break;
    case "custom":
      formField = (
        <Lists title={config.title} options={config.options} closed={closed} />
      );
      break;

    case "closeSection":
      formField = (
        <CloseSection
          editMode={editMode}
          currentIndex={order}
          diff={diff}
          closed={closed}
        />
      );
      break;
  }

  const width = ` ${styles[config ? config.colWidth : ""]}`;
  const sectionStyle = type === "section" ? ` ${styles[type]}` : "";
  const containerStyle =
    styles.fieldContainer + width + sectionStyle + " dragContainer";
  return <div className={containerStyle}>{formField}</div>;
};

export default FormFieldViewer;