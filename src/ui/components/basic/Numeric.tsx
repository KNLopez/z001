import React, { Fragment, useEffect, useState } from "react";
import styles from "./BasicFields.module.css";

interface NumericProps {
  title: string;
  placeholder?: string;
  tolerance: boolean;
  toleranceType: string;
  min?: string;
  max?: string;
  closed: boolean;
}

interface Values {
  value?: string;
  maxValue?: string;
  minValue?: string;
}

const Numeric: React.FunctionComponent<NumericProps> = ({
  title,
  tolerance,
  placeholder,
  toleranceType,
  min,
  max,
  closed,
}) => {
  const [values, setValue] = useState<Values>({
    value: "",
    minValue: "",
    maxValue: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let newValue = value;
    if (value !== "") {
      newValue = Number(value.replace(/\D/g, "")).toLocaleString();
    }
    setValue({
      ...values,
      [e.target.name]: newValue,
    });
  };

  useEffect(() => {
    setError(!performCheck(values));
  }, [values]);

  const performCheck = (stateValues: any) => {
    const { minValue, maxValue, value } = stateValues;
    return (
      Number(minValue.replace(/\D/g, "")) <= Number(value.replace(/\D/g, "")) &&
      Number(maxValue.replace(/\D/g, "")) >= Number(value.replace(/\D/g, ""))
    );
  };

  const ToleranceSign = toleranceType === "percent" ? "%" : "";

  const ToleranceDiv = (
    <div className={styles.tolerance}>
      <div className={styles.toleranceSign}>
        <input
          name="minValue"
          onChange={handleChange}
          type="text"
          placeholder={min}
          value={values.minValue}
        />
        <span>{ToleranceSign}</span>
      </div>
      <div className={styles.toleranceSign}>
        <input
          name="maxValue"
          onChange={handleChange}
          type="text"
          placeholder={max}
          value={values.maxValue}
        />
        <span>{ToleranceSign}</span>
      </div>
    </div>
  );

  const showErrorMessage =
    error && tolerance && values.minValue && values.value && values.maxValue;

  const errorMessage = (
    <span className={styles.formError}>
      The value {values.value} is beyond the tolerance level
    </span>
  );

  const NumberField = (
    <div className={styles.numericField}>
      <label>{title}</label>
      <div className={styles.numericFieldsContainer}>
        <input
          onChange={handleChange}
          type="text"
          name="value"
          placeholder={placeholder}
          min={values.minValue || undefined}
          max={values.maxValue || undefined}
          value={values.value}
        />
        {tolerance ? ToleranceDiv : null}
        {showErrorMessage ? errorMessage : null}
      </div>
    </div>
  );

  return <Fragment>{NumberField}</Fragment>;
};

export default Numeric;
