import { CssBaseline, MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import * as React from "react";

import { Overrides } from "@material-ui/core/styles/overrides";
import { Palette } from "@material-ui/core/styles/createPalette";

const Theme: React.FunctionComponent = ({ children }) => {

  const muiTheme = createMuiTheme();
  const defaultPalette: Palette = {
    ...muiTheme.palette,
    primary: {
      main: "#0066FF",
      contrastText: "#fff",
      light: "#dbe9ff",
      dark: "#003dcb",
    },
    secondary: {
      // ...defaultPalette.secondary,
      dark: "#FFCA00",
      main: "#EBBA00",
      contrastText: "#29064C",
      light: "#0066FF",
    },
    text: {
      hint: "#B4C0CA",
      primary: "#4d4d4d",
      secondary: "#252525",
      disabled: "#797979",
    },
  };

  const theme = createMuiTheme({
    palette: defaultPalette,
    overrides: {
      MuiButton: {
        root: {
          fontSize: "0.75rem",
          borderRadius: 3,
          margin: 5,
          fontFamily: "Open Sans",
          fontWeight: "bold",
        },
      },
    }
  });

  return (<MuiThemeProvider theme={theme}><CssBaseline /> {children}</MuiThemeProvider>);
};

export default Theme;
