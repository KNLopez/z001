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

const Numeric: React.FunctionComponent<NumericProps> = ({
  title,
  tolerance,
  placeholder,
  toleranceType,
  min,
  max,
  closed,
}) => {
  const [values, setValue] = useState({ value: 0, min: 0, max: 0 });
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setError(!performCheck(values));
  }, [values]);

  const performCheck = (stateValues: any) => {
    const { min, max, value } = stateValues;
    return Number(min) <= Number(value) && Number(max) >= Number(value);
  };

  const ToleranceSign = toleranceType === "percent" ? "%" : "";

  const ToleranceDiv = (
    <div className={styles.tolerance}>
      <input
        name="min"
        onChange={handleChange}
        type="number"
        placeholder={min}
      />
      <div className={styles.toleranceSign}>{ToleranceSign}</div>
      <input
        name="max"
        onChange={handleChange}
        type="number"
        placeholder={max}
      />
      <div className={styles.toleranceSign}>{ToleranceSign}</div>
    </div>
  );

  const NumberField = (
    <div className={styles.numericField}>
      <label>{title}</label>
      <input
        onChange={handleChange}
        type="number"
        name="value"
        placeholder={placeholder}
        min={values.min || undefined}
        max={values.max || undefined}
      />
      {tolerance ? ToleranceDiv : null}
      {error ? (
        <span className={styles.formError}>
          The value {values.value} is beyond the tolerance level
        </span>
      ) : null}
    </div>
  );

  return <Fragment>{NumberField}</Fragment>;
};

export default Numeric;
