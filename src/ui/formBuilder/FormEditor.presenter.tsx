import React from "react";
import FormFieldEditor from "./FormFieldEditor";
import styles from "./FormBuilder.module.css";

const FormEditorPresenter = () => {

  const formProps = [
    {
      type: 'section',
      config: {
        colWidth: "col-12",
        subType: "mainSection",
        title: "This is a main Section"
      }
    },
    {
      type: 'section',
      config: {
        colWidth: "col-12",
        subType: "subSection",
        title: "This is a subsection"
      }
    },
    {
      type: 'singleLine',
      config: {
        colWidth: "col-6",
        title: "This is a short single line",
        placeholder: "short"
      }
    },
    {
      type: 'singleLine',
      config: {
        colWidth: "col-6",
        title: "This is a short single line",
        placeholder: "short"
      }
    },
    {
      type: 'singleLine',
      config: {
        colWidth: "col-12",
        title: "This is a long single line",
        placeholder: "long"
      }
    },
    {
      type: 'textarea',
      config: {
        colWidth: "col-12",
        title: "This is a multiline",
        placeholder: "long"
      }
    },
    {
      type: 'section',
      config: {
        colWidth: "col-12",
        subType: "subSection",
        title: "This is a subsection"
      }
    },
    {
      type: 'radio',
      config: {
        colWidth: "col-12",
        title: "These are radio buttons",
        options: ["radio", "radio2", "radio3"]
      }
    },
  ];

  const Forms  = formProps.map(({type, config}) => {
     return <FormFieldEditor type={type} config={config} />
  });

  return (
    <div className={styles.formEditorContainer}>
      { Forms }
    </div>
  );
};

export default FormEditorPresenter;
