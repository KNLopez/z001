import React from "react";
import AppStyles from "./App.module.css";
import FormBuilderContainer from "./formBuilder/FormBuilder.container";

const App: React.FunctionComponent = () => {
  return (
    <div className="App" style={AppStyles}>
      <FormBuilderContainer />
    </div>
  );
};

export default App;
