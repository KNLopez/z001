import { InputBaseProps as MuiInputProps } from "@material-ui/core/InputBase";
import { Field as FormikField, FieldConfig, FieldProps as FormikFieldProps } from "formik";
import * as React from "react";
import Field, { FieldOwnProps } from "./Field";
import { InputField as MuiInput } from "./Input.styles";

export type RenderSize = "sm" | "md" | "lg";

interface InputOwnProps extends FieldOwnProps {
  inputProps?: MuiInputProps;
  size?: RenderSize;
  actionsRenderer?: () => any;
  lpignore?: boolean;
}

type InputPropsWithFormik = InputOwnProps & FormikFieldProps;

const Input: React.FunctionComponent<InputPropsWithFormik> = ({
  inputProps,
  size = "md",
  actionsRenderer,
  lpignore = true,
  ...fieldProps
}) => {

  return (
    <Field size={size} actionsRenderer={actionsRenderer} {...fieldProps} inputLabelProps={{ shrink: true }} >
      <MuiInput
        required={false}
        inputProps={{ "data-lpignore": lpignore }}
        {...fieldProps.field}
        {...inputProps}
      />
    </Field>
  );
};

type InputFieldProps = InputOwnProps & FieldConfig;

const InputField: React.FunctionComponent<InputFieldProps> = (props) => <FormikField component={Input} {...props} />;

export default InputField;
