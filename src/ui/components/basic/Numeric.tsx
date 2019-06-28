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
  const [values, setValue] = useState({ value: 0, minValue: 0, maxValue: 0 });
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setError(!performCheck(values));
  }, [values]);

  const performCheck = (stateValues: any) => {
    const { minValue, maxValue, value } = stateValues;
    return (
      Number(minValue) <= Number(value) && Number(maxValue) >= Number(value)
    );
  };

  const ToleranceSign = toleranceType === "percent" ? "%" : "";

  const ToleranceDiv = (
    <div className={styles.tolerance}>
      <div className={styles.toleranceSign}>
        <input
          name="minValue"
          onChange={handleChange}
          type="number"
          placeholder={min}
        />
        <span>{ToleranceSign}</span>
      </div>
      <div className={styles.toleranceSign}>
        <input
          name="maxValue"
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
          min={values.minValue || undefined}
          max={values.maxValue || undefined}
        />
        {tolerance ? ToleranceDiv : null}
        {error && values.minValue && values.value && values.maxValue ? (
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
