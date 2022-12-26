import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "./styles/tailwind.scss";
import "./styles/style.scss";

import { BrowserRouter } from "react-router-dom";

import { MantineProvider } from "@mantine/core";
import defaultTheme from "./utils/customTheme";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={defaultTheme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
