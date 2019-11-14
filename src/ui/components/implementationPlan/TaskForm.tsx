import { Button, createStyles, Grid, makeStyles } from "@material-ui/core";
import { Form, FormikProps } from "formik";
import React from "react";
import { connect } from "react-redux";
import { ImplementationPlanTaskFormValues, OptionType } from "./Task.presenter";
import Text from "../Text"
import InputField from "../forms/fields/Input";
import TextEditorField from "../forms/fields/TextEditor";
import AutocompleteField from "../forms/fields/Autocomplete/Autocomplete";
import DatePickerField from "../forms/fields/DatePicker";
import SelectField from "../forms/fields/Select";
import { required, validator } from "../forms/fields/validators";



interface OwnProps extends FormikProps<ImplementationPlanTaskFormValues> {
  cancel: () => void;
}

export type TaskFormProps = OwnProps;


export const styles = makeStyles(() =>
  createStyles({
    submitBtn: {
      float: "right",
      clear: "right",
    },
    cancelBtn: {
      float: "right",
    },
  },
  ));

export const TaskForm: React.FunctionComponent<TaskFormProps> = ({
  cancel, values,
}) => {
  const availableAssignees = [{ label: "Admin", value: "Admin" }]
  const classes = styles();
  const isNew = values.id === undefined;
  let planStateOptions = [{ text: "Pending", value: "pending" }];


  return (
    <Form>
      <InputField
        name="title"
        size="sm"
        label="common.title"
        inputProps={{ id: "title" }}
        validate={validator(required)}
      />
      <div className="task-description">
        <TextEditorField
          name="description"
          size="sm"
          label="common.description"
          validate={validator(required)}
        />
      </div>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={4}>
          <AutocompleteField
            name="assigned"
            label="common.assigned.to"
            autocompleteProps={{ id: "assigned", isClearable: true }}
            options={availableAssignees}
          />
        </Grid>
        <Grid item={true} xs={4}>
          <DatePickerField
            name="dueDate"
            label="common.due.date"
            datePickerProps={{ minDate: new Date() }}
            validate={validator(required)}
          />
        </Grid>
        <Grid item={true} xs={4}>
          <SelectField
            name="status"
            label="common.status"
            size="sm"
            selectProps={{ inputProps: { id: "status" } }}
            options={planStateOptions}
            validate={validator(required)}
            includeEmpty={false}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        color="primary"
        className={classes.submitBtn}
        variant="contained"
      >
        <Text translation="transition.action.confirm" />
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={cancel}
        className={classes.cancelBtn}
      >
        <Text translation="transition.action.cancel" />
      </Button>
    </Form>
  );
};

export default TaskForm;
