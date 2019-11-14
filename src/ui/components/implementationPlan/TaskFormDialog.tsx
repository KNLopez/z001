import {
  Box,
  Button,
  createStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import { Formik, FormikProps } from "formik";
import React from "react";
import Text from "../Text";
import TaskForm from "./TaskForm";
import { ImplementationPlanTaskFormValues } from "./Task.presenter";

export interface OwnProps {
  onSubmit: (values: ImplementationPlanTaskFormValues) => void;
  closeDialog: () => void;
  openDialog: () => void;
  isDialogOpen: boolean;
  buttonProps?: ButtonProps;
  task: ImplementationPlanTaskFormValues | null;
}

export type TaskFormDialogProps = OwnProps;

const INITIAL_VALUES = {
  title: "",
  description: "",
  status: "PENDING",
};

const styles = makeStyles(() =>
  createStyles({
    dialogPaper: {
      overflowY: "unset",
    },
    dialogContent: {
      overflowY: "unset",
    },
  },
  ));

export const TaskFormDialog: React.FunctionComponent<TaskFormDialogProps> =
  ({ onSubmit, closeDialog, openDialog, isDialogOpen, buttonProps, task }) => {
    const classes = styles();
    const renderForm = (props: FormikProps<any>) => (
      <TaskForm cancel={closeDialog} {...props} />
    );

    const preventPropagation = (event: React.FormEvent) => event.stopPropagation();
    const initialValues = task || INITIAL_VALUES;

    return (
      <div>
        <Box mt={2} mb={task ? 2 : 6}>
          <Button
            color="primary"
            variant="contained"
            onClick={openDialog}
            {...buttonProps}
          >
            <Text translation="changeRequest.assessmentForm.addTask" />
          </Button>
        </Box>
        <Dialog
          disableEscapeKeyDown={true}
          disableBackdropClick={true}
          open={isDialogOpen}
          onSubmit={preventPropagation}
          classes={{ paper: classes.dialogContent }}
          fullWidth={true}
          maxWidth="md"
        >
          <DialogTitle>
            <Text translation="changeRequest.assessmentForm.addTask" />
          </DialogTitle>
          <DialogContent
            classes={{ root: classes.dialogContent }}
          >
            <Formik
              render={renderForm}
              initialValues={initialValues}
              onSubmit={onSubmit}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  };

export default TaskFormDialog;
