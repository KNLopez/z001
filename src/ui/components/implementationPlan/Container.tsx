import { createStyles, makeStyles } from "@material-ui/core";
import { ErrorMessage, FieldArray, FieldArrayRenderProps, FieldProps } from "formik";
import React from "react";
import AttachmentField from "../common/attachment.field/container"
import AttachmentIconField from "../common/attachment.icon/container"
import HeaderField from "../common/header.field/field";

import Tasks from "./Tasks.container";


export const styles = makeStyles(() =>
  createStyles({
    error: {
      color: "red",
    },
  },
  ));

const Container: React.FunctionComponent = () => {

  const renderTasks = (props: FieldArrayRenderProps) => <Tasks {...props} />;
  const classes = styles();

  const actionsRenderer = () => (
    // *NOTE: we need to add Add Task action here
    <React.Fragment>
      <AttachmentField name="implementationPlan.attachments" />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <span className={classes.error}>
        <ErrorMessage name="implementationPlan.tasks" />
      </span>
      <HeaderField dataProp="common.implementation.plan" actionsRenderer={actionsRenderer} />
      <FieldArray name="implementationPlan.tasks" render={renderTasks} />
      <AttachmentIconField name="implementationPlan.attachments" />
    </React.Fragment>
  );
};

export default Container;
