import { Button, createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import SummaryFieldWithHtml from "../common/summary/baseWithHtml";
import Date from "../../components/Date";
import Text from "../../components/Text";

export interface OptionType {
  label: string;
  value: string;
}

export interface ImplementationPlanTaskFormValues {
  id?: string;
  title: string;
  description: string;
  dueDate?: Date;
  assigned?: OptionType;
  status: string;
}

export interface Props {
  task: ImplementationPlanTaskFormValues;
  removeTask: (index: number) => () => void;
  editTask: (task: ImplementationPlanTaskFormValues, index: number) => () => void;
  index: number;
}

export const styles = makeStyles(() =>
  createStyles({
    container: {
      border: "1px solid lightgray",
      margin: "10px 0",
      padding: 10,
      lineHeight: 2,
    },
    detailsContainer: {
      marginTop: 10,
      color: "gray",
    },
    marginRight: {
      marginRight: 20,
    },
    button: {
      float: "right",
    },
  },
  ));

export const TaskPresenter: React.FunctionComponent<Props> = ({
  task, removeTask, index, editTask,
}) => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <div>{task.title}</div>
      <SummaryFieldWithHtml value={task.description} />
      <div className={classes.detailsContainer}>
        <span className={classes.marginRight}>
          <Text translation="common.assigned.to" />:&nbsp;
          {task.assigned && task.assigned.label}
        </span>
        <span className={classes.marginRight}>
          <Text translation="common.due.date" />:&nbsp;
          <Date value={task.dueDate} />
        </span>
        <span>
          <Text translation="common.status" />:&nbsp;
          {task.status}
        </span>
        <Button onClick={removeTask(index)} className={classes.button} color="secondary">
          <Text translation="common.remove" />
        </Button>
        <Button onClick={editTask(task, index)} className={classes.button} color="primary">
          <Text translation="common.edit" />
        </Button>
      </div>
    </div>
  );
};

export default TaskPresenter;
