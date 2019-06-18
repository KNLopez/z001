import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import styles from "./BasicFields.module.css";

interface DatePickerProps {
  title: string;
}

const DatePicker: React.FunctionComponent<DatePickerProps> = ({
  title,
}) => {
  return (
    <div className={styles.DatePickerContainer}>
      <label>{title}</label>
      <DayPickerInput format={"M-D-YYYY"}/>
    </div>
  );
};

export default DatePicker;
