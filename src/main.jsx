import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../components/App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
