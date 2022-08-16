import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterConfig } from "./RouterConfig";
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {main:string}
      font: {main:string}
    }
  }

  interface PaletteOptions {
    font: {main:string}
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },

    font: {
      main: '#611',
    }
  }
})
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterConfig />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
