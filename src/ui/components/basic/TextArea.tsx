import React, { Fragment } from "react";

interface TextAreaProps {
  title: string;
  placeholder: string;
  closed: boolean;
  values?: any;
  updateValue?: any;
  currentIndex?: any;
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({
  title,
  placeholder,
  closed,
  values,
  updateValue,
  currentIndex,
}) => {
  const setValue = (e: any) => {
    updateValue(currentIndex, e.target.name, e.target.value);
  };

  return (
    <Fragment>
      <label>{title}</label>
      <textarea
        name={title}
        onChange={setValue}
        placeholder={placeholder}
        defaultValue={values ? values[title] : null}
      />
    </Fragment>
  );
};

export default TextArea;
