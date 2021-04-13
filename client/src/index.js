import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { ptBR } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
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
    typography: {
      button: {
        textTransform: "none",
      },
    },
  },
  ptBR
);
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: "Montserrat",
    fontWeightRegular: "400",
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
