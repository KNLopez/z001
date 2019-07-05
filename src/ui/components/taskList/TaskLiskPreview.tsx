import React, { useState } from "react";
import TaskListContainer from "./TaskList.container";
import { Provider } from "react-redux";
import { store } from "../../../state/store";

// const mapStateToProps = (state: ApplicationState): StateProps => ({
//   currentUserEmail: authSelectors.currentUserEmail(state),
// });

const TaskListPresenter: React.FunctionComponent = () => {
  const [user, setUser] = useState();

  const selectUserHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUser(e.target.value);
  };

  return (
    <Provider store={store}>
      <div style={{ maxWidth: "640px", margin: "50px auto" }}>
        <select
          onChange={selectUserHandler}
          defaultValue="1"
          style={{ marginBottom: "50px" }}>
          <option value="1" disabled={true}>
            Select User
          </option>
          <option value="admin">Admin</option>
          <option value="mathew">Mathew</option>
          <option value="smith">Smith</option>
        </select>
        <TaskListContainer currentUser={user} currentUserEmail={user} />
      </div>
    </Provider>
  );
};

export default TaskListPresenter;
