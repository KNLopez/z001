import { Box } from "@material-ui/core";
import classNames from "classnames";
import {
  Field as FormikField,
  FieldConfig,
  FieldProps as FormikFieldProps,
} from "formik";
import { QuillOptionsStatic } from "quill";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import useComponentVisible from "../../../../hooks/useComponentVisible";
import Field, { FieldOwnProps } from "../Field";
import { reactQuillEmptyString } from "../validators";
import { formats, modules } from "./configuration";
import "./textEditor.css";

export interface TextEditorOwnProps extends FieldOwnProps {
  quillOptions?: QuillOptionsStatic;
  size?: string;
  customContainers?: any[];
  customHandlers?: any;
  customToolbarAction?: () => void;
  actionsRenderer?: () => any;
  hidden?: boolean;
}

export type TextEditorPropsWithFormik = TextEditorOwnProps & FormikFieldProps;

const TextEditor: React.FunctionComponent<TextEditorPropsWithFormik> = ({
  quillOptions,
  actionsRenderer,
  size = "lg",
  customContainers = [],
  customHandlers = [],
  customToolbarAction,
  hidden = false,
  ...fieldProps
}) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  const [toolbar, setToolbar] = useState<any>({});

  useEffect(() => {
    setToolbar({
      container: [...modules.toolbar.container, ...customContainers],
      handlers: {
        ...modules.toolbar.handlers,
        ...customHandlers,
      },
    });
  }, []);

  useEffect(() => {
    if (!isComponentVisible) {
      return;
    }
    customToolbarAction && customToolbarAction();
  }, [isComponentVisible]);

  const handleChange = (editHtml: string) => {
    // when you click on an empty editor Quill injects some HTML
    const value = editHtml === reactQuillEmptyString ? null : editHtml;
    fieldProps.form.setFieldValue(fieldProps.field.name, value);
  };
  const handleBlur = (e: any) => {
    const {
      field: { name },
      form: { touched, setFieldTouched },
    } = fieldProps;

    if (!touched[name]) {
      setFieldTouched(name, true);
    }
  };

  const handleFocus = () => setIsComponentVisible(true);

  return (
    <Field
      size={size}
      actionsRenderer={actionsRenderer}
      {...fieldProps}
      inputLabelProps={{ shrink: true }}
    >
      <div
        className={classNames("editor-container", {
          "label-margin": !actionsRenderer,
        })}
        ref={ref}
        tabIndex={0}
        onFocus={handleFocus}
      >
        <Box hidden={hidden}>
          <ReactQuill
            theme="snow"
            bounds=".editor-container"
            modules={{
              ...modules,
              toolbar: isComponentVisible ? toolbar : false,
            }}
            formats={formats}
            {...quillOptions}
            onChange={handleChange}
            value={fieldProps.field.value || ""}
            onBlur={handleBlur}
            readOnly={!isComponentVisible}
          />
        </Box>
      </div>
    </Field>
  );
};

export type TextEditorFieldProps = TextEditorOwnProps & FieldConfig;

const TextEditorField: React.FunctionComponent<TextEditorFieldProps> = (
  props,
) => <FormikField component={TextEditor} {...props} />;

export default TextEditorField;
