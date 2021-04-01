import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3379FA",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#26BAF4",
      contrastText: "#FFF",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
