import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import { App } from "./App.tsx";
import { theme } from "./theme/Theme.ts";
import { ThemeProvider } from "@mui/material/styles";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
