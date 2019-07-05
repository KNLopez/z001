import React from "react";

interface StateProps {
  currentUser: string;
}

// const mapStateToProps = (state: ApplicationState): StateProps => ({
//   currentUserEmail: authSelectors.currentUserEmail(state),
// });

export type TaskListViewerProps = StateProps;

const TaskListViewer: React.FunctionComponent<TaskListViewerProps> = ({
  currentUser,
}) => {
  return <div />;
};

export default TaskListViewer;
