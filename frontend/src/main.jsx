import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

/* ---------------- ROOT RENDER ---------------- */
const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* ✅ GitHub Pages FIX (do not remove) */}
    <BrowserRouter basename="/Portfolio-Website-Project">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
