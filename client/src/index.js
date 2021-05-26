import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { ptBR } from "@material-ui/core/locale";
import AutenticacaoProvider from "./context/Autenticacao";

// Configuração de UI para os componentes
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

ReactDOM.render(
  <React.StrictMode>
    <AutenticacaoProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AutenticacaoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
