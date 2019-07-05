import React from "react";
import AppStyles from "./App.module.css";
import FormBuilderContainer from "./formBuilder/FormBuilder.container";
import StatusPresenter from "./formBuilder/Status.presenter";
import TaskListPreview from "./components/taskList/TaskLiskPreview";
import data from "../state/FormProps";

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
      <FormBuilderContainer data={data} />
    </div>
  );
};

export default App;
