import React from "react";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./utils/constants";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <App />
        <ToastContainer></ToastContainer>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
