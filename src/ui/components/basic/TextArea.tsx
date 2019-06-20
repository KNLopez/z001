import React, { Fragment } from "react";

interface TextAreaProps {
  title: string;
  placeholder: string;
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({
  title,
  placeholder,
}) => {
  return (
    <Fragment>
      <label>{title}</label>
      <textarea placeholder={placeholder} />
    </Fragment>
  );
};

export default TextArea;
