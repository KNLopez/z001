import React from "react";
import AppStyles from "./App.module.css";
import TaskListPreview from "./components/taskList/TaskLiskPreview";
import FormBuilderContainer from "./formBuilder/FormBuilder.container";
import StatusPresenter from "./formBuilder/Status.presenter";

const App: React.FunctionComponent = () => {
  if (window.location.pathname === "/status") {
    return (
      <div className="App" style={AppStyles}>
        <StatusPresenter />
      </div>
    );
  }
  if (window.location.pathname === "/tasks") {
    return (
      <div className="App" style={AppStyles}>
        <TaskListPreview />
      </div>
    );
  }

  return (
    <div className="App" style={AppStyles}>
      <FormBuilderContainer />
    </div>
  );
};

export default App;
