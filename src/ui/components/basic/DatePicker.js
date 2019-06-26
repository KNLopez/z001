import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import "react-day-picker/lib/style.css";
import styles from "./BasicFields.module.css";

const DatePicker = ({ title, closed }) => {
  return (
    <div className={styles.DatePickerContainer}>
      <label>{title}</label>
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={`${formatDate(new Date())}`}
      />
    </div>
  );
};

export default DatePicker;
