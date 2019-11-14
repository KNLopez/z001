import {
  Field as FormikField,
  FieldConfig,
  FieldProps as FormikFieldProps,
} from "formik";
import * as React from "react";
import {
  default as ReactDatePicker,
  ReactDatePickerProps,
} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { TypographyProps } from "../../../../state/ducks/common";
import { styles } from "./DatePicker.styles";
import Field, { FieldOwnProps } from "./Field";

interface DatePickerOwnProps extends FieldOwnProps {
  datePickerProps?: Pick<
    ReactDatePickerProps,
    Exclude<keyof ReactDatePickerProps, "onChange">
  >;
}

type DatePickerPropsWithFormik = DatePickerOwnProps & FormikFieldProps;

const DatePicker: React.FunctionComponent<DatePickerPropsWithFormik> = ({
  datePickerProps,
  label,
  ...fieldProps
}) => {
  const onChange = (date: Date) =>
    fieldProps.form.setFieldValue(fieldProps.field.name, date);

  const classes = styles();

  return (
    <Field label={label} {...fieldProps}>
      <ReactDatePicker
        autoComplete="off"
        {...fieldProps.field}
        {...datePickerProps}
        onChange={onChange}
        selected={fieldProps.field.value}
        className={classes.root}
      />
    </Field>
  );
};

type DatePickerFieldProps = DatePickerOwnProps & FieldConfig;

const DatePickerField: React.FunctionComponent<DatePickerFieldProps> = (
  props,
) => <FormikField component={DatePicker} {...props} />;

export default DatePickerField;
