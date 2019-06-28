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
  const [values, setValue] = useState({ value: 0, min, max });
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setError(!performCheck(values));
  }, [values.value]);

  const performCheck = (stateValues: any) => {
    const { min, max, value } = stateValues;
    return Number(min) <= Number(value) && Number(max) >= Number(value);
  };

  const ToleranceSign = toleranceType === "percent" ? "%" : "";

  const ToleranceDiv = (
    <div className={styles.tolerance}>
      <div className={styles.toleranceSign}>
        <input
          name="min"
          onChange={handleChange}
          type="number"
          placeholder={min}
        />
        <span>{ToleranceSign}</span>
      </div>
      <div className={styles.toleranceSign}>
        <input
          name="max"
          onChange={handleChange}
          type="number"
          placeholder={max}
        />
        <span>{ToleranceSign}</span>
      </div>
    </div>
  );

  const NumberField = (
    <div className={styles.numericField}>
      <label>{title}</label>
      <div className={styles.numericFieldsContainer}>
        <input
          onChange={handleChange}
          type="number"
          name="value"
          placeholder={placeholder}
          min={values.min || undefined}
          max={values.max || undefined}
        />
        {tolerance ? ToleranceDiv : null}
        {error && values.min && Number(values.max) > 0 ? (
          <span className={styles.formError}>
            The value {values.value} is beyond the tolerance level
          </span>
        ) : null}
      </div>
    </div>
  );

  return <Fragment>{NumberField}</Fragment>;
};

export default Numeric;
