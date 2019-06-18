import React, { Fragment, useEffect, useState } from "react";
import styles from "./BasicFields.module.css";

interface NumericProps {
  title: string;
  placeholder?: string;
  tolerance: boolean;
  toleranceType: string;
  min?: number;
  max?: number;
}

const Numeric: React.FunctionComponent<NumericProps>  = ({
  title, tolerance, placeholder, toleranceType, min, max,
}) => {

  const [value, setValue] = useState<number>(0);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!(value < (max ? max : Math.max ) && value > (min ? min : Math.min )) && value) {
      setError(`${value || 0} is beyond the tolerance values`);
    } else {
      setError("");
    }
  }, [value, error, max, min]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
  };

  const ToleranceSign = toleranceType === "percent" ? "%" : "";

  const ToleranceDiv = (
    <div className={styles.tolerance}>
      <input type="text" defaultValue={"min: " + (min || 0) + ToleranceSign} disabled={true}/>
      <input type="text" defaultValue={"max: " + (max || 0) + ToleranceSign} disabled={true}/>
    </div>
  );

  const NumberField = (
    <div className={styles.numericField}>
      <label>{title}</label>
      <input
        onChange={handleChange}
        type="number"
        name={title}
        placeholder={placeholder}
        min={min || undefined}
        max={max || undefined}
      />
      {tolerance ? ToleranceDiv : null}
      {error ? <span className={styles.formError}>{error}</span> : null}
    </div>
  );

  return (
    <Fragment>
      {NumberField}
    </Fragment>
  );
};

export default Numeric;
