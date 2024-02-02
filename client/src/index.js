import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvide } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvide>
    <App />
  </ThemeProvide>
  // <React.StrictMode>
  // </React.StrictMode>
);
