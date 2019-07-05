import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./Tasks.module.css";

interface LocalProps {
  currentUser: string;
  title: string;
  description: string;
  assignee: string;
  due_date: string;
  status: string;
  attachments: [];
  id: any;
}

interface DispatchProps {
  closeTask: any;
}

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    closeTask: (id: any) => dispatch({ type: "CLOSE_TASK", id }),
  };
};

export type TaskProps = DispatchProps & LocalProps;

const TaskUser: React.FunctionComponent<TaskProps> = ({
  id,
  title,
  description,
  assignee,
  due_date,
  attachments,
  currentUser,
  closeTask,
  status,
}) => {
  const [currentTask, setTask] = useState({
    title,
    description,
    assignee,
    due_date,
    attachments,
    status,
  });

  useEffect(() => {
    setTask({ title, description, assignee, due_date, attachments, status });
  }, [title, description, assignee, due_date, attachments, status]);

  const closeTaskHandler = () => {
    closeTask(id);
  };

  const button =
    status !== "closed" ? (
      <button onClick={closeTaskHandler}>Close Task</button>
    ) : (
      <button disabled={true}>Closed</button>
    );

  const singleTaskContainer = (
    <div className={styles.singleTaskContainer + " " + styles.clearBackground}>
      <h3>{currentTask.title}</h3>
      <p> {currentTask.description}</p>
      <div className={styles.taskBottomInfo}>
        <span>
          <strong>Assigned to: </strong> {currentTask.assignee}
        </span>
        <span>
          <strong>Due Date: </strong>
          {currentTask.due_date}{" "}
        </span>
        <span>
          <strong>Status: </strong>
          {currentTask.status}
        </span>
      </div>
      {currentUser === "mathew" ? button : null}
    </div>
  );

  return <div className={styles.showTaskContainer}>{singleTaskContainer}</div>;
};

export default connect(
  null,
  mapDispatchToProps,
)(TaskUser);
