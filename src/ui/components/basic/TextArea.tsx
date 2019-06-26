import React, { Fragment } from "react";

interface TextAreaProps {
  title: string;
  placeholder: string;
  closed: boolean;
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({
  title,
  placeholder,
  closed,
}) => {
  return (
    <Fragment>
      <label>{title}</label>
      <textarea placeholder={placeholder} />
    </Fragment>
  );
};

export default TextArea;
