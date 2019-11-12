import React from "react";
import AppStyles from "./App.module.css";
import StatusPresenter from "./formBuilder/Status.presenter";
import FBWorkspace from "./form.builder/main/workspace/FBWorkspace";
import { IntlProvider } from "react-intl";
import messagesEn from "../ui/translations/en.json";
import Theme from "./Theme";


const messages = {
  en: messagesEn
};

const language = "en";

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
        <FBWorkspace />
      </div>
    );
  }

  return (
    <div className="App" style={AppStyles}>
      <div className={AppStyles.container}>
        <Theme>
          <IntlProvider locale={language} messages={messages[language]}>
            <FBWorkspace />
          </IntlProvider>
        </Theme>
      </div>
    </div>
  );
};

export default App;
