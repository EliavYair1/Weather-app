<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './GlobalStyles';
import theme from './Themes';
import { ThemeProvider } from 'styled-components';

=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./themes";
>>>>>>> 2e4ef48dd855de3c5b22ffc3050c179d6743bb6d
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <GlobalStyles />
=======
      <GlobalStyle />
>>>>>>> 2e4ef48dd855de3c5b22ffc3050c179d6743bb6d
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
