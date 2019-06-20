import React from "react";
import AppStyles from "./App.module.css";
import FormBuilderContainer from "./formBuilder/FormBuilder.container";
import StatusPresenter from "./formBuilder/Status.presenter";

const App: React.FunctionComponent = () => {
  console.log(window.location.pathname)
  if (window.location.pathname == "/status") {
	return (
		<div className="App" style={AppStyles}>
			<StatusPresenter />
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
